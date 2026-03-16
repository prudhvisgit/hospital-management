"use client";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Search, Star, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export default function DoctorsDirectoryPage() {
    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Find a Doctor</h1>
                    <p className="text-slate-500 mt-1">Book an appointment with top specialists.</p>
                </div>
            </div>

            {/* Search & Filter */}
            <Card className="shadow-sm border-slate-200">
                <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, condition, or specialty..."
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        />
                    </div>
                    <select className="px-4 py-2 border border-slate-200 rounded-lg bg-white text-slate-700 focus:outline-none focus:border-primary">
                        <option>All Specialties</option>
                        <option>Cardiology</option>
                        <option>Dermatology</option>
                        <option>Neurology</option>
                        <option>Pediatrics</option>
                    </select>
                    <Button onClick={() => toast.success('Search results updated!')}>Search</Button>
                </CardContent>
            </Card>

            {/* Doctor Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DoctorCard
                    name="Dr. Sarah Johnson"
                    specialty="Cardiologist"
                    hospital="Main Campus"
                    rating="4.9"
                    reviews="128"
                    available="Today"
                    image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop"
                />
                <DoctorCard
                    name="Dr. Michael Chen"
                    specialty="General Physician"
                    hospital="North Clinic"
                    rating="4.8"
                    reviews="93"
                    available="Tomorrow"
                    image="https://images.unsplash.com/photo-1537368910025-702800a221d6?w=400&auto=format&fit=crop"
                />
                <DoctorCard
                    name="Dr. Emily Davis"
                    specialty="Dermatologist"
                    hospital="Main Campus"
                    rating="4.7"
                    reviews="215"
                    available="Next Week"
                    image="https://images.unsplash.com/photo-1594824432135-24b946dcb17a?w=400&auto=format&fit=crop"
                />
                <DoctorCard
                    name="Dr. James Wilson"
                    specialty="Neurologist"
                    hospital="West Wing"
                    rating="4.9"
                    reviews="310"
                    available="Tomorrow"
                    image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop"
                />
            </div>

        </div>
    );
}

function DoctorCard({ name, specialty, hospital, rating, reviews, available, image }: any) {
    return (
        <Card className="overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="aspect-[4/3] w-full bg-slate-100 overflow-hidden relative">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1 text-yellow-600">
                    <Star size={12} className="fill-yellow-500 text-yellow-500" /> {rating} ({reviews})
                </div>
            </div>
            <CardContent className="p-5">
                <h3 className="font-bold text-lg text-slate-900">{name}</h3>
                <p className="text-primary font-medium text-sm">{specialty}</p>

                <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={14} /> {hospital}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock size={14} /> Next available: <span className="font-medium text-slate-700">{available}</span>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                    <Button variant="outline" className="w-full" onClick={() => toast.info(`Viewing ${name}'s full profile`)}>Profile</Button>
                    <Button className="w-full" onClick={() => toast.success(`Started booking with ${name}`)}>Book</Button>
                </div>
            </CardContent>
        </Card>
    )
}
