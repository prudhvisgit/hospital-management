"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FileText, Plus, Upload, Search, Download, Edit, UploadCloud } from "lucide-react";
import { toast } from "sonner";

export default function RecordsCenterPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Medical Records Center</h1>
                    <p className="text-slate-500 mt-1">Write prescriptions, add clinical notes, and upload test results.</p>
                </div>
                <div className="flex gap-2">
                    <Button className="gap-2 shadow-sm" onClick={() => toast.info('Opening new record form...')}>
                        <Plus size={16} /> New Record
                    </Button>
                    <Button variant="outline" className="gap-2 border-slate-200" onClick={() => toast.success('Upload dialog opened')}>
                        <Upload size={16} /> Upload Doc
                    </Button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Upload Area */}
                <Card className="border-slate-200 shadow-sm border-dashed bg-slate-50 h-[300px] flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-sm text-primary mb-4">
                        <UploadCloud size={32} />
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg">Upload Lab Report</h3>
                    <p className="text-sm text-slate-500 mt-2 mb-6">Drag and drop PDF/JPEG files here to attach them to a patient's digital record.</p>
                    <Button>Select File</Button>
                </Card>

                {/* Recent Uploads/Notes */}
                <Card className="lg:col-span-2 shadow-sm border-slate-200">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="font-bold text-slate-900">Recent Updates</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                            <input type="text" placeholder="Search records..." className="pl-8 pr-3 py-1 text-sm border border-slate-200 rounded-md focus:outline-none focus:border-primary w-48 bg-slate-50" />
                        </div>
                    </div>
                    <CardContent className="p-0">
                        <div className="divide-y divide-slate-100">
                            <RecordRow patient="John Doe" type="Prescription" date="Oct 10, 2026" details="Amoxicillin 500mg, 3x daily" docId="REC-8492" />
                            <RecordRow patient="Sara Lee" type="Clinical Note" date="Oct 09, 2026" details="Patient reports post-operative pain reduction." docId="REC-8491" />
                            <RecordRow patient="Alice Johnson" type="Blood Report" date="Oct 05, 2026" details="PDF Attachment (2.4MB)" docId="REC-8490" />
                            <RecordRow patient="Mark Spencer" type="Prescription" date="Oct 01, 2026" details="Lisinopril 10mg, 1x daily" docId="REC-8489" />
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
}

function RecordRow({ patient, type, date, details, docId }: any) {
    return (
        <div className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between">
            <div className="w-1/3">
                <div className="font-semibold text-slate-900 text-sm">{patient}</div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">{docId}</div>
            </div>
            <div className="w-1/4">
                <span className={`text-xs px-2 py-1 rounded font-medium ${type === 'Prescription' ? 'bg-blue-100 text-blue-700' :
                    type === 'Clinical Note' ? 'bg-purple-100 text-purple-700' :
                        'bg-slate-200 text-slate-700'
                    }`}>{type}</span>
            </div>
            <div className="w-1/3 text-xs text-slate-600 line-clamp-1 pr-4">
                {details}
            </div>
            <div className="w-24 text-right text-xs text-slate-400">
                {date}
            </div>
        </div>
    )
}
