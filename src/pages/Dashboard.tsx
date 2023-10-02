import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUsers } from "@/redux/github.slice";
import Wrapper from "@/components/core/Wrapper";

export default function Dashboard() {
  const [searchUser, _setSearchUser] = useState("");
  const dispatch = useAppDispatch();
  const { users: _users } = useAppSelector((state) => state.github);

  const _handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const param = searchUser.trim();
    if (param.length) dispatch(fetchUsers(param));
  };

  return (
    <div className="ghp-page ghp-page__dashboard">
      <Wrapper>{}</Wrapper>
    </div>
  );
}
