import type { TechStage } from "@/data";

interface TechnologyStageCardProps {
  stage: TechStage;
  isPassed: boolean;
}

const NUMBER_COLORS: Record<TechStage["accent"], string> = {
  neutral: "text-neutral-400",
  orange: "text-orange-500",
  emerald: "text-emerald-500",
};

const BADGE_STYLES: Record<TechStage["accent"], string> = {
  neutral: "border-white/20 bg-white/5 text-neutral-400",
  orange: "border-orange-500/40 bg-orange-500/10 text-orange-400",
  emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
};

export default function TechnologyStageCard({
  stage,
  isPassed,
}: TechnologyStageCardProps) {
  return (
    <div
      className={`group relative rounded-xl border p-6 md:p-8 backdrop-blur-xs transition-all duration-500 ${
        isPassed
          ? "border-white/20 bg-neutral-900/60 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          : "border-white/10 bg-neutral-950/60 hover:border-white/20"
      }`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <span
          className={`font-mono text-3xl font-bold tracking-tight ${NUMBER_COLORS[stage.accent]}`}
        >
          {stage.number}
        </span>
        <span
          className={`text-[9px] font-mono tracking-widest px-2.5 py-1 rounded border uppercase ${BADGE_STYLES[stage.accent]}`}
        >
          {stage.label}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-neutral-100 transition-colors">
        {stage.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-neutral-400 font-sans">
        {stage.description}
      </p>

      <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-neutral-500 tracking-wider">
        <span>{stage.coords}</span>
        <span className="text-white/20">SYSTEM // NODE</span>
      </div>
    </div>
  );
}
