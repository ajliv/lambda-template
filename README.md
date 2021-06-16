<img src="./docs/lambda.svg" alt="aws lambda logo" width="96" />

# lambda-template

[![CI](https://github.com/ajliv/lambda-template/actions/workflows/ci.yml/badge.svg)](https://github.com/ajliv/lambda-template/actions/workflows/ci.yml)

Template repository for Node.js AWS Lambda functions .

- [Requirements](#requirements)
- [Creating Deployment Packages](#creating-deployment-packages)

## Requirements

- [nodejs](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/docs/install)

## Creating Deployment Packages

Run `make pack` to run the build script, copy production node modules, and zip the result as **package.zip** in the project root.
