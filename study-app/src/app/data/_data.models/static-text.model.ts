
export interface ExamChoice {
    title: string;
    chapters: number[]
}

export interface StaticText {
    homeTitle: string
    homeMessage: string
    aboutTitle: string
    mockExamButtonLabel: string
    aboutMessage: string,
    mockExamTitle: string,
    chooseExamLabel: string,
    examChoices: ExamChoice[],
    mockExamHowLongPickerLabel: string,
    mockExamHowLongQuestion: string,
    mockExamGoodLuckText: string,
    mockExamStartBtnLabel: string,
    examP1: string,
    examP2: string,
    continuingEducationP1: string,
    continuingEducationP2: string,
}