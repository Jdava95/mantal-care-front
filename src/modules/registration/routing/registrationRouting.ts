import { RouteProps } from "react-router-dom";

import {
    CODE_FORM_PATH,
    REGISTRATION_FORM_PATH,
} from "@core/routing/routingConstants";

import CodeForm from "@registr/modules/CodeForm/CodeForm";
import RegistrationForm from "@registr/modules/RegistrationForm/RegistrationForm";

export const REGISTRATION_ROUTING: RouteProps[] = [
    {
        path: REGISTRATION_FORM_PATH,
        component: RegistrationForm,
        exact: true,
    },
    {
        path: CODE_FORM_PATH,
        component: CodeForm,
        exact: true,
    },
];
