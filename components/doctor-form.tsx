'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase, type Doctor } from '@/lib/supabase';
import { Plus, X } from 'lucide-react';

interface DoctorFormProps {
  doctor?: Doctor;
}

export function DoctorForm({ doctor }: DoctorFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    slug: doctor?.slug || '',
    name: doctor?.name || '',
    title: doctor?.title || '',
    post_nominals: doctor?.post_nominals || '',
    role: doctor?.role || '',
    snippet: doctor?.snippet || '',
    display_order: doctor?.display_order || 0,
    is_active: doctor?.is_active ?? true,
  });
  const [interests, setInterests] = useState<string[]>(doctor?.interests || []);
  const [bio, setBio] = useState<string[]>(doctor?.bio || ['']);
  const [qualifications, setQualifications] = useState<string[]>(doctor?.qualifications || ['']);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      ...formData,
      interests: interests.filter(i => i.trim()),
      bio: bio.filter(b => b.trim()),
      qualifications: qualifications.filter(q => q.trim()),
    };

    let error;

    if (doctor?.id) {
      const result = await supabase
        .from('doctors')
        .update(data)
        .eq('id', doctor.id);
      error = result.error;
    } else {
      const result = await supabase
        .from('doctors')
        .insert([data]);
      error = result.error;
    }

    setLoading(false);

    if (!error) {
      router.push('/admin/doctors');
      router.refresh();
    } else {
      alert('Error saving doctor: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Dr John Smith"
              required
            />
          </div>

          <div>
            <Label htmlFor="slug">URL Slug</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              placeholder="john-smith"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Used in the URL: /clinic/doctors/john-smith
            </p>
          </div>

          <div>
            <Label htmlFor="title">Professional Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Consultant Haematologist"
              required
            />
          </div>

          <div>
            <Label htmlFor="post_nominals">Post-nominal Letters</Label>
            <Input
              id="post_nominals"
              value={formData.post_nominals}
              onChange={(e) => setFormData({ ...formData, post_nominals: e.target.value })}
              placeholder="MBBS, FRACP, FRCPA"
            />
          </div>

          <div>
            <Label htmlFor="role">Role Description</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="Director, Consultant Haematologist"
              required
            />
          </div>

          <div>
            <Label htmlFor="snippet">Brief Summary</Label>
            <Textarea
              id="snippet"
              value={formData.snippet}
              onChange={(e) => setFormData({ ...formData, snippet: e.target.value })}
              placeholder="Short description shown on listings page (1-2 sentences)"
              required
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="display_order">Display Order</Label>
              <Input
                id="display_order"
                type="number"
                value={formData.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
              />
              <p className="mt-1 text-xs text-gray-500">Lower numbers appear first</p>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="h-4 w-4"
              />
              <Label htmlFor="is_active">Active (visible on website)</Label>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Clinical Interests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {interests.map((interest, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={interest}
                onChange={(e) => {
                  const updated = [...interests];
                  updated[index] = e.target.value;
                  setInterests(updated);
                }}
                placeholder="e.g., Lymphoma, Chronic Leukaemia"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setInterests(interests.filter((_, i) => i !== index))}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => setInterests([...interests, ''])}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Interest
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Biography</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {bio.map((paragraph, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Paragraph {index + 1}</Label>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setBio(bio.filter((_, i) => i !== index))}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <Textarea
                value={paragraph}
                onChange={(e) => {
                  const updated = [...bio];
                  updated[index] = e.target.value;
                  setBio(updated);
                }}
                placeholder="Write a paragraph about the doctor..."
                rows={4}
              />
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => setBio([...bio, ''])}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Paragraph
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Qualifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {qualifications.map((qual, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={qual}
                onChange={(e) => {
                  const updated = [...qualifications];
                  updated[index] = e.target.value;
                  setQualifications(updated);
                }}
                placeholder="e.g., MBBS - University of Melbourne"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQualifications(qualifications.filter((_, i) => i !== index))}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => setQualifications([...qualifications, ''])}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Qualification
          </Button>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : doctor ? 'Update Doctor' : 'Create Doctor'}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push('/admin/doctors')}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
