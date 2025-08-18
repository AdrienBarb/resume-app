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
import { Badge } from '@/components/ui/badge';
import Title from '@/components/ui/Title';
import {
  FileText,
  Sparkles,
  Target,
  Clock,
  CheckCircle,
  Users,
  TrendingUp,
  Zap,
  Star,
  ArrowRight,
} from 'lucide-react';

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  return genPageMetadata({
    title: 'AI Resume Generator - Create Professional Resumes in Minutes',
    description:
      'Generate ATS-optimized, professional resumes with AI. Get hired faster with personalized resumes tailored to any job. Try our AI resume builder for free.',
  });
}

const HomePage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-custom-black text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Resume Builder
            </Badge>
            <Title
              Tag="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Create Your Perfect Resume with AI
            </Title>
            <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Generate professional, ATS-optimized resumes in minutes. Buy
              credits and use our AI to analyze job descriptions and craft
              personalized resumes that get you noticed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
              >
                <Zap className="w-5 h-5 mr-2" />
                Buy Credits & Start Building
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-primary-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Pay per use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>ATS-optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Multiple formats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                500k+
              </div>
              <div className="text-gray-600">Resumes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                85%
              </div>
              <div className="text-gray-600">Interview Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-custom-black mb-2">
                3 min
              </div>
              <div className="text-gray-600">Average Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
                98%
              </div>
              <div className="text-gray-600">ATS Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose Our AI Resume Builder?
            </Title>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology with our flexible credit
              system. Buy credits once and use them to create resumes that stand
              out from the competition and pass through ATS systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  AI-Powered Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our AI analyzes your experience and generates compelling
                  bullet points, optimized keywords, and professional summaries
                  tailored to your target role.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  ATS Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ensure your resume passes through Applicant Tracking Systems
                  with our ATS-friendly templates and keyword optimization
                  technology.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Lightning Fast
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Create a professional resume in just 3 minutes. Our AI handles
                  the heavy lifting while you focus on what matters most -
                  getting hired.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Multiple Formats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Download your resume in PDF, Word, or other formats. Choose
                  from professional templates designed by hiring experts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Industry-Specific
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Get resumes tailored to your industry with sector-specific
                  keywords, formats, and best practices that recruiters expect.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Expert-Approved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our templates and AI recommendations are based on insights
                  from thousands of hiring managers and recruitment experts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              How It Works
            </Title>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating your perfect resume is simple with our 3-step process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <Title Tag="h3" className="text-xl font-semibold mb-4">
                Enter Your Information
              </Title>
              <p className="text-gray-600">
                Simply input your work experience, education, and skills. Our
                smart form guides you through each step.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <Title Tag="h3" className="text-xl font-semibold mb-4">
                AI Optimizes Content
              </Title>
              <p className="text-gray-600">
                Our AI analyzes your information and creates compelling,
                ATS-optimized content tailored to your target job.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <Title Tag="h3" className="text-xl font-semibold mb-4">
                Download & Apply
              </Title>
              <p className="text-gray-600">
                Download your professional resume in your preferred format and
                start applying to jobs with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              What Our Users Say
            </Title>
            <p className="text-xl text-gray-600">
              Join thousands of professionals who&apos;ve landed their dream
              jobs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;I got 3 interview calls within a week of using this AI
                  resume builder. The ATS optimization really works!&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">SA</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Anderson</div>
                    <div className="text-sm text-gray-500">
                      Marketing Manager
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;The AI perfectly captured my technical skills and
                  presented them in a way that impressed recruiters.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-gray-500">
                      Software Engineer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &quot;As a recent graduate, I had no idea how to write a
                  resume. This tool made it so easy and professional.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary-dark rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">EJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Emily Johnson</div>
                    <div className="text-sm text-gray-500">Recent Graduate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark via-primary to-custom-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Title
            Tag="h2"
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Land Your Dream Job?
          </Title>
          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Join over 500,000 professionals who&apos;ve created winning resumes
            with our AI-powered builder. Buy credits and start building your
            perfect resume today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Buy Credits & Create Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Title Tag="h3" className="text-lg font-semibold text-white mb-4">
                AI Resume Builder
              </Title>
              <p className="text-gray-400">
                The smartest way to create professional resumes that get you
                hired.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Resume Builder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
