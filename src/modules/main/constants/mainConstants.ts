import { QuestionCardType } from "@main/types/questionCardTypes";

export const MAIN_MODULE_NAME = "main";

export const questionCards: Array<QuestionCardType> = [
    {
        title: "Настроение",
        options: [
            {
                icon: "😠",
                text: "Ужасно",
            },
            {
                icon: "☹️",
                text: "Плохо",
            },
            {
                icon: "😐",
                text: "Нейтрально",
            },
            {
                icon: "😌",
                text: "Хорошо",
            },
            {
                icon: "😊",
                text: "Отлично",
            },
        ],
    },
    {
        title: "Питание",
        options: [
            {
                icon: "🍽",
                text: "Ничего",
            },
            {
                icon: "☕",
                text: "Мало",
            },
            {
                icon: "🥪",
                text: "Средне",
            },
            {
                icon: "🥞",
                text: "Много",
            },
            {
                icon: "🎂",
                text: "Объелся",
            },
        ],
    },
    {
        title: "Уровень тревожности",
        options: [
            {
                icon: "🙂",
                text: "Спокоен",
            },
            {
                icon: "😞",
                text: "Немного",
            },
            {
                icon: "😨",
                text: "Средне",
            },
            {
                icon: "😫",
                text: "Достаточно",
            },
            {
                icon: "🥵",
                text: "Сильно",
            },
        ],
    },
    {
        title: "Как спалось",
        options: [
            {
                icon: "😶",
                text: "Без сна",
            },
            {
                icon: "🛌",
                text: "Мало",
            },
            {
                icon: "😪",
                text: "Средне",
            },
            {
                icon: "😴",
                text: "Хорошо",
            },
            {
                icon: "💤",
                text: "Много",
            },
        ],
    },
    {
        title: "Эмоциональный фон",
        options: [
            {
                icon: "👿",
                text: "Зло",
            },
            {
                icon: "😡",
                text: "Ужасно",
            },
            {
                icon: "😑",
                text: "Нейтрально",
            },
            {
                icon: "🛋",
                text: "На чиле",
            },
            {
                icon: "🌈",
                text: "Радость",
            },
        ],
    },
    {
        title: "Уровень активность",
        options: [
            {
                icon: "😴",
                text: "Спать",
            },
            {
                icon: "🛌",
                text: "Лежать",
            },
            {
                icon: "🙆‍♂",
                text: "Медитировать",
            },
            {
                icon: "🏃‍",
                text: "Гулять",
            },
            {
                icon: "🎉",
                text: "Праздновать",
            },
        ],
    },
    {
        title: "Саморефлексия",
        options: [
            {
                icon: "👎🏻",
                text: "Плохо",
            },
            {
                icon: "🤷‍️",
                text: "Не знаю",
            },
            {
                icon: "👍🏻",
                text: "Хорошо",
            },
        ],
    },
];
