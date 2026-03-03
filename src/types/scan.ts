export interface Scan {
  id: string;
  name: string;
  type: "Greybox" | "Blackbox";
  status: "Completed" | "Running" | "Failed" | "Scheduled";
  progress: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  lastScan: string;
}