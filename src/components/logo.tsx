import { cn } from "@/lib/utils";
import { Gem } from "lucide-react";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Gem className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tight">
        Amazonaid
      </span>
    </Link>
  );
}
