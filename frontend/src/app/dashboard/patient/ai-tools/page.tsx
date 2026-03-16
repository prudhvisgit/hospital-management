"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Brain, Stethoscope, FileText, MessageSquare, Send, Plus, Sparkles, AlertTriangle, ChevronRight, Activity } from "lucide-react";
import { toast } from 'sonner';

export default function AIHealthTools() {
    const [activeTool, setActiveTool] = useState('chatbot');

    return (
        <div className="space-y-6 max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                        <Brain className="text-primary h-8 w-8" />
                        AI Health Assistant
                    </h1>
                    <p className="text-slate-500 mt-1">Advanced AI-powered diagnostics, summaries, and health guidance.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-[600px]">
                {/* Sidebar Controls */}
                <div className="lg:col-span-1 space-y-4">
                    <ToolButton
                        active={activeTool === 'chatbot'}
                        onClick={() => setActiveTool('chatbot')}
                        icon={<MessageSquare size={20} />}
                        title="Health Chatbot"
                        desc="24/7 Health guidance"
                    />
                    <ToolButton
                        active={activeTool === 'symptoms'}
                        onClick={() => setActiveTool('symptoms')}
                        icon={<Stethoscope size={20} />}
                        title="Symptom Checker"
                        desc="Preliminary analysis"
                    />
                    <ToolButton
                        active={activeTool === 'summarizer'}
                        onClick={() => setActiveTool('summarizer')}
                        icon={<FileText size={20} />}
                        title="Report Summarizer"
                        desc="Simplify medical jargon"
                    />

                    <Card className="bg-primary/5 border-primary/20 mt-8">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2 text-primary font-bold mb-2">
                                <Sparkles size={16} />
                                <span className="text-xs uppercase tracking-wider">AI Insight</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Our AI models are trained on verified medical data but should not replace professional medical advice.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Tool Interface */}
                <div className="lg:col-span-3 h-full">
                    {activeTool === 'chatbot' && <ChatbotInterface />}
                    {activeTool === 'symptoms' && <SymptomInterface />}
                    {activeTool === 'summarizer' && <SummarizerInterface />}
                </div>
            </div>
        </div>
    );
}

function ToolButton({ active, onClick, icon, title, desc }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${active
                    ? 'bg-white border-primary shadow-sm ring-1 ring-primary/20'
                    : 'bg-slate-50 border-transparent hover:bg-white hover:border-slate-200'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${active ? 'bg-primary text-white' : 'bg-white text-slate-400 border border-slate-100'}`}>
                    {icon}
                </div>
                <div>
                    <h3 className={`font-bold text-sm ${active ? 'text-slate-900' : 'text-slate-600'}`}>{title}</h3>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{desc}</p>
                </div>
                {active && <ChevronRight className="ml-auto text-primary" size={16} />}
            </div>
        </button>
    )
}

function ChatbotInterface() {
    return (
        <Card className="h-full flex flex-col border-slate-200 shadow-sm overflow-hidden min-h-[600px]">
            <CardHeader className="border-b border-slate-100 bg-white p-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Brain size={24} />
                    </div>
                    <div>
                        <CardTitle className="text-base font-bold">CareSync AI Bot</CardTitle>
                        <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-bold uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Active & Ready
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
                <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-sm text-slate-700">
                        Hello! I am your AI health assistant. How can I help you today? I can answer health questions, explain medical terms, or guide you to the right specialist.
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-md">
                        What are the early signs of high blood pressure?
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-sm text-slate-700 space-y-2">
                        <p>Early signs of high blood pressure (hypertension) often aren't noticeable, which is why it's called the "silent killer." However, some symptoms can include:</p>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Severe headaches</li>
                            <li>Nosebleeds</li>
                            <li>Fatigue or confusion</li>
                            <li>Vision problems</li>
                            <li>Chest pain</li>
                        </ul>
                        <p className="font-semibold text-xs text-slate-500 mt-2">Would you like to book a blood pressure screening with one of our cardiologists?</p>
                    </div>
                </div>
            </CardContent>
            <div className="p-4 bg-white border-t border-slate-100">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your health question..."
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <Button
                        size="icon"
                        className="rounded-xl h-10 w-10 shadow-lg shadow-primary/20"
                        onClick={() => toast.success('AI thinking...')}
                    >
                        <Send size={18} />
                    </Button>
                </div>
            </div>
        </Card>
    );
}

function SymptomInterface() {
    return (
        <Card className="h-full border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[600px]">
            <CardHeader className="border-b border-slate-100 bg-white p-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Stethoscope size={24} />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-bold">Interactive Symptom Checker</CardTitle>
                        <p className="text-sm text-slate-500">Describe what you're feeling for an AI-driven preliminary assessment.</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8 flex-1">
                <div className="space-y-4">
                    <h3 className="font-bold text-slate-900">What are your main symptoms?</h3>
                    <textarea
                        placeholder="e.g. I have a persistent dry cough and mild fever that started 2 days ago..."
                        className="w-full h-32 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-sm">Duration</h3>
                        <div className="flex flex-wrap gap-2">
                            {['< 24 hrs', '1-3 Days', '3-7 Days', '1 Week+'].map(d => (
                                <button key={d} className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:border-primary hover:text-primary transition-colors">{d}</button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-bold text-slate-900 text-sm">Severity</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Mild', 'Moderate', 'Severe'].map(s => (
                                <button key={s} className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium hover:border-primary hover:text-primary transition-colors">{s}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-start gap-4">
                    <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                        <AlertTriangle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-orange-800 text-sm">Emergency Check</h4>
                        <p className="text-orange-700/80 text-xs mt-0.5">If you are experiencing chest pain, difficulty breathing, or severe bleeding, please use the Emergency Mode button immediately.</p>
                    </div>
                </div>

                <div className="mt-auto">
                    <Button
                        size="lg"
                        className="w-full rounded-2xl shadow-xl shadow-primary/20 h-14 text-lg font-bold gap-2"
                        onClick={() => toast.promise(new Promise(res => setTimeout(res, 2000)), {
                            loading: 'Analyzing symptoms...',
                            success: 'Analysis complete! See results below.',
                            error: 'Try again.'
                        })}
                    >
                        Generate Assessment <Sparkles size={20} />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

function SummarizerInterface() {
    return (
        <Card className="h-full border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-[600px]">
            <CardHeader className="border-b border-slate-100 bg-white p-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <FileText size={24} />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-bold">Medical Report Summarizer</CardTitle>
                        <p className="text-sm text-slate-500">Upload complex reports and get a simple, easy-to-read summary.</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-8 space-y-8 flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-md border-2 border-dashed border-slate-200 rounded-3xl p-12 bg-slate-50/50 hover:bg-white hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-20 w-20 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-300 group-hover:text-primary transition-colors">
                            <Plus size={40} />
                        </div>
                        <div>
                            <p className="text-lg font-bold text-slate-700">Upload Medical Document</p>
                            <p className="text-sm text-slate-400 mt-1">PDF, JPG, or PNG (Max 10MB)</p>
                        </div>
                        <Button variant="outline" className="mt-2 border-slate-200">Select File</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-12">
                    <Feature small icon={<Activity size={16} />} title="Clear Jargon" />
                    <Feature small icon={<Sparkles size={16} />} title="Key Findings" />
                    <Feature small icon={<Brain size={16} />} title="Next Steps" />
                </div>
            </CardContent>
        </Card>
    );
}

function Feature({ icon, title, small }: any) {
    return (
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
            <div className="text-primary">{icon}</div>
            <span className="text-sm font-bold text-slate-700">{title}</span>
        </div>
    )
}
