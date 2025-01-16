import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, Code, FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { join } from 'path';
import { TableV2 } from 'aws-cdk-lib/aws-dynamodb';
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

    const createMentor = new Function(this, 'createMentor', {
      runtime: Runtime.NODEJS_22_X,
      code: Code.fromAsset(pathToRoot),
      handler: `${pathToHandler}/createMentor.createMentor`
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
