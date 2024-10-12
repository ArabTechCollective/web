// src/handlers/handler2.ts

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

const dynamoDb = new DynamoDB.DocumentClient();

export const getMentors = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const tableName = process.env.DYNAMODB_TABLE as string;
  const itemId = event.pathParameters?.id;

  if (!itemId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Bad Request: Missing item ID' }),
    };
  }

  const params: DynamoDB.DocumentClient.GetItemInput = {
    TableName: tableName,
    Key: { id: itemId },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    if (!result.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Item not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    console.error('Error in getItem handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error',
        error: (error as Error).message,
      }),
    };
  }
};

