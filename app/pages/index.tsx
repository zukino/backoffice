import LangSwitch from "~/components/langSwitch";
import type { Route } from "./+types/index";
import { useTranslation } from 'react-i18next';

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
            <h1>{t('welcome')}</h1>
            <br />
            <h2>{t('greeting', { name: 'User' })}</h2>
            <br />
            <LangSwitch />
        </div>
    );
}