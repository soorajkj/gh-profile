import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { mergeNames } from "@/lib/utils";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={mergeNames(["ghp-toggle", "select-none"], className)}
      {...rest}
    />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
