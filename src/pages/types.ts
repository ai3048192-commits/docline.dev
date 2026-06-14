// src/pages/types.ts

export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed';
  serviceType: string;
}

export interface DoctorProfile {
  name: string;
  specialty: string;
  experienceYears: number;
}