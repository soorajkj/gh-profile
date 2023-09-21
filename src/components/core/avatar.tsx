import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
    VariantProps<typeof AvatarRootStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={mergeNames(AvatarRootStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    VariantProps<typeof AvatarImageStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={mergeNames(AvatarImageStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof AvatarFallbackStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={mergeNames(AvatarFallbackStyles({ className }))}
      {...rest}
    />
  );
});

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarRoot, AvatarImage, AvatarFallback };

const AvatarRootStyles = cva([
  "relative",
  "flex",
  "h-9",
  "w-9",
  "shrink-0",
  "overflow-hidden",
  "rounded-full",
]);

const AvatarImageStyles = cva([
  "pointer-events-none",
  "aspect-square",
  "h-full",
  "w-full",
]);

const AvatarFallbackStyles = cva([
  "bg-neutral-800",
  "flex",
  "h-full",
  "w-full",
  "items-center",
  "justify-center",
  "rounded-full",
]);