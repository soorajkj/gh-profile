import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

interface WrapperProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof WrapperStyles> {
  children: React.ReactNode;
}

export default function Wrapper(props: WrapperProps) {
  const { children, variant = "small", className, ...rest } = props;

  return (
    <div
      className={mergeNames(WrapperStyles({ variant, className }))}
      {...rest}
    >
      {children}
    </div>
  );
}

const WrapperStyles = cva(["ghp-wrapper", "mx-auto", "w-full", "", "px-4"], {
  variants: {
    variant: {
      small: "!max-w-screen-xl",
      big: "!max-w-screen-2xl",
    },
  },
});
