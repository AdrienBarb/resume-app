import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@/lib/db/client';
import { emailOTP } from 'better-auth/plugins';
import { resendClient } from '../resend/resendClient';
import MagicLinkEmail from '@kyynk/transactional/emails/MagicLinkEmail';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    emailOTP({
      sendVerificationOTP: async ({ email, otp, type }, request) => {
        await resendClient.emails.send({
          from: 'noreply@kyynk.com',
          to: email,
          subject: 'Your verification code',
          react: MagicLinkEmail({ otp }),
        });
      },
    }),
  ],
  secret: process.env.BETTER_AUTH_SECRET!,
});
