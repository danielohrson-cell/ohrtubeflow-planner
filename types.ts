import { LucideIcon } from 'lucide-react';

export enum PhaseStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  SKIPPED = 'SKIPPED'
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  complexity: 'Simple' | 'Moderate' | 'Complex';
  status: PhaseStatus;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  iconName: string;
}
