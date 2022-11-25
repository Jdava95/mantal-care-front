import React, { FC, useState } from "react";

import {
    QuestionCardEmojiIcon,
    QuestionCardEmojiItem,
    QuestionCardEmojiRow,
    QuestionCardTitle,
    QuestionCardWrapper,
} from "@main/styles/questionCardStyles";
import { QuestionCardType } from "@main/types/questionCardTypes";

const QuestionCard: FC<QuestionCardType> = ({ title, options }) => {
    const [active, setActive] = useState<string>();

    const clickHandler = (value: string) => setActive(value);

    return (
        <QuestionCardWrapper>
            <QuestionCardTitle>{title}</QuestionCardTitle>
            <QuestionCardEmojiRow>
                {options &&
                    options.map((item) => {
                        return (
                            <QuestionCardEmojiItem
                                key={item.text}
                                $active={item.text === active}
                                onClick={() => clickHandler(item.text)}
                            >
                                <QuestionCardEmojiIcon>
                                    {item.icon}
                                </QuestionCardEmojiIcon>
                                <p>{item.text}</p>
                            </QuestionCardEmojiItem>
                        );
                    })}
            </QuestionCardEmojiRow>
        </QuestionCardWrapper>
    );
};

export default QuestionCard;
