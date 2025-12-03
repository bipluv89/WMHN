'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';
import { supabase, type Doctor } from '@/lib/supabase';
import { PageHeader } from '@/components/page-header';
import { Section } from '@/components/section';
import { AuthGuard } from '@/components/auth-guard';

export const dynamic = 'force-dynamic';

function AdminDoctorsContent() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDoctors();
  }, []);

  async function loadDoctors() {
    const { data, error } = await supabase
      .from('doctors')
      .select('*')
      .order('display_order', { ascending: true });

    if (!error && data) {
      setDoctors(data);
    }
    setLoading(false);
  }

  async function toggleActive(id: string, currentStatus: boolean) {
    const { error } = await supabase
      .from('doctors')
      .update({ is_active: !currentStatus })
      .eq('id', id);

    if (!error) {
      loadDoctors();
    }
  }

  async function deleteDoctor(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete ${name}?`)) {
      return;
    }

    const { error } = await supabase
      .from('doctors')
      .delete()
      .eq('id', id);

    if (!error) {
      loadDoctors();
    }
  }

  if (loading) {
    return (
      <>
        <PageHeader
          title="Manage Doctors"
          description="Add, edit, and manage doctor profiles"
        />
        <Section>
          <div className="text-center text-gray-500">Loading...</div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Manage Doctors"
        description="Add, edit, and manage doctor profiles"
      />

      <Section>
        <div className="mb-8">
          <Button asChild>
            <Link href="/admin/doctors/new">
              <Plus className="mr-2 h-4 w-4" />
              Add New Doctor
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className={!doctor.is_active ? 'opacity-50' : ''}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{doctor.name}</CardTitle>
                    <p className="text-sm text-gray-500">{doctor.title}</p>
                  </div>
                  <Badge variant={doctor.is_active ? 'default' : 'secondary'}>
                    {doctor.is_active ? 'Active' : 'Hidden'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-1">
                  {doctor.interests.slice(0, 3).map((interest) => (
                    <Badge key={interest} variant="outline" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                  {doctor.interests.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{doctor.interests.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <Link href={`/admin/doctors/edit/${doctor.id}`}>
                      <Edit className="mr-2 h-3 w-3" />
                      Edit
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleActive(doctor.id, doctor.is_active)}
                  >
                    {doctor.is_active ? (
                      <EyeOff className="h-3 w-3" />
                    ) : (
                      <Eye className="h-3 w-3" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => deleteDoctor(doctor.id, doctor.name)}
                  >
                    <Trash2 className="h-3 w-3 text-red-500" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {doctors.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-gray-500">
              <p className="mb-4">No doctors found.</p>
              <Button asChild>
                <Link href="/admin/doctors/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Doctor
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </Section>
    </>
  );
}

export default function AdminDoctorsPage() {
  return (
    <AuthGuard>
      <AdminDoctorsContent />
    </AuthGuard>
  );
}
