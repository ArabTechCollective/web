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

export const mentee = new Schema({
    id: {
        type: String,
    },
    // will need sanitization
    phone: {
        type: Number,
        default: null,
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    // will need sanitization
    email_address: {
        type: String,
    },
    support_description: {
        type: String,
    },
    // will need sanitization
    location: {
        type: String,
    },
    // will need sanitization
    interested_role: {
        type: String,
    },
    submitted_at: {
        type: Date,
    },
    biography: {
        type: String,
    },
    misc: {
        type: String,
    },
    connection_to_arab: {
        type: String,
    },
    // will need sanitization
    companies: {
        type: [String],
    },
    interested_services: {
        type: [ServicesOffered],
    },
    // will need sanitization
    former_job: {
        type: String,
        default: null,
    },
    // will need sanitization
    current_job: {
        type: String,
        default: null,
    },
    // will need sanitization
    former_role: {
        type: String,
        default: null,
    },
    // will need sanitizatoin
    current_role: {
        type: String,
        default: null,
    },
    // will need sanitization
    linkedin_url: {
        type: String,
        default: null,
    },
    // will need sanitization
    resume_link: {
        type: String,
        default: null,
    },
    groups: {
        type: [Groups],
        default: null,
    }
}, {
    timestamps: {
        createdAt: ["createDate", "creation"],
        updatedAt: ["updateDate", "updated"]
    }
});

class Mentee extends Item {
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
