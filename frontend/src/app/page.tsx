"use client";
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/Button';
import { Calendar, Shield, Activity, Brain, Clock, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-24 pb-32">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl text-balance leading-[1.1]">
              Modern Healthcare, <br />
              <span className="text-primary-600 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Powered by AI</span>
            </h1>
            <p className="text-xl leading-8 text-slate-500 max-w-2xl mx-auto">
              Experience the future of hospital management. Paperless records, smart doctor assignments, and instant telemedicine appointments with CareSync.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto font-semibold gap-2">
                  Get Started as Patient
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Doctor Login
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract background shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/20 blur-[100px] rounded-full mix-blend-multiply pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white" id="features">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Smart Features for Better Care</h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need to manage healthcare efficiently.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-primary" />}
              title="AI Symptom Checker"
              description="Enter your symptoms and let our AI suggest possible conditions and the right specialist to see."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-accent" />}
              title="Smart Appointments"
              description="Book appointments instantly. If your doctor is away, we'll automatically assign another available specialist."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-primary" />}
              title="Digital Records"
              description="A fully paperless experience. Access your medical history, prescriptions, and reports securely online."
            />
            <FeatureCard
              icon={<Activity className="h-8 w-8 text-accent" />}
              title="Telemedicine"
              description="Consult with top doctors from the comfort of your home through secure video calls."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Queue Management"
              description="See your live position in the queue and estimated waiting time before your visit."
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-accent" />}
              title="Role-based Portals"
              description="Dedicated, secure dashboards designed specifically for Patients, Doctors, and Administrators."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Affordable Health Plans</h2>
            <p className="mt-4 text-lg text-slate-600">Premium care shouldn't come with a premium price tag.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">Monthly</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$0.99</span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 mb-6">Essential digital record access and standard support.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Digital Prescriptions</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Online Lab Reports</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Basic AI Guidance</li>
              </ul>
              <Link href="/signup">
                <Button variant="outline" className="w-full">Get Started</Button>
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border-2 border-primary ring-4 ring-primary/5 flex flex-col relative scale-105 shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <h3 className="text-lg font-bold text-slate-900">Quarterly</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$2.49</span>
                <span className="text-slate-500 text-sm">/quarter</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 mb-6">Complete health tracking with priority consultations.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Priority Queueing</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Advanced Analytics</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> SMS Reminders</li>
              </ul>
              <Link href="/signup">
                <Button className="w-full shadow-lg shadow-primary/20">Choose Quarterly</Button>
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col">
              <h3 className="text-lg font-bold text-slate-900">Yearly</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$9.99</span>
                <span className="text-slate-500 text-sm">/year</span>
              </div>
              <p className="mt-4 text-sm text-slate-600 mb-6">The ultimate healthcare package for you and your family.</p>
              <ul className="space-y-3 mb-8 text-sm text-slate-600 flex-1">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> 24/7 AI Health Bot</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Family Sharing (3)</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-primary" /> Instant Telemedicine</li>
              </ul>
              <Link href="/signup">
                <Button variant="outline" className="w-full">Get Best Value</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="font-bold text-2xl text-slate-400">MEDITECH</div>
          <div className="font-bold text-2xl text-slate-400">HEALTHCORE</div>
          <div className="font-bold text-2xl text-slate-400">VITALIS</div>
          <div className="font-bold text-2xl text-slate-400">GLOBOHEALTH</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your practice?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Join thousands of healthcare providers who trust CareSync for their daily operations and patient care.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-14 px-8 text-lg font-bold shadow-2xl shadow-black/20">
                Create Free Account
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white/10 h-14 px-8 text-lg font-bold"
              onClick={() => toast.info('Our sales team will contact you soon!')}
            >
              Book a Demo
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-blue-100/60 text-sm font-medium">
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> No credit card required</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> 14-day free trial</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p>&copy; 2026 CareSync Hospital Management. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300 hover:border-primary-100 group">
      <div className="mb-6 p-4 rounded-xl bg-white shadow-sm inline-block group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}
