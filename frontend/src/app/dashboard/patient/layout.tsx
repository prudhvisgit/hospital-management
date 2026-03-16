'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LayoutDashboard, Calendar, FileText, CreditCard, Activity, LogOut, Video, Menu, X, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export default function PatientDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col z-50 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-primary text-white p-1 rounded-lg">
                            <Activity size={20} />
                        </div>
                        <span className="text-xl font-bold text-primary-900">CareSync</span>
                    </Link>
                    <button className="md:hidden text-slate-500" onClick={() => setSidebarOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <NavItem href="/dashboard/patient" icon={<LayoutDashboard size={20} />} label="Overview" active />
                    <NavItem href="/dashboard/patient/appointments" icon={<Calendar size={20} />} label="Appointments" />
                    <NavItem href="/dashboard/patient/records" icon={<FileText size={20} />} label="Medical Records" />
                    <NavItem href="/dashboard/patient/telemedicine" icon={<Video size={20} />} label="Telemedicine" />
                    <NavItem href="/dashboard/patient/ai-tools" icon={<Sparkles size={20} className="text-primary" />} label="AI Health Assistant" />
                    <NavItem href="/dashboard/patient/subscription" icon={<CreditCard size={20} />} label="Subscription" />
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button
                        onClick={() => toast.success('Logged out successfully')}
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-red-50 hover:text-red-600 w-full transition-colors"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-30">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-slate-500 p-1" onClick={() => setSidebarOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <h2 className="text-lg font-semibold text-slate-800">Patient Portal</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            JD
                        </div>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </main>
        </div>
    );
}

function NavItem({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            onClick={() => {
                // For mobile sidebar toggle, if parent passed it
                // We're just modifying the Link
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active
                ? 'bg-primary-50 text-primary-700'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
        >
            {icon}
            {label}
        </Link>
    )
}
