import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rchoihkmzogfsnroeulm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjaG9paGttem9nZnNucm9ldWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNjYyMDQsImV4cCI6MjA0OTc0MjIwNH0.gj63ECpQ73t4ifQgHYMp5dN3BtUpNw23WhNPTR1sAkY";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl };

export default supabase;
