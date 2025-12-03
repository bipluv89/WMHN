/*
  # Create Doctors Management System

  ## Overview
  This migration creates a comprehensive database structure for managing doctor profiles
  with full CMS capabilities. The system allows non-technical users to add, edit, and
  remove doctor information without touching code.

  ## New Tables
  
  ### `doctors`
  Core table storing all doctor information:
  - `id` (uuid, primary key) - Unique identifier
  - `slug` (text, unique) - URL-friendly identifier (e.g., 'sarah-mitchell')
  - `name` (text) - Full name with title (e.g., 'Dr Sarah Mitchell')
  - `title` (text) - Professional title (e.g., 'Consultant Haematologist')
  - `post_nominals` (text) - Post-nominal letters (e.g., 'MBBS, FRACP, FRCPA')
  - `role` (text) - Role description (e.g., 'Director, Consultant Haematologist')
  - `interests` (text[]) - Array of special interests/expertise areas
  - `snippet` (text) - Brief summary for listings (1-2 sentences)
  - `bio` (text[]) - Array of biography paragraphs
  - `qualifications` (text[]) - Array of qualifications
  - `display_order` (integer) - Sort order for display (lower numbers first)
  - `is_active` (boolean) - Whether doctor profile should be shown on website
  - `created_at` (timestamptz) - Timestamp of creation
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  - Enable Row Level Security (RLS) on doctors table
  - Public read access for active doctors (website visitors)
  - Authenticated admin users can perform all operations
  - Future-proof for admin panel implementation

  ## Indexes
  - Index on `slug` for fast lookups by URL
  - Index on `display_order` for efficient sorting
  - Index on `is_active` for filtering active doctors

  ## Notes
  - Uses array types for interests, bio paragraphs, and qualifications for flexibility
  - Includes soft delete capability via `is_active` flag
  - `display_order` allows custom ordering without changing database IDs
  - `updated_at` automatically updates on row changes
*/

-- Create doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  title text NOT NULL,
  post_nominals text NOT NULL DEFAULT '',
  role text NOT NULL,
  interests text[] NOT NULL DEFAULT '{}',
  snippet text NOT NULL,
  bio text[] NOT NULL DEFAULT '{}',
  qualifications text[] NOT NULL DEFAULT '{}',
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_doctors_slug ON doctors(slug);
CREATE INDEX IF NOT EXISTS idx_doctors_display_order ON doctors(display_order);
CREATE INDEX IF NOT EXISTS idx_doctors_is_active ON doctors(is_active);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_doctors_updated_at ON doctors;
CREATE TRIGGER update_doctors_updated_at
  BEFORE UPDATE ON doctors
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view active doctors (public website access)
CREATE POLICY "Anyone can view active doctors"
  ON doctors
  FOR SELECT
  USING (is_active = true);

-- Policy: Authenticated users can view all doctors (for admin panel)
CREATE POLICY "Authenticated users can view all doctors"
  ON doctors
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert doctors
CREATE POLICY "Authenticated users can insert doctors"
  ON doctors
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update doctors
CREATE POLICY "Authenticated users can update doctors"
  ON doctors
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete doctors
CREATE POLICY "Authenticated users can delete doctors"
  ON doctors
  FOR DELETE
  TO authenticated
  USING (true);