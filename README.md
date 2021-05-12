This repository contains unofficial patterns, sample code, or tools to help developers build more effectively with [Fauna][fauna]. All [Fauna Labs][fauna-labs] repositories are provided “as-is” and without support. By using this repository or its contents, you agree that this repository may never be officially supported and moved to the [Fauna organization][fauna-organization].

# Building a serverless REST API with AWS SAM and Fauna

This repository contains the source code referenced in the blog post [Building a serverless REST API with AWS SAM and Fauna][blog].

## Pre-requisites

To deploy this application you must have access to a Fauna account and an AWS account. You can [register for a free Fauna account][fauna-register] and benefit from [Fauna’s free tier][fauna-free-tier] while you learn and build. You do not need to provide payment information until you upgrade your plan. 

You can sign up for an AWS account by [following these instructions][aws-create-account]. Although you must provide a payment method to create an AWS account, AWS also offers a [free tier][aws-free-tier].

To deploy this application from the command line, you must install and configure the [AWS Command Line Interface (CLI)][aws-cli-install] and the [AWS Serverless Application Model (AWS SAM) CLI][aws-sam-cli-install].

_To deploy this repository using a quick-create CloudFormation stack, please see [the original blog post][blog]._

## Deploying with AWS SAM CLI

First, complete the steps [Configuring a database in Fauna][blog-configuring-a-database] and [Storing secrets in Parameter Store][blog-storing-secrets-in-parameter-store] from the original blog post.

Next, clone this repository to your local machine:

```bash
git clone https://github.com/fauna-labs/aws-http-api.git
cd aws-http-api
```

Use AWS SAM CLI's [guided interactive deployment mode][aws-sam-cli-guided-deploy] to deploy the application to your AWS account.

```bash
sam build && sam deploy --guided
```

**Note**: You can accept most of the defaults, but you must explicitly choose "y" to each question _{FunctionName} may not have authorization defined, Is this okay?_

After the deployment completes, copy the value of the _ListStoresURL_ output and open the URL in a new browser tab. You should receive a JSON object containing a list of stores from the sample data in your Fauna database!

## Cleaning up resources

Once you complete this tutorial, you may wish to remove the resources you create to avoid unexpected charges. Complete the step [Cleaning up resources][blog-cleaning-up-resources] in the original blog post to remove all resources related to this repository from your Fauna and AWS accounts.

[aws-cli-install]: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
[aws-create-account]: https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/
[aws-free-tier]: https://aws.amazon.com/free/
[aws-sam-cli-guided-deploy]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-deploy.html
[aws-sam-cli-install]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
[blog]: https://fauna.com/blog/building-a-serverless-rest-api-with-aws-sam-and-fauna
[blog-cleaning-up-resources]: https://fauna.com/blog/building-a-serverless-rest-api-with-aws-sam-and-fauna#cleaning-up-resources
[blog-configuring-a-database]: https://fauna.com/blog/building-a-serverless-rest-api-with-aws-sam-and-fauna#configuring-a-database-in-fauna
[blog-storing-secrets-in-parameter-store]: https://fauna.com/blog/building-a-serverless-rest-api-with-aws-sam-and-fauna#storing-secrets-in-parameter-store
[fauna]: https://www.fauna.com/
[fauna-free-tier]: https://fauna.com/pricing
[fauna-labs]: https://github.com/fauna-labs
[fauna-organization]: https://github.com/fauna
[fauna-register]: https://dashboard.fauna.com/accounts/register

---
Copyright Fauna, Inc. or its affiliates. All rights reserved. SPDX-License-Identifier: MIT-0
