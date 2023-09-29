import { Link } from "react-router-dom";
import * as Avatar from "@/components/core/Avatar";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/core/Icon";

export default function UserProfile() {
  return (
    <div className="ghp-user-profile">
      <div className="mb-4 flex space-x-4 md:flex-col md:space-x-0">
        <Avatar.AvatarRoot className="h-16 w-16 md:mx-auto md:h-72 md:w-72">
          <Avatar.AvatarImage src="" alt=""></Avatar.AvatarImage>
          <Avatar.AvatarFallback></Avatar.AvatarFallback>
        </Avatar.AvatarRoot>
        <div className="py-2">
          <p className="text-lg text-color-gray-100">Sooraj Janardhanan</p>
          <p className="">soorajkj</p>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-color-gray-200">
          Remember, every bug or error in your code is an opportunity to learn
          something new and grow as a developer.
        </p>
        <Button asChild={true}>
          <Link to="">Github Profile</Link>
        </Button>
        <div className="flex items-center gap-2">
          <Icon icon="peoples" className="h-4 w-4"></Icon>
          <Link to="" className="hover:text-color-blue-500">
            <span className="font-medium text-color-gray-200">7</span> followers
          </Link>
          <span className="inline-flex items-center justify-center">
            <Icon icon="dot" className="h-2 w-2"></Icon>
          </span>
          <Link to="" className="hover:text-color-blue-500">
            <span className="font-medium text-color-gray-200">9</span> following
          </Link>
        </div>
        <ul className="flex flex-col space-y-1">
          <li className="flex items-center space-x-2">
            <Icon icon="organization" className="h-4 w-4"></Icon>
            <span className="text-color-gray-200">StratAgile</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon icon="location" className="h-4 w-4"></Icon>
            <span className="text-color-gray-200">Kochi , India</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon icon="mail" className="h-4 w-4"></Icon>
            <span className="text-color-gray-200">soorajkj46@gmail.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <Icon icon="twitter" className="h-4 w-4"></Icon>
            <span className="text-color-gray-200">@soorajkj7</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
