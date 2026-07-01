-- Orqlo Phase 1 schema. Run this in Supabase SQL editor.
create table if not exists workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz default now()
);
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references workspaces(id) on delete cascade,
  company text not null,
  niche text,
  city text,
  website text,
  email text,
  phone text,
  score int default 0,
  stage text default 'New',
  issue text,
  notes text,
  created_at timestamptz default now()
);
create table if not exists outreach_messages (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references leads(id) on delete cascade,
  channel text default 'email',
  subject text,
  body text not null,
  status text default 'draft',
  created_at timestamptz default now()
);
alter table workspaces enable row level security;
alter table leads enable row level security;
alter table outreach_messages enable row level security;
-- Add proper auth policies in Phase 1B once Supabase Auth is connected.
