import { model, Schema } from "dynamoose";
import { Member, memberSchema } from "./member.pattern";
import { Groups, ServicesOffered } from "./properties.pattern";
import { randomUUID } from "crypto";

export class Mentor extends Member {
    support_description: string;
    interested_role: string;
    biography: string;
    misc: string;
    interested_companies: string;
    interested_services: ServicesOffered[];
    former_company: string | undefined;
    current_company: string | undefined;
    former_role: string | undefined;
    current_role: string | undefined;
    linkedin_url: string | undefined;
}

const mentorSchemaObj = {
    ...memberSchema, ...{
        support_description: {
            type: String,
            required: true,
        },
        interested_role: {
            type: String,
            required: true,
        },
        biography: {
            type: String,
            required: true,
        },
        misc: {
            type: String,
            required: true,
        },
        interested_companies: {
            type: String,
            required: true,
        },
        interested_services: {
            type: [String],
            required: true,
        },
        former_company: {
            type: String,
            required: false,
        },
        current_company: {
            type: String,
            required: false,
        },
        former_role: {
            type: String,
            required: false,
        },
        current_role: {
            type: String,
            required: false,
        },
        linkedin_url: {
            type: String,
            required: false,
        }
    }
};

const mentorSchema = new Schema(mentorSchemaObj, {timestamps:  true});

export const MentorModel = model<Mentor>('Mentor', mentorSchema);

const testAgainstSampleData = () => {
    const exampleId = randomUUID();
    MentorModel.create({
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
    });

    console.log(MentorModel.get(exampleId));
}

testAgainstSampleData();