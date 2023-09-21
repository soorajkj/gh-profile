import { Link } from "react-router-dom";
import * as Avatar from "@/components/core/avatar";
import { Icon } from "@/components/core/icon";
import { Toggle } from "@/components/core/toggle";
import Wrapper from "@/components/core/wrapper";

export default function Header() {
  return (
    <header className="ghp-header">
      <Wrapper>
        <div className="flex items-center justify-between py-2">
          <Link to={"/"} className="inline-flex items-center justify-center">
            <span className="sr-only">hgpro</span>
            <Icon icon="ghpro" className="h-10 w-10" />
          </Link>
          <Toggle asChild={false}>
            <Avatar.AvatarRoot>
              <Avatar.AvatarFallback>GU</Avatar.AvatarFallback>
              <Avatar.AvatarImage src=""></Avatar.AvatarImage>
            </Avatar.AvatarRoot>
          </Toggle>
        </div>
      </Wrapper>
    </header>
  );
}
