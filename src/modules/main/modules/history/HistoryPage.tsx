import React from "react";

import QuestionCard from "@main/components/QuestionCard";
import { questionCards } from "@main/constants/mainConstants";

const HistoryPage = () => {
    return (
        <>
            {questionCards.map((item) => (
                <QuestionCard
                    title={item.title}
                    options={item.options}
                    key={item.title}
                />
            ))}
        </>
    );
};

export default HistoryPage;
