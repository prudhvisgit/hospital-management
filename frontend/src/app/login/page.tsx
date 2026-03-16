"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Activity, ArrowRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        setIsLoading(true);
        toast.promise(new Promise(res => setTimeout(res, 1500)), {
            loading: 'Authenticating...',
            success: () => {
                setIsLoading(false);
                // Mock logic
                if (email === 'admin@hospital.com') window.location.href = '/dashboard/admin';
                else if (email === 'doctor@hospital.com') window.location.href = '/dashboard/doctor';
                else window.location.href = '/dashboard/patient';
                return 'Welcome back!';
            },
            error: 'Invalid credentials. Try again.'
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 p-4">
            <Link href="/" className="flex items-center gap-2 mb-8">
                <div className="flex bg-primary text-white p-2 rounded-xl shadow-sm">
                    <Activity size={32} />
                </div>
                <span className="text-3xl font-bold text-primary-900">CareSync</span>
            </Link>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
                    <p className="text-slate-500 mt-2">Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                            className="h-12"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link href="#" className="text-sm text-primary hover:underline font-medium">Forgot password?</Link>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            className="h-12"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Button type="submit" className="w-full h-11 text-base font-bold shadow-lg shadow-primary/20" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            <>
                                Sign In <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-500">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-primary hover:underline font-medium">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}
