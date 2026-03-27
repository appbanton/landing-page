import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type SectionLabelProps = HTMLAttributes<HTMLDivElement>;

export default function SectionLabel({
  className,
  children,
  ...props
}: SectionLabelProps) {
  return (
    <div className={twMerge("slabel", className)} {...props}>
      {children}
    </div>
  );
}
