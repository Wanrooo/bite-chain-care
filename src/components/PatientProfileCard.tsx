import { Patient } from "@/data/mockData";
import { User, Phone, MapPin, Calendar, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PatientProfileCardProps {
  patient: Patient;
  completedDoses: number;
  totalDoses?: number;
  onClick?: () => void;
}

export function PatientProfileCard({
  patient,
  completedDoses,
  totalDoses = 5,
  onClick,
}: PatientProfileCardProps) {
  const isComplete = completedDoses >= totalDoses;

  return (
    <div
      onClick={onClick}
      className={`rounded-xl border bg-card p-4 transition-all ${
        onClick ? "cursor-pointer hover:shadow-md hover:border-primary/30" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-heading font-bold text-sm">
            {patient.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              {patient.name}
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              {patient.id}
            </p>
          </div>
        </div>
        <Badge
          variant={isComplete ? "default" : "secondary"}
          className={
            isComplete
              ? "bg-success text-success-foreground"
              : "bg-warning/10 text-warning border-warning/30"
          }
        >
          {isComplete ? "Complete" : `${completedDoses}/${totalDoses} doses`}
        </Badge>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <User className="h-3 w-3" />
          {patient.age}y, {patient.gender}
        </span>
        <span className="flex items-center gap-1.5">
          <Phone className="h-3 w-3" />
          {patient.contact}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3" />
          {patient.address}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3 w-3" />
          {new Date(patient.registeredAt).toLocaleDateString()}
        </span>
        <span className="col-span-2 flex items-center gap-1.5">
          <Building2 className="h-3 w-3" />
          {patient.registeredClinic}
        </span>
      </div>
    </div>
  );
}
