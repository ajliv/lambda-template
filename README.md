<img src="./docs/lambda.svg" alt="aws lambda logo" width="96" />

# lambda-template

[![CI](https://github.com/ajliv/lambda-template/actions/workflows/ci.yml/badge.svg)](https://github.com/ajliv/lambda-template/actions/workflows/ci.yml)

Template repository for AWS Lambda functions built in Node.js.

- [Requirements](#requirements)
- [Creating Deployment Packages](#creating-deployment-packages)

## Requirements

- [nodejs](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/docs/install)

## Creating Deployment Packages

Run `make pack` to run the build script, copy production node modules, and zip the result as **package.zip** in the project root.

One method of updating the Lambda function via the AWS CLI:

```bash
aws lambda update-function-code --function-name my-function --zip-file fileb://package.zip
```
