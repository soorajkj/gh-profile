import { login } from "@/redux/auth.slice";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <button onClick={() => login()}>Login</button>
    </div>
  );
}
