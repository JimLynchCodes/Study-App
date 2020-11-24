import { StaticText } from "../_data.models/static-text.model";

export const appText: StaticText = {
    homeTitle: "Welcome to EA Study App!",
    homeMessage: "A free app helping you quickly learn what you need to know to ace the Enroleld Agent Exam!",
    aboutTitle: "About EA Study APP",
    mockExamButtonLabel: 'Mock Exam',
    aboutMessage: `This is a FREE app that allows you to study questions related to the EA Exam.
    
    This app was built by Study app Technologies, a remote team of developers founded by Hadxian Mathew and Jim Lynch. 
    
    If you have any questions or feedback, please send them to: 
    
    studyapptechnologies@gmail.com`,
    mockExamTitle: 'Mock Exam',
    chooseExamLabel: 'Choose an exam:',
    examChoices: [
        {
            title: 'Individuals',
            chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            title: 'Business',
            chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        {
            title: 'Representation, Practice and Procedures',
            chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    ],
    mockExamHowLongPickerLabel: 'Choose an exam duration:',
    mockExamHowLongQuestion: 'How much time can you spend right now on this practice exam?',
    mockExamGoodLuckText: `Your exam will begin immediately after pressing the start button.
    Good Luck!`,
    mockExamStartBtnLabel: 'Start Exam'
}