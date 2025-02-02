import { Schema, model} from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { Groups } from './properties.pattern';
import { UUID } from 'crypto';
import { components } from '../schema/schema';
type MemberInterface = components['schemas']['Member'];
export class Member extends Item implements MemberInterface  {
    id: string;
    phone: string;
    first_name: string;
    last_name: string;
    email: string;
    city: string;
    state: string;
    connection_to_arab: string;
    groups: Groups[];
    misc?: string | undefined;
    /**
     * The following are data table only values
     */
    submitted_at: Date;
}

export const memberSchema = {
    id: {
        type: String,
        hashKey: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    submitted_at: {
        type: Date,
        required: true,
    },
    connection_to_arab: {
        type: String,
        required: true,
    },
    groups: {
        type: Array,
        schema: [String],
        required: true,
    },
};
