import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(" border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-brand-primary text-white border-brand-primary",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

type ButtonProps = (
  | ({
      href?: never;
    } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({
      href: string;
    } & AnchorHTMLAttributes<HTMLAnchorElement>)
) & {
  variant: "primary" | "secondary";
  size?: "sm";
};

// props: HTMLAttributes<HTMLButtonElement> by default takes care of all attributes like {children}
// export default function Button(
//   props: {
//     variant: "primary" | "secondary";
//     size?: "sm";
//   } & ButtonHTMLAttributes<HTMLButtonElement>
// ) {
//   const { variant, className, size, ...otherProps } = props;
//   return (
//     <button
//       className={classes({
//         variant: variant, //can also be shorted to simply "variant" probs due to destructuring
//         className: className, //same
//         size: size,
//       })}
//       {...otherProps}
//     />
//   );
// }
export default function Button(props: ButtonProps) {
  const { variant, className, size, href, ...otherProps } = props;

  const buttonClasses = classes({
    variant,
    size,
    className,
  });

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...(otherProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={buttonClasses}
      {...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
