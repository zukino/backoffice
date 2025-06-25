import ToggleTheme from "~/components/togleTheme";
import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Welcome To Our App" },
        { name: "description", content: "Welcome to our app" },
    ];
}

export default function Index() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <ToggleTheme />
            <div className="w-1/4 h-1/4 flex items-center justify-center bg-white dark:bg-gray-800">

            </div>
        </div>
    )
}