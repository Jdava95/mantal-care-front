import React, { lazy } from "react";
import { Redirect, RouteProps } from "react-router-dom";

import { CORE_PATH } from "@core/routing/routingConstants";

const ContactsPage = lazy(() => import("@main/modules/contacts/ContactsPage"));
const HistoryPage = lazy(() => import("@main/modules/history/HistoryPage"));
const ProfilePage = lazy(() => import("@main/modules/profile/ProfilePage"));
const RecordPage = lazy(() => import("@main/modules/record/RecordPage"));

import {
    CONTACTS_PAGE_PATH,
    HISTORY_PAGE_PATH,
    PROFILE_PAGE_PATH,
    RECORD_PAGE_PATH,
} from "@main/routing/mainConstants";

export const MAIN_CORE_ROUTES: RouteProps[] = [
    {
        path: CORE_PATH,
        component: () => <Redirect to={{ pathname: RECORD_PAGE_PATH }} />,
        exact: true,
    },
    {
        path: PROFILE_PAGE_PATH,
        component: ProfilePage,
    },
    {
        path: HISTORY_PAGE_PATH,
        component: HistoryPage,
    },
    {
        path: RECORD_PAGE_PATH,
        component: RecordPage,
    },
    {
        path: CONTACTS_PAGE_PATH,
        component: ContactsPage,
    },
];
