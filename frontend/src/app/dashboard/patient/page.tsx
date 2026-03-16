"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Brain, Calendar, Clock, Activity as ActivityIcon, Droplets, Thermometer, ChevronRight, Stethoscope, Phone } from "lucide-react";
import Link from 'next/link';
import { toast } from 'sonner';

export default function PatientDashboard() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Good morning, John!</h1>
                    <p className="text-slate-500 mt-1">Here is a summary of your health and upcoming appointments.</p>
                </div>
                <Button className="gap-2" size="lg">
                    <ActivityIcon size={20} />
                    Book Appointment
                </Button>
            </div>

            {/* Quick Stats/Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ActionCard
                    title="Symptom Checker"
                    description="Feeling unwell? Let AI suggest the right doctor."
                    icon={<Brain className="h-8 w-8 text-white" />}
                    color="bg-purple-500"
                    buttonText="Check Symptoms"
                    href="/dashboard/patient/doctors"
                />
                <ActionCard
                    title="Next Appointment"
                    description="Tomorrow at 10:00 AM with Dr. Smith (Cardiology)"
                    icon={<Calendar className="h-8 w-8 text-white" />}
                    color="bg-primary"
                    buttonText="View Details"
                    href="/dashboard/patient/appointments"
                />
                <ActionCard
                    title="Live Queue"
                    description="You are 3rd in line. Estimated wait: 15 mins."
                    icon={<Clock className="h-8 w-8 text-white" />}
                    color="bg-accent"
                    buttonText="Track Queue"
                    href="/dashboard/patient/appointments"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Doctors Directory Preview */}
                <Card className="lg:col-span-2 shadow-sm border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-lg font-bold">Recommended Doctors</CardTitle>
                        <Link href="/dashboard/patient/doctors" className="text-sm text-primary hover:underline font-medium">View all</Link>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <DoctorListItem
                            name="Dr. Sarah Johnson" spec="Cardiologist" status="Available" delay="No delay"
                        />
                        <DoctorListItem
                            name="Dr. Michael Chen" spec="General Physician" status="Busy" delay="Est. response: 20m"
                        />
                        <DoctorListItem
                            name="Dr. Emily Davis" spec="Dermatologist" status="Out of City" delay="Smart Assignment Active"
                        />
                    </CardContent>
                </Card>

                {/* Health Vitals / Analytics */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <ActivityIcon size={18} className="text-primary" />
                            Health Vitals
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4 pt-2">
                            <VitalRow label="Heart Rate" value="72 bpm" trend="Normal" />
                            <VitalRow label="Blood Pressure" value="120/80" trend="Normal" />
                            <VitalRow label="Weight" value="75 kg" trend="-1 kg" />
                        </div>
                        <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                            <h4 className="font-semibold text-primary-900 text-sm mb-1">Medication Reminder</h4>
                            <p className="text-xs text-primary-700">Take Amoxicillin (500mg) after lunch.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Emergency Feature */}
            <div className="flex justify-between items-center bg-red-50 p-4 sm:p-6 border border-red-100 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                <div className="relative z-10 space-y-1">
                    <h3 className="text-xl font-bold text-red-700 flex items-center gap-2">
                        <ActivityIcon className="h-6 w-6" /> Emergency Mode
                    </h3>
                    <p className="text-red-600/80 text-sm font-medium">Activate for immediate emergency response protocol.</p>
                </div>
                <Button
                    size="lg"
                    variant="destructive"
                    className="rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:-translate-y-0.5 transition-all hidden sm:flex font-bold"
                    onClick={() => {
                        toast.error('Emergency Protocol Activated!', {
                            description: 'Ambulance dispatched to your location.',
                        });
                    }}
                >
                    Activate Emergency
                </Button>
            </div>

        </div>
    );
}

function ActionCard({ title, description, icon, color, buttonText, href }: any) {
    return (
        <div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer"
            onClick={() => {
                toast.info(`Opening ${title}...`);
            }}
        >
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-150 ${color}`} />
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${color} shadow-lg`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-500 mt-1 h-10">{description}</p>
            <div className="mt-4">
                <Link href={href || "#"} className="text-sm font-semibold text-primary group-hover:underline cursor-pointer">
                    {buttonText} &rarr;
                </Link>
            </div>
        </div>
    )
}

function DoctorListItem({ name, spec, status, delay }: any) {
    const isAvailable = status === 'Available';
    return (
        <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex-shrink-0" />
                <div>
                    <h4 className="font-semibold text-sm text-slate-900">{name}</h4>
                    <p className="text-xs text-slate-500">{spec}</p>
                </div>
            </div>
            <div className="text-right">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${isAvailable ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-800'}`}>
                    {status}
                </span>
                <p className="text-[10px] text-slate-400 mt-1">{delay}</p>
            </div>
        </div>
    )
}

function VitalRow({ label, value, trend }: any) {
    return (
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 last:border-0 last:pb-0">
            <span className="text-sm text-slate-500">{label}</span>
            <div className="text-right">
                <div className="text-sm font-semibold text-slate-900">{value}</div>
                <div className="text-[10px] text-slate-400">{trend}</div>
            </div>
        </div>
    )
}
