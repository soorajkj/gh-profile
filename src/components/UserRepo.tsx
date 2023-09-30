import { Link } from "react-router-dom";
import RepoLang from "@/components/RepoLang";

export default function UserRepo() {
  return (
    <div className="ghp-user-repo flex flex-col space-y-4 rounded border border-color-gray-700 px-4 py-4">
      <div className="flex items-center justify-between">
        <Link
          to=""
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-color-blue-600 underline-offset-2 hover:underline"
        >
          teamspace
        </Link>
        <span className="rounded-full border border-color-gray-700 px-2 py-0.5 text-xs leading-none">
          Public
        </span>
      </div>
      <p className="flex-1 text-xs">
        Atomic design system starter folder structure for every projects (no
        framework).
      </p>
      <RepoLang language="TypeScript" />
    </div>
  );
}
