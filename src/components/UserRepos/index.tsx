import UserRepo from "@/components/UserRepo";

export default function UserRepos() {
  return (
    <div className="ghp-user-repos">
      <ul className="grid grid-cols-12 gap-4">
        {Array.from({ length: 14 })
          .fill("10")
          .map((_item, idx) => {
            return (
              <li key={idx} className="col-span-12 lg:col-span-6">
                <UserRepo />
              </li>
            );
          })}
      </ul>
    </div>
  );
}
