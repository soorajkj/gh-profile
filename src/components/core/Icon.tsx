import React, { forwardRef } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { icons } from "@/constants/icons";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  icon: keyof typeof icons;
  label?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, label, ...rest } = props;

  const IconEle = icons[icon];

  return (
    <React.Fragment>
      <IconEle ref={ref} width={16} height={16} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </React.Fragment>
  );
});

Icon.displayName = "Icon";

export { Icon };
