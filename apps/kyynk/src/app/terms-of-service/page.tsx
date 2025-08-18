import React from 'react';
import { Metadata } from 'next';
import { genPageMetadata } from '@/app/seo';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import Title from '@/components/ui/Title';
import {
  FileText,
  Scale,
  UserCheck,
  CreditCard,
  AlertTriangle,
  Shield,
  Mail,
  Globe,
} from 'lucide-react';

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  return genPageMetadata({
    title: 'Terms of Service - AI Resume Builder | User Agreement',
    description:
      'Read our terms of service to understand the rules and guidelines for using our AI Resume Builder platform and services.',
  });
}

const TermsOfServicePage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-custom-black text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Title
              Tag="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Terms of Service
            </Title>
            <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our AI Resume
              Builder service.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-light">
              <Scale className="w-5 h-5" />
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Agreement to Terms
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) constitute a legal
                agreement between you and AI Resume Builder
                (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) regarding your use of our AI-powered resume
                building service. By accessing or using our service, you agree
                to be bound by these Terms. If you do not agree to these Terms,
                please do not use our service.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Our Service
          </Title>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <UserCheck className="w-8 h-8 text-primary-dark" />
                <CardTitle className="text-xl font-semibold">
                  Service Overview
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4">
                AI Resume Builder provides an artificial intelligence-powered
                platform that helps users create, optimize, and format
                professional resumes. Our service includes:
              </CardDescription>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>AI-generated resume content and optimization</li>
                <li>ATS-friendly template designs</li>
                <li>Industry-specific keyword suggestions</li>
                <li>Multiple download formats (PDF, Word, etc.)</li>
                <li>Customer support and assistance</li>
                <li>Regular platform updates and improvements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Your Responsibilities
          </Title>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Account Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>
                    Maintain and update your account information as necessary
                  </li>
                  <li>Keep your login credentials secure and confidential</li>
                  <li>
                    Notify us immediately of any unauthorized account access
                  </li>
                  <li>
                    You are responsible for all activities under your account
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Acceptable Use
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  You agree to use our service only for lawful purposes and in
                  accordance with these Terms. You may not:
                </CardDescription>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Provide false, misleading, or fraudulent information</li>
                  <li>
                    Use the service for any illegal or unauthorized purpose
                  </li>
                  <li>Attempt to reverse engineer or hack our systems</li>
                  <li>Share your account access with other users</li>
                  <li>Use automated tools to access or scrape our service</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Content Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  You are solely responsible for the accuracy, completeness, and
                  truthfulness of all information you provide. While our AI
                  assists in formatting and optimization, you must ensure all
                  content accurately represents your qualifications, experience,
                  and achievements. We are not responsible for any consequences
                  arising from inaccurate information in your resume.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Credits and Payment
          </Title>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-primary-dark" />
                <CardTitle className="text-xl font-semibold">
                  Credit System and Fees
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Credit-Based System
                  </Title>
                  <p className="text-gray-600">
                    Our service operates on a credit-based system. You purchase
                    credit packages and use credits to generate resumes, access
                    premium templates, advanced AI optimization, and other
                    features. Credits do not expire and can be used at your own
                    pace. Current credit packages and pricing are available on
                    our website.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Billing and Payment
                  </Title>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Credit packages are purchased on a one-time basis</li>
                    <li>
                      Payment is due immediately upon credit package purchase
                    </li>
                    <li>
                      We accept major credit cards and other payment methods
                    </li>
                    <li>
                      You authorize us to charge your payment method for credit
                      purchases
                    </li>
                    <li>
                      Credits are added to your account immediately after
                      successful payment
                    </li>
                  </ul>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Credits and Refunds
                  </Title>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>
                      Credits do not expire and remain in your account until
                      used
                    </li>
                    <li>
                      Credits are non-transferable and cannot be converted back
                      to cash
                    </li>
                    <li>
                      No refunds for purchased credits once they have been used
                    </li>
                    <li>
                      Refunds for unused credits may be provided at our
                      discretion for technical issues within 30 days of purchase
                    </li>
                    <li>
                      You can purchase additional credit packages at any time
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Intellectual Property
          </Title>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Our Intellectual Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  The AI Resume Builder service, including all software,
                  algorithms, templates, designs, text, graphics, and other
                  content, is owned by us or our licensors and is protected by
                  copyright, trademark, and other intellectual property laws.
                  You may not copy, modify, distribute, or create derivative
                  works without our written permission.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Your Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  You retain ownership of all personal information and content
                  you provide to our service. By using our service, you grant us
                  a limited, non-exclusive license to use your content solely
                  for the purpose of providing our services to you. We do not
                  claim ownership of your resume content or personal
                  information.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Generated Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Content generated by our AI based on your input belongs to
                  you. However, you acknowledge that similar content may be
                  generated for other users based on similar inputs. We do not
                  guarantee the uniqueness of AI-generated content and recommend
                  customizing it to reflect your unique experience.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Disclaimers and Limitations
          </Title>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Service Disclaimer
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Our service is provided &quot;as is&quot; without warranties
                  of any kind. We do not guarantee:
                </CardDescription>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    That your resume will result in job interviews or employment
                  </li>
                  <li>
                    Compatibility with all ATS systems or job applications
                  </li>
                  <li>Uninterrupted or error-free service operation</li>
                  <li>Specific results or outcomes from using our service</li>
                  <li>
                    That our AI recommendations are suitable for all industries
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Limitation of Liability
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  To the maximum extent permitted by law, we shall not be liable
                  for any indirect, incidental, special, consequential, or
                  punitive damages, including but not limited to loss of
                  profits, data, or business opportunities, arising from your
                  use of our service. Our total liability shall not exceed the
                  amount you paid for our service in the 12 months preceding the
                  claim.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Third-Party Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our service may integrate with or link to third-party
                  services, websites, or applications. We are not responsible
                  for the content, privacy practices, or terms of service of
                  these third parties. Your use of third-party services is at
                  your own risk and subject to their respective terms.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Termination
          </Title>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Termination by You
                  </Title>
                  <p className="text-gray-600">
                    You may terminate your account at any time by contacting us
                    or using the account deletion feature. Upon termination, any
                    unused credits will be forfeited, but you may retain access
                    to any content you have downloaded.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Termination by Us
                  </Title>
                  <p className="text-gray-600">
                    We may suspend or terminate your account immediately if you
                    violate these Terms, engage in fraudulent activity, or if we
                    reasonably believe termination is necessary to protect our
                    service or other users. We will provide notice when
                    reasonably possible.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Effect of Termination
                  </Title>
                  <p className="text-gray-600">
                    Upon termination, your right to use the service ceases
                    immediately. We may delete your account data after a
                    reasonable period, subject to our data retention policies
                    and legal obligations. Provisions of these Terms that by
                    their nature should survive termination will remain in
                    effect.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Legal Provisions
          </Title>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Governing Law and Jurisdiction
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  These Terms are governed by and construed in accordance with
                  the laws of [Your Jurisdiction], without regard to conflict of
                  law principles. Any legal action or proceeding arising under
                  these Terms will be brought exclusively in the courts of [Your
                  Jurisdiction].
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Severability and Waiver
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  If any provision of these Terms is found to be unenforceable
                  or invalid, the remaining provisions will remain in full force
                  and effect. Our failure to enforce any right or provision in
                  these Terms will not constitute a waiver of such right or
                  provision.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Entire Agreement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  These Terms, together with our Privacy Policy, constitute the
                  entire agreement between you and us regarding your use of our
                  service and supersede all prior and contemporaneous
                  understandings, agreements, representations, and warranties.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact and Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Contact Us
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  If you have questions about these Terms, please contact us:
                </CardDescription>
                <div className="space-y-2">
                  <div>
                    <strong className="text-gray-900">Email:</strong>{' '}
                    <a
                      href="mailto:ab@kyynk.com"
                      className="text-primary-dark hover:text-primary"
                    >
                      ab@kyynk.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-gray-900">Subject:</strong> Terms of
                    Service Inquiry
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We may update these Terms from time to time. We will notify
                  users of material changes by email or through our service.
                  Your continued use of our service after changes become
                  effective constitutes acceptance of the updated Terms.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
