import { Link } from "react-router-dom";
import { Icon } from "@/components/core/Icon";
import Wrapper from "@/components/core/Wrapper";
import UserMenu from "@/components/UserMenu";

export default function Header() {
  return (
    <header className="ghp-header sticky top-0 z-50 w-full bg-color-black">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex select-none items-center outline-none">
            <Icon icon="github" className="h-10 w-10 text-color-white"></Icon>
            <span className="sr-only">Github pro</span>
          </Link>
          <UserMenu />
        </div>
      </Wrapper>
    </header>
  );
}
