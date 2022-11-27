import React, { FC } from "react";

import {
    QuestionCardEmojiIcon,
    QuestionCardEmojiItem,
    QuestionCardEmojiRow,
    QuestionCardTitle,
    QuestionCardWrapper,
    QuestionCardWrapperInner,
} from "@main/modules/record/styles/recordPageStyles";
import { RecordType } from "@main/modules/record/utils/recordReducer";
import { QuestionCardType } from "@main/types/questionCardTypes";

interface QuestionCardProps extends QuestionCardType {
    current: string;
    onChange: (type: RecordType, value: string) => void;
}

const QuestionCard: FC<QuestionCardProps> = ({
    current,
    id,
    title,
    options,
    onChange,
}) => {
    const clickHandler = (value: string) =>
        current !== value ? onChange(id, value) : onChange(id, "");

    return (
        <QuestionCardWrapper>
            <QuestionCardWrapperInner $active={current.length !== 0}>
                <QuestionCardTitle>{title}</QuestionCardTitle>
                <QuestionCardEmojiRow>
                    {options &&
                        options.map((item) => {
                            return (
                                <QuestionCardEmojiItem
                                    key={item.text}
                                    $active={item.icon === current}
                                    onClick={() => clickHandler(item.icon)}
                                >
                                    <QuestionCardEmojiIcon>
                                        {item.icon}
                                    </QuestionCardEmojiIcon>
                                    <p>{item.text}</p>
                                </QuestionCardEmojiItem>
                            );
                        })}
                </QuestionCardEmojiRow>
            </QuestionCardWrapperInner>
        </QuestionCardWrapper>
    );
};

export default QuestionCard;
