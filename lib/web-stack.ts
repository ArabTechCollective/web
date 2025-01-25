import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, Code, FunctionUrlAuthType, Architecture } from 'aws-cdk-lib/aws-lambda';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { join } from 'path';
import { TableV2 } from 'aws-cdk-lib/aws-dynamodb';
import { Effect, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
const pathToRoot = join(__dirname, '../dist');
const pathToHandler = 'functions';

export class WebStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'WebQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const role = new Role(this, 'DynamoDbRole', {
      assumedBy: new ServicePrincipal('lambda.amazonaws.com')
    });

    role.addToPolicy(new PolicyStatement({
      actions: ['dynamodb:CreateTable', 'dynamodb:GetItem', 'dynamodb:PutItem',
        'dynamodb:UpdateItem', 'dynamodb:DeleteItem', 'dynamodb:UpdateTable', "dynamodb:ListTables",
        "dynamodb:DescribeTable",
        "dynamodb:DescribeContributorInsights",
        "dynamodb:DescribeTimeToLive"],
      resources: ['*'],
      effect: Effect.ALLOW,
    }));

    role.addToPolicy(new PolicyStatement({
      actions: ["logs:CreateLogStream",
        "logs:PutLogEvents", 'logs:CreateLogGroup'],
      resources: ['*'],
      effect: Effect.ALLOW,
    }));


    const createMentor = new Function(this, 'createMentor', {
      runtime: Runtime.NODEJS_22_X,
      architecture: Architecture.ARM_64,
      code: Code.fromAsset(pathToRoot),
      handler: `${pathToHandler}/createMentor.createMentor`,
      role: role,
    });

    // const createMentorFunctionUrl = createMentor.addFunctionUrl({
    //   authType: FunctionUrlAuthType.NONE,
    // });

    // Create an API Gateway to trigger the Lambda function
    const api = new LambdaRestApi(this, 'WebApi', {
      handler: createMentor,
    });

    new CfnOutput(this, "createMentorFunctionUrlOutput", {
      value: api.url,
    })
  }
}
