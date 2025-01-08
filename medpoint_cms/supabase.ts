import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://okfiiamqfgxgutsyrdux.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZmlpYW1xZmd4Z3V0c3lyZHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMjY3MjAsImV4cCI6MjA1MTkwMjcyMH0.cloETRUCZ9TRgy5UqBCA8ToGR0hOXBDuU5nQSEcvQRU';

export const supabase = createClient(supabaseUrl, supabaseKey);
