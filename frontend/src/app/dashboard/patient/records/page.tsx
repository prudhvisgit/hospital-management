import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, Download, Lock, Search, HeartPulse } from "lucide-react";

export default function RecordsPage() {
    const hasSubscription = false; // Mocking lack of subscription

    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Medical Records</h1>
                    <p className="text-slate-500 mt-1">Access your prescriptions, lab reports, and treatment history.</p>
                </div>
            </div>

            {!hasSubscription ? (
                <Card className="flex-1 border-slate-200 bg-slate-50 flex items-center justify-center flex-col text-center p-8 min-h-[50vh]">
                    <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-400 border-4 border-white shadow-sm">
                        <Lock size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Subscription Required</h2>
                    <p className="text-slate-500 max-w-md mb-8">
                        CareSync is a fully paperless, digital hospital. To ensure the privacy and storage of your digital medical records, access requires an active health plan subscription.
                    </p>
                    <Button size="lg" className="w-48 shadow-lg shadow-primary/20">View Plans</Button>
                </Card>
            ) : (
                <div className="space-y-6">
                    {/* Search & Filter */}
                    <div className="flex gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search records by doctor or diagnosis..."
                                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Simulated Records if sub is true */}
                    </div>
                </div>
            )}
        </div>
    );
}
