import React from "react";

import Calendar from "@main/assets/icons/calendar.svg";
import Contacts from "@main/assets/icons/contacts.svg";
import Profile from "@main/assets/icons/profile.svg";
import Record from "@main/assets/icons/record.svg";
import NaviItem from "@main/components/NaviItem";
import {
    CONTACTS_PAGE_PATH,
    HISTORY_PAGE_PATH,
    PROFILE_PAGE_PATH,
    RECORD_PAGE_PATH,
} from "@main/routing/mainConstants";
import {
    NavigationBottomBar,
    NavigationRow,
} from "@main/styles/navigationBottomBar";

const MainBottomBar = () => {
    return (
        <NavigationBottomBar>
            <NavigationRow>
                <NaviItem
                    path={RECORD_PAGE_PATH}
                    name={"Запись"}
                    icon={<Record />}
                />
                <NaviItem
                    path={HISTORY_PAGE_PATH}
                    name={"История"}
                    icon={<Calendar />}
                />
                <NaviItem
                    path={CONTACTS_PAGE_PATH}
                    name={"Контакты"}
                    icon={<Contacts />}
                />
                <NaviItem
                    path={PROFILE_PAGE_PATH}
                    name={"Профиль"}
                    icon={<Profile />}
                />
            </NavigationRow>
        </NavigationBottomBar>
    );
};

export default MainBottomBar;
