"use client";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, FileText, Activity } from "lucide-react";
import { toast } from "sonner";

export default function PatientsPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Patients</h1>
                    <p className="text-slate-500 mt-1">Manage and view histories for your assigned patients.</p>
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search patient name or ID..."
                        className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-primary w-64 bg-white"
                    />
                    <Button onClick={() => toast.success('Search completed')}>Search</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PatientCard name="John Doe" id="PT-2049" status="Stable" lastVisit="2 weeks ago" visits={12} condition="Hypertension" />
                <PatientCard name="Alice Johnson" id="PT-1102" status="Needs Follow-up" lastVisit="3 days ago" visits={4} condition="Asthma" alert={true} />
                <PatientCard name="Mark Spencer" id="PT-5983" status="Stable" lastVisit="1 month ago" visits={2} condition="Annual Checkup" />
                <PatientCard name="Sara Lee" id="PT-1922" status="Critical" lastVisit="Yesterday" visits={18} condition="Post-Operation" alert={true} />
            </div>
        </div>
    );
}

function PatientCard({ name, id, status, lastVisit, visits, condition, alert }: any) {
    return (
        <Card className={`border-slate-200 shadow-sm transition-shadow hover:shadow-md ${alert ? 'border-orange-200' : ''}`}>
            <CardContent className="p-5 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                            {name.split(' ').map((n: string) => n[0]).join('')}
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900">{name}</h3>
                            <p className="text-xs text-slate-500 font-mono">{id}</p>
                        </div>
                    </div>
                    {alert && <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mt-1" />}
                </div>

                <div className="space-y-3 flex-1 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Activity size={16} className="text-slate-400" />
                        <span className="font-medium">Condition:</span> {condition}
                    </div>
                    <div className="flex justify-between items-center text-sm text-slate-600">
                        <span>Last Visit:</span>
                        <span className="font-medium text-slate-900">{lastVisit}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-slate-600">
                        <span>Total Visits:</span>
                        <span className="font-medium text-slate-900">{visits}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-slate-600">
                        <span>Status:</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${status === 'Stable' ? 'bg-green-100 text-green-700' :
                            status === 'Critical' ? 'bg-red-100 text-red-700' :
                                'bg-orange-100 text-orange-700'
                            }`}>
                            {status}
                        </span>
                    </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2">
                    <Button variant="outline" className="w-full text-xs font-semibold gap-2 border-slate-200" onClick={() => toast.info(`Opening records for ${name}`)}>
                        <FileText size={14} /> Records
                    </Button>
                    <Button variant="outline" className="w-full text-xs font-semibold gap-2 border-slate-200" onClick={() => toast.info(`Viewing profile for ${name}`)}>
                        <Users size={14} /> Profile
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
