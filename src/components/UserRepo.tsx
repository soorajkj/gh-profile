import { Link } from "react-router-dom";
import { Icon } from "@/components/core/Icon";
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
      <div className="flex flex-wrap items-center space-x-4 text-xs">
        <RepoLang language="TypeScript" />
        <div className="flex items-center space-x-1">
          <Icon icon="star" className="h-3.5 w-3.5"></Icon>
          <span>67</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon icon="fork" className="h-3.5 w-3.5"></Icon>
          <span>32</span>
        </div>
      </div>
    </div>
  );
}
