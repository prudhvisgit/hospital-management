"use client";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { toast } from "sonner";

export default function SchedulePage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Schedule</h1>
                    <p className="text-slate-500 mt-1">Manage your availability and upcoming consultations.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2 border-slate-200" onClick={() => toast.success('Calendar synced successfully')}>
                        <CalendarIcon size={16} /> Sync Calendar
                    </Button>
                    <Button className="gap-2 shadow-sm" onClick={() => toast.info('Opening availability settings...')}>Set Availability</Button>
                </div>
            </div>

            <Card className="shadow-sm border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h3 className="font-bold text-slate-900 text-lg">October 2026</h3>
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronLeft size={16} /></Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8"><ChevronRight size={16} /></Button>
                        </div>
                    </div>
                    <div className="hidden md:flex bg-white border border-slate-200 rounded-lg p-1">
                        <button className="px-4 py-1 text-sm font-medium bg-slate-100 rounded text-slate-900 shadow-sm">Day</button>
                        <button className="px-4 py-1 text-sm font-medium text-slate-600 hover:text-slate-900">Week</button>
                        <button className="px-4 py-1 text-sm font-medium text-slate-600 hover:text-slate-900">Month</button>
                    </div>
                </div>
                <CardContent className="p-0 flex min-h-[500px]">
                    {/* Daily View Timeline Mockup */}
                    <div className="w-20 border-r border-slate-100 bg-slate-50 flex flex-col">
                        {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(time => (
                            <div key={time} className="h-24 border-b border-slate-100 text-xs text-slate-400 font-medium text-right pr-2 pt-2">
                                {time}
                            </div>
                        ))}
                    </div>
                    <div className="flex-1 relative bg-white">
                        {/* Grid Lines */}
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="h-24 border-b border-slate-50 w-full" />
                        ))}

                        {/* Appointment Blocks */}
                        <AppointmentBlock top="0px" height="96px" patient="John Doe" type="In-Person" status="Confirmed" color="bg-blue-100 border-blue-200 text-blue-800" />
                        <AppointmentBlock top="120px" height="72px" patient="Alice Johnson" type="Telemedicine" status="Pending" color="bg-orange-100 border-orange-200 text-orange-800" />
                        <AppointmentBlock top="288px" height="96px" patient="Mark Spencer" type="In-Person" status="Confirmed" color="bg-blue-100 border-blue-200 text-blue-800" />
                        <AppointmentBlock top="576px" height="96px" patient="Sara Lee" type="Telemedicine" status="Confirmed" color="bg-green-100 border-green-200 text-green-800" />

                        {/* Current Time Indicator */}
                        <div className="absolute top-[200px] left-0 w-full flex items-center z-10">
                            <div className="w-2 h-2 rounded-full bg-red-500 -ml-1 flex-shrink-0" />
                            <div className="h-px bg-red-500 w-full" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function AppointmentBlock({ top, height, patient, type, status, color }: any) {
    return (
        <div
            className={`absolute left-4 right-4 rounded-lg border-l-4 p-3 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer ${color}`}
            style={{ top, height }}
            onClick={() => toast.info(`Viewing details for ${patient}`)}
        >
            <div className="flex justify-between items-start">
                <span className="font-bold text-sm tracking-tight">{patient}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 bg-white/50 px-1.5 py-0.5 rounded">{type}</span>
            </div>
            <div className="text-xs font-medium opacity-90">
                {status}
            </div>
        </div>
    )
}
