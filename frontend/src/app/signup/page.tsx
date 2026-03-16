"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Activity, User, Stethoscope, ShieldCheck, ArrowRight, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function SignupPage() {
    const router = useRouter();
    const [role, setRole] = useState<'patient' | 'doctor' | 'admin'>('patient');
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            toast.error('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        toast.promise(new Promise(res => setTimeout(res, 2000)), {
            loading: 'Creating your account...',
            success: () => {
                setIsLoading(false);
                window.location.href = `/dashboard/${role}`;
                return `Account created successfully! Welcome to CareSync.`;
            },
            error: 'Failed to create account. Please try again.'
        });
    };

    const handleRoleSelect = (selectedRole: 'patient' | 'doctor' | 'admin') => {
        setRole(selectedRole);
        toast.info(`Role set to ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`);
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-4 py-12">
            <Link href="/" className="flex items-center gap-2 mb-8">
                <div className="flex bg-primary text-white p-2 rounded-xl shadow-sm">
                    <Activity size={32} />
                </div>
                <span className="text-3xl font-bold text-primary-900">CareSync</span>
            </Link>

            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900">Create an Account</h1>
                    <p className="text-slate-500 mt-2">Join CareSync to manage your healthcare journey</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-6">
                    <div className="space-y-4">
                        <Label className="text-base">Select your role</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <RoleCard
                                icon={<User />} title="Patient"
                                selected={role === 'patient'}
                                onClick={() => handleRoleSelect('patient')}
                            />
                            <RoleCard
                                icon={<Stethoscope />} title="Doctor"
                                selected={role === 'doctor'}
                                onClick={() => handleRoleSelect('doctor')}
                            />
                            <RoleCard
                                icon={<ShieldCheck />} title="Admin"
                                selected={role === 'admin'}
                                onClick={() => handleRoleSelect('admin')}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name" placeholder="John Doe" required className="h-12"
                                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email" type="email" placeholder="name@example.com" required className="h-12"
                                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        {role === 'doctor' && (
                            <div className="space-y-2">
                                <Label htmlFor="specialization">Specialization</Label>
                                <Input
                                    id="specialization" placeholder="Cardiologist, General Physician..." required className="h-12"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password" type="password" required className="h-12"
                                value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full h-11 text-base font-bold shadow-lg shadow-primary/20" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating Account...
                            </>
                        ) : (
                            <>
                                Create Free Account <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary hover:underline font-medium">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

function RoleCard({ icon, title, selected, onClick }: { icon: React.ReactNode, title: string, selected: boolean, onClick: () => void }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                selected
                    ? "border-primary bg-primary-50 text-primary group shadow-md scale-[1.02]"
                    : "border-slate-200 bg-white text-slate-500 hover:border-primary-300 hover:bg-slate-50 shadow-sm"
            )}
        >
            <div className={cn("mb-2", selected ? "text-primary" : "text-slate-400")}>
                {icon}
            </div>
            <span className="font-semibold">{title}</span>
        </button>
    )
}
