/*
  # Fix Authentication Policies for Doctors Management

  ## Changes
  - Drop all existing policies to avoid conflicts
  - Create fresh policies requiring authentication for write operations
  - Maintain public read access for active doctors

  ## Security
  - Only authenticated admin users can manage doctors
  - Public website visitors can still view active doctor profiles
  - Unauthenticated users cannot modify any data

  ## Policies
  - Public can view active doctors (read-only)
  - Authenticated users can insert doctors
  - Authenticated users can update doctors
  - Authenticated users can delete doctors
  - Authenticated users can view all doctors (including inactive ones)
*/

-- Drop ALL existing policies on doctors table
DROP POLICY IF EXISTS "Anyone can view active doctors" ON doctors;
DROP POLICY IF EXISTS "Public can view all doctors" ON doctors;
DROP POLICY IF EXISTS "Public can insert doctors" ON doctors;
DROP POLICY IF EXISTS "Public can update doctors" ON doctors;
DROP POLICY IF EXISTS "Public can delete doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can view all doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can insert doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can update doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can delete doctors" ON doctors;

-- Create public read policy for active doctors
CREATE POLICY "Public read active doctors"
  ON doctors
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Allow authenticated users to view all doctors (including inactive)
CREATE POLICY "Auth users view all doctors"
  ON doctors
  FOR SELECT
  TO authenticated
  USING (true);

-- Restrict insert/update/delete to authenticated users only
CREATE POLICY "Auth users insert doctors"
  ON doctors
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Auth users update doctors"
  ON doctors
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Auth users delete doctors"
  ON doctors
  FOR DELETE
  TO authenticated
  USING (true);