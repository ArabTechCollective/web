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

const mentor = new Schema({
    id: {
        type: String,
    },
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
    email_address: {
        type: String,
    },
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
    interested_services: {
        type: [ServicesOffered],
    },
    former_job: {
        type: String,
        default: null,
    },
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
    linkedin_url: {
        type: String,
        default: null,
    },
    resume_link: {
        type: String,
        default: null,
    },
    groups: {
        type: [Groups],
        default: null,
    }
});

