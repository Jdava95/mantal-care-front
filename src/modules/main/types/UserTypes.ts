export interface UserData {
    settings: UserSettings;
    info: UserInfo;
    answers: Array<Answers>;
    createdAt: string;
}

export type UserSettings = {
    init: boolean;
};

export type UserInfo = {
    email: string;
    uuid: string;
    name: string;
};

export type Answers = {
    activity: string;
    anxiety: string;
    dream: string;
    emotional: string;
    food: string;
    mood: string;
    note: string;
    selfReflection: string;
};
