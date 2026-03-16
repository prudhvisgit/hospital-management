"use client";

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Maximize2, Send, Paperclip } from 'lucide-react';
import { toast } from 'sonner';

export default function TelemedicineRoom() {
    const [muted, setMuted] = useState(false);
    const [videoOff, setVideoOff] = useState(false);

    return (
        <div className="h-full flex flex-col max-w-7xl mx-auto space-y-4">
            <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Consultation Room</h2>
                    <p className="text-sm text-slate-500">Dr. Sarah Johnson (Cardiologist)</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="animate-pulse bg-red-100 text-red-700 px-2 py-1 text-xs font-bold rounded flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        REC
                    </span>
                    <span className="bg-slate-100 px-3 py-1 font-mono text-sm rounded">12:04</span>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4">
                {/* Video Area */}
                <div className="lg:col-span-3 bg-slate-900 rounded-2xl overflow-hidden relative shadow-lg flex items-center justify-center group">
                    {/* Simulated remote video */}
                    <img
                        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop"
                        alt="Doctor Video"
                        className="w-full h-full object-cover opacity-90"
                    />

                    {/* Local Feed PIP */}
                    <div className="absolute bottom-6 right-6 w-48 aspect-video bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-700 shadow-2xl">
                        {!videoOff ? (
                            <img
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop"
                                alt="Self"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-500">
                                <VideoOff size={32} />
                            </div>
                        )}
                        {muted && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                                <MicOff size={12} />
                            </div>
                        )}
                    </div>

                    {/* Controls Overlay */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                            size="icon"
                            className={`rounded - full w - 12 h - 12 ${muted ? "bg-red-500 hover:bg-red-600 border-red-500" : "bg-slate-200/20 hover:bg-slate-200/30 text-white"} `}
                            onClick={() => {
                                setMuted(!muted);
                                toast.info(muted ? 'Microphone unmuted' : 'Microphone muted');
                            }}
                        >
                            {muted ? <MicOff /> : <Mic />}
                        </Button>
                        <Button
                            size="icon"
                            className={`rounded - full w - 12 h - 12 ${videoOff ? "bg-red-500 hover:bg-red-600" : "bg-slate-200/20 hover:bg-slate-200/30 text-white"} `}
                            onClick={() => {
                                setVideoOff(!videoOff);
                                toast.info(videoOff ? 'Video started' : 'Video stopped');
                            }}
                        >
                            {videoOff ? <VideoOff /> : <Video />}
                        </Button>
                        <Button
                            variant="destructive"
                            size="icon"
                            className="rounded-full w-14 h-14 hover:bg-red-600 shadow-lg shadow-red-500/20"
                            onClick={() => toast.error('Call Ended')}
                        >
                            <PhoneOff />
                        </Button>
                        <Button size="icon" className="rounded-full w-12 h-12 hidden sm:flex bg-slate-200/20 text-white hover:bg-slate-200/30">
                            <MessageSquare />
                        </Button>
                        <Button size="icon" className="rounded-full w-12 h-12 hidden sm:flex bg-slate-200/20 text-white hover:bg-slate-200/30">
                            <Maximize2 />
                        </Button>
                    </div>
                </div>

                {/* Sidebar (Chat / Notes) */}
                <Card className="h-full border-slate-200 shadow-sm flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                        <div className="p-4 border-b border-slate-100 font-semibold bg-slate-50/50">
                            Consultation Chat
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-xs text-slate-500">Dr. Johnson • 11:55 AM</span>
                                <div className="bg-slate-100 text-slate-800 p-2.5 rounded-2xl rounded-tl-none max-w-[90%] text-sm">
                                    Hello! How have you been feeling since our last visit?
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-xs text-slate-500">You • 11:56 AM</span>
                                <div className="bg-primary text-white p-2.5 rounded-2xl rounded-tr-none max-w-[90%] text-sm">
                                    Much better, but I'm still feeling a bit of fatigue in the evenings.
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-xs text-slate-500">Dr. Johnson • 11:58 AM</span>
                                <div className="bg-slate-100 text-slate-800 p-2.5 rounded-2xl rounded-tl-none max-w-[90%] text-sm">
                                    I see. Let's send over a quick digital prescription for some vitamin supplements. I'll upload it to your records tab now.
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-100 bg-white">
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="Type message..."
                                />
                                <Button variant="default" size="icon" className="rounded-full shrink-0">
                                    <MessageSquare size={16} />
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
