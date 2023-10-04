import { Link } from "react-router-dom";
import { GithubUserArr } from "@/types/github";
import * as Avatar from "@/components/core/Avatar";

export default function SearchUserResult(props: GithubUserArr) {
  const { login, avatar_url } = props;

  return (
    <div className="ghp-search-user-result rounded border border-color-gray-700 px-4 py-4">
      <div className="flex items-center gap-4">
        <Avatar.AvatarRoot>
          <Avatar.AvatarFallback />
          <Avatar.AvatarImage src={avatar_url} alt={login}></Avatar.AvatarImage>
        </Avatar.AvatarRoot>
        <Link
          to={login as string}
          className="cursor-pointer select-none font-semibold text-color-blue-600 underline-offset-2 hover:underline"
        >
          {login}
        </Link>
      </div>
    </div>
  );
}
