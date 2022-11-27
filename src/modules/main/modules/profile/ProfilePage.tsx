import React from "react";

import { auth } from "@src/controller";

import {
    ProfileLogOutButton,
    ProfileWrapper,
} from "@main/modules/profile/styles/profileStyles";

const ProfilePage = () => {
    const clickHandler = async () => await auth.signOut();

    return (
        <ProfileWrapper>
            <ProfileLogOutButton onClick={clickHandler}>
                log out
            </ProfileLogOutButton>
        </ProfileWrapper>
    );
};

export default ProfilePage;
