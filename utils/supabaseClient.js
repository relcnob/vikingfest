import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xfzagnnvzyvsktkpoqzx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmemFnbm52enl2c2t0a3BvcXp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NjM2NjksImV4cCI6MTk4NjQzOTY2OX0.gGZuHz9CXunA3MOeTxyTGw7rKGPQqaxEBW5rtVzet7Q";
export const supabase = createClient(supabaseUrl, supabaseKey);
