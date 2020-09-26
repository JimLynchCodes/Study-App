import { IQuestion, AnswerChoice } from "../_data.models/question.model";

// TEST / DEV Questions

// export const questionBank: IQuestion[] = [
//
// ]

/**
 * Prod Questions
 */

export const questionBank: IQuestion[] = [
    {
        chapterIndex: 1,
        questionIndex: 1,
        qId: `q1-1`,
        tags: [],
        questionText: 'What is a group of hyenas called?',
        answerChoices: {
            [AnswerChoice.A]: 'squad',
            [AnswerChoice.B]: 'flock',
            [AnswerChoice.C]: 'cackle',
            [AnswerChoice.D]: 'swarm',
            [AnswerChoice.E]: 'caravan'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `A domestic limited liability company (LLC) with at least two members that does NOT file Form 8832 is classified as a partnership for federal income tax purposes. It will file Form 1065, U.S. Return of Partnership Income.

        If an entity with more than one owner was formed as an LLC under state law, it generally is treated as a partnership for federal income tax purposes and files Form 1065.
        
        Generally, a single member LLC is disregarded as an entity separate from its owner and reports its income and deductions on its owner's federal income tax return.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 1,
        qId: `q1-1`,
        tags: [],
        questionText: 'What is a group of hyenas called?',
        answerChoices: {
            [AnswerChoice.A]: 'squad',
            [AnswerChoice.B]: 'flock',
            [AnswerChoice.C]: 'cackle',
            [AnswerChoice.D]: 'swarm',
            [AnswerChoice.E]: 'caravan'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `A domestic limited liability company (LLC) with at least two members that does NOT file Form 8832 is classified as a partnership for federal income tax purposes. It will file Form 1065, U.S. Return of Partnership Income.

        If an entity with more than one owner was formed as an LLC under state law, it generally is treated as a partnership for federal income tax purposes and files Form 1065.
        
        Generally, a single member LLC is disregarded as an entity separate from its owner and reports its income and deductions on its owner's federal income tax return.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 2,
        qId: `q1-2`,
        tags: [],
        questionText: 'Which of these creatures can breathe underwater?',
        answerChoices: {
            [AnswerChoice.A]: 'sea turtle',
            [AnswerChoice.B]: 'whale',
            [AnswerChoice.C]: 'alligator',
            [AnswerChoice.D]: 'sea horse',
            [AnswerChoice.E]: 'sea otter'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Sea turtles, whales, alligators, and sea otters all need to come out of the water for oxygen eventually.
        
        Sea horses are a species of small fish that spend their entire lives underwater and breathe through their gills.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 3,
        qId: `q1-3`,
        tags: [],
        questionText: 'Which of these flying creatures is a mammal?',
        answerChoices: {
            [AnswerChoice.A]: 'vultures',
            [AnswerChoice.B]: 'hawk',
            [AnswerChoice.C]: 'tucans',
            [AnswerChoice.D]: 'eagles',
            [AnswerChoice.E]: 'bats'
        },
        correctAnswer: AnswerChoice.E,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `By definition, mammals give birth to live young, produce milk to feed their young, have hair, and are warm-blooded (they can self-regulate their body temperature).
        
        Bats are unique in that they are the only mammals tha can fly!`,
    },
    {
        chapterIndex: 1,
        questionIndex: 4,
        qId: `q1-4`,
        tags: [],
        questionText: 'What is the scientific name for the red fox?',
        answerChoices: {
            [AnswerChoice.A]: 'vulpes vulpes',
            [AnswerChoice.B]: 'Lycalopex culpaeus',
            [AnswerChoice.C]: 'Vulpes velox',
            [AnswerChoice.D]: 'Urocyon littoralis',
            [AnswerChoice.E]: 'Lycalopex vetulus'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `These are all species of fox, but the red fox is "vulpes vulpes".`,
    },
    {
        chapterIndex: 1,
        questionIndex: 5,
        qId: `q1-5`,
        tags: [],
        questionText: 'How many hearts does an octopus have?',
        answerChoices: {
            [AnswerChoice.A]: '1',
            [AnswerChoice.B]: '2',
            [AnswerChoice.C]: '3',
            [AnswerChoice.D]: '4',
            [AnswerChoice.E]: '5',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Octopuses are boneless creatures that generally have three hearts, nine brains, and blue blood.
        
        Two hearts pump blood to the gills, while a third circulates it to the rest of the body.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 6,
        qId: `q1-6`,
        tags: [],
        questionText: 'A group of _____ is known as a "pandamonium"?',
        answerChoices: {
            [AnswerChoice.A]: 'parrots',
            [AnswerChoice.B]: 'owls',
            [AnswerChoice.C]: 'giraffes',
            [AnswerChoice.D]: 'pigs',
            [AnswerChoice.E]: 'pheasants',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `A group of parrots can be called a "company" or a "pandamonium".`,
    },
    {
        chapterIndex: 1,
        questionIndex: 7,
        qId: `q1-7`,
        tags: [],
        questionText: 'What color skin do olar beas have?',
        answerChoices: {
            [AnswerChoice.A]: 'white',
            [AnswerChoice.B]: 'black',
            [AnswerChoice.C]: 'brown',
            [AnswerChoice.D]: 'yellow',
            [AnswerChoice.E]: 'pink',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Polar bears have pigment-less, hollow fur which makes them appear white, but underneath all that fur their skin is actually black!`,
    },
    {
        chapterIndex: 1,
        questionIndex: 8,
        qId: `q1-8`,
        tags: [],
        questionText: 'What is a group of salamanders called?',
        answerChoices: {
            [AnswerChoice.A]: 'a covey',
            [AnswerChoice.B]: 'a bask',
            [AnswerChoice.C]: 'an army',
            [AnswerChoice.D]: 'a nest',
            [AnswerChoice.E]: 'a maelstrom',
        },
        correctAnswer: AnswerChoice.E,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: '',
        },
        moreExplanation: `A group of salamanders is called a "maelstrom".`,
    },
    {
        chapterIndex: 1,
        questionIndex: 9,
        qId: `q1-9`,
        tags: [],
        questionText: 'What is the musical key of a housefly\'s hum?',
        answerChoices: {
            [AnswerChoice.A]: 'F',
            [AnswerChoice.B]: 'B',
            [AnswerChoice.C]: 'C',
            [AnswerChoice.D]: 'D',
            [AnswerChoice.E]: 'E',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `The common housefly flaps its wings about 190 times per second, and the human ear interprets that frequency as a pitch along the F major.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 10,
        qId: `q1-10`,
        tags: [],
        questionText: '',
        answerChoices: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: '',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: ``,
    },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 11,
    //     qId: `q1-11`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 12,
    //     qId: `q1-12`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 13,
    //     qId: `q1-13`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 14,
    //     qId: `q1-14`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 15,
    //     qId: `q1-15`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 16,
    //     qId: `q1-16`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 17,
    //     qId: `q1-17`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 18,
    //     qId: `q1-18`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 19,
    //     qId: `q1-19`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
    // {
    //     chapterIndex: 1,
    //     questionIndex: 20,
    //     qId: `q1-20`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: '',
    //     },
    //     correctAnswer: AnswerChoice.C,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: ''
    //     },
    //     moreExplanation: ``,
    // },
   
    // Chapter 2
    {
        chapterIndex: 2,
        questionIndex: 1,
        qId: `q2-1`,
        tags: [],
        questionText: 'When standing in sunlight, what vitamin does your body synthesize?',
        answerChoices: {
            [AnswerChoice.A]: 'A',
            [AnswerChoice.B]: 'B',
            [AnswerChoice.C]: 'C',
            [AnswerChoice.D]: 'D'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: 'You can only get vitamin A can only be got via...',
            [AnswerChoice.B]: 'You can only get vitamin B can only be got via...',
            [AnswerChoice.C]: 'You can only get vitamin C can only be got via...',
            [AnswerChoice.D]: 'You can only get vitamin D can only be got via...'
        },
        moreExplanation: `When your skin is exposed to sunlight, it makes vitamin D from cholesterol. The sun's ultraviolet B (UVB) rays hit cholesterol in the skin cells, providing the energy for vitamin D synthesis to occur.`,
    },
    {
        chapterIndex: 2,
        questionIndex: 2,
        qId: `q2-2`,
        tags: [],
        questionText: 'Each cigarette smoked reduces the smoker\'s life expectancy by how long?',
        answerChoices: {
            [AnswerChoice.A]: '1 minute',
            [AnswerChoice.B]: '11 minutes',
            [AnswerChoice.C]: '1 hour',
            [AnswerChoice.D]: '45 minutes',
            [AnswerChoice.E]: '5 minutes',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: '',
        },
        moreExplanation: `Researchers such as Dr. Mary Shaw and colleagues from the University of Bristol have found that each cigarette smoked reduces the smoker's expected lifetime by 11 minutes.
        
        These numbers are calculated based on statistics found that show the typical male smoker will consume a total of around 311,688 cigarettes from age 17 until death at age 71 and that these smokers generally life around 6.5 years fewer than the non-smoker group.`,
    },
    {
        chapterIndex: 2,
        questionIndex: 3,
        qId: `q2-3`,
        tags: [],
        questionText: 'Around what percentage of the world\'s population was obese in 2019?',
        answerChoices: {
            [AnswerChoice.A]: '10',
            [AnswerChoice.B]: '20',
            [AnswerChoice.C]: '30',
            [AnswerChoice.D]: '40',
            [AnswerChoice.E]: '50',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: '',
        },
        moreExplanation: `In 2019, Nearly 39 percent of adults (18 years and older) worldwide were overweight, and about 30% were obese.
        
        In 2019, an estimated 38.2 million children under the age of 5 years were overweight or obese.
        
        Once considered a high-income country problem, overweight and obesity are now on the rise in low- and middle-income countries, particularly in urban settings.`,
    },
    {
        chapterIndex: 2,
        questionIndex: 4,
        qId: `q2-4`,
        tags: [],
        questionText: 'There are about how many named skeletal muscles in the human body?',
        answerChoices: {
            [AnswerChoice.A]: '300',
            [AnswerChoice.B]: '1100',
            [AnswerChoice.C]: '500',
            [AnswerChoice.D]: '700',
            [AnswerChoice.E]: '900',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: '',
        },
        moreExplanation: `There are around 700 different named skeletal muscles in the human body.`,
    },
    {
        chapterIndex: 2,
        questionIndex: 5,
        qId: `q2-5`,
        tags: [],
        questionText: 'Do lose one pound of fat, you need to burn about how many calories?',
        answerChoices: {
            [AnswerChoice.A]: '2000',
            [AnswerChoice.B]: '1500',
            [AnswerChoice.C]: '2500',
            [AnswerChoice.D]: '3000',
            [AnswerChoice.E]: '3500',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: '',
        },
        moreExplanation: `It takes around 3500 burned calories to lose one pound of fat.`,
    },
    {
        chapterIndex: 2,
        questionIndex: 6,
        qId: `q2-6`,
        tags: [],
        questionText: 'What percentage of harmful UVB sun rays pass through SPF 50 sunscreen?',
        answerChoices: {
            [AnswerChoice.A]: '2%',
            [AnswerChoice.B]: '5%',
            [AnswerChoice.C]: '10%',
            [AnswerChoice.D]: '15%',
            [AnswerChoice.E]: '20%',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `SPF 50 allows only two percent of UVB rays to pass to your skin, compared to seven percent when wearing only SPF 15 (and vs 100% when not wearing any sunscreen!).`,
    },
    {
        chapterIndex: 2,
        questionIndex: 7,
        qId: `q2-7`,
        tags: [],
        questionText: 'What positive side effects can come from breathing deeply in moment of stress?',
        answerChoices: {
            [AnswerChoice.A]: 'better blood circulation',
            [AnswerChoice.B]: 'decreased anxiety',
            [AnswerChoice.C]: 'reduced blood pressure',
            [AnswerChoice.D]: 'all of these answers'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Breathing deeply in moments of stress, or anytime during the day, can bring many benefits such as better circulation, decreased anxiety and reduced blood pressure!`,
    },
    {
        chapterIndex: 2,
        questionIndex: 8,
        qId: `q2-8`,
        tags: [],
        questionText: 'The word "gymnasium" comes from the greek word "Gymnasium", which literally means what?',
        answerChoices: {
            [AnswerChoice.A]: 'exercise naked',
            [AnswerChoice.B]: 'exercise hard',
            [AnswerChoice.C]: 'gain strengh',
            [AnswerChoice.D]: 'endure pain',
            [AnswerChoice.E]: 'physical competition',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `In ancient Greece the gymnasium functioned as a training facility for competitors in public games. It was also a place for socializing and engaging in intellectual pursuits. 
        
        The name comes from the ancient Greek term gymnós meaning "naked". Only adult male citizens were allowed to use the gymnasia.

        Athletes competed nude, a practice which was said to encourage aesthetic appreciation of the male body and to be a tribute to the gods. `,
    },
    {
        chapterIndex: 2,
        questionIndex: 9,
        qId: `q2-9`,
        tags: [],
        questionText: 'How many chromosomes does a normal human cell have?',
        answerChoices: {
            [AnswerChoice.A]: '50',
            [AnswerChoice.B]: '24',
            [AnswerChoice.C]: '48',
            [AnswerChoice.D]: '46',
            [AnswerChoice.E]: '44',
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `In humans, each cell normally contains 23 pairs of chromosomes, for a total of 46.`,
    },
    {
        chapterIndex: 2,
        questionIndex: 10,
        qId: `q2-10`,
        tags: [],
        questionText: 'Which of these human body parts never stops growing?',
        answerChoices: {
            [AnswerChoice.A]: 'ears',
            [AnswerChoice.B]: 'feet',
            [AnswerChoice.C]: 'arms',
            [AnswerChoice.D]: 'eyes',
            [AnswerChoice.E]: 'brain',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Although bodies stop growing, noses and ears do not.`,
    },

    // Chapter 3
    {
        chapterIndex: 3,
        questionIndex: 1,
        qId: `q3-1`,
        tags: [],
        questionText: 'On April 6, Sue Thompson bought a house to use as residential rental property. She made several repairs and had it ready for rent on July 5. She did not actually rent the property until August 1, and the family moved in on August 15.',
        answerChoices: {
            [AnswerChoice.A]: 'April 6',
            [AnswerChoice.B]: 'August 1',
            [AnswerChoice.C]: 'August 15',
            [AnswerChoice.D]: 'July 5'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: 'July 5'
        },
        moreExplanation: `The house is considered placed in service on July 5th when it was ready and available for rent. She can begin to depreciate it in July.

        Property is placed in service when it is ready and available for a specific use, whether in a business activity, an income-producing activity, or a personal activity. Even if the property is not being used, it is in service when it is ready and available for its specific use.`,
    },

     // Chapter 4

    {
        chapterIndex: 4,
        questionIndex: 1,
        qId: `q4-1`,
        tags: [],
        questionText: 'A disposition of property includes:',
        answerChoices: {
            [AnswerChoice.A]: 'Abandoned property',
            [AnswerChoice.B]: 'Property transferred to satisfy a debt',
            [AnswerChoice.C]: 'All of these choices',
            [AnswerChoice.D]: 'Property exchanged for other property'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: 'All of these choices',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A disposition of property includes the following transactions:

        Property is sold for cash or other property.
        Property is exchanged for other property.
        Money may be received as a tenant for the cancellation of a lease.
        Property may be transferred to satisfy a debt.
        Property may be abandoned.
        A bank or other financial institution may foreclose on a mortgage or repossesses the financed property.
        
        (Not a complete list.)`,
    },

    // Chapter 5

    {
        chapterIndex: 5,
        questionIndex: 1,
        qId: `q5-1`,
        tags: [],
        questionText: 'The film "Casablanca" takes place during which global conflict?',
        answerChoices: {
            [AnswerChoice.A]: 'Spanish Revolution',
            [AnswerChoice.B]: 'World War I',
            [AnswerChoice.C]: 'World War II',
            [AnswerChoice.D]: 'American Revolution',
            [AnswerChoice.D]: 'Hundred Years War'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Business bad debts are deducted as an expense on the business tax return when figuring business income or loss.

        Non-business bad debts are reported as short-term capital losses on Form 8949 and carried to Schedule D (Form 1040). Business bad debts are deducted as an expense.`,
    },
    {
        chapterIndex: 5,
        questionIndex: 2,
        qId: `q5-2`,
        tags: [],
        questionText: 'On the cover of the "Let It Be" album, which Beatle had the least amount of facial hair?',
        answerChoices: {
            [AnswerChoice.A]: 'Paul McCartney',
            [AnswerChoice.B]: 'George Harrison',
            [AnswerChoice.C]: 'Ringo Starr',
            [AnswerChoice.D]: 'John Lennon',
            [AnswerChoice.D]: 'Chuck Berry'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: ``,
    },

     // Chapter 6

    {
        chapterIndex: 6,
        questionIndex: 1,
        qId: `q6-1`,
        tags: [],
        questionText: `A cafeteria plan is a written plan that allows employees to choose between receiving cash or taxable benefits instead of certain qualified benefits for which the law provides an exclusion from wages (deferral).

        Which of the following can be included in a cafeteria plan?`,
        answerChoices: {
            [AnswerChoice.A]: 'Adoption assistance',
            [AnswerChoice.B]: 'Tuition reduction',
            [AnswerChoice.C]: 'Archer medical savings accounts',
            [AnswerChoice.D]: 'Membership dues to athletic facilities'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'Adoption assistance can be included in a cafeteria plan.',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A cafeteria plan is a written plan that allows employees to choose between receiving cash or taxable benefits instead of certain qualified benefits for which the law provides an exclusion from wages.

        Qualified cafeteria plan benefits INCLUDE the following benefits:
        
        a. Accident and health benefits (but not medical savings accounts or long-term care insurance)
        b. Adoption assistance
        c. Dependent care assistance
        d. Group-term life insurance coverage (including costs that cannot be excluded from wages)
        e. Health savings accounts (HSAs) (Distributions from an HSA may be used to pay eligible long-term care insurance premiums or qualified long-term care services.)
        
        A cafeteria plan CANNOT include the following benefits:
        
        a. Archer medical savings accounts
        b. Athletic facilities
        c. De minimis (minimal) benefits
        d. Educational assistance
        e. Employee discounts
        f. Lodging on the business premises
        g. Meals
        h. Moving expense reimbursements
        i. No-additional-cost services
        j. Scholarships and fellowships
        k. Transportation (commuting) benefits
        l. Tuition reduction
        m. Working condition benefits
        
        It also cannot include scholarships or fellowships.`,
    },

    // Chapter 7

    {
        chapterIndex: 7,
        questionIndex: 1,
        qId: `q7-1`,
        tags: [],
        questionText: '',
        answerChoices: {
            [AnswerChoice.A]: 'Patricia is an independent contractor because Hard Drive has the right to control only the result of the work and not how it will be done.',
            [AnswerChoice.B]: 'Patricia is not an independent contractor because Hard Drive controls what will be done.',
            [AnswerChoice.C]: 'Patricia is not an independent contractor because she uses her own computer and Hard Drive provides the specifications.',
            [AnswerChoice.D]: 'Patricia is an independent contractor because she is not required to attend meetings.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'Patricia is an independent contractor because Hard Drive has the right to control only the result of the work and not how it will be done.',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Patricia is an independent contractor.

        The general rule is that an individual is an independent contractor if the payer has the right to control or direct only the result of the work and not what will be done and how it will be done. The earnings of an independent contractor are subject to SE tax.
        
        REPORTING. Independent contractors report income and expenses on Schedule C or C-EZ.`,
    },

    // Chapter 8

    {
        chapterIndex: 8,
        questionIndex: 1,
        qId: 'q8-1',
        tags: [],
        questionText: 'Which US state is home to Clemson University?',
        answerChoices: {
            [AnswerChoice.A]: 'South Carolina',
            [AnswerChoice.B]: 'New Jersey',
            [AnswerChoice.C]: 'Virginia',
            [AnswerChoice.D]: 'California'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `no more explanation :/`,
    },

    {
        chapterIndex: 8,
        questionIndex: 2,
        qId: 'q8-2',
        tags: [],
        questionText: 'Which US state is referred to as the "Silver State"?',
        answerChoices: {
            [AnswerChoice.A]: 'South Carolina',
            [AnswerChoice.B]: 'New Jersey',
            [AnswerChoice.C]: 'Virginia',
            [AnswerChoice.D]: 'Nevada'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `no more explanation :/`,
    },

]