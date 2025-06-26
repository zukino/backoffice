import LangSwitch from "~/components/langSwitch";
import type { Route } from "./+types/index";
import { useTranslation } from 'react-i18next';
import ToggleTheme from "~/components/togleTheme";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Welcome To Our App" },
        { name: "description", content: "Welcome to our app" },
    ];
}

export default function Index() {

    const { t } = useTranslation();

    return (
        <div>
            <ToggleTheme />
            <h1 className="dark:text-white">{t('welcome')}</h1>
            <br />
            <h2 className="dark:text-white">{t('greeting', { name: 'User' })}</h2>
            <br />
            <LangSwitch />
        </div>
    );
}