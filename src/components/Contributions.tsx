import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <div className="ghp-contrs my-8 flex w-full justify-center rounded border border-color-gray-700 px-4 py-4">
      <GitHubCalendar username="soorajkj" fontSize={12} />
    </div>
  );
}
