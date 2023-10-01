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
      <main className="ghp-main flex-1">
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
  "min-h-screen",
  "h-full",
  "w-full",
  "flex-col",
]);
