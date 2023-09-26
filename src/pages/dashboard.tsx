import { useState } from "react";
import axios from "axios";
import { GitHubUser } from "@/types/github";
import { Button } from "@/components/core/button";
import { Input } from "@/components/core/input";
import Wrapper from "@/components/core/wrapper";

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export default function Dashboard() {
  const [searchUser, setSearchUser] = useState("");
  const [_usersData, setUsersData] = useState<GitHubUser[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = searchUser.trim();
    if (user.length) {
      const params = new URLSearchParams({
        q: user,
      });
      const response = await github.get(`/search/users?${params}`);
      setUsersData(response.data.items);
    }
  };

  return (
    <div className="ghp-dashboard">
      <Wrapper>
        <form onSubmit={(e) => handleSubmit(e)} className="my-4 flex space-x-2">
          <Input
            type="text"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            placeholder="Search users..."
          ></Input>
          <Button type="submit" variant="primary">
            Search
          </Button>
        </form>
      </Wrapper>
    </div>
  );
}
