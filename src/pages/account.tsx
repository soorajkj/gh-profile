import Wrapper from "@/components/core/Wrapper";
import UserProfile from "@/components/UserProfile";
import UserRepos from "@/components/UserRepos";

export default function Account() {
  return (
    <div className="ghp-account">
      <Wrapper className="py-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:max-w-xs">
            <UserProfile />
          </div>
          <div className="flex-1">
            <UserRepos />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
