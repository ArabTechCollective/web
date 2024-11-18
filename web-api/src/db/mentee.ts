import { Schema } from "dynamoose"

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

const mentee = new Schema({
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
    former_role: {
        type: String,
        default: null,
    },
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
});
