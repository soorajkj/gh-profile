import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchUserData } from "@/redux/github.slice";
import Wrapper from "@/components/core/Wrapper";
import Contributions from "@/components/Contributions";
import UserProfile from "@/components/UserProfile";
import UserRepos from "@/components/UserRepos";

export default function Account() {
  const dispatch = useAppDispatch();
  const { id = "" } = useParams<{ id: string }>();
  const { userData, loading } = useAppSelector((state) => state.github);

  useEffect(() => {
    dispatch(fetchUserData(id));
  }, [dispatch, id]);

  return (
    <div className="ghp-page ghp-page__account">
      <Wrapper>
        <div className="flex flex-col gap-6 py-6 md:flex-row">
          {loading ? (
            "loading..."
          ) : (
            <>
              <div className="w-full md:max-w-xs">
                <UserProfile {...userData} />
              </div>
              <div className="flex-1">
                <UserRepos />
                <Contributions user={userData?.login} />
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </div>
  );
}
