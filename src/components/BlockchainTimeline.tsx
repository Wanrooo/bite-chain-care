import { TreatmentBlock } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle, MapPin, User, Clock } from "lucide-react";
import { useState } from "react";

interface BlockchainTimelineProps {
  blocks: TreatmentBlock[];
}

export function BlockchainTimeline({ blocks }: BlockchainTimelineProps) {
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  return (
    <div className="relative">
      {/* Chain line */}
      <div className="absolute left-6 top-0 bottom-0 blockchain-chain" />

      <div className="space-y-4">
        {blocks.map((block, index) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-14"
          >
            {/* Node */}
            <div className="absolute left-[14px] top-4 z-10">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full border-2 ${
                  block.verified
                    ? "border-blockchain bg-blockchain text-primary-foreground"
                    : "border-warning bg-warning text-warning-foreground"
                }`}
              >
                {block.verified ? (
                  <CheckCircle className="h-3.5 w-3.5" />
                ) : (
                  <Clock className="h-3.5 w-3.5" />
                )}
              </div>
            </div>

            {/* Block card */}
            <div
              onClick={() =>
                setExpandedBlock(expandedBlock === block.id ? null : block.id)
              }
              className="cursor-pointer rounded-xl border bg-card p-4 transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-semibold text-foreground">
                      Dose {block.vaccineDose} — {block.treatment}
                    </span>
                    {block.verified && (
                      <Shield className="h-4 w-4 text-blockchain" />
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {block.clinicName}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {block.doctorName}
                    </span>
                    <span>
                      {new Date(block.timestamp).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedBlock === block.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-2 border-t pt-3">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Animal:</span>{" "}
                          <span className="font-medium text-foreground">{block.animalType}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Category:</span>{" "}
                          <span className="font-medium text-foreground">{block.biteCategory}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Notes:</span> {block.notes}
                      </p>
                      <div className="flex gap-4 rounded-lg bg-muted p-2 text-[10px] font-mono text-muted-foreground">
                        <div>
                          <span className="text-foreground/50">Hash:</span> {block.hash}
                        </div>
                        <div>
                          <span className="text-foreground/50">Prev:</span> {block.previousHash}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
