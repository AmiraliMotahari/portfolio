import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-neon-green animate-spin"></div>
      <div className="absolute inset-0 rounded-full border-b-2 border-l-2 border-neon-red animate-spin animate-delay-500"></div>
    </div>
  );
}
