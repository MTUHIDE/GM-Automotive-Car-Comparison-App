
FROM mysql:8.3.0

ENV MYSQL_ROOT_PASSWORD pass
COPY ./data.sql /docker-entrypoint-initdb.d/data.sql

# # Set the working directory
# WORKDIR /app

# # Install dependencies
# COPY requirements.txt /app/
# RUN pip install -r requirements.txt

# # Copy the project code into the container
# COPY . /app/