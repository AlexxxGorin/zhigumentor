
create TABLE mentors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    img VARCHAR(999),
    description VARCHAR(999),
    courses INTEGER[],
    menti INTEGER[],
    tags VARCHAR(999)[],
    properties JSONB
);