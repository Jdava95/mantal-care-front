import React from "react";
import { Redirect, RouteProps } from "react-router-dom";

import { CORE_PATH } from "@core/routing/routingConstants";

import ContactsPage from "@main/modules/contacts/ContactsPage";
import HistoryPage from "@main/modules/history/HistoryPage";
import ProfilePage from "@main/modules/profile/ProfilePage";
import RecordPage from "@main/modules/record/RecordPage";
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
