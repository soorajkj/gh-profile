import { useState } from "react";
import { Button } from "@/components/core/Button";
import { Input } from "@/components/core/Input";
import Wrapper from "@/components/core/Wrapper";

export default function Dashboard() {
  const [searchUser, setSearchUser] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
