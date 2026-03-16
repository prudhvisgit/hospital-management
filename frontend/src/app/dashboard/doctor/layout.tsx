'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LayoutDashboard, Users, FileText, Calendar, LogOut, Activity, Video, Menu, X } from 'lucide-react';
import { toast } from 'sonner';

export default function DoctorDashboardLayout({
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
            <aside className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col z-50 transform transition-transform duration-200 ease-in-out md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <div className="bg-primary text-white p-1 rounded-lg">
                            <Activity size={20} />
                        </div>
                        <span className="text-xl font-bold">CareSync Pro</span>
                    </Link>
                    <button className="md:hidden text-slate-400" onClick={() => setSidebarOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <NavItem href="/dashboard/doctor" icon={<LayoutDashboard size={20} />} label="Overview" active />
                    <NavItem href="/dashboard/doctor/schedule" icon={<Calendar size={20} />} label="My Schedule" />
                    <NavItem href="/dashboard/doctor/patients" icon={<Users size={20} />} label="My Patients" />
                    <NavItem href="/dashboard/doctor/records" icon={<FileText size={20} />} label="Medical Records" />
                    <NavItem href="/dashboard/doctor/telemedicine" icon={<Video size={20} />} label="Telemedicine" />
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
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-30">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden text-slate-500 p-1" onClick={() => setSidebarOpen(true)}>
                            <Menu size={24} />
                        </button>
                        <h2 className="hidden sm:block text-lg font-semibold text-slate-800">Doctor Portal</h2>
                        <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Available
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                            Dr
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
            onClick={() => { }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active
                ? 'bg-slate-800 text-white'
                : 'hover:bg-slate-800/50 hover:text-white'
                }`}
        >
            {icon}
            {label}
        </Link>
    )
}
