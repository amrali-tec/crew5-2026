// app/components/ui/Crew5Icon.tsx
"use client";

interface Crew5IconProps {
  className?: string;
}

export default function Crew5Icon({ className = "" }: Crew5IconProps) {
  return (
    <div className={`inline-flex ${className}`}>
      <div className="relative group">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/20 to-accent/20 blur-xl opacity-70 animate-pulse" />
        <div className="relative z-10 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-accent/20 shadow-lg font-bold text-lg bg-gradient-to-r from-accent to-white bg-clip-text text-transparent hover:scale-105 hover:rotate-3 transition-all duration-300">
          C5
        </div>
      </div>
    </div>
  );
}
