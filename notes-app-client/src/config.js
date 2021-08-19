const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "ap-south-1",
        BUCKET: "notes-api-file-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://0f3q5wxm7l.execute-api.us-east-1.amazonaws.com/production",
    },
    cognito: {
        REGION: "ap-south-1",
        USER_POOL_ID: "ap-south-1_D1zxLU7kX",
        APP_CLIENT_ID: "12kv0nl52fsrth5030uhha03ku",
        IDENTITY_POOL_ID: "ap-south-1:446a06b7-f964-46bc-8786-96e6ba431842",
    },
};

export default config;