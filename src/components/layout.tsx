import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Outlet } from "react-router-dom";
import { mergeNames } from "@/lib/utils";
import { Separator } from "@/components/core/separator";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface LayoutProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof LayoutStyles> {}

export default function Layout(props: LayoutProps) {
  const { className } = props;

  return (
    <div className={mergeNames(LayoutStyles, className)}>
      <Header />
      <Separator />
      <main className="ghp-main flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <Separator />
      <Footer />
    </div>
  );
}

const LayoutStyles = cva([
  "ghp-layout",
  "flex",
  "h-full",
  "min-h-screen",
  "w-screen",
  "flex-col",
  "overflow-hidden",
]);
