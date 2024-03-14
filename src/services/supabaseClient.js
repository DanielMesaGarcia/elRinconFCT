import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://uxsdmotmwzaccowffkrm.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c2Rtb3Rtd3phY2Nvd2Zma3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTU1MTAsImV4cCI6MjAyNTI5MTUxMH0.PMwkeGXq2Tfbe4GBJ5zVOfXVIh6lZP5_5jDpi-u87SQ';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase URL and anonymous key must be provided in environment variables.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
