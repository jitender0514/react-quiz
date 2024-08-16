export type Quiz = {
    uuid: string;
    Question: string,
    Options: [string, string, string, string],
    Answer: number,
    Explanation: string,
}


export type AskedQuiz =  Quiz & {
    selected: number |null,
    score: number,
    isCorrect: boolean,
}


export type ThemeOptions = string[]