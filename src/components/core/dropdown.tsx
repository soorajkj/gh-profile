import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cva, VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";
import { Icon } from "@/components/core/icon";

const DropdownRoot = DropdownPrimitive.Root;

const DropdownTrigger = DropdownPrimitive.Trigger;

const DropdownPortal = DropdownPrimitive.Portal;

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> &
    VariantProps<typeof DropdownContentStyles>
>((props, ref) => {
  const { className, sideOffset = 4, ...rest } = props;

  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={mergeNames(DropdownContentStyles({ className }))}
        {...rest}
      />
    </DropdownPrimitive.Portal>
  );
});

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Label> & {
    inset?: boolean;
  }
>((props, ref) => {
  const { className, inset, ...rest } = props;

  return (
    <DropdownPrimitive.Label
      ref={ref}
      className={mergeNames(
        ["px-4", "py-2", "text-sm"],
        inset && "pl-8",
        className
      )}
      {...rest}
    />
  );
});

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> &
    VariantProps<typeof DropdownItemStyles> & {
      inset?: boolean;
    }
>((props, ref) => {
  const { className, inset, ...rest } = props;

  return (
    <DropdownPrimitive.Item
      ref={ref}
      className={mergeNames(DropdownItemStyles({ className }), inset && "pl-8")}
      {...rest}
    />
  );
});

const DropdownGroup = DropdownPrimitive.Group;

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.CheckboxItem> &
    VariantProps<typeof DropdownCheckboxItemStyles>
>((props, ref) => {
  const { className, children, checked, ...rest } = props;

  return (
    <DropdownPrimitive.CheckboxItem
      ref={ref}
      className={mergeNames(DropdownCheckboxItemStyles({ className }))}
      checked={checked}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownPrimitive.ItemIndicator>
          <Icon icon="settings" className="h-4 w-4" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.CheckboxItem>
  );
});

const DropdownRadioGroup = DropdownPrimitive.RadioGroup;

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.RadioItem> &
    VariantProps<typeof DropdownRadioItemStyles>
>((props, ref) => {
  const { className, children, ...rest } = props;

  return (
    <DropdownPrimitive.RadioItem
      ref={ref}
      className={mergeNames(DropdownRadioItemStyles({ className }))}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownPrimitive.ItemIndicator>
          <Icon icon="settings" className="h-2 w-2 fill-current" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.RadioItem>
  );
});

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <DropdownPrimitive.Separator
      ref={ref}
      className={mergeNames(
        ["bg-neutral-900", "-mx-1", "my-1", "h-px"],
        className
      )}
      {...rest}
    />
  );
});

const DropdownSub = DropdownPrimitive.Sub;

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger> &
    VariantProps<typeof DropdownSubTriggerStyles> & {
      inset?: boolean;
    }
>((props, ref) => {
  const { className, inset, children, ...rest } = props;

  return (
    <DropdownPrimitive.SubTrigger
      ref={ref}
      className={mergeNames(
        DropdownSubTriggerStyles({ className }),
        inset && "pl-8"
      )}
      {...rest}
    >
      {children}
      <Icon icon="settings" className="ml-auto h-4 w-4" />
    </DropdownPrimitive.SubTrigger>
  );
});

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent> &
    VariantProps<typeof DropdownSubContentStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <DropdownPrimitive.SubContent
      ref={ref}
      className={mergeNames(DropdownSubContentStyles({ className }))}
      {...rest}
    />
  );
});

const DropdownShortcut = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  const { className, ...rest } = props;

  return (
    <span
      className={mergeNames(
        ["ml-auto", "text-xs", "tracking-widest", "opacity-60"],
        className
      )}
      {...rest}
    />
  );
};

DropdownContent.displayName = DropdownPrimitive.Content.displayName;
DropdownLabel.displayName = DropdownPrimitive.Label.displayName;
DropdownItem.displayName = DropdownPrimitive.Item.displayName;
DropdownCheckboxItem.displayName = DropdownPrimitive.CheckboxItem.displayName;
DropdownRadioItem.displayName = DropdownPrimitive.RadioItem.displayName;
DropdownSeparator.displayName = DropdownPrimitive.Separator.displayName;
DropdownSubTrigger.displayName = DropdownPrimitive.SubTrigger.displayName;
DropdownSubContent.displayName = DropdownPrimitive.SubContent.displayName;
DropdownShortcut.displayName = "DropdownShortcut";

export {
  DropdownRoot,
  DropdownTrigger,
  DropdownPortal,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
  DropdownGroup,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownSeparator,
  DropdownShortcut,
};

const DropdownContentStyles = cva([
  "bg-neutral-900/50",
  "text-color-secondary",
  "z-50",
  "min-w-[8rem]",
  "overflow-hidden",
  "rounded-md",
  "border",
  "border-neutral-800/50",
  "shadow-md",
  "data-[state=open]:animate-in",
  "data-[state=closed]:animate-out",
  "data-[state=closed]:fade-out-0",
  "data-[state=open]:fade-in-0",
  "data-[state=closed]:zoom-out-95",
  "data-[state=open]:zoom-in-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "data-[side=top]:slide-in-from-bottom-2",
]);

const DropdownItemStyles = cva([
  "focus:bg-accent",
  "focus:text-accent-foreground",
  "relative",
  "flex",
  "cursor-pointer",
  "select-none",
  "items-center",
  "rounded-sm",
  "px-4",
  "py-2.5",
  "text-sm",
  "font-normal",
  "outline-none",
  "transition-colors",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-50",
]);

const DropdownCheckboxItemStyles = cva([
  "focus:bg-accent",
  "focus:text-accent-foreground",
  "relative",
  "flex",
  "cursor-default",
  "select-none",
  "items-center",
  "rounded-sm",
  "py-1.5",
  "pl-8",
  "pr-2",
  "text-sm",
  "outline-none",
  "transition-colors",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-50",
]);

const DropdownRadioItemStyles = cva([
  "focus:bg-accent",
  "focus:text-accent-foreground",
  "relative",
  "flex",
  "cursor-default",
  "select-none",
  "items-center",
  "rounded-sm",
  "py-1.5",
  "pl-8",
  "pr-2",
  "text-sm",
  "outline-none",
  "transition-colors",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-50",
]);

const DropdownSubTriggerStyles = cva([
  "focus:bg-accent",
  "data-[state=open]:bg-accent",
  "flex",
  "cursor-default",
  "select-none",
  "items-center",
  "rounded-sm",
  "px-2",
  "py-1.5",
  "text-sm",
  "outline-none",
]);

const DropdownSubContentStyles = cva([
  "bg-popover",
  "text-popover-foreground",
  "z-50",
  "min-w-[8rem]",
  "overflow-hidden",
  "rounded-md",
  "border",
  "p-1",
  "shadow-lg",
  "data-[state=open]:animate-in",
  "data-[state=closed]:animate-out",
  "data-[state=closed]:fade-out-0",
  "data-[state=open]:fade-in-0",
  "data-[state=closed]:zoom-out-95",
  "data-[state=open]:zoom-in-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "data-[side=top]:slide-in-from-bottom-2",
]);
