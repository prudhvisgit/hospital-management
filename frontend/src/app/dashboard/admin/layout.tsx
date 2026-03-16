'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LayoutDashboard, Users, FileText, Activity, ShieldAlert, DollarSign, LogOut, Menu, X } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-slate-100">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col z-50 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="bg-red-500 text-white p-1 rounded-lg">
                            <ShieldAlert size={20} />
                        </div>
                        <span className="text-xl font-bold">Admin Portal</span>
                    </Link>
                    <button className="md:hidden text-slate-400" onClick={() => setSidebarOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <NavItem href="/dashboard/admin" icon={<LayoutDashboard size={20} />} label="Overview" active />
                    <NavItem href="/dashboard/admin/doctors" icon={<Users size={20} />} label="Manage Doctors" />
                    <NavItem href="/dashboard/admin/patients" icon={<Users size={20} />} label="Manage Patients" />
                    <NavItem href="/dashboard/admin/finances" icon={<DollarSign size={20} />} label="Financials" />
                    <NavItem href="/dashboard/admin/system" icon={<Activity size={20} />} label="System Monitors" />
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={() => toast.success('Logged out successfully')}
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-800 hover:text-white w-full transition-colors"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 shadow-sm z-30">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-slate-500 p-1" onClick={() => setSidebarOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <h2 className="hidden sm:block text-lg font-semibold text-slate-800">Hospital Administration</h2>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                        AD
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
            onClick={() => { }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active
                ? 'bg-slate-800 text-white border-l-4 border-red-500 pl-2'
                : 'hover:bg-slate-800/50 hover:text-white pl-3'
                }`}
        >
            {icon}
            {label}
        </Link>
    )
}
