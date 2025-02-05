import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("inline-flex py-1 px-3 rounded-full font-semibold", {
  variants: {
    variant: {
      default:
        "border border-white/10 bg-neutral-900 text-brand-primary uppercase",
      color: "bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950",
    },
  },
});

export default function Tag(
  props: {
    variant: "default" | "color";
  } & HTMLAttributes<HTMLDivElement>
) {
  const { variant, className, children, ...otherProps } = props;
  return (
    <div
      className={classes({
        variant,
        className,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
}
