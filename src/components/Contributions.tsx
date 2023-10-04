import GitHubCalendar from "react-github-calendar";

interface ContributionsProps {
  user?: string;
}

export default function Contributions({ user = "" }: ContributionsProps) {
  return (
    <div className="ghp-contrs my-8 flex w-full justify-center rounded border border-color-gray-700 px-4 py-4">
      <GitHubCalendar username={user} fontSize={12} />
    </div>
  );
}
