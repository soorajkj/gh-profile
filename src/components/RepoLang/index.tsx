import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { langColors } from "@/constants/langColors";
import { mergeNames } from "@/lib/utils";

interface RepoLangProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof RepoLangStyles> {
  language: string;
}

export default function RepoLang(props: RepoLangProps) {
  const { language, className, ...rest } = props;

  return (
    <div
      aria-label="repo-lang"
      className={mergeNames(RepoLangStyles({ className }))}
      {...rest}
    >
      <span
        style={{ backgroundColor: langColors[language] || undefined }}
        className="h-2.5 w-2.5 rounded-full"
      />
      <p>{language}</p>
    </div>
  );
}

const RepoLangStyles = cva([
  "flex",
  "items-center",
  "space-x-1.5",
  "text-xs",
  "leading-none",
]);
