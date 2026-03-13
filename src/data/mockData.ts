export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  address: string;
  contact: string;
  nationalId: string;
  registeredAt: string;
  registeredClinic: string;
}

export interface TreatmentBlock {
  id: string;
  patientId: string;
  hash: string;
  previousHash: string;
  clinicName: string;
  doctorName: string;
  treatment: string;
  vaccineDose: number;
  timestamp: string;
  animalType: string;
  biteCategory: string;
  verified: boolean;
  notes: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  phone: string;
  doctors: number;
  patientsServed: number;
  status: "active" | "inactive";
}

export const mockPatients: Patient[] = [
  { id: "ABC-2024-0001", name: "Maria Santos", age: 34, gender: "Female", address: "123 Rizal St, Manila", contact: "+63-912-345-6789", nationalId: "PH-9876543210", registeredAt: "2024-01-15", registeredClinic: "Manila General ABC" },
  { id: "ABC-2024-0002", name: "Juan Dela Cruz", age: 28, gender: "Male", address: "456 Bonifacio Ave, Quezon City", contact: "+63-917-654-3210", nationalId: "PH-1234567890", registeredAt: "2024-02-03", registeredClinic: "QC Medical ABC" },
  { id: "ABC-2024-0003", name: "Ana Reyes", age: 45, gender: "Female", address: "789 Mabini Rd, Pasig", contact: "+63-918-111-2222", nationalId: "PH-5678901234", registeredAt: "2024-03-10", registeredClinic: "Pasig City ABC" },
  { id: "ABC-2024-0004", name: "Carlos Rivera", age: 12, gender: "Male", address: "321 Luna St, Makati", contact: "+63-919-333-4444", nationalId: "PH-3456789012", registeredAt: "2024-03-22", registeredClinic: "Manila General ABC" },
  { id: "ABC-2024-0005", name: "Elena Cruz", age: 56, gender: "Female", address: "654 Aguinaldo Blvd, Cavite", contact: "+63-920-555-6666", nationalId: "PH-7890123456", registeredAt: "2024-04-05", registeredClinic: "Cavite Provincial ABC" },
];

