import { Link } from "react-router-dom";
import { Icon } from "@/components/core/Icon";
import Wrapper from "@/components/core/Wrapper";
import SearchUser from "@/components/SearchUser";
import UserMenu from "@/components/UserMenu";

export default function Header() {
  return (
    <header className="ghp-header sticky top-0 z-50 w-full bg-color-black">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex select-none items-start outline-none">
            <Icon icon="github" className="w-20 text-color-white"></Icon>
            <span className="sr-only">Github pro</span>
          </Link>
          <div className="flex gap-4">
            <SearchUser />
            <UserMenu />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
