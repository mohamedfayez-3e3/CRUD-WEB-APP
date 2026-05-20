USE project_web;
INSERT INTO users (name,email,password,role,created_at,updated_at)
VALUES (
'Admin',
'nouhaila_charkaoui@gmail.com',
'$2y$12$uR5V2x2kqQv9Kz7M0n8G4u4Y8F6J1mM8e6WQx0n9KQ6P4h7W2ZB8K',
'admin',
NOW(),
NOW()
);