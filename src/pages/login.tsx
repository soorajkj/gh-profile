import { useAppDispatch } from "@/redux/store";
import { login } from "@/redux/auth.slice";

export default function Login() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}
