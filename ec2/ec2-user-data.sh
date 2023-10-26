#!/bin/bash
# Use this for your user data (script from top to bottom)
# install httpd (Apache web server)
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd

# Create a custom HTML file
cat > /var/www/html/index.html <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      margin: 40px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #fff;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333366;
      margin-bottom: 20px;
    }
    p {
      color: #666;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello World!</h1>
    <p>Welcome to my AWS EC2 instance.</p>
    <p>This server is running Apache and is hosted on an EC2 instance.</p>
    <p>Instance Name: $(hostname -f)</p>
  </div>
</body>
</html>
EOF
