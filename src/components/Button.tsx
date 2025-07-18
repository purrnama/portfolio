import GeoDiv from "../components/GeoDiv";
import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link href={href} target={"_blank"} rel="noreferrer noopener">
      <GeoDiv
        className="transition duration-100 bg-zinc-50 dark:bg-zinc-800 w-max px-4 py-2 shadow-md hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 hover:shadow-lg"
        border
      >
        <p className="font-sans">{children}</p>
      </GeoDiv>
    </Link>
  );
}
