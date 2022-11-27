export enum RecordType {
    MOOD = "mood",
    FOOD = "food",
    ANXIETY = "anxiety",
    DREAM = "dream",
    EMOTIONAL = "emotional",
    ACTIVITY = "activity",
    SELF_REFLECTION = "selfReflection",
}

export const RECORD_INITIAL_STATE: Record<RecordType, string> = {
    mood: "",
    food: "",
    anxiety: "",
    dream: "",
    emotional: "",
    activity: "",
    selfReflection: "",
};

interface actionType {
    type: RecordType;
    payload: string;
}

export const recordReducer = (
    state: Record<RecordType, string>,
    action: actionType
) => {
    switch (action.type) {
        case RecordType.MOOD:
            return {
                ...state,
                mood: action.payload,
            };
        case RecordType.FOOD:
            return {
                ...state,
                food: action.payload,
            };
        case RecordType.ANXIETY:
            return {
                ...state,
                anxiety: action.payload,
            };
        case RecordType.DREAM:
            return {
                ...state,
                dream: action.payload,
            };
        case RecordType.EMOTIONAL:
            return {
                ...state,
                emotional: action.payload,
            };
        case RecordType.ACTIVITY:
            return {
                ...state,
                activity: action.payload,
            };
        case RecordType.SELF_REFLECTION:
            return {
                ...state,
                selfReflection: action.payload,
            };
    }
};
