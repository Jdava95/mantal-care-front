import { User } from "firebase/auth";
import { getDoc } from "firebase/firestore";

import { getCurrentUserRecords } from "@src/controller";

/**
 * Получить все записи настроения пользователя
 * @param email
 */
export const getUserData = async (email: string) =>
    (await getDoc(getCurrentUserRecords("user-data", email))).data();
