import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  fluid?: boolean;
  iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, asChild, variant, fluid, iconOnly, className, ...rest } =
      props;

    const Element = !asChild ? "button" : Slot;

    return (
      <Element
        ref={ref}
        className={mergeNames(
          ButtonStyles({ variant }),
          fluid && "w-full",
          iconOnly && "px-2",
          className
        )}
        {...rest}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";

export { Button };

const ButtonStyles = cva(
  [
    "ghp-button",
    "inline-flex",
    "cursor-pointer",
    "select-none",
    "items-center",
    "justify-center",
    "px-3.5",
    "py-2",
    "rounded-md",
    "border",
    "border-color-transparent",
    "text-center",
    "font-medium",
    "leading-snug",
    "transition-all",
    "disabled:cursor-auto",
    "disabled:pointer-events-none",
    "disabled:opacity-70",
  ],
  {
    variants: {
      variant: {
        default: [
          "ghp-button--default",
          "bg-color-gray-700",
          "text-color-gray-200",
          "border-color-gray-600",
          "hover:bg-color-gray-600",
          "hover:text-color-gray-100",
          "hover:border-color-gray-400",
        ],
        primary: [
          "ghp-button--primary",
          "bg-color-green-400",
          "text-color-white",
          "hover:bg-color-green-300",
          "hover:text-color-secondary-dark",
        ],
        danger: [
          "ghp-button--danger",
          "bg-color-gray-700",
          "text-color-red-500",
          "hover:bg-color-red-600",
          "hover:text-color-white",
        ],
        outline: [
          "ghp-button--outline",
          "text-color-gray-300",
          "border-color-gray-700",
          "hover:bg-color-gray-600",
          "hover:text-color-gray-200",
        ],
        invisible: [
          "ghp-button--invisible",
          "text-color-gray-300",
          "hover:bg-color-gray-700",
          "hover:text-color-blue-400",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
