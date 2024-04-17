import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://suktluhytuydagyhdect.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1a3RsdWh5dHV5ZGFneWhkZWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjIsImV4cCI6MTk4MjE3NDcyMn0.5GSiG58gHUjpsufQ9p4kyJFgI5ZvUW9zFiVwJrn_Wjw";
export const supabase = createClient(supabaseUrl, supabaseKey);
