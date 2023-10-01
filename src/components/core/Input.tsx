import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof InputStyles>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={mergeNames(InputStyles({ className }))}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };

const InputStyles = cva([
  "ghp-input",
  "border-color-gray-700",
  "bg-color-transparent",
  "text-color-gray-200",
  "ring-offset-color-transparent",
  "file:bg-transparent",
  "placeholder:text-color-gray-500",
  "focus-visible:ring-0",
  "flex",
  "w-full",
  "rounded-md",
  "border",
  "px-3",
  "py-2",
  "text-sm",
  "file:border-0",
  "file:text-sm",
  "file:font-medium",
  "focus-visible:outline-none",
  "focus-visible:ring-0",
  "focus-visible:ring-offset-0",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
]);
