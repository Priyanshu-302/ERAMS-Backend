-- Organization table
create table organizations (
        id serial primary key,
        name varchar(255) not null,
        status varchar(20) not null check (status in ('ACTIVE', 'SUSPENDED')),
        created_at timestamp default current_timestamp
    );

-- User table
create table users(
    id serial primary key,
    email varchar(255) not null unique,
    password varchar(255) not null,
    status varchar(20) not null check (status in ('ACTIVE', 'INACTIVE', 'SUSPENDED')),
    created_at timestamp default current_timestamp
);

-- Roles table
create table roles(
    id serial primary key,
    name varchar(255) not null,
    organization_id references organizations(id)
)

-- Permission table
create table permissions(
    id serial primary key,
    code text not null,
    role_id references roles(id)
)

-- Role-Permissions table
create table role_permissions(
    role_id references roles(id),
    permissions_id references permissions(id),
    primary key (role_id, permissions_id)
)

-- Organization-Users
create table organization_users(
    organization_id references organizations(id),
    user_id references users(id),
    role_id references roles(id),   
)

-- Resouces table
create table resources(
    id serial primary key,
    organization_id references organizations(id),
    owner_id references users(id),
    type text not null,
    status text not null check (status in ('DRAFT', 'PUBLISHED', 'ARCHIVED')),
    created_at timestamp default current_timestamp
)