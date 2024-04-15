-- Create a user for the database and connection to django
CREATE USER IF NOT EXIST ''@'' IDENTIFIED WITH mysql_native_password BY '';
GRANT ALL ON blog_data.* TO ''@'';
FLUSH PRIVILEGES;