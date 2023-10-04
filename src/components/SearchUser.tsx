import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { fetchUsers } from "@/redux/github.slice";
import { Icon } from "@/components/core/Icon";
import { Input } from "@/components/core/Input";

export default function SearchUser() {
  const [searchUser, setSearchUser] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const param = searchUser.trim();
    if (!param.length) return;
    dispatch(fetchUsers(param));
  };

  return (
    <form onSubmit={handleSubmit} className="relative hidden md:block">
      <Input
        type="text"
        value={searchUser}
        onChange={(e) => setSearchUser(e.target.value)}
        placeholder="eg: Johndoe"
        className="w-80 px-10"
      ></Input>
      <Icon
        icon="search"
        label="search"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-color-gray-600"
      ></Icon>
      <Icon
        icon="command"
        label="command"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-color-gray-600"
      ></Icon>
    </form>
  );
}
