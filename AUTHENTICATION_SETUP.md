# Authentication Setup Guide

Your admin panel is now protected with Supabase authentication! Here's how to set it up:

## Creating Your First Admin User

You need to create an admin user account in Supabase. Here are two methods:

### Method 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard: https://0ec90b57d6e95fcbda19832f.supabase.co

2. Navigate to **Authentication** → **Users** in the left sidebar

3. Click **"Add user"** button

4. Choose **"Create new user"**

5. Fill in the details:
   - Email: your-admin-email@example.com
   - Password: Create a strong password
   - Check **"Auto Confirm User"** (important!)

6. Click **"Create user"**

### Method 2: Using SQL (Advanced)

Run this SQL in your Supabase SQL Editor:

```sql
-- Create a new admin user
-- Replace 'admin@example.com' and 'your-secure-password' with your details
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@example.com',
  crypt('your-secure-password', gen_salt('bf')),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

## How to Use Authentication

### Logging In

1. Visit `/login` on your website
2. Enter your admin email and password
3. You'll be redirected to `/admin/doctors`

### Accessing Admin Panel

- Once logged in, you'll see "Admin" and "Logout" buttons in the header
- Click "Admin" to manage doctors
- Click "Logout" to sign out

### Security Features

✅ **Protected Routes:** All `/admin/*` routes require authentication
✅ **Row Level Security:** Database enforces authentication for all write operations
✅ **Secure Sessions:** Supabase handles session management automatically
✅ **Public Access:** Website visitors can still view active doctors without logging in

## Testing Authentication

1. **Test Unauthenticated Access:**
   - Try visiting `/admin/doctors` without logging in
   - You should be redirected to `/login`

2. **Test Login:**
   - Go to `/login`
   - Enter your admin credentials
   - You should be redirected to the admin panel

3. **Test Logout:**
   - Click the "Logout" button in the header
   - You should be signed out and redirected to the home page

## Troubleshooting

**"Invalid login credentials" error:**
- Make sure you created the user in Supabase
- Check that you marked the user as "confirmed" (Auto Confirm User)
- Verify your email and password are correct

**Can't access admin panel after login:**
- Check browser console for errors
- Verify your Supabase credentials in `.env` are correct
- Make sure RLS policies are properly set up

**Row Level Security policy error:**
- Make sure you're logged in
- Check that your session is valid (try logging out and back in)
- Verify the RLS policies were applied correctly

## Adding More Admin Users

To add more admin users, simply repeat the "Creating Your First Admin User" process with different email addresses.

## Next Steps

Your authentication is fully set up! You can now:
- ✅ Login to the admin panel at `/login`
- ✅ Manage doctors securely
- ✅ Add multiple admin users as needed
- ✅ Deploy to production with confidence

For production deployment, consider adding:
- Password reset functionality
- Email verification
- Two-factor authentication
- Admin user role management
