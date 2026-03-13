import { motion } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";

interface VaccinationTrackerProps {
  totalDoses: number;
  completedDoses: number;
  doseLabels?: string[];
}

export function VaccinationTracker({
  totalDoses = 5,
  completedDoses,
  doseLabels,
}: VaccinationTrackerProps) {
  const labels = doseLabels || Array.from({ length: totalDoses }, (_, i) => `Day ${[0, 3, 7, 14, 28][i] ?? i}`);
  const progress = (completedDoses / totalDoses) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="relative mb-6">
        <div className="h-2 w-full rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-2 rounded-full bg-primary"
          />
        </div>
        <div className="mt-1 flex justify-between">
          <span className="text-xs text-muted-foreground">Start</span>
          <span className="text-xs font-medium text-primary">
            {completedDoses}/{totalDoses} complete
          </span>
        </div>
      </div>

      {/* Dose steps */}
      <div className="flex justify-between">
        {labels.map((label, i) => {
          const isCompleted = i < completedDoses;
          const isCurrent = i === completedDoses;
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                  isCompleted
                    ? "bg-primary text-primary-foreground"
                    : isCurrent
                    ? "border-2 border-warning bg-warning/10 text-warning animate-pulse-glow"
                    : "border border-border bg-muted text-muted-foreground"
                }`}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : i + 1}
              </motion.div>
              <span className="text-[10px] text-muted-foreground text-center max-w-[50px]">
                {label}
              </span>
              {isCurrent && (
                <span className="flex items-center gap-0.5 text-[10px] text-warning font-medium">
                  <AlertCircle className="h-3 w-3" /> Due
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
