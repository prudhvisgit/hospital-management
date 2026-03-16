"use client";
import { Card, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, MoreVertical, Activity, Lock } from "lucide-react";
import { toast } from "sonner";

export default function AdminPatientsPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Manage Patients</h1>
                    <p className="text-slate-500 mt-1">Review patient databases, subscriptions, and access logs.</p>
                </div>
                <Button variant="outline" className="gap-2 shadow-sm border-slate-200 text-slate-700 bg-white" onClick={() => toast.success('Exporting standard records CSV...')}>
                    <Download size={16} /> Export Records CSV
                </Button>
            </div>

            <Card className="shadow-sm border-slate-200 overflow-hidden">
                <CardHeader className="border-b border-slate-100 bg-slate-50 p-4">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex gap-2">
                            <input type="text" placeholder="Search by name, ID, or email..." className="text-sm border border-slate-200 rounded-md px-3 py-1.5 w-72" />
                            <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white">
                                <option>Plan: All</option>
                                <option>Free Tier</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                            </select>
                        </div>
                    </div>
                </CardHeader>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white text-slate-500 border-b border-slate-100 text-xs">
                            <tr>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Patient</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Registration</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Subscription</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <PatientRow name="Amanda Peterson" id="PT-2049" date="Oct 10, 2026" plan="Yearly" status="Active" />
                            <PatientRow name="Robert White" id="PT-2050" date="Oct 10, 2026" plan="Free Tier" status="Active" />
                            <PatientRow name="John Doe" id="PT-2051" date="Oct 09, 2026" plan="Monthly" status="Active" />
                            <PatientRow name="Jane Smith" id="PT-2052" date="Oct 02, 2026" plan="Quarterly" status="Suspended" />
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}

function PatientRow({ name, id, date, plan, status }: any) {
    return (
        <tr className="bg-white hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col">
                    <div className="font-bold text-slate-900">{name}</div>
                    <div className="text-xs text-slate-500 font-mono">{id}</div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-slate-600 text-sm">
                {date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${plan === 'Yearly' ? 'bg-primary border border-primary text-white' :
                    plan === 'Quarterly' ? 'bg-blue-100 text-blue-700' :
                        plan === 'Monthly' ? 'bg-green-100 text-green-700' :
                            'bg-slate-100 text-slate-600'
                    }`}>
                    {plan}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium ${status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                    {status === 'Active' ? <Activity size={12} /> : <Lock size={12} />} {status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900" onClick={() => toast.info(`Viewing ${name}'s details`)}>
                    <MoreVertical size={16} />
                </Button>
            </td>
        </tr>
    )
}
