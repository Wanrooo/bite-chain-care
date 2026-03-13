import { mockClinics } from "@/data/mockData";
import { motion } from "framer-motion";
import { Building2, Phone, Users, Activity, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ClinicNetwork() {
  const activeClinics = mockClinics.filter((c) => c.status === "active").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Clinic Network
        </h1>
        <p className="text-sm text-muted-foreground">
          {activeClinics} active centers in the blockchain network
        </p>
      </div>

      {/* Map placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-xl border bg-card overflow-hidden h-64"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-info/5 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 mx-auto text-primary/40 mb-2" />
            <p className="text-sm text-muted-foreground">
              Interactive map — connect a map provider to enable
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {mockClinics
                .filter((c) => c.status === "active")
                .map((c) => (
                  <span
                    key={c.id}
                    className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                    {c.city}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Clinic cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockClinics.map((clinic, i) => (
          <motion.div
            key={clinic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border bg-card p-5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {clinic.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{clinic.city}</p>
                </div>
              </div>
              <Badge
                className={
                  clinic.status === "active"
                    ? "bg-success/10 text-success border-success/30"
                    : "bg-muted text-muted-foreground"
                }
              >
                {clinic.status}
              </Badge>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {clinic.address}
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="h-3 w-3" />
                {clinic.phone}
              </p>
              <div className="flex gap-4 pt-2 border-t">
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {clinic.doctors} doctors
                </span>
                <span className="flex items-center gap-1">
                  <Activity className="h-3 w-3" />
                  {clinic.patientsServed.toLocaleString()} patients
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
