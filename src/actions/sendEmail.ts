'use server';

import React from 'react';
import {Resend} from 'resend';
import {getErrorMessage, validateString} from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    let data;

    if (!validateString(senderEmail, 500)) {
        return {error: 'invalid sender email'};
    }

    if (!validateString(message, 5000)) {
        return {error: 'invalid message'};
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: '00.johnlam@gmail.com',
            subject: 'contact form message',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
    return {data};
};
