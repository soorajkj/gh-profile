import { Link } from "react-router-dom";
import { GithubUser } from "@/types/github";
import * as Avatar from "@/components/core/Avatar";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/core/Icon";

export default function UserProfile(props: GithubUser) {
  const {
    login,
    name,
    bio,
    html_url,
    avatar_url,
    location,
    email,
    blog,
    twitter_username,
    company,
  } = props;

  return (
    <div className="ghp-user-profile">
      <div className="mb-4 flex space-x-4 md:flex-col md:space-x-0">
        <Avatar.AvatarRoot className="h-16 w-16 md:mx-auto md:h-72 md:w-72">
          <Avatar.AvatarFallback />
          <Avatar.AvatarImage src={avatar_url} alt={login}></Avatar.AvatarImage>
        </Avatar.AvatarRoot>
        <div className="py-2">
          {name && <p className="text-lg text-color-gray-100">{name}</p>}
          {login && <p>{login}</p>}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {bio && <p className="text-color-gray-200">{bio}</p>}
        <Button asChild={true}>
          <Link
            to={html_url as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile
          </Link>
        </Button>
        <div className="flex items-center gap-2">
          <Icon icon="peoples" className="h-4 w-4"></Icon>
          <Link to="" className="space-x-1 hover:text-color-blue-500">
            <span className="font-medium text-color-gray-200">5</span>
            <span>followers</span>
          </Link>
          <span className="inline-flex items-center justify-center">
            <Icon icon="dot" className="h-2 w-2"></Icon>
          </span>
          <Link to="" className="space-x-1 hover:text-color-blue-500">
            <span className="font-medium text-color-gray-200">9</span>
            <span>following</span>
          </Link>
        </div>
        <ul className="flex flex-col space-y-1">
          {company && (
            <li className="flex items-center space-x-2">
              <Icon icon="organization" className="h-4 w-4"></Icon>
              <span className="text-color-gray-200">{company}</span>
            </li>
          )}
          {location && (
            <li className="flex items-center space-x-2">
              <Icon icon="location" className="h-4 w-4"></Icon>
              <span className="text-color-gray-200">{location}</span>
            </li>
          )}
          {email && (
            <li className="flex items-center space-x-2">
              <Icon icon="mail" className="h-4 w-4"></Icon>
              <Link
                to={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-gray-200 underline-offset-1 hover:text-color-blue-600 hover:underline"
              >
                {email}
              </Link>
            </li>
          )}
          {blog && (
            <li className="flex items-center space-x-2">
              <Icon icon="link" className="h-4 w-4"></Icon>
              <Link
                to={`http://${blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-gray-200 underline-offset-1 hover:text-color-blue-600 hover:underline"
              >
                {blog}
              </Link>
            </li>
          )}
          {twitter_username && (
            <li className="flex items-center space-x-2">
              <Icon icon="twitter" className="h-4 w-4"></Icon>
              <Link
                to={`${import.meta.env.VITE_X_URL}/twitter_username`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-color-gray-200 underline-offset-1 hover:text-color-blue-600 hover:underline"
              >
                {`@${twitter_username}`}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
