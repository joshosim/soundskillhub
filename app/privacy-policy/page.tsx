import type { Metadata } from 'next';
import { PolicyPage } from '../components/PolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | SoundSkillHub',
  description: 'How Soundskill Hub collects, uses, and protects personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      description="This explains what information we collect when you use our website or contact us about training, and how we use it."
      sections={[
        {
          heading: 'Information We Collect',
          body: 'We may collect your name, email address, phone number, school or organization name, message details, booking preferences, and any information you choose to send through our forms, WhatsApp, email, or phone conversations.',
        },
        {
          heading: 'How We Use Information',
          body: 'We use your information to respond to enquiries, arrange trainings, send relevant updates, improve our services, keep records, and communicate with you about Soundskill Hub programs.',
        },
        {
          heading: 'Sharing Information',
          body: 'We do not sell your personal information. We may share limited information with trusted service providers only when needed to run the website, manage communication, process bookings, or comply with the law.',
        },
        {
          heading: 'Data Security',
          body: 'We take reasonable steps to protect personal information from unauthorized access, misuse, or loss. No online service is completely risk free, so please avoid sending highly sensitive information through public forms.',
        },
        {
          heading: 'Your Choices',
          body: 'You may ask us to update, correct, or delete your personal information where applicable. You may also opt out of non-essential communications at any time.',
        },
      ]}
    />
  );
}
