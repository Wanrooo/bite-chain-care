import { StatCard } from "@/components/StatCard";
import { BlockchainTimeline } from "@/components/BlockchainTimeline";
import { VaccinationTracker } from "@/components/VaccinationTracker";
import { PatientProfileCard } from "@/components/PatientProfileCard";
import {
  dashboardStats,
  mockPatients,
  mockTreatmentBlocks,
} from "@/data/mockData";
import {
  Users,
  Activity,
  Syringe,
  Building2,
  AlertTriangle,
  Link2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const recentBlocks = mockTreatmentBlocks.slice(0, 4);
  const activePatients = mockPatients.slice(0, 3);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Dashboard
        </h1>
        <p className="text-sm text-muted-foreground">
          Animal Bite Center Network Overview
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <StatCard
          title="Total Patients"
          value={dashboardStats.totalPatients}
          icon={Users}
          variant="primary"
          trend="+12 this week"
        />
        <StatCard
          title="Active Treatments"
          value={dashboardStats.activeTreatments}
          icon={Activity}
          variant="info"
        />
        <StatCard
          title="Completed"
          value={dashboardStats.completedVaccinations}
          icon={Syringe}
          variant="success"
        />
        <StatCard
          title="Clinics"
          value={dashboardStats.registeredClinics}
          icon={Building2}
          variant="default"
        />
        <StatCard
          title="Pending Doses"
          value={dashboardStats.pendingDoses}
          icon={AlertTriangle}
          variant="warning"
        />
        <StatCard
          title="Blocks Verified"
          value={dashboardStats.blocksVerified}
          icon={Link2}
          variant="primary"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Recent blockchain activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-3 rounded-xl border bg-card p-5"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
            Recent Blockchain Activity
          </h2>
          <BlockchainTimeline blocks={recentBlocks} />
        </motion.div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vaccination sample */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border bg-card p-5"
          >
            <h2 className="font-heading text-lg font-semibold text-foreground mb-1">
              Sample Vaccination Progress
            </h2>
            <p className="text-xs text-muted-foreground mb-4">
              Maria Santos — ABC-2024-0001
            </p>
            <VaccinationTracker totalDoses={5} completedDoses={5} />
          </motion.div>

          {/* Recent patients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Recent Patients
            </h2>
            {activePatients.map((patient) => {
              const doses = mockTreatmentBlocks.filter(
                (b) => b.patientId === patient.id
              ).length;
              return (
                <PatientProfileCard
                  key={patient.id}
                  patient={patient}
                  completedDoses={doses}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
