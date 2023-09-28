import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Outlet } from "react-router-dom";
import { mergeNames } from "@/lib/utils";
import { Separator } from "@/components/core/Separator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface LayoutProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof LayoutStyles> {}

export default function Layout(props: LayoutProps) {
  const { className } = props;

  return (
    <div className={mergeNames(LayoutStyles({ className }))}>
      <Header />
      <Separator />
      <main className="ghp-main flex-1 overflow-y-auto scrollbar-none">
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
  "h-screen",
  "w-screen",
  "flex-col",
  "overflow-hidden",
]);