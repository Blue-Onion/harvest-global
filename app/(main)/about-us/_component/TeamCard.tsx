import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  image: string;
  linkedin?: string;
  mail?: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({
  member: { id, name, role, focus, image, linkedin,mail },
}: TeamCardProps) => {
  return (
    <div
      className="
        group relative
        mx-4
        flex
        h-[480px]
        w-full
        max-w-[420px]
        flex-col
        overflow-hidden
        rounded-md
        border
        border-[#235738]/15
        bg-[#E7F1EB]
        px-8
        py-8
        text-[#123C2B]
        shadow-[0_20px_60px_rgba(18,60,43,0.12)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#E46A2A]/40
        hover:shadow-[0_25px_70px_rgba(18,60,43,0.18)]
      "
    >
      {/* Technical corner accents */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-16
          w-16
          rounded-md-[2rem]
          border-l-2
          border-t-2
          border-[#E46A2A]/70
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-16
          w-16
          rounded-md-[2rem]
          border-b-2
          border-r-2
          border-[#235738]/40
        "
      />

      {/* ID / number */}
      

      {/* Image */}
      <div
        className="
          relative
          mx-auto
          h-52
          w-52
          shrink-0
          overflow-hidden
          rounded-md
          border
          border-[#235738]/20
          bg-[#235738]/10
          p-1
          transition-transform
          duration-500
          group-hover:scale-[1.03]
        "
      >
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover grayscale-[10%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            sizes="208px"
          />
        </div>

        {/* Image accent */}
        <div className="absolute bottom-3 right-3 h-3 w-3 rounded-md border-2 border-[#E7F1EB] bg-[#E46A2A]" />
      </div>

      {/* Name */}
      <h2
        className="
          mt-5
          text-center
          text-2xl
          font-semibold
          leading-tight
          tracking-tight
          text-[#123C2B]
        "
      >
        {name}
      </h2>

      {/* Role */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-md bg-[#E46A2A]" />

        <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#235738]">
          {role}
        </p>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-5 h-px w-16 bg-[#235738]/20 transition-all duration-500 group-hover:w-24 group-hover:bg-[#E46A2A]/50" />

      {/* Focus */}
      <p
        className="
          mt-5
          max-w-[340px]
          text-center
          text-sm
          leading-relaxed
          text-[#123C2B]/65
        "
      >
        {focus}
      </p>

      {/* Footer */}
      <div className="mt-auto flex w-full items-end justify-between">
      
        {/* LinkedIn */}
        {linkedin && (
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-[#235738]/20
              bg-white/50
              transition-all
              duration-300
              hover:border-[#E46A2A]
              hover:bg-[#E46A2A]
            "
          >
            <Image
              src="/svg/linkedIn.svg"
              alt="LinkedIn"
              width={19}
              height={19}
              className="transition-all duration-300 group-hover:opacity-90"
            />
          </Link>
        )}
        {mail && (
          <Link
            href={mail}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} LinkedIn`}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-[#235738]/20
              bg-white/50
              transition-all
              duration-300
              hover:border-[#E46A2A]
              hover:bg-[#E46A2A]
            "
          >
            <Image
              src="/svg/mail.svg"
              alt="LinkedIn"
              width={19}
              height={19}
              className="transition-all duration-300 group-hover:opacity-90"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamCard;