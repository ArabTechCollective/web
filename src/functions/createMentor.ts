import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { MentorModel } from '../db/mentor.schema';
import { Groups, ServicesOffered } from '../db/properties.pattern';
import { randomUUID } from 'crypto';
console.log('asdfasdf');
export const createMentor = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const exampleId = randomUUID();
    const mentor = {
      id: exampleId,
      phone: '1234567890',
      first_name: 'Daniel',
      last_name: 'Jomaa',
      email: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      city: 'San Francisco',
      state: 'CA',
      submitted_at: new Date(),
      connection_to_arab: 'Yes',
      groups: [Groups.EMAIL],
      support_description: 'I need support',
      interested_role: 'Software Engineer',
      biography: 'I am a software engineer',
      misc: 'I am a software engineer',
      interested_companies: 'Google',
      interested_services: [ServicesOffered.COACHING_SESSION],
      former_company: 'Google',
      current_company: 'Google',
      former_role: 'Software Engineer',
      linkedin_url: 'linkedin.com/daniel-jomaa'
    };
    MentorModel.create(mentor);
    console.log('Mentor created successfully', exampleId);
    return {
      statusCode: 200,
      body: JSON.stringify(`'Mentor created successfully', ${exampleId}`),
    };
  } catch (error) {
    console.error('Error in getItem handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: `Internal Server Error: ${error}`,
        error: (error as Error).message,
      }),
    };
  }
}