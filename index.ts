import type { SNSEvent } from 'aws-lambda';

export const handler = async (event: SNSEvent) => {
    const message = event.Records[0].Sns.Message;
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Message received from SNS:', message);
};
