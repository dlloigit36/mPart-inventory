-- postgres database commands
-- support for Japanese characters through proper character set and collation configuration.
CREATE DATABASE machinery WITH ENCODING 'UTF8' LC_COLLATE='ja_JP.UTF-8' LC_CTYPE='ja_JP.UTF-8' TEMPLATE=template0;

COMMENT ON DATABASE machinery
    IS 'for mPart-inventory, support japanese characters';

-- create client table
CREATE TABLE client_detail (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description VARCHAR(510)
)

-- create part table
CREATE TABLE part_detail (
    id SERIAL PRIMARY KEY,
    manufacturer VARCHAR(100),
    model VARCHAR(50),
    serial_number VARCHAR(100),
    shipping_date DATE DEFAULT CURRENT_DATE,
    inspected_b BOOLEAN DEFAULT False,
    remark VARCHAR(255),
    photo_uri VARCHAR(510),
    client_id INTEGER REFERENCES client_detail(id),
    edited_at TIMESTAMP WITH TIME ZONE
)

-- insert new client
INSERT INTO client_detail (name, description)
    VALUES ('AAA Company', 'manually added from sql command 1.');

INSERT INTO client_detail (name, description)
    VALUES ('BBB Company', 'manually added from sql command 2.');

INSERT INTO client_detail (name, description)
    VALUES ('CCC Company', 'manually added from sql command 3.');