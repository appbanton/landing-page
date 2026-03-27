import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/* ─────────────────────────────────────────
   VARIANTS
───────────────────────────────────────── */
const buttonVariants = cva(
  // Base
  "inline-flex items-center gap-2.5 font-display font-bold rounded-[6px] transition-all duration-200 whitespace-nowrap select-none",
  {
    variants: {
      variant: {
        // Solid brand fill
        primary: [
          "bg-brand text-white border border-brand",
          "hover:opacity-85 active:scale-[0.98]",
        ],
        // Transparent with border — used in nav
        ghost: [
          "bg-transparent text-ink border border-edge",
          "hover:bg-brand-dim hover:border-brand-line",
        ],
        // Outlined brand — hero secondary CTA
        outline: [
          "bg-brand-dim text-white border border-brand-line backdrop-blur-sm",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
          "hover:bg-[rgba(230,75,54,0.22)] hover:border-[rgba(230,75,54,0.7)]",
          "hover:scale-[1.02] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_24px_rgba(230,75,54,0.25)]",
        ],
      },
      size: {
        sm: "text-[13px] tracking-[0.02em] px-5 py-[9px]",
        md: "text-[14px] px-7 py-[13px]",
        lg: "text-[16px] px-9 py-[16px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

/* ─────────────────────────────────────────
   TYPES
   Supports both <button> and <a> via href
───────────────────────────────────────── */
type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function Button(props: ButtonProps) {
  const { variant, size, className, href, children, ...rest } = props;

  const classes = twMerge(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
