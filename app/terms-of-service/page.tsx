import type { Metadata } from 'next';
import { PolicyPage } from '../components/PolicyPage';

export const metadata: Metadata = {
  title: 'Terms of Service | SoundSkillHub',
  description: 'Terms for using the Soundskill Hub website and services.',
};

export default function TermsOfServicePage() {
  return (
    <PolicyPage
      title="Terms of Service"
      description="These terms guide your use of the Soundskill Hub website and our training-related services."
      sections={[
        {
          heading: 'Use of Our Website',
          body: 'You agree to use this website for lawful purposes only and not to disrupt, misuse, copy, or interfere with the website, its content, or its services.',
        },
        {
          heading: 'Training Enquiries and Bookings',
          body: 'Submitting a form or enquiry does not automatically confirm a booking. Training dates, scope, fees, and requirements are confirmed directly with Soundskill Hub.',
        },
        {
          heading: 'Content Ownership',
          body: 'Website text, images, videos, training materials, branding, and other content belong to Soundskill Hub or are used with permission. You may not reproduce or distribute them without written consent.',
        },
        {
          heading: 'Service Changes',
          body: 'We may update our website, programs, fees, schedules, or terms from time to time. We will try to keep information accurate, but details may change without prior notice.',
        },
        {
          heading: 'Limitation of Liability',
          body: 'Soundskill Hub provides this website for general information and communication. We are not responsible for losses caused by website interruptions, outdated information, or third-party services linked from the website.',
        },
      ]}
    />
  );
}
