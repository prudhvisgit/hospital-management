import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Users, DollarSign, Activity, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">System Overview</h1>
                    <p className="text-slate-500 mt-1">Monitor hospital operations, finances, and user activity.</p>
                </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <KPICard title="Total Patients" value="8,492" icon={<Users size={20} className="text-blue-500" />} trend="+124 this week" />
                <KPICard title="Active Doctors" value="142" icon={<Activity size={20} className="text-green-500" />} trend="Online: 45" />
                <KPICard title="Total Revenue" value="$42,500" icon={<DollarSign size={20} className="text-emerald-500" />} trend="+12% from last month" />
                <KPICard title="System Health" value="99.9%" icon={<AlertCircle size={20} className="text-slate-500" />} trend="All services normal" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Recent Subscriptions */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <CardTitle className="text-lg font-bold">Recent Subscriptions</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            <Row name="Alex Morgan" detail="Yearly Plan" amount="$120" time="2 mins ago" />
                            <Row name="David Chen" detail="Monthly Plan" amount="$15" time="1 hour ago" />
                            <Row name="Sophie Turner" detail="Quarterly Plan" amount="$40" time="3 hours ago" />
                        </div>
                    </CardContent>
                </Card>

                {/* Doctor Status Alerts */}
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                        <CardTitle className="text-lg font-bold text-red-600 flex items-center gap-2">
                            <AlertCircle size={18} /> Emergency / Alerts
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                        <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg flex items-start gap-3 text-sm">
                            <AlertCircle size={16} className="mt-0.5 shrink-0" />
                            <div>
                                <span className="font-bold">High Queue Alert:</span> Cardiology department wait times exceeding 45 minutes. Smart assignment active.
                            </div>
                        </div>
                        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg flex items-start gap-3 text-sm">
                            <Activity size={16} className="mt-0.5 shrink-0" />
                            <div>
                                <span className="font-bold">Doctor Status Change:</span> Dr. Emily Davis is now "Out of City". 12 appointments automatically reassigned.
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function KPICard({ title, value, icon, trend }: any) {
    return (
        <Card className="shadow-sm border-slate-200">
            <CardContent className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm font-medium text-slate-500">{title}</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
                    </div>
                    <div className="p-2 bg-slate-100 rounded-lg">{icon}</div>
                </div>
                <p className="text-xs text-slate-400 mt-4">{trend}</p>
            </CardContent>
        </Card>
    )
}

function Row({ name, detail, amount, time }: any) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div>
                <h4 className="font-semibold text-sm text-slate-900">{name}</h4>
                <p className="text-xs text-slate-500">{detail}</p>
            </div>
            <div className="text-right">
                <div className="text-sm font-semibold text-emerald-600">{amount}</div>
                <div className="text-xs text-slate-400">{time}</div>
            </div>
        </div>
    )
}
