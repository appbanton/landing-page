import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  src?: string;
  alt: string;
  /** Shown only when there is no real image yet. */
  brief?: { label: string; text: string };
  tint?: [string, string];
  sizes: string;
  priority?: boolean;
  className?: string;
  children?: ReactNode;
};

/** Photo slot: tinted gradient underneath, image on top, caption overlay. */
export default function Photo({
  src,
  alt,
  brief,
  tint = ["#4a443b", "#161412"],
  sizes,
  priority,
  className = "",
  children,
}: Props) {
  const style = { "--a": tint[0], "--b": tint[1] } as CSSProperties;
  return (
    <figure
      className={`ph ${src ? "has-img" : ""} ${className}`}
      style={style}
      {...(src ? {} : { role: "img", "aria-label": alt })}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      )}
      {!src && brief && (
        <span className="brief">
          <b>{brief.label}</b>
          {brief.text}
        </span>
      )}
      {children}
    </figure>
  );
}
