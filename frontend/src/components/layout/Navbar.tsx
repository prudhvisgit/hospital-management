import Link from 'next/link';
import { Button } from '../ui/Button';
import { Activity } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex bg-primary text-white p-1 rounded-lg">
                        <Activity size={24} />
                    </div>
                    <span className="text-xl font-bold text-primary-900">CareSync</span>
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</Link>
                    <Link href="#doctors" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Doctors</Link>
                    <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost">Log in</Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="default">Sign Up</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
