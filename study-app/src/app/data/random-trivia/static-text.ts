import { StaticText } from "../_data.models/static-text.model";

export const appText: StaticText = {
    homeTitle: "Welcome to the Random Trivia App!",
    homeMessage: "A free, fun app for quizing your friends and learning random trivia!",
    aboutTitle: "About The Random Trivia App",
    mockExamButtonLabel: 'Test Your Knowledge',
    aboutMessage: `This is a FREE app for learning random trivia.
    
    This app was built by Study app Technologies, a remote team of developers founded by Hadxian Mathew and Jim Lynch. 
    
    If you have any questions or feedback, please send them to: 
    
    studyapptechnologies@gmail.com`,
    mockExamTitle: 'Trivia Quiz',
    chooseExamLabel: 'Choose an quiz:',
    examChoices: [
        {
            title: 'Everything!',
            chapters: [1, 2, 3, 4, 5, 6]
        },
        {
            title: 'Life Sciences',
            chapters: [1, 2]
        },
        {
            title: 'The Great Outdoors',
            chapters: [3, 4]
        },
        {
            title: 'Math & Science',
            chapters: [2, 5, 6]
        },
    ],
    mockExamHowLongPickerLabel: 'Choose an quiz duration:',
    mockExamHowLongQuestion: 'How much time can you spend right now on this quiz?',
    mockExamGoodLuckText: `Your quiz will begin immediately after pressing the start button!
    Good Luck!`,
    mockExamStartBtnLabel: 'Start!'
}