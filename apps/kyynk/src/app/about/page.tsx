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
import Title from '@/components/ui/Title';
import {
  Brain,
  Users,
  Target,
  Award,
  Zap,
  FileText,
  TrendingUp,
  Shield,
} from 'lucide-react';

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  return genPageMetadata({
    title: 'About Us - AI Resume Builder | Revolutionizing Job Applications',
    description:
      'Learn about our mission to help professionals land their dream jobs with AI-powered resume generation. Discover our story, values, and commitment to career success.',
  });
}

const AboutPage = async () => {
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
              About Our Mission
            </Title>
            <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
              We&apos;re revolutionizing how professionals create resumes by
              combining artificial intelligence with deep industry expertise to
              help you land your dream job.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Title
                Tag="h2"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Our Story
              </Title>
              <p className="text-lg text-gray-600 mb-6">
                Founded by a team of HR professionals, software engineers, and
                career coaches, we recognized that traditional resume writing
                was broken. Too many qualified candidates were being overlooked
                because their resumes weren&apos;t optimized for modern hiring
                systems.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We built our AI Resume Builder to level the playing field,
                giving every professional access to the same resume optimization
                techniques used by top career consultants and executive
                recruiters.
              </p>
              <p className="text-lg text-gray-600">
                Today, we&apos;ve helped over 500,000 professionals create
                resumes that get noticed, pass ATS systems, and land interviews.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-light to-secondary rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-dark mb-2">
                    500k+
                  </div>
                  <div className="text-gray-700">Resumes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-dark mb-2">
                    85%
                  </div>
                  <div className="text-gray-700">Interview Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-dark mb-2">
                    98%
                  </div>
                  <div className="text-gray-700">ATS Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-dark mb-2">
                    150+
                  </div>
                  <div className="text-gray-700">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Values
            </Title>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to empowering
              professionals and democratizing career success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  We continuously improve our AI technology to stay ahead of
                  hiring trends and ATS requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Professional resume writing should be accessible to everyone,
                  regardless of budget or background.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Precision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Every word, format, and keyword is carefully optimized to
                  maximize your chances of landing interviews.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Your personal information and career data are protected with
                  enterprise-grade security and privacy measures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              What Makes Us Different
            </Title>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI doesn&apos;t just format your resume—it understands your
              industry, optimizes for ATS systems, and crafts compelling content
              that gets results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Advanced AI Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our proprietary AI models are trained on millions of
                  successful resumes and hiring patterns across industries,
                  ensuring your resume meets the latest standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-custom-black" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Expert-Backed Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Every template and recommendation is validated by our team of
                  HR professionals, recruiters, and career coaches with decades
                  of experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary-dark" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Proven Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Our users report an 85% interview rate and land jobs 40%
                  faster than traditional resume writing methods.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Built by Career Experts
            </Title>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team combines deep expertise in HR, technology, and
              career development to create the most effective resume builder
              available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <Title Tag="h3" className="text-xl font-semibold mb-2">
                  HR Professionals
                </Title>
                <p className="text-gray-600">
                  Former hiring managers and recruiters who understand what
                  employers really want to see in resumes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <Title Tag="h3" className="text-xl font-semibold mb-2">
                  AI Engineers
                </Title>
                <p className="text-gray-600">
                  Machine learning experts who develop and refine our AI models
                  to deliver increasingly better results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-custom-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <Title Tag="h3" className="text-xl font-semibold mb-2">
                  Career Coaches
                </Title>
                <p className="text-gray-600">
                  Certified career development professionals who ensure our
                  guidance aligns with best practices.
                </p>
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
            Ready to Join Our Success Stories?
          </Title>
          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Experience the difference that AI-powered resume optimization can
            make in your job search. Join hundreds of thousands of professionals
            who trust us with their career success.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
          >
            <Zap className="w-5 h-5 mr-2" />
            Start Building Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
