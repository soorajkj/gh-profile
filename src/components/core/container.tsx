import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    VariantProps<typeof ContainerStyles> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div className={cn(ContainerStyles({ className }))} {...rest}>
      {children}
    </div>
  );
}

const ContainerStyles = cva([
  "ghp-container",
  "static",
  "max-w-screen-xl",
  "mx-auto",
  "h-auto",
  "w-full",
  "px-4",
  "md:px-6",
]);
