import { Link } from "react-router-dom";
import * as Avatar from "@/components/core/avatar";
import * as Dropdown from "@/components/core/dropdown";
import { Icon } from "@/components/core/icon";
import { Toggle } from "@/components/core/toggle";
import Wrapper from "@/components/core/wrapper";

export default function Header() {
  return (
    <header className="ghp-header bg-color-black">
      <Wrapper>
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex select-none items-center outline-none">
            <Icon icon="ghpro" label="github.pro" className="h-10 w-10" />
          </Link>
          <Dropdown.DropdownRoot>
            <Dropdown.DropdownTrigger asChild>
              <Toggle asChild={false}>
                <Avatar.AvatarRoot>
                  <Avatar.AvatarFallback></Avatar.AvatarFallback>
                  <Avatar.AvatarImage src=""></Avatar.AvatarImage>
                </Avatar.AvatarRoot>
              </Toggle>
            </Dropdown.DropdownTrigger>
            <Dropdown.DropdownContent align="end" sideOffset={16}>
              <Dropdown.DropdownLabel className="flex items-center space-x-3">
                <Avatar.AvatarRoot>
                  <Avatar.AvatarImage src="" alt="user"></Avatar.AvatarImage>
                  <Avatar.AvatarFallback></Avatar.AvatarFallback>
                </Avatar.AvatarRoot>
                <div className="flex flex-col justify-start">
                  <h5 className="text-color-secondary">kjsooraj</h5>
                  <p className="text-xs">sooraj.k@strat-agile.com</p>
                </div>
              </Dropdown.DropdownLabel>
              <Dropdown.DropdownSeparator />
              <Dropdown.DropdownGroup>
                <Dropdown.DropdownItem asChild>
                  <Link to="account" className="flex items-center space-x-2">
                    <Icon icon="account" className="h-3.5 w-3.5" />
                    <span>Your profile</span>
                  </Link>
                </Dropdown.DropdownItem>
                <Dropdown.DropdownItem asChild>
                  <Link to="account" className="flex items-center space-x-2">
                    <Icon icon="settings" className="h-3.5 w-3.5" />
                    <span>Settings</span>
                  </Link>
                </Dropdown.DropdownItem>
                <Dropdown.DropdownSeparator />
                <Dropdown.DropdownItem asChild>
                  <div className="flex items-center space-x-2">
                    <Icon icon="logout" className="h-3.5 w-3.5" />
                    <span>Logout</span>
                  </div>
                </Dropdown.DropdownItem>
              </Dropdown.DropdownGroup>
            </Dropdown.DropdownContent>
          </Dropdown.DropdownRoot>
        </div>
      </Wrapper>
    </header>
  );
}
