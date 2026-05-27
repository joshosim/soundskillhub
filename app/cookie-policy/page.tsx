import type { Metadata } from 'next';
import { PolicyPage } from '../components/PolicyPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | SoundSkillHub',
  description: 'How Soundskill Hub may use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      title="Cookie Policy"
      description="This explains how cookies and similar browser technologies may be used on the Soundskill Hub website."
      sections={[
        {
          heading: 'What Cookies Are',
          body: 'Cookies are small files stored on your device by a website. They help a site remember basic preferences, support features, and understand how visitors use the site.',
        },
        {
          heading: 'How We May Use Cookies',
          body: 'We may use essential cookies to keep the website working, performance cookies to understand page usage, and third-party cookies when embedded services or external tools are used.',
        },
        {
          heading: 'Third-Party Services',
          body: 'Some services linked or embedded on our website, such as social media, analytics, videos, WhatsApp, or external forms, may set their own cookies under their own policies.',
        },
        {
          heading: 'Managing Cookies',
          body: 'You can block, delete, or manage cookies through your browser settings. Some website features may not work as expected if certain cookies are disabled.',
        },
        {
          heading: 'Updates',
          body: 'We may update this Cookie Policy if our website tools or cookie practices change. The latest version will be posted on this page.',
        },
      ]}
    />
  );
}
