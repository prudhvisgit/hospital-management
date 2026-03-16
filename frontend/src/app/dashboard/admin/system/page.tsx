"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Server, ShieldAlert, Cpu, Database, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export default function AdminSystemPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">System Monitors</h1>
                    <p className="text-slate-500 mt-1">Real-time health of the CareSync infrastructure and AI services.</p>
                </div>
                <Button variant="outline" className="gap-2 shadow-sm border-slate-200 text-slate-700 bg-white" onClick={() => toast.promise(new Promise(res => setTimeout(res, 1500)), { loading: 'Refreshing system metrics...', success: 'Metrics updated successfully!', error: 'Refresh failed' })}>
                    <RefreshCw size={16} /> Refresh Metrics
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard title="API Gateway" value="99.99%" icon={<Server size={20} />} status="Operational" color="text-green-600 bg-green-100" />
                <MetricCard title="Database (MDB)" value="14ms" icon={<Database size={20} />} status="Latency" color="text-blue-600 bg-blue-100" />
                <MetricCard title="AI Cluster" value="45%" icon={<Cpu size={20} />} status="Load" color="text-purple-600 bg-purple-100" />
                <MetricCard title="Security Events" value="2" icon={<ShieldAlert size={20} />} status="Blocks/hr" color="text-orange-600 bg-orange-100" />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-6">
                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50">
                        <CardTitle className="text-lg font-bold">Recent System Logs</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100 font-mono text-xs">
                            <LogEntry time="14:32:01" level="INFO" msg="Scheduled DB backup completed successfully." />
                            <LogEntry time="14:15:22" level="WARN" msg="High memory usage detected on Web Node 03." />
                            <LogEntry time="13:58:10" level="INFO" msg="New deployment: v1.4.2 to production." />
                            <LogEntry time="13:05:00" level="ERROR" msg="Failed connection to SMS Gateway provider." />
                            <LogEntry time="12:30:11" level="INFO" msg="Admin PT-AUTH logged in from new IP." />
                        </div>
                    </CardContent>
                </Card>

                <Card className="shadow-sm border-slate-200">
                    <CardHeader className="border-b border-slate-100 bg-slate-50">
                        <CardTitle className="text-lg font-bold">Active Incidents</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col justify-center items-center text-center opacity-70 min-h-[250px]">
                        <ShieldAlert size={48} className="text-green-500 mb-4 opacity-50" />
                        <p className="text-lg font-bold text-slate-700">All Systems Normal</p>
                        <p className="text-sm text-slate-500 mt-2">There are no active incidents or outages reported at this time.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function MetricCard({ title, value, icon, status, color }: any) {
    return (
        <Card
            className="border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => toast.info(`Viewing detailed logs for ${title}`)}
        >
            <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${color}`}>
                        {icon}
                    </div>
                    <h3 className="font-semibold text-slate-700 text-sm">{title}</h3>
                </div>
                <div className="flex justify-between items-end">
                    <span className="text-2xl font-extrabold text-slate-900">{value}</span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{status}</span>
                </div>
            </CardContent>
        </Card>
    )
}

function LogEntry({ time, level, msg }: any) {
    return (
        <div className="p-3 hover:bg-slate-50 flex gap-4">
            <span className="text-slate-400 w-16">{time}</span>
            <span className={`font-bold w-12 ${level === 'INFO' ? 'text-blue-500' :
                level === 'WARN' ? 'text-orange-500' :
                    'text-red-500'
                }`}>{level}</span>
            <span className="text-slate-700 flex-1">{msg}</span>
        </div>
    )
}
