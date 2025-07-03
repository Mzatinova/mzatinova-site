import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://hzgtcacongcneyeolvhh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z3RjYWNvbmdjbmV5ZW9sdmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0NjY0NDcsImV4cCI6MjA2NzA0MjQ0N30.LYz3lljCuFOC7Jv53-Ubgf-7NJNdGZABhBq4bu21RQQ';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };