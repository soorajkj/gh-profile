import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@/components/core/icon";
import { Input } from "@/components/core/input";
import Wrapper from "@/components/core/wrapper";
import UserActions from "@/components/user-actions";

export default function Header() {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _query = userName.trim();
  };

  return (
    <header className="ghp-header bg-color-black">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex select-none items-center outline-none">
            <Icon icon="ghpro" className="h-10 w-10" />
            <span className="sr-only">Github pro</span>
          </Link>
          <div className="flex items-center space-x-8">
            <form onSubmit={handleSubmit} className="flex items-center">
              <button type="submit" className="-mr-7 hidden md:inline-block">
                <Icon icon="search" className="h-4 w-4 text-color-gray-600" />
              </button>
              <Input
                type="text"
                placeholder="Type to search"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="pl-10"
              ></Input>
            </form>
            <UserActions />
          </div>
        </div>
      </Wrapper>
    </header>
  );
}
