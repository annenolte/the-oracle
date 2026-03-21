-- Conversations table
create table conversations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  character_id text not null,
  title text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Messages table
create table messages (
  id uuid default gen_random_uuid() primary key,
  conversation_id uuid references conversations(id) on delete cascade not null,
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table conversations enable row level security;
alter table messages enable row level security;

-- Users can only see their own conversations
create policy "Users can view own conversations"
  on conversations for select using (auth.uid() = user_id);
create policy "Users can insert own conversations"
  on conversations for insert with check (auth.uid() = user_id);
create policy "Users can delete own conversations"
  on conversations for delete using (auth.uid() = user_id);

-- Users can only see messages in their own conversations
create policy "Users can view own messages"
  on messages for select using (
    conversation_id in (select id from conversations where user_id = auth.uid())
  );
create policy "Users can insert own messages"
  on messages for insert with check (
    conversation_id in (select id from conversations where user_id = auth.uid())
  );