export const mockTreatmentBlocks: TreatmentBlock[] = [
  { id: "BLK-001", patientId: "ABC-2024-0001", hash: "a3f8c2d1e5b7", previousHash: "0000000000", clinicName: "Manila General ABC", doctorName: "Dr. Hernandez", treatment: "Wound cleaning, Anti-tetanus, RIG", vaccineDose: 1, timestamp: "2024-01-15T09:30:00", animalType: "Dog", biteCategory: "Category III", verified: true, notes: "Deep puncture wound on left leg" },
  { id: "BLK-002", patientId: "ABC-2024-0001", hash: "b4e9d3f2a6c8", previousHash: "a3f8c2d1e5b7", clinicName: "Manila General ABC", doctorName: "Dr. Hernandez", treatment: "Anti-rabies vaccine (PVRV)", vaccineDose: 2, timestamp: "2024-01-18T10:00:00", animalType: "Dog", biteCategory: "Category III", verified: true, notes: "Day 3 follow-up, wound healing well" },
  { id: "BLK-003", patientId: "ABC-2024-0001", hash: "c5f0e4a3b7d9", previousHash: "b4e9d3f2a6c8", clinicName: "QC Medical ABC", doctorName: "Dr. Ramos", treatment: "Anti-rabies vaccine (PVRV)", vaccineDose: 3, timestamp: "2024-01-22T14:00:00", animalType: "Dog", biteCategory: "Category III", verified: true, notes: "Day 7, patient visited different clinic" },
  { id: "BLK-004", patientId: "ABC-2024-0001", hash: "d6a1f5b4c8e0", previousHash: "c5f0e4a3b7d9", clinicName: "Manila General ABC", doctorName: "Dr. Hernandez", treatment: "Anti-rabies vaccine (PVRV)", vaccineDose: 4, timestamp: "2024-01-29T09:00:00", animalType: "Dog", biteCategory: "Category III", verified: true, notes: "Day 14, good recovery" },
  { id: "BLK-005", patientId: "ABC-2024-0001", hash: "e7b2a6c5d9f1", previousHash: "d6a1f5b4c8e0", clinicName: "Manila General ABC", doctorName: "Dr. Hernandez", treatment: "Anti-rabies vaccine (PVRV)", vaccineDose: 5, timestamp: "2024-02-12T11:00:00", animalType: "Dog", biteCategory: "Category III", verified: true, notes: "Day 28, final dose completed" },
  { id: "BLK-006", patientId: "ABC-2024-0002", hash: "f8c3b7d6e0a2", previousHash: "0000000000", clinicName: "QC Medical ABC", doctorName: "Dr. Ramos", treatment: "Wound cleaning, Anti-rabies vaccine", vaccineDose: 1, timestamp: "2024-02-03T08:45:00", animalType: "Cat", biteCategory: "Category II", verified: true, notes: "Scratch wound on right hand" },
  { id: "BLK-007", patientId: "ABC-2024-0002", hash: "a9d4c8e7f1b3", previousHash: "f8c3b7d6e0a2", clinicName: "QC Medical ABC", doctorName: "Dr. Ramos", treatment: "Anti-rabies vaccine (PVRV)", vaccineDose: 2, timestamp: "2024-02-06T09:00:00", animalType: "Cat", biteCategory: "Category II", verified: true, notes: "Day 3 follow-up" },
  { id: "BLK-008", patientId: "ABC-2024-0003", hash: "b0e5d9f8a2c4", previousHash: "0000000000", clinicName: "Pasig City ABC", doctorName: "Dr. Garcia", treatment: "Wound cleaning, RIG, Anti-rabies vaccine", vaccineDose: 1, timestamp: "2024-03-10T16:20:00", animalType: "Dog", biteCategory: "Category III", verified: true, notes: "Multiple bite wounds on both arms" },
  { id: "BLK-009", patientId: "ABC-2024-0004", hash: "c1f6e0a9b3d5", previousHash: "0000000000", clinicName: "Manila General ABC", doctorName: "Dr. Hernandez", treatment: "Wound cleaning, Anti-rabies vaccine", vaccineDose: 1, timestamp: "2024-03-22T13:00:00", animalType: "Dog", biteCategory: "Category II", verified: true, notes: "Minor bite on ankle, pediatric patient" },
];

export const mockClinics: Clinic[] = [
  { id: "CL-001", name: "Manila General ABC", address: "Taft Ave, Ermita", city: "Manila", lat: 14.5764, lng: 120.9866, phone: "+63-2-8524-1234", doctors: 5, patientsServed: 1243, status: "active" },
  { id: "CL-002", name: "QC Medical ABC", address: "E. Rodriguez Ave", city: "Quezon City", lat: 14.6276, lng: 121.0457, phone: "+63-2-8712-5678", doctors: 3, patientsServed: 876, status: "active" },
  { id: "CL-003", name: "Pasig City ABC", address: "Shaw Blvd, Brgy. Kapitolyo", city: "Pasig", lat: 14.5729, lng: 121.0614, phone: "+63-2-8641-9012", doctors: 4, patientsServed: 654, status: "active" },
  { id: "CL-004", name: "Makati ABC Center", address: "J.P. Rizal St, Poblacion", city: "Makati", lat: 14.5547, lng: 121.0244, phone: "+63-2-8893-3456", doctors: 2, patientsServed: 432, status: "active" },
  { id: "CL-005", name: "Cavite Provincial ABC", address: "Gov. Camerino Ave", city: "Cavite", lat: 14.2714, lng: 120.8957, phone: "+63-46-471-7890", doctors: 3, patientsServed: 567, status: "active" },
  { id: "CL-006", name: "Caloocan Health ABC", address: "A. Mabini St", city: "Caloocan", lat: 14.6534, lng: 120.9690, phone: "+63-2-8364-2345", doctors: 2, patientsServed: 321, status: "inactive" },
];

export const dashboardStats = {
  totalPatients: 1247,
  activeTreatments: 83,
  completedVaccinations: 892,
  registeredClinics: 6,
  pendingDoses: 34,
  blocksVerified: 4521,
};
