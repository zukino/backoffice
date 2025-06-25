import type { Route } from "./+types/login";
import LoginWithCard from "~/components/loginWithCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Login To Your Account" },
    { name: "description", content: "Welcome to backoffice" },
  ];
}

export default function Login() {

  return (
    <LoginWithCard />
  );
}
