import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  post_nominals: string;
  role: string;
  interests: string[];
  snippet: string;
  bio: string[];
  qualifications: string[];
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export async function getDoctors(): Promise<Doctor[]> {
  const { data, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }

  return data || [];
}

export async function getDoctorBySlug(slug: string): Promise<Doctor | null> {
  const { data, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching doctor:', error);
    return null;
  }

  return data;
}
