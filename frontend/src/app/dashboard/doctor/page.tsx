"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Calendar, Activity, Clock, CheckCircle2, AlertCircle, Video, CalendarIcon } from "lucide-react";
import { toast } from "sonner";

export default function DoctorDashboard() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Welcome, Dr. Smith</h1>
                    <p className="text-slate-500 mt-1">You have 8 appointments scheduled for today.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="border-slate-200" onClick={() => toast.info('Availability synced')}>Sync Calendar</Button>
                    <Button className="gap-2" onClick={() => toast.success('New block added')}>+ Add Block</Button>
                    <Button className="gap-2 text-white">
                        <Video size={20} />
                        Join Next Call
                    </Button>
                </div>
            </div>

            {/* Quick Stats/Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard title="Today's Appointments" value="8" trend="+2 from yesterday" />
                <StatCard title="Telemedicine" value="3" trend="Pending" />
                <StatCard title="Total Patients" value="1,204" trend="+12 this month" />
                <StatCard title="Hours Logged" value="32h" trend="This week" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                {/* Today's Schedule */}
                <Card className="lg:col-span-2 shadow-sm border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-slate-100">
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <CalendarIcon size={18} className="text-primary" />
                            Today's Schedule
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            <AppointmentRow time="09:00 AM" patient="Alice Johnson" type="In-Person" status="Completed" />
                            <AppointmentRow time="09:30 AM" patient="Mark Spencer" type="Telemedicine" status="In Progress" active />
                            <AppointmentRow time="10:00 AM" patient="Sara Lee" type="In-Person" status="Waiting" />
                            <AppointmentRow time="11:00 AM" patient="Tom Hanks" type="In-Person" status="Scheduled" />
                        </div>
                    </CardContent>
                </Card>

                {/* Upcoming Telemedicine Queue */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Clock size={18} className="text-accent" />
                            Live Queue
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-4">
                        <div className="bg-accent-50 text-accent-800 p-3 rounded-lg border border-accent-100 text-sm flex justify-between items-center">
                            <span className="font-semibold">Current Wait Time:</span>
                            <span>~15 mins</span>
                        </div>
                        <div className="space-y-3">
                            <QueueItem num={1} name="Sara Lee" symptoms="Fever, Cough" />
                            <QueueItem num={2} name="Tom Hanks" symptoms="Back Pain" />
                            <QueueItem num={3} name="Emma Stone" symptoms="Headache" />
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}

function StatCard({ title, value, trend }: any) {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <h3 className="text-sm font-medium text-slate-500">{title}</h3>
                <div className="text-3xl font-bold text-slate-900 mt-2">{value}</div>
                <p className="text-xs text-slate-400 mt-1">{trend}</p>
            </CardContent>
        </Card>
    )
}

function AppointmentRow({ time, patient, type, status, active }: any) {
    return (
        <div className={`flex items-center justify-between p-4 transition-colors ${active ? 'bg-primary-50' : 'hover:bg-slate-50'}`}>
            <div className="flex items-center gap-4 w-1/4">
                <span className={`text-sm font-semibold ${active ? 'text-primary-700' : 'text-slate-900'}`}>{time}</span>
            </div>
            <div className="w-1/3">
                <span className="text-sm font-medium text-slate-900">{patient}</span>
            </div>
            <div className="w-1/4">
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded inline-flex items-center gap-1">
                    {type === 'Telemedicine' ? <Video size={12} /> : <Users size={12} />}
                    {type}
                </span>
            </div>
            <div className="w-1/4 text-right">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${status === 'Completed' ? 'bg-slate-100 text-slate-600' :
                    status === 'In Progress' ? 'bg-green-100 text-green-700 ring-1 ring-green-500 animate-pulse' :
                        status === 'Waiting' ? 'bg-orange-100 text-orange-700' :
                            'bg-blue-100 text-primary-700'
                    }`}>
                    {status}
                </span>
            </div>
        </div>
    )
}

function QueueItem({ num, name, symptoms }: any) {
    return (
        <div className="flex items-start gap-3 p-3 border border-slate-100 rounded-lg hover:border-slate-200 transition-colors">
            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold shrink-0">
                {num}
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900">{name}</h4>
                <p className="text-xs text-slate-500 line-clamp-1">{symptoms}</p>
            </div>
        </div>
    )
}
