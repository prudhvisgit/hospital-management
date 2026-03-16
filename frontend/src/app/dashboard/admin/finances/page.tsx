"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DollarSign, TrendingUp, CreditCard, Download } from "lucide-react";
import { toast } from "sonner";

export default function AdminFinancesPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Financials & Revenue</h1>
                    <p className="text-slate-500 mt-1">Monitor billing, subscription payouts, and hospital income.</p>
                </div>
                <Button variant="outline" className="gap-2 shadow-sm border-slate-200 text-slate-700 bg-white" onClick={() => toast.success('Financial report is being generated...')}>
                    <Download size={16} /> Generate Report
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-slate-200 shadow-sm border-l-4 border-l-primary">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Total Revenue (MTD)</p>
                                <h3 className="text-3xl font-extrabold text-slate-900">$124,500</h3>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <DollarSign size={24} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm font-medium text-green-600 gap-1">
                            <TrendingUp size={16} /> +12.5% from last month
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Active Subscriptions</p>
                                <h3 className="text-3xl font-extrabold text-slate-900">3,492</h3>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg text-green-600">
                                <CreditCard size={24} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm font-medium text-green-600 gap-1">
                            <TrendingUp size={16} /> +4.2% from last month
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-sm border-l-4 border-l-purple-500">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 mb-1">Telemedicine Fees</p>
                                <h3 className="text-3xl font-extrabold text-slate-900">$21,400</h3>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                                <DollarSign size={24} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center text-sm font-medium text-purple-600 gap-1">
                            <TrendingUp size={16} /> +18.4% from last month
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="shadow-sm border-slate-200 overflow-hidden mt-6">
                <CardHeader className="border-b border-slate-100 bg-slate-50 p-4">
                    <CardTitle className="text-lg font-bold text-slate-900">Recent Transactions</CardTitle>
                </CardHeader>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white text-slate-500 border-b border-slate-100 text-xs">
                            <tr>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Transaction ID</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 font-medium uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <TxnRow id="TXN-984439" date="Oct 10, 2026 - 14:32" type="Subscription (Yearly)" amount="$250.00" status="Success" />
                            <TxnRow id="TXN-984438" date="Oct 10, 2026 - 12:15" type="Telemedicine Fee" amount="$50.00" status="Success" />
                            <TxnRow id="TXN-984437" date="Oct 10, 2026 - 09:45" type="Subscription (Monthly)" amount="$29.00" status="Failed" />
                            <TxnRow id="TXN-984436" date="Oct 09, 2026 - 16:20" type="Subscription (Quarterly)" amount="$75.00" status="Success" />
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}

function TxnRow({ id, date, type, amount, status }: any) {
    return (
        <tr
            className="bg-white hover:bg-slate-50 transition-colors cursor-pointer"
            onClick={() => toast.info(`Transaction ${id} details opened`)}
        >
            <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-slate-600">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-slate-500 text-xs">{date}</td>
            <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">{type}</td>
            <td className="px-6 py-4 whitespace-nowrap font-bold text-slate-900">{amount}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {status}
                </span>
            </td>
        </tr>
    )
}
