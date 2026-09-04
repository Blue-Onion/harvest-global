import Image from "next/image";
import React from "react";
import Link from "next/link";

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
  member: { name, role, focus, image, linkedin, mail },
}: TeamCardProps) => {
  return (
    <div
      className="
        relative
        w-full
        max-w-[720px]
        overflow-hidden
        rounded-[22px]
        border
        border-[#e8e5dc]
        bg-[#faf9f4]
        px-8
        py-10
        shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        md:px-10
        md:py-11
      "
    >
      <div className="flex items-center gap-4 pt-5 md:gap-6">
        <div
          className="
            relative
            h-[130px]
            w-[130px]
            shrink-0
            overflow-hidden
            rounded-full
            bg-[#f0f0eb]
          "
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="130px"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 w-full">
          <h2 className="font-bold leading-tight text-[21px] tracking-[-0.02em] text-[#171717]">
            {name}
          </h2>

          <p className="mt-3 text-[21px] font-medium leading-tight text-[#4c8b68]">
            {role}
          </p>

          <p className="max-w-[390px] text-[18px] leading-[1.7] text-[#626262]">
            {focus}
          </p>

          {/* Social / Contact Icons */}
          <div className="mt-6   w-full flex items-center justify-end gap-4">
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
            
                "
                aria-label={`${name}'s LinkedIn`}
              >
                <Image
                  src="/svg/linkedInColour.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
            )}

            {mail && (
              <Link
                href={`mailto:${mail}`}
                className="
mb-0.2

                "
                aria-label={`Email ${name}`}
              >
                <Image
                  src="/svg/mailcolour.svg"
                  alt="Email"
                  width={36}
                  height={36}

                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;