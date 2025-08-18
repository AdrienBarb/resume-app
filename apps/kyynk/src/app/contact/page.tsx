import React from 'react';
import { Metadata } from 'next';
import { genPageMetadata } from '@/app/seo';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/TextArea';
import { Label } from '@/components/ui/Label';
import Title from '@/components/ui/Title';
import {
  Mail,
  MessageSquare,
  Clock,
  Phone,
  MapPin,
  Send,
  HelpCircle,
  Users,
  Zap,
} from 'lucide-react';

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  return genPageMetadata({
    title: 'Contact Us - AI Resume Builder | Get Help & Support',
    description:
      'Get in touch with our AI Resume Builder team. Contact us for support, feedback, or questions about creating professional resumes with AI technology.',
  });
}

const ContactPage = async () => {
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
              Get in Touch
            </Title>
            <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about our AI Resume Builder? We&apos;re here to
              help you succeed in your job search journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Title
                Tag="h2"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Send us a Message
              </Title>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours. Whether you need technical support, have feature
                requests, or just want to share feedback, we&apos;d love to hear
                from you.
              </p>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        className="w-full"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 mb-2 block"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or feedback..."
                        rows={6}
                        className="w-full"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary-dark hover:bg-primary text-white font-semibold"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <Title
                Tag="h2"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Contact Information
              </Title>
              <p className="text-lg text-gray-600 mb-8">
                Prefer to reach out directly? Here are other ways to get in
                touch with our team.
              </p>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-dark" />
                      </div>
                      <div>
                        <Title Tag="h3" className="text-lg font-semibold mb-2">
                          Email Support
                        </Title>
                        <p className="text-gray-600 mb-2">
                          Send us an email for general inquiries and support
                        </p>
                        <a
                          href="mailto:ab@kyynk.com"
                          className="text-primary-dark hover:text-primary font-medium"
                        >
                          ab@kyynk.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-custom-black" />
                      </div>
                      <div>
                        <Title Tag="h3" className="text-lg font-semibold mb-2">
                          Response Time
                        </Title>
                        <p className="text-gray-600">
                          We typically respond to all inquiries within 24 hours
                          during business days (Monday-Friday).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-6 h-6 text-primary-dark" />
                      </div>
                      <div>
                        <Title Tag="h3" className="text-lg font-semibold mb-2">
                          Support Hours
                        </Title>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM (EST)
                          <br />
                          Saturday - Sunday: Limited support
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </Title>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our AI Resume Builder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  How does the AI resume builder work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our AI analyzes your input information, industry standards,
                  and job requirements to generate optimized content, keywords,
                  and formatting that passes ATS systems and impresses
                  recruiters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Is my personal information secure?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Yes, we use enterprise-grade security measures to protect your
                  data. Your information is encrypted and never shared with
                  third parties without your explicit consent.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Can I customize the generated resume?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Absolutely! Our AI provides a strong foundation, but you have
                  full control to edit, customize, and personalize every aspect
                  of your resume to match your unique experience and style.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  What file formats are available?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  You can download your resume in multiple formats including
                  PDF, Word (DOCX), and plain text. All formats are ATS-friendly
                  and professionally formatted.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              How Can We Help You?
            </Title>
            <p className="text-xl text-gray-600">
              Choose the category that best describes your inquiry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Technical Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Having trouble with the platform, downloads, or formatting?
                  Our technical team is here to help.
                </CardDescription>
                <Button
                  variant="secondary"
                  className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                  Get Technical Help
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Career Advice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Need guidance on resume strategy, job searching, or career
                  development? Our experts can help.
                </CardDescription>
                <Button
                  variant="secondary"
                  className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                  Ask Career Questions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Feedback & Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Have ideas for new features or improvements? We love hearing
                  from our users and value your input.
                </CardDescription>
                <Button
                  variant="secondary"
                  className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white"
                >
                  Share Feedback
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-custom-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Build Your Perfect Resume?
          </Title>
          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to start your job search. Create a professional,
            ATS-optimized resume in minutes with our AI-powered builder.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Building Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
