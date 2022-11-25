import React from "react";
import { Redirect, RouteProps } from "react-router-dom";

import MainPage from "@main/MainPage";
import RegistrationPage from "@registr/RegistrationPage";
import WelcomePage from "@welcome/WelcomePage";

import {
    CORE_PATH,
    MAIN_PAGE_PATH,
    REGISTRATION_FORM_PATH,
    REGISTRATION_PATH,
    WELCOME_PAGE_PATH,
} from "./routingConstants";

export const CORE_ROUTES: RouteProps[] = [
    {
        path: CORE_PATH,
        component: () => <Redirect to={{ pathname: REGISTRATION_FORM_PATH }} />,
        exact: true,
    },
    {
        path: REGISTRATION_PATH,
        component: () => <Redirect to={{ pathname: REGISTRATION_FORM_PATH }} />,
        exact: true,
    },
    {
        path: REGISTRATION_PATH,
        component: RegistrationPage,
    },
    {
        path: WELCOME_PAGE_PATH,
        component: WelcomePage,
        exact: true,
    },
    {
        path: MAIN_PAGE_PATH,
        component: MainPage,
    },
];
