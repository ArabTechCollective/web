import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const createMentor = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return {
          statusCode: 200,
          body: JSON.stringify("response"),
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
}