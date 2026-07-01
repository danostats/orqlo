create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  industry text,
  city text,
  website text,
  opportunity_score int default 0,
  stage text default 'new'
);
create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references companies(id) on delete cascade,
  body text not null,
  created_at timestamptz default now()
);
