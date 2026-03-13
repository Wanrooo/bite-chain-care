import { mockPatients, mockTreatmentBlocks } from "@/data/mockData";
import { VaccinationTracker } from "@/components/VaccinationTracker";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function Vaccinations() {
  const patientVaccinations = mockPatients.map((patient) => {
    const blocks = mockTreatmentBlocks.filter(
      (b) => b.patientId === patient.id
    );
    return { patient, doses: blocks.length, blocks };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Vaccination Tracking
        </h1>
        <p className="text-sm text-muted-foreground">
          Monitor rabies vaccination progress across all patients
        </p>
      </div>

      <div className="space-y-4">
        {patientVaccinations.map(({ patient, doses }, i) => {
          const isComplete = doses >= 5;
          return (
            <motion.div
              key={patient.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border bg-card p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {patient.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    {patient.id}
                  </p>
                </div>
                <Badge
                  className={
                    isComplete
                      ? "bg-success text-success-foreground"
                      : "bg-warning/10 text-warning border-warning/30"
                  }
                >
                  {isComplete ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" /> Complete
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> In Progress
                    </span>
                  )}
                </Badge>
              </div>
              <VaccinationTracker totalDoses={5} completedDoses={doses} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
