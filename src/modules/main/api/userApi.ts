import { getDoc } from "firebase/firestore";

import { getCurrentUser } from "@src/controller";

import { UserData } from "@main/types/UserTypes";

/**
 * Получить все данные пользователя
 * @param email
 */
export const getUserData = async (email: string) =>
    ((await getDoc(getCurrentUser("user-data", email))).data() as UserData) ||
    ({} as UserData);
