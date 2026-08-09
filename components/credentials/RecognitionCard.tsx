import Image from "next/image";
import type { CredentialRecognition } from "@/data";

interface RecognitionCardProps {
  item: CredentialRecognition;
}

export default function RecognitionCard({ item }: RecognitionCardProps) {
  return (
    <article className="group relative flex min-h-65 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 p-6 transition-all duration-500 hover:border-white/20 hover:bg-neutral-900/50 sm:p-8">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-emerald-400/80">
            <span className="h-1 w-1 rounded-full bg-emerald-400/80" />
            {item.category}
          </span>
          {item.year && (
            <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500">
              {item.year}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold tracking-tight text-white leading-snug sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-500 line-clamp-3">
          {item.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/6 pt-4">
        {item.image ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-top opacity-70 transition-opacity duration-500 group-hover:opacity-90"
              sizes="40px"
            />
          </div>
        ) : (
          <span className="h-10 w-10 shrink-0 rounded-full border border-white/10 bg-white/5" />
        )}
        <span className="flex items-center gap-2 text-[9px] font-mono tracking-[0.18em] text-neutral-600 uppercase">
          <span className="h-1 w-1 rounded-full bg-emerald-500/50" />
          Verified
        </span>
      </div>
    </article>
  );
}
