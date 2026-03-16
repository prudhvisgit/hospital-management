"use client";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Plus, Calendar as CalendarIcon, Clock, Filter } from "lucide-react";
import { toast } from "sonner";

export default function AppointmentsPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Appointments</h1>
                    <p className="text-slate-500 mt-1">Manage your upcoming visits and booking history.</p>
                </div>
                <Button className="gap-2" onClick={() => toast.info('Opening booking modal...')}>
                    <Plus size={18} /> Book New Appointment
                </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Main List */}
                <Card className="md:col-span-2 shadow-sm border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-slate-100">
                        <CardTitle className="text-lg font-bold">Upcoming Visits</CardTitle>
                        <Button variant="outline" size="sm" className="gap-2" onClick={() => toast.info('Filter options opened')}>
                            <Filter size={14} /> Filter
                        </Button>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            <AppointmentCard
                                doctor="Dr. Sarah Johnson"
                                specialty="Cardiologist"
                                date="Oct 12, 2026"
                                time="10:00 AM"
                                type="In-Person"
                                status="Confirmed"
                            />
                            <AppointmentCard
                                doctor="Dr. Michael Chen"
                                specialty="General Physician"
                                date="Oct 15, 2026"
                                time="02:30 PM"
                                type="Telemedicine"
                                status="Confirmed"
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Sidebar / Queue Info */}
                <div className="space-y-6">
                    <Card className="shadow-sm border-slate-200 bg-accent-50 text-accent-900">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-md font-bold flex items-center gap-2">
                                <Clock size={16} /> Live Queue Status
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">You have no appointments today.</p>
                            <div className="mt-4 text-xs text-accent-700 opacity-80">
                                Queue tracking activates 2 hours before your scheduled visit.
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-sm border-slate-200">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-md font-bold flex items-center gap-2">
                                <CalendarIcon size={16} className="text-primary" /> Past Visits
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <PastVisit doctor="Dr. Emily Davis" date="Sep 28, 2026" />
                            <PastVisit doctor="Dr. Sarah Johnson" date="Aug 10, 2026" />
                            <Button variant="link" className="px-0 w-full justify-start text-sm" onClick={() => toast.info('Loading complete history...')}>View full history &rarr;</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function AppointmentCard({ doctor, specialty, date, time, type, status }: any) {
    return (
        <div className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                    {doctor.split(' ')[1][0]}
                </div>
                <div>
                    <h4 className="font-bold text-slate-900">{doctor}</h4>
                    <p className="text-sm text-slate-500">{specialty}</p>
                    <div className="flex gap-2 mt-2">
                        <span className="inline-flex drop-shadow-sm items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                            {type}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-0 pt-4 sm:pt-0 border-slate-100 mt-2 sm:mt-0">
                <div className="text-left sm:text-right">
                    <div className="font-semibold text-slate-900">{date}</div>
                    <div className="text-sm text-slate-500">{time}</div>
                </div>
                <div className="mt-0 sm:mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {status}
                    </span>
                </div>
            </div>
        </div>
    )
}

function PastVisit({ doctor, date }: any) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
            <span className="text-sm font-medium text-slate-700">{doctor}</span>
            <span className="text-xs text-slate-500">{date}</span>
        </div>
    )
}
