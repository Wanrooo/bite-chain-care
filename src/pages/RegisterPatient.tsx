import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { UserPlus, Copy } from "lucide-react";

export default function RegisterPatient() {
  const [generatedId, setGeneratedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = `ABC-2024-${String(Math.floor(Math.random() * 9000) + 1000)}`;
    setGeneratedId(id);
    toast.success("Patient registered successfully!", {
      description: `Patient ID: ${id}`,
    });
  };

  const copyId = () => {
    if (generatedId) {
      navigator.clipboard.writeText(generatedId);
      toast.info("Patient ID copied to clipboard");
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Register Patient
        </h1>
        <p className="text-sm text-muted-foreground">
          Register a new patient in the Animal Bite Center network
        </p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl border bg-card p-6"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Juan Dela Cruz" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="28" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number</Label>
            <Input id="contact" placeholder="+63-912-345-6789" required />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Rizal St, Manila" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nationalId">National ID</Label>
            <Input id="nationalId" placeholder="PH-XXXXXXXXXX" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clinic">Registering Clinic</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select clinic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="manila">Manila General ABC</SelectItem>
                <SelectItem value="qc">QC Medical ABC</SelectItem>
                <SelectItem value="pasig">Pasig City ABC</SelectItem>
                <SelectItem value="makati">Makati ABC Center</SelectItem>
                <SelectItem value="cavite">Cavite Provincial ABC</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button type="submit" className="w-full">
          <UserPlus className="mr-2 h-4 w-4" />
          Register Patient
        </Button>
      </motion.form>

      {generatedId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-success/30 bg-success/5 p-5"
        >
          <p className="text-sm font-medium text-foreground">
            Patient Registered Successfully
          </p>
          <div className="mt-2 flex items-center gap-2">
            <code className="rounded bg-muted px-3 py-1.5 font-mono text-lg font-bold text-primary">
              {generatedId}
            </code>
            <Button variant="ghost" size="icon" onClick={copyId}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Share this ID with the patient for future reference across all clinics
          </p>
        </motion.div>
      )}
    </div>
  );
}
