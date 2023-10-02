import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, VariantProps } from "class-variance-authority";
import { mergeNames } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof TabsListStyles>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={mergeNames(TabsListStyles({ className }))}
    {...props}
  />
));

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof TabsTriggerStyles>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={mergeNames(TabsTriggerStyles({ className }))}
    {...props}
  />
));

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> &
    VariantProps<typeof TabsContentStyles>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={mergeNames(TabsContentStyles({ className }))}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

const TabsListStyles = cva([
  "ghp-tabs__list",
  "bg-color-transparent",
  "text-color-gray-400",
  "inline-flex",
  "h-auto",
  "items-center",
  "justify-center",
  "rounded-md",
]);

const TabsTriggerStyles = cva([
  "ghp-tabs__trigger",
  "relative",
  "inline-flex",
  "items-center",
  "justify-center",
  "whitespace-nowrap",
  "bg-color-transparent",
  "text-color-gray-200",
  "hover:bg-color-gray-800",
  "rounded",
  "px-3",
  "py-1.5",
  "mb-2",
  "text-sm",
  "font-medium",
  "transition-all",
  "after:absolute",
  "after:left-0",
  "after:-bottom-2",
  "after:w-full",
  "after:border-b-2",
  "after:border-b-color-gray-700",
  "focus-visible:bg-color-gray-800",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-color-transparent",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
  "data-[state=active]:text-color-gray-100",
  "data-[state=active]:after:border-b-color-red-400",
]);

const TabsContentStyles = cva([
  "ghp-tabs__content",
  "ring-offset-background",
  "my-4",
  "focus-visible:ring-ring",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
]);
