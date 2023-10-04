import { useAppSelector } from "@/redux/store";
import SearchUserResult from "./SearchUserResult";

export default function SearchUsersResult() {
  const { users } = useAppSelector((state) => state.github);

  return (
    <div className="ghp-search-users-result my-6">
      <ul className="grid flex-1 grid-cols-12 gap-6">
        {users.map((user) => (
          <li key={user.id} className="col-span-12 md:col-span-6 lg:col-span-4">
            <SearchUserResult {...user} />
          </li>
        ))}
      </ul>
    </div>
  );
}
