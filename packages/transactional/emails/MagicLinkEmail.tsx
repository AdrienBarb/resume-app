import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';
import { tailwindConfig } from '../config';

interface MagicLinkEmailProps {
  otp: string;
}

const MagicLinkEmail = ({ otp }: MagicLinkEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className="bg-white font-sans">
          <Preview>Your verification code</Preview>
          <Container className="mx-auto p-4">
            <Section>
              <Text className="mt-2 text-lg">Hello,</Text>
              <Text className="mt-1">Your verification code is:</Text>
              <Section className="mt-4">
                <Text className="text-2xl font-bold">{otp}</Text>
              </Section>
              <Text className="mt-4">Best regards,</Text>
              <Text>KYYNK Team</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicLinkEmail;
