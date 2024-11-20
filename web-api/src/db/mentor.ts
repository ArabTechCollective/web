import { Schema } from "dynamoose"
import { Item } from "dynamoose/dist/Item";

enum ServicesOffered {
    COACHING_SESSION = 'coaching_session',
    RESUME_REVIEW = 'resume_review',
    INTERVIEW_PREP = 'interview_prep',
    JOB_REFERRAL = 'job_referral',
    MAKE_CONNECTIONS = 'make_connections',
}

enum Groups {
    LINKEDIN = 'linkedin',
    SLACK = 'slack',
    EMAIL = 'email',
}

export const mentor = new Schema({
    id: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        default: null,
        required: false,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    // will need sanitization
    email_address: {
        type: String,
        required: true,
    },
    // will need sanitization
    location: {
        type: String,
        required: true,
    },
    // will need sanitization
    interested_role: {
        type: String,
        required: true,
    },
    submitted_at: {
        type: Date,
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
    connection_to_arab: {
        type: String,
        required: true,
    },
    interested_services: {
        type: [ServicesOffered],
        required: true,
    },
    // will need sanitization
    former_job: {
        type: String,
        default: null,
        required: false,
    },
    // will need sanitization
    current_job: {
        type: String,
        default: null,
        required: false,
    },
    // will need sanitization
    former_role: {
        type: String,
        default: null,
        required: false,
    },
    // will need sanitization
    current_role: {
        type: String,
        default: null,
        required: false,
    },
    // will need sanitization
    linkedin_url: {
        type: String,
        default: null,
        required: false,
    },
    // will need sanitization
    resume_link: {
        type: String,
        default: null,
        required: false,
    },
    groups: {
        type: [Groups],
        default: null,
        required: false,
    }
}, {
    timestamps: {
        createdAt: ["createDate", "creation"],
        updatedAt: ["updateDate", "updated"]
    }
});

class Mentor extends Item {
    id!: String;
    // will need sanitization
    phone: number | undefined;
    first_name!: string;
    last_name!: string;
    // will need sanitization
    email_address!: string;
    support_description!: String;
    // will need sanitization
    location!: String;
    // will need sanitization
    interested_role!: String;
    submitted_at!: Date;
    biography!: String;
    misc!: String;
    connection_to_arab!: String;
    // will need sanitization
    companies!: [String];
    interested_services!: [ServicesOffered];
    // will need sanitization
    former_job: String | undefined;
    // will need sanitization
    current_job: String | undefined;
    // will need sanitization
    former_role: String | undefined;
    // will need sanitizatoin
    current_role: String | undefined;
    // will need sanitization
    linkedin_url: String | undefined;
    // will need sanitization
    resume_link: String | undefined;
    groups!: [Groups]
}


