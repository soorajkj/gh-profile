import { ButtonHTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  block?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    asChild,
    className,
    block = false,
    variant = "default",
    ...rest
  } = props;

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(ButtonStyles({ variant, block, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
});

Button.displayName = "Button";

export default Button;

export const ButtonStyles = cva(
  [
    "ghp-button",
    "flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "px-3",
    "py-1.5",
    "rounded-md",
    "text-sm",
    "font-medium",
    "border",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-transparent",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "ghp-button--default",
        invisible: "ghp-button--invisible",
        primary: "ghp-button--primary",
        destruct: "ghp-button--destruct",
      },
      block: {
        true: "w-full",
        false: "w-auto",
      },
    },
  }
);
