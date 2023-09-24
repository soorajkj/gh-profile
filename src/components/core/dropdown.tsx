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
        ["py-1", "pr-2", "text-color-gray-100"],
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
          <Icon icon="settings" className="h-2 w-2 fill-color-current" />
        </DropdownPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownPrimitive.RadioItem>
  );
});

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Separator> &
    VariantProps<typeof DropdownSeparatorStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <DropdownPrimitive.Separator
      ref={ref}
      className={mergeNames(DropdownSeparatorStyles({ className }))}
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

const DropdownShortcut = (
  props: React.HTMLAttributes<HTMLSpanElement> &
    VariantProps<typeof DropdownShortcutStyles>
) => {
  const { className, ...rest } = props;

  return (
    <span
      className={mergeNames(DropdownShortcutStyles({ className }))}
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
  "ghp-dropdown__content",
  "bg-color-gray-800",
  "text-color-gray-300",
  "z-50",
  "min-w-[8rem]",
  "overflow-hidden",
  "rounded-md",
  "px-2",
  "py-1",
  "border",
  "border-color-gray-600",
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
  "ghp-dropdown__item",
  "focus:text-color-gray-200",
  "focus:bg-color-gray-700/80",
  "relative",
  "flex",
  "cursor-pointer",
  "select-none",
  "items-center",
  "rounded-md",
  "px-2",
  "py-1.5",
  "font-normal",
  "outline-none",
  "transition-colors",
  "data-[disabled]:pointer-events-none",
  "data-[disabled]:opacity-50",
]);

const DropdownCheckboxItemStyles = cva([
  "ghp-dropdown__checkbox-item",
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
  "ghp-dropdown__radio-item",
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

const DropdownSeparatorStyles = cva([
  "ghp-dropdown__separator",
  "bg-color-gray-600",
  "-mx-2",
  "my-1",
  "border-b",
  "border-b-color-gray-600",
]);

const DropdownSubTriggerStyles = cva([
  "ghp-dropdown__sub-trigger",
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
  "ghp-dropdown__sub-content",
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

const DropdownShortcutStyles = cva([
  "ghp-dropdown__shortcut",
  "ml-auto",
  "text-xs",
  "tracking-widest",
  "opacity-60",
]);
