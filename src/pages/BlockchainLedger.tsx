import { mockTreatmentBlocks } from "@/data/mockData";
import { BlockchainTimeline } from "@/components/BlockchainTimeline";
import { motion } from "framer-motion";
import { Link2, Shield, Hash } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function BlockchainLedger() {
  const totalBlocks = mockTreatmentBlocks.length;
  const verifiedBlocks = mockTreatmentBlocks.filter((b) => b.verified).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Blockchain Ledger
        </h1>
        <p className="text-sm text-muted-foreground">
          Immutable record of all treatments across the network
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard title="Total Blocks" value={totalBlocks} icon={Hash} variant="primary" />
        <StatCard title="Verified" value={verifiedBlocks} icon={Shield} variant="success" />
        <StatCard title="Chain Integrity" value="100%" icon={Link2} variant="info" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-xl border bg-card p-5"
      >
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
          Full Chain
        </h2>
        <BlockchainTimeline blocks={mockTreatmentBlocks} />
      </motion.div>
    </div>
  );
}
