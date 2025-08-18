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
import LlmInput from '@/components/LlmInput';
import {
  FileText,
  Sparkles,
  MessageSquare,
  Zap,
  Target,
  Clock,
} from 'lucide-react';

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  return genPageMetadata({
    title: 'Create Resume - AI Resume Builder | Build Your Perfect Resume',
    description:
      'Create a professional, ATS-optimized resume with our AI-powered builder. Get expert guidance and build your resume step by step.',
  });
}

const CreateResumePage = async () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-secondary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-custom-black text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <Title
                Tag="h1"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                Create Your Resume
              </Title>
            </div>
            <p className="text-xl md:text-2xl text-primary-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Use our AI assistant to guide you through creating a professional,
              ATS-optimized resume that gets you noticed by employers.
            </p>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-dark" />
              </div>
              <Title
                Tag="h2"
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                AI Resume Assistant
              </Title>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ask our AI assistant anything about resume building. Get expert
              advice, formatting tips, and content suggestions tailored to your
              industry and experience level.
            </p>
          </div>

          <Card className="border-0 shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-primary-light to-secondary rounded-t-lg">
              <CardTitle className="text-xl font-semibold text-center">
                Start a Conversation
              </CardTitle>
              <CardDescription className="text-center text-gray-600">
                Type your question below to get started with building your
                resume
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <LlmInput />
            </CardContent>
          </Card>

          {/* Example Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-primary-dark" />
                  <Title Tag="h3" className="text-lg font-semibold">
                    Content Suggestions
                  </Title>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    &quot;How do I write a compelling professional
                    summary?&quot;
                  </p>
                  <p>
                    &quot;What skills should I include for a marketing
                    role?&quot;
                  </p>
                  <p>
                    &quot;How do I describe my achievements with numbers?&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-primary-dark" />
                  <Title Tag="h3" className="text-lg font-semibold">
                    Optimization Tips
                  </Title>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    &quot;How do I optimize my resume for ATS systems?&quot;
                  </p>
                  <p>
                    &quot;What keywords should I include for tech jobs?&quot;
                  </p>
                  <p>&quot;How long should my resume be?&quot;</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary-dark" />
                  <Title Tag="h3" className="text-lg font-semibold">
                    Format & Structure
                  </Title>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    &quot;What&apos;s the best resume format for my
                    experience?&quot;
                  </p>
                  <p>&quot;How should I organize my work experience?&quot;</p>
                  <p>&quot;Should I include a cover letter?&quot;</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-dark" />
                  <Title Tag="h3" className="text-lg font-semibold">
                    Career Transitions
                  </Title>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>&quot;How do I change careers with my resume?&quot;</p>
                  <p>&quot;How to explain employment gaps?&quot;</p>
                  <p>&quot;How to highlight transferable skills?&quot;</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title
              Tag="h2"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              How It Works
            </Title>
            <p className="text-xl text-gray-600">
              Our AI assistant guides you through the entire resume creation
              process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <Title Tag="h3" className="text-xl font-semibold mb-4">
                Ask Questions
              </Title>
              <p className="text-gray-600">
                Start by asking our AI assistant about any aspect of resume
                building. Get personalized advice based on your situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <Title Tag="h3" className="text-xl font-semibold mb-4">
                Get Expert Guidance
              </Title>
              <p className="text-gray-600">
                Receive detailed, industry-specific advice on content,
                formatting, keywords, and optimization strategies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-custom-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <Title Tag="h3" className="text-xl font-semibold mb-4">
                Build Your Resume
              </Title>
              <p className="text-gray-600">
                Apply the guidance to create a professional resume that passes
                ATS systems and impresses hiring managers.
              </p>
            </div>
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
            Ready to Get Started?
          </Title>
          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Use our AI assistant above to begin creating your professional
            resume. Get instant expert advice and build with confidence.
          </p>
          <div className="flex justify-center">
            <a
              href="#ai-assistant"
              className="bg-white text-primary-dark hover:bg-gray-100 text-lg px-8 py-4 font-semibold rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              <Zap className="w-5 h-5" />
              Start with AI Assistant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateResumePage;
