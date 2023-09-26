import { useState } from "react";
import axios from "axios";
import { GitHubUser } from "@/types/github";
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
        <div>Dashboard</div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </Wrapper>
    </div>
  );
}
