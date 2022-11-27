import { RouteProps } from "react-router-dom";

import MainPage from "@main/MainPage";
import {
    CONTACTS_PAGE_PATH,
    HISTORY_PAGE_PATH,
    PROFILE_PAGE_PATH,
    RECORD_PAGE_PATH,
} from "@main/routing/mainConstants";
import RegistrationPage from "@registr/RegistrationPage";
import WelcomePage from "@welcome/WelcomePage";

import {
    CODE_PATH,
    REGISTRATION_PATH,
    WELCOME_PAGE_PATH,
} from "./routingConstants";

export const PUBLIC_CORE_ROUTES: RouteProps[] = [
    {
        path: REGISTRATION_PATH,
        component: RegistrationPage,
        exact: true,
    },
    {
        path: CODE_PATH,
        component: RegistrationPage,
        exact: true,
    },
    {
        path: WELCOME_PAGE_PATH,
        component: WelcomePage,
        exact: true,
    },
];

export const PRIVATE_CORE_ROUTES: RouteProps[] = [
    {
        path: RECORD_PAGE_PATH,
        component: MainPage,
    },
    {
        path: HISTORY_PAGE_PATH,
        component: MainPage,
    },
    {
        path: CONTACTS_PAGE_PATH,
        component: MainPage,
    },
    {
        path: PROFILE_PAGE_PATH,
        component: MainPage,
    },
];
