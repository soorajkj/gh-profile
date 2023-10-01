import Wrapper from "@/components/core/Wrapper";
import Contributions from "@/components/Contributions";
import UserProfile from "@/components/UserProfile";
import UserRepos from "@/components/UserRepos";

export default function Account() {
  return (
    <div className="ghp-page ghp-page__account">
      <Wrapper>
        <div className="flex flex-col gap-6 py-6 md:flex-row">
          <div className="w-full md:max-w-xs">
            <UserProfile />
          </div>
          <div className="flex-1">
            <UserRepos />
            <Contributions />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
