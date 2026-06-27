-- Create the leads table
CREATE TABLE leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    industry TEXT NOT NULL,
    bottleneck TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    status TEXT DEFAULT 'new' NOT NULL
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow only authenticated service role to manage leads
-- (The service role key bypasses RLS by default, but adding a policy ensures tight security)
CREATE POLICY "Service Role Full Access" 
ON leads 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Ensure public access is completely denied
CREATE POLICY "Deny Public Access" 
ON leads 
FOR ALL 
TO public 
USING (false);
