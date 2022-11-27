import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { orderBy, query } from "firebase/firestore";

import AppLoader from "@core/components/AppLoader";
import { auth, questionsCollection, setData } from "@src/controller";

import { getUserData } from "@main/api/userApi";
import QuestionCard from "@main/modules/record/conponents/QuestionCard";
import {
    RecordNote,
    RecordPageWrapper,
    RecordSaveButton,
    RecordSaveButtonWrapper,
    RecordWrapperInner,
} from "@main/modules/record/styles/recordPageStyles";
import { SaveRecordTypes } from "@main/modules/record/types/recordTypes";
import {
    RECORD_INITIAL_STATE,
    recordReducer,
    RecordType,
} from "@main/modules/record/utils/recordReducer";
import { QuestionCardType } from "@main/types/questionCardTypes";

const RecordPage = () => {
    const [user] = useAuthState(auth);
    const [state, dispatch] = useReducer(recordReducer, RECORD_INITIAL_STATE);
    const [userMoods, setUserMoods] = useState<Array<Record<string, string>>>();
    const ref = useRef<string>("");

    const [questions, loading, error] = useCollection(
        query(questionsCollection, orderBy("id", "asc"))
    );

    useEffect(() => {
        void getUserMoods();
    }, []);

    const getUserMoods = async () => {
        const userData = await getUserData(user?.email || "");
        setUserMoods(userData?.answers as Array<Record<string, string>>);
    };

    const changeHandler = (type: RecordType, value: string) =>
        dispatch({ type, payload: value });

    const saveHandler = async () => {
        const requestData: SaveRecordTypes = {
            ...state,
            note: ref.current,
        };
        try {
            if (user?.email) {
                await setData("user-data", user.email, [
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    ...userMoods,
                    requestData,
                ] as Array<Record<string, string>>);
            }
        } catch (e) {
            alert("Что-то пошло не так");
        }
    };

    const isEmpty = useMemo(
        () => Object.values(state).filter((el) => el.length > 0).length !== 0,
        [state]
    );

    if (loading) return <AppLoader />;
    if (error) return <div>...error</div>;

    return (
        <RecordPageWrapper>
            <RecordWrapperInner $active={isEmpty}>
                {questions?.docs.map((doc) => {
                    const { id, options, title } =
                        doc.data() as QuestionCardType;

                    return (
                        <QuestionCard
                            id={id}
                            title={title}
                            options={options}
                            key={title}
                            onChange={changeHandler}
                            current={state[id]}
                        />
                    );
                })}
                <RecordNote onBlur={(e) => (ref.current = e.target.value)} />
            </RecordWrapperInner>
            <RecordSaveButtonWrapper $active={isEmpty}>
                <RecordSaveButton onClick={saveHandler}>
                    Сохранить
                </RecordSaveButton>
            </RecordSaveButtonWrapper>
        </RecordPageWrapper>
    );
};

export default RecordPage;
