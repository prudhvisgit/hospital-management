"use client";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function SubscriptionPage() {
    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mt-4">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Digital Health Plans</h1>
                <p className="text-slate-500 mt-4 text-lg">
                    Subscribe to unlock access to your digital medical records, health analytics, and priority telemedicine queues.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {/* Monthly Plan */}
                <PlanCard
                    title="Monthly"
                    price="$0.99"
                    period="/month"
                    description="Perfect for short-term health monitoring and single consultations."
                    features={[
                        "Access to digital prescriptions",
                        "View lab reports online",
                        "Standard telemedicine queue",
                        "Email support"
                    ]}
                />

                {/* Quarterly Plan */}
                <PlanCard
                    title="Quarterly"
                    price="$2.49"
                    period="/quarter"
                    description="Our most popular plan for continuous health tracking."
                    popular={true}
                    features={[
                        "Everything in Monthly",
                        "Priority telemedicine queue",
                        "Advanced health analytics",
                        "1 free follow-up per month",
                        "SMS medication reminders"
                    ]}
                />

                {/* Yearly Plan */}
                <PlanCard
                    title="Yearly"
                    price="$9.99"
                    period="/year"
                    description="Best value for long-term comprehensive healthcare management."
                    features={[
                        "Everything in Quarterly",
                        "Instant telemedicine access",
                        "24/7 AI health chatbot",
                        "Dedicated emergency connect",
                        "Family sharing (up to 3)"
                    ]}
                />
            </div>

            <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-slate-900">Current Plan Status</h3>
                <p className="mt-2 text-slate-600">You are currently on the <strong className="text-slate-900">Free Tier</strong>. Your medical records are restricted.</p>
                <Button variant="outline" className="mt-6">View Billing History</Button>
            </div>
        </div>
    );
}

function PlanCard({ title, price, period, description, popular, features }: any) {
    return (
        <Card className={`relative flex flex-col ${popular ? 'border-primary ring-2 ring-primary/20 shadow-lg scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-transform hover:shadow-xl`}>
            {popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                </div>
            )}
            <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
                <div className="mt-4 flex items-end justify-center gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{price}</span>
                    <span className="text-slate-500 mb-1 font-medium">{period}</span>
                </div>
                <p className="text-sm text-slate-500 mt-4 leading-relaxed h-10">{description}</p>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1 mt-4">
                    {features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex flex-start gap-3 items-start">
                            <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button
                    className="w-full h-12 text-md"
                    variant={popular ? "default" : "outline"}
                    onClick={() => toast.success(`${title} Plan Selected! Redirecting to checkout...`)}
                >
                    {popular ? "Subscribe Now" : "Choose Plan"}
                </Button>
            </CardContent>
        </Card>
    )
}
