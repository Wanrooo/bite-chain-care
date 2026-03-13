import { useState } from "react";
import { mockPatients, mockTreatmentBlocks } from "@/data/mockData";
import { PatientProfileCard } from "@/components/PatientProfileCard";
import { BlockchainTimeline } from "@/components/BlockchainTimeline";
import { VaccinationTracker } from "@/components/VaccinationTracker";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PatientLookup() {
  const [search, setSearch] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const filtered = search.trim()
    ? mockPatients.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.id.toLowerCase().includes(search.toLowerCase()) ||
          p.contact.includes(search)
      )
    : mockPatients;

  const selectedPatient = mockPatients.find((p) => p.id === selectedPatientId);
  const patientBlocks = selectedPatientId
    ? mockTreatmentBlocks.filter((b) => b.patientId === selectedPatientId)
    : [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Patient Lookup
        </h1>
        <p className="text-sm text-muted-foreground">
          Search by name, patient ID, or phone number
        </p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search patients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Patient list */}
        <div className="lg:col-span-2 space-y-3">
          {filtered.map((patient) => {
            const doses = mockTreatmentBlocks.filter(
              (b) => b.patientId === patient.id
            ).length;
            return (
              <PatientProfileCard
                key={patient.id}
                patient={patient}
                completedDoses={doses}
                onClick={() => setSelectedPatientId(patient.id)}
              />
            );
          })}
          {filtered.length === 0 && (
            <div className="rounded-xl border bg-card p-8 text-center">
              <p className="text-sm text-muted-foreground">No patients found</p>
            </div>
          )}
        </div>

        {/* Patient detail */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {selectedPatient ? (
              <motion.div
                key={selectedPatient.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="rounded-xl border bg-card p-5">
                  <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Vaccination Progress
                  </h2>
                  <VaccinationTracker
                    totalDoses={5}
                    completedDoses={patientBlocks.length}
                  />
                </div>

                <div className="rounded-xl border bg-card p-5">
                  <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
                    Treatment Blockchain
                  </h2>
                  <BlockchainTimeline blocks={patientBlocks} />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex h-64 items-center justify-center rounded-xl border bg-card"
              >
                <p className="text-sm text-muted-foreground">
                  Select a patient to view their records
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
