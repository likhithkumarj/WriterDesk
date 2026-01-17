the SQL cmd used to create all the table
```
-- Enable UUID
create extension if not exists "uuid-ossp";

-- USERS (profile layer over auth.users)
create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  username text unique,
  bio text,
  profile_image text,
  created_at timestamp default now()
);

-- PROJECTS
create table projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  owner_id uuid references users(id),
  created_at timestamp default now()
);

-- PROJECT MEMBERS
create table project_members (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  user_id uuid references users(id) on delete cascade,
  role text,
  joined_at timestamp default now()
);

-- SCRIPTS
create table scripts (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  title text,
  content text,
  created_at timestamp default now()
);

-- SCRIPT VERSIONS
create table script_versions (
  id uuid primary key default uuid_generate_v4(),
  script_id uuid references scripts(id) on delete cascade,
  content text,
  version_number int,
  created_at timestamp default now()
);

-- SCENES
create table scenes (
  id uuid primary key default uuid_generate_v4(),
  script_id uuid references scripts(id) on delete cascade,
  scene_number int,
  heading text,
  description text
);

-- SCRIPT COMMENTS
create table script_comments (
  id uuid primary key default uuid_generate_v4(),
  scene_id uuid references scenes(id) on delete cascade,
  user_id uuid references users(id),
  comment text,
  created_at timestamp default now()
);

-- SHOT LISTS
create table shot_lists (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  name text
);

-- SHOTS
create table shots (
  id uuid primary key default uuid_generate_v4(),
  shot_list_id uuid references shot_lists(id) on delete cascade,
  scene_id uuid references scenes(id),
  shot_type text,
  camera text,
  notes text
);

-- STORYBOARDS
create table storyboards (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id) on delete cascade,
  scene_id uuid references scenes(id)
);

-- STORYBOARD FRAMES
create table storyboard_frames (
  id uuid primary key default uuid_generate_v4(),
  storyboard_id uuid references storyboards(id) on delete cascade,
  image_url text,
  frame_order int,
  notes text
);

-- ROLES
create table roles (
  id uuid primary key default uuid_generate_v4(),
  name text
);

-- ASSIGNMENTS
create table assignments (
  id uuid primary key default uuid_generate_v4(),
  role_id uuid references roles(id),
  user_id uuid references users(id),
  project_id uuid references projects(id),
  scene_id uuid references scenes(id)
);

-- AVAILABILITY
create table availability (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  available_date date,
  status text
);

-- LOCATIONS
create table locations (
  id uuid primary key default uuid_generate_v4(),
  name text,
  address text
);

-- SCHEDULES
create table schedules (
  id uuid primary key default uuid_generate_v4(),
  project_id uuid references projects(id),
  scene_id uuid references scenes(id),
  location_id uuid references locations(id),
  shoot_date date
);

-- CALL SHEETS
create table call_sheets (
  id uuid primary key default uuid_generate_v4(),
  schedule_id uuid references schedules(id),
  notes text
);

-- COMMUNITY POSTS
create table posts (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  content text,
  created_at timestamp default now()
);

-- COMMENTS
create table comments (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references posts(id) on delete cascade,
  user_id uuid references users(id),
  content text,
  created_at timestamp default now()
);

-- LIKES
create table likes (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references posts(id),
  user_id uuid references users(id)
);

-- FOLLOWS
create table follows (
  id uuid primary key default uuid_generate_v4(),
  follower_id uuid references users(id),
  following_id uuid references users(id)
);

-- ARTIST PROFILES
create table artist_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  skills text[],
  experience text,
  portfolio_link text
);

-- FILM NEWS
create table film_news (
  id uuid primary key default uuid_generate_v4(),
  title text,
  content text,
  created_at timestamp default now()
);

-- NOTIFICATIONS
create table notifications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  message text,
  is_read boolean default false,
  created_at timestamp default now()
);

-- ACTIVITY LOGS
create table activity_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  action text,
  created_at timestamp default now()
);

-- FILES (Supabase Storage mapping)
create table files (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  project_id uuid references projects(id),
  file_url text,
  file_type text,
  uploaded_at timestamp default now()
);
```