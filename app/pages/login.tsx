import LoginWithCard2 from "~/components/loginWithCardv2";
import type { Route } from "./+types/login";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Login To Your Account" },
    { name: "description", content: "Welcome to backoffice" },
  ];
}

export default function Login() {

  return (
    <LoginWithCard2 />
  );
}
