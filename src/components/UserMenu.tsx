import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { logout } from "@/redux/auth.slice";
import * as Avatar from "@/components/core/Avatar";
import * as Dropdown from "@/components/core/Dropdown";
import { Icon } from "@/components/core/Icon";
import { Toggle } from "@/components/core/Toggle";

export default function UserMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Dropdown.DropdownRoot>
      <Dropdown.DropdownTrigger asChild>
        <Toggle asChild={false}>
          <Avatar.AvatarRoot>
            <Avatar.AvatarFallback>
              {user?.user_metadata.name[0]}
            </Avatar.AvatarFallback>
            <Avatar.AvatarImage
              src={user?.user_metadata.avatar_url}
              alt={user?.email}
            ></Avatar.AvatarImage>
          </Avatar.AvatarRoot>
        </Toggle>
      </Dropdown.DropdownTrigger>
      <Dropdown.DropdownContent align="end" sideOffset={24}>
        <Dropdown.DropdownLabel className="flex items-center space-x-2.5">
          <Avatar.AvatarRoot>
            <Avatar.AvatarImage
              src={user?.user_metadata.avatar_url}
              alt={user?.email}
            ></Avatar.AvatarImage>
            <Avatar.AvatarFallback>
              {user?.user_metadata.name[0]}
            </Avatar.AvatarFallback>
          </Avatar.AvatarRoot>
          <div className="flex flex-col justify-start">
            <h5 className="text-color-secondary">
              {user?.user_metadata.user_name}
            </h5>
            <p className="text-xs">{user?.email} </p>
          </div>
        </Dropdown.DropdownLabel>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownItem asChild>
            <Link to="account" className="flex items-center space-x-2.5">
              <Icon icon="account" className="h-3.5 w-3.5" />
              <span>Your Profile</span>
            </Link>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem asChild>
            <Link to="account" className="flex items-center space-x-2.5">
              <Icon icon="repo" className="h-3.5 w-3.5" />
              <span>Your Repositories</span>
            </Link>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem asChild>
            <div className="flex items-center space-x-2.5">
              <Icon icon="pulse" className="h-3.5 w-3.5" />
              <span>Your Activity</span>
            </div>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem asChild>
            <Link to="account" className="flex items-center space-x-2.5">
              <Icon icon="settings" className="h-3.5 w-3.5" />
              <span>Settings</span>
            </Link>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownSeparator />
          <Dropdown.DropdownItem asChild onClick={() => dispatch(logout())}>
            <div className="flex items-center space-x-2.5">
              <Icon icon="logout" className="h-3.5 w-3.5" />
              <span>Logout</span>
            </div>
          </Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
      </Dropdown.DropdownContent>
    </Dropdown.DropdownRoot>
  );
}
