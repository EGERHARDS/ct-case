import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL =
  "https://czkouksiqehdmtjvdlwj.supabase.co");
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a291a3NpcWVoZG10anZkbHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUyMDI4ODEsImV4cCI6MjAwMDc3ODg4MX0.Q3KKI-tpBRSli0Mli74Q16tnWFYHjdYVt4xoze6Ia14");

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
