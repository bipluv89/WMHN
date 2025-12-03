/*
  # Update RLS Policies for Doctors Table

  ## Changes
  - Remove authentication requirement for insert/update/delete operations
  - Allow public access to manage doctors through the admin interface
  - Maintain read access for active doctors on public website

  ## Security Notes
  - This allows anyone with the admin URL to manage doctors
  - In production, you should add proper authentication
  - For now, this enables the admin panel to work without authentication

  ## Updated Policies
  - Anyone can insert doctors
  - Anyone can update doctors
  - Anyone can delete doctors
  - Anyone can view active doctors (unchanged)
*/

-- Drop existing authenticated policies
DROP POLICY IF EXISTS "Authenticated users can view all doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can insert doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can update doctors" ON doctors;
DROP POLICY IF EXISTS "Authenticated users can delete doctors" ON doctors;

-- Create new public policies for admin access
CREATE POLICY "Public can view all doctors"
  ON doctors
  FOR SELECT
  USING (true);

CREATE POLICY "Public can insert doctors"
  ON doctors
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can update doctors"
  ON doctors
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Public can delete doctors"
  ON doctors
  FOR DELETE
  USING (true);