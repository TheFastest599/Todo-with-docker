# Use an official Python runtime as a parent image
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY backend/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code
COPY backend/ .

# Expose the application port (change if needed)
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=run.py 
ENV FLASK_ENV=production 
ENV PYTHONUNBUFFERED=1

# Command to run the application
CMD ["python", "run.py"]
