export type QuestionOptions = {
    icon: string;
    text: string;
};

export interface QuestionCardType {
    title: string;
    options: Array<QuestionOptions>;
}
