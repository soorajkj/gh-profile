import { Link } from "react-router-dom";

export default function UserRepo() {
  return (
    <div className="ghp-user-repo rounded border border-color-gray-700 px-4 py-4">
      <Link
        to=""
        className="mb-4 inline-flex cursor-pointer font-semibold text-color-blue-600 underline-offset-1 hover:underline"
      >
        teamspace
      </Link>
      <p className="text-xs">
        Atomic design system starter folder structure for every projects (no
        framework).
      </p>
      <div className="mt-4 flex items-center space-x-1.5 text-xs">
        <span className="h-2.5 w-2.5 rounded-full bg-color-blue-500"></span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}
