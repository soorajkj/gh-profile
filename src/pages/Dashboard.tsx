import Wrapper from "@/components/core/Wrapper";
import SearchUsersResult from "@/components/SearchUsersResult";

export default function Dashboard() {
  return (
    <div className="ghp-page ghp-page__dashboard">
      <Wrapper>
        <div className="py-6">
          <SearchUsersResult />
        </div>
      </Wrapper>
    </div>
  );
}
