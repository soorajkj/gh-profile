import { login } from "@/redux/auth.slice";
import Wrapper from "@/components/core/Wrapper";

export default function Login() {
  return (
    <div className="ghp-page ghp-page__login">
      <Wrapper>
        <div className="flex min-h-screen items-center justify-center">
          <button onClick={() => login()}>Login</button>
        </div>
      </Wrapper>
    </div>
  );
}
