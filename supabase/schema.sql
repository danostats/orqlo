create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  website text,
  city text,
  industry text,
  opportunity_score integer default 0,
  stage text default 'new',
  created_at timestamptz default now()
);

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid references public.companies(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  role text,
  created_at timestamptz default now()
);
