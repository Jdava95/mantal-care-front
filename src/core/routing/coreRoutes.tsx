import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const MainPage = lazy(() => import("@main/MainPage"));
const RegistrationPage = lazy(() => import("@registr/RegistrationPage"));
const WelcomePage = lazy(() => import("@welcome/WelcomePage"));

import {
    CORE_PATH,
    REGISTRATION_PATH,
    WELCOME_PAGE_PATH,
} from "./routingConstants";

export const PUBLIC_CORE_ROUTES: RouteProps[] = [
    {
        path: REGISTRATION_PATH,
        component: RegistrationPage,
    },
    {
        path: WELCOME_PAGE_PATH,
        component: WelcomePage,
        exact: true,
    },
];

export const PRIVATE_CORE_ROUTES: RouteProps[] = [
    {
        path: CORE_PATH,
        component: MainPage,
    },
];
