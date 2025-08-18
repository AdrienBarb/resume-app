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
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Globe,
  Mail,
  Settings,
} from 'lucide-react';

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  return genPageMetadata({
    title: 'Privacy Policy - AI Resume Builder | Your Data Protection',
    description:
      'Read our comprehensive privacy policy to understand how we collect, use, and protect your personal information when using our AI Resume Builder.',
  });
}

const PrivacyPolicyPage = async () => {
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
              Privacy Policy
            </Title>
            <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary-light">
              <Shield className="w-5 h-5" />
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
                  <UserCheck className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Our Commitment to Your Privacy
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-lg leading-relaxed">
                At AI Resume Builder, we are committed to protecting your
                privacy and ensuring the security of your personal information.
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our AI-powered resume
                building service. By using our service, you agree to the
                collection and use of information in accordance with this
                policy.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Information We Collect
          </Title>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Personal Information
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  We collect information you provide directly to us, including:
                </CardDescription>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Contact information (name, email address, phone number)
                  </li>
                  <li>Professional information (work experience, education)</li>
                  <li>Resume content and career objectives</li>
                  <li>Account credentials and preferences</li>
                  <li>
                    Payment information for credit purchases (processed securely
                    by third parties)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Usage Information
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  We automatically collect certain information about your use of
                  our service:
                </CardDescription>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Device information (IP address, browser type, device ID)
                  </li>
                  <li>Usage patterns and feature interactions</li>
                  <li>
                    Log data (access times, pages viewed, clicks, searches)
                  </li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    AI Processing Data
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  To provide our AI-powered resume optimization, we process your
                  career information, job descriptions you provide, and
                  generated content. This data is used solely to improve your
                  resume and is not shared with third parties for marketing
                  purposes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            How We Use Your Information
          </Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Service Provision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Generate and optimize your resumes</li>
                  <li>Provide customer support</li>
                  <li>Process credit purchases and transactions</li>
                  <li>Maintain and improve our service</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Send service-related notifications</li>
                  <li>Respond to your inquiries</li>
                  <li>Provide updates and announcements</li>
                  <li>Send marketing communications (with consent)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Service Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Analyze usage patterns and trends</li>
                  <li>Develop new features and functionality</li>
                  <li>Improve AI model accuracy</li>
                  <li>Conduct research and analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Legal Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and abuse</li>
                  <li>Enforce our terms of service</li>
                  <li>Respond to legal requests</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            How We Protect Your Data
          </Title>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Security Measures
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  We implement comprehensive security measures to protect your
                  information:
                </CardDescription>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Encrypted storage of sensitive information</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication systems</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary-dark" />
                  <CardTitle className="text-xl font-semibold">
                    Data Sharing and Disclosure
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information. We
                  may share your information only in these limited
                  circumstances:
                </CardDescription>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>With your explicit consent</li>
                  <li>
                    With service providers who assist in our operations (under
                    strict confidentiality agreements)
                  </li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Your Rights and Choices
          </Title>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Access and Portability
                  </Title>
                  <p className="text-gray-600">
                    You have the right to access, download, and obtain a copy of
                    your personal information in a structured, machine-readable
                    format.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Correction and Updates
                  </Title>
                  <p className="text-gray-600">
                    You can update, correct, or modify your personal information
                    at any time through your account settings or by contacting
                    us.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Deletion
                  </Title>
                  <p className="text-gray-600">
                    You have the right to request deletion of your personal
                    information, subject to certain legal and operational
                    requirements.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Marketing Communications
                  </Title>
                  <p className="text-gray-600">
                    You can opt out of marketing communications at any time by
                    using the unsubscribe link in emails or updating your
                    preferences.
                  </p>
                </div>

                <div>
                  <Title Tag="h3" className="text-lg font-semibold mb-2">
                    Cookies and Tracking
                  </Title>
                  <p className="text-gray-600">
                    You can control cookie preferences through your browser
                    settings, though this may affect service functionality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-primary-dark" />
                <CardTitle className="text-2xl font-bold">
                  Questions About This Policy?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-lg mb-6">
                If you have any questions about this Privacy Policy, your
                personal information, or how to exercise your rights, please
                contact us:
              </CardDescription>
              <div className="space-y-4">
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
                  <strong className="text-gray-900">Subject Line:</strong>{' '}
                  Privacy Policy Inquiry
                </div>
                <div className="text-sm text-gray-500">
                  We will respond to your inquiry within 30 days of receipt.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Changes to This Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-center">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of any material changes by posting the updated policy on our
                website and updating the &quot;Last updated&quot; date. Your
                continued use of our service after such changes constitutes
                acceptance of the updated policy.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
