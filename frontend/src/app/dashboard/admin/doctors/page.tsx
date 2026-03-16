import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, MoreVertical, ShieldCheck, Mail, Phone } from "lucide-react";

export default function AdminDoctorsPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Manage Doctors</h1>
                    <p className="text-slate-500 mt-1">Add, suspend, and review verified medical professionals.</p>
                </div>
                <Button className="gap-2 shadow-sm"><ShieldCheck size={16} /> Onboard New Doctor</Button>
            </div>

            <Card className="shadow-sm border-slate-200 overflow-hidden">
                <CardHeader className="border-b border-slate-100 bg-slate-50 p-4">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <div className="flex gap-2">
                            <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white">
                                <option>All Departments</option>
                                <option>Cardiology</option>
                                <option>General Medicine</option>
                            </select>
                            <select className="text-sm border border-slate-200 rounded-md px-3 py-1.5 bg-white">
                                <option>Status: All</option>
                                <option>Active</option>
                                <option>Suspended</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Search by name, ID, or email..." className="text-sm border border-slate-200 rounded-md px-3 py-1.5 w-64" />
                    </div>
                </CardHeader>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white text-slate-500 border-b border-slate-100 text-xs">
                            <tr>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Doctor</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Patients</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <DoctorRow name="Dr. Sarah Johnson" spec="Cardiologist" email="s.johnson@caresync.com" phone="+1 234 567 8900" status="Active" count="128" />
                            <DoctorRow name="Dr. Michael Chen" spec="General Physician" email="m.chen@caresync.com" phone="+1 234 567 8901" status="Active" count="452" />
                            <DoctorRow name="Dr. Emily Davis" spec="Dermatologist" email="e.davis@caresync.com" phone="+1 234 567 8902" status="On Leave" count="215" />
                            <DoctorRow name="Dr. James Wilson" spec="Neurologist" email="j.wilson@caresync.com" phone="+1 234 567 8903" status="Suspended" count="0" />
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}

function DoctorRow({ name, spec, email, phone, status, count }: any) {
    return (
        <tr className="bg-white hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {name.split(' ')[1][0]}
                    </div>
                    <div>
                        <div className="font-bold text-slate-900">{name}</div>
                        <div className="text-xs text-slate-500">{spec}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col gap-1 text-slate-600 text-xs">
                    <span className="flex items-center gap-1.5"><Mail size={12} />{email}</span>
                    <span className="flex items-center gap-1.5"><Phone size={12} />{phone}</span>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${status === 'Active' ? 'bg-green-100 text-green-700' :
                        status === 'On Leave' ? 'bg-orange-100 text-orange-700' :
                            'bg-red-100 text-red-700'
                    }`}>
                    {status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-slate-400" /> {count}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900">
                    <MoreVertical size={16} />
                </Button>
            </td>
        </tr>
    )
}
