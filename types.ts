import { LucideIcon } from 'lucide-react';

export interface FeatureProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}