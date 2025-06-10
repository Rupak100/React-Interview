# Backend2 Lambda Function with API Gateway Setup

This README provides a step-by-step guide to generate a Lambda function with an API Gateway using Syndicate. Follow the instructions below to set up your backend service.

## Prerequisites

Ensure you have the following ready before beginning:

- AWS Account with proper access
- Node.js installed on your system
- `syndicate` CLI installed
- Proper IAM permissions to create Lambda functions and API Gateway resources

## Steps to Create a New Lambda Function and API Gateway

### 1. Generate a New Project

```bash
syndicate generate project --name backend2
```

### 2. Change Directory

Navigate to the newly created project folder:

```bash
cd backend2
```

### 3. Set AWS Credentials

Export your AWS credentials (ensure you replace the values with your actual credentials):

```bash
export AWS_ACCESS_KEY_ID="ASIA4SYUWWJQYCEVOF5O"
export AWS_SECRET_ACCESS_KEY="ENBxgmMJfs4TtoX2GKeE6sNbmF9bjigz0Xht0MMo"
export AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjENz//////////wEaCXVzLWVhc3QtMS..."
```

### 4. Generate Configuration

Create a development configuration for your project:

```bash
syndicate generate config --name dev --region ap-southeast-1 --bundle_bucket_name <s3 bucket name>/rupak
```

### 5. Set Configuration Environment Variable

Set the configuration file path as an environment variable:

```bash
export SDCT_CONF="C:\Users\rupak_sarkar\Desktop\backend\backend2\.syndicate-config-dev"
```

Make sure to update the `syndicate.yml` file with your AWS credentials as per the guidelines in the knowledge base page.

### 6. Generate a New Lambda Function

Create a new Lambda function called `signup`:

```bash
syndicate generate lambda --name signup --runtime nodejs
```

### 7. Create an API Gateway

Generate the API Gateway for the `signup` function:

```bash
syndicate generate meta api_gateway --resource_name signupAPI --deploy_stage dev
```

### 8. Create API Gateway Resource

Add a resource path `signup` for the API:

```bash
syndicate generate meta api_gateway_resource --api_name signupAPI --path signup --enable_cors true
```

### 9. Create API Gateway Resource Method

Define the method for the resource to integrate with the Lambda function:

```bash
syndicate generate meta api_gateway_resource_method --api_name signupAPI --path signup --method GET --integration_type lambda --lambda_name signup
```

### 10. Modify Lambda Function

Navigate to the Lambda function's directory and make the necessary changes to `index.js`. Then, install any required Node.js packages:

```bash
# Navigate to the Lambda function directory
cd path_to_lambda_function_directory

# Install required packages
npm install
```

### 11. Build and Deploy

After completing all your code changes, build and deploy your project:

```bash
syndicate build
syndicate deploy
```

### 12. Access the API Gateway

After deployment, navigate to the AWS API Gateway console and go to the "Stages" section to retrieve the URL for your newly created API.

---

## Conclusion

You have successfully set up a Lambda function integrated with an API Gateway. You can now expand on this foundation by adding features, handling various requests, and optimizing your Lambda function as necessary. For further assistance or advanced configurations, refer to the official [Syndicate documentation](https://syndicate.io/docs).
