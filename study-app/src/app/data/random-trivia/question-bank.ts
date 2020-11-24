import { IQuestion, AnswerChoice } from "../_data.models/question.model";

// TEST / DEV Questions

// export const questionBank: IQuestion[] = [
//
// ]

/**
 * Prod Questions
 */

export const questionBank: IQuestion[] = [

    // Chapter 1 - Animals

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
        questionText: 'What is the length of the average giraffe\'s neck?',
        answerChoices: {
            [AnswerChoice.A]: '6 feet',
            [AnswerChoice.B]: '8 feet',
            [AnswerChoice.C]: '4 feet',
            [AnswerChoice.D]: '10 feet',
            [AnswerChoice.E]: '12 feet',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `And average giraffe neck measures about 6 feet long.
        
        Girraffe's over time have evolved to have long necks so that they can feed on high leaves that other mammals cannot reach.`,
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

    // Chapter 2 - Health
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

    // Chapter 3 - Geography
    {
        chapterIndex: 3,
        questionIndex: 1,
        qId: `q3-1`,
        tags: [],
        questionText: 'What is the largest Ocean?',
        answerChoices: {
            [AnswerChoice.A]: 'Pacific',
            [AnswerChoice.B]: 'Atlantic',
            [AnswerChoice.C]: 'Arctic',
            [AnswerChoice.D]: 'Indian',
            [AnswerChoice.E]: 'Mediterranean',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `The Pacific Ocean is the largets ocean, containing around 63 million square miles.
        
        It is followed by the Atlantic Ocean which covers around 25 million miles of Earth.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 2,
        qId: `q3-2`,
        tags: [],
        questionText: 'What is the smallest sountry in the world?',
        answerChoices: {
            [AnswerChoice.A]: 'Monaco',
            [AnswerChoice.B]: 'Vatican City',
            [AnswerChoice.C]: 'Nauru',
            [AnswerChoice.D]: 'San Marino',
            [AnswerChoice.E]: 'France',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `The smallest city is The Vatican City State, with an area of with an area of 526,235 square yards.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 3,
        qId: `q3-3`,
        tags: [],
        questionText: 'Which of these is NOT a body of water?',
        answerChoices: {
            [AnswerChoice.A]: 'Bay',
            [AnswerChoice.B]: 'Channel',
            [AnswerChoice.C]: 'Estuary',
            [AnswerChoice.D]: 'Range',
            [AnswerChoice.E]: 'Strait',
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A range, in geography, means a chain of hills or mountains.
        
        All the other answers are types of bodies of water.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 4,
        qId: `q3-4`,
        tags: [],
        questionText: 'What is a word for, "A flat, treeless area where the soil is permanently frozen"?',
        answerChoices: {
            [AnswerChoice.A]: 'froyo',
            [AnswerChoice.B]: 'freezoa',
            [AnswerChoice.C]: 'tundra',
            [AnswerChoice.D]: 'range',
            [AnswerChoice.E]: 'frostland',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A tundra is a flat, treeless area where the soil is permanently frozen `,
    },
    {
        chapterIndex: 3,
        questionIndex: 5,
        qId: `q3-5`,
        tags: [],
        questionText: 'What is a butte?',
        answerChoices: {
            [AnswerChoice.A]: 'an isolated hill with steep sides and a flat top',
            [AnswerChoice.B]: 'a chain of steep hills',
            [AnswerChoice.C]: 'a short but wide hill',
            [AnswerChoice.D]: 'a steep hill that comes right up against a body of water',
            [AnswerChoice.E]: 'a hill completely covered by forest',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A butte (pronounced like, "byoot") is an isolated hill with steep sides and a flat top`,
    },
    {
        chapterIndex: 3,
        questionIndex: 6,
        qId: `q3-6`,
        tags: [],
        questionText: 'What is a word for, "A ring of coral that makes an island"?',
        answerChoices: {
            [AnswerChoice.A]: 'Atoll',
            [AnswerChoice.B]: 'Archipelago',
            [AnswerChoice.C]: 'Basin',
            [AnswerChoice.D]: 'Reefoid',
            [AnswerChoice.E]: 'Round',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `An atoll is a ring-shaped coral reef, island, or series of islets. An atoll surrounds a body of water called a lagoon.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 7,
        qId: `q3-7`,
        tags: [],
        questionText: 'An archipelago is a series of what?',
        answerChoices: {
            [AnswerChoice.A]: 'Islands',
            [AnswerChoice.B]: 'Hills',
            [AnswerChoice.C]: 'Basins',
            [AnswerChoice.D]: 'Mountain Peaks',
            [AnswerChoice.E]: 'Cities',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `An archipelago is a series of islands that are connected under water.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 8,
        qId: `q3-8`,
        tags: [],
        questionText: 'The name for the end of a river is the _______?',
        answerChoices: {
            [AnswerChoice.A]: 'mouth',
            [AnswerChoice.B]: 'foot',
            [AnswerChoice.C]: 'head',
            [AnswerChoice.D]: 'floor',
            [AnswerChoice.E]: 'bed',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `The end of the river, where it empties into another body of water, is the mouth.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 9,
        qId: `q3-9`,
        tags: [],
        questionText: 'What is a, "deep narrow inlet from the ocean with high cliffs on three sides"?',
        answerChoices: {
            [AnswerChoice.A]: 'fjord',
            [AnswerChoice.B]: 'quilm',
            [AnswerChoice.C]: 'straight',
            [AnswerChoice.D]: 'inlet',
            [AnswerChoice.E]: 'inpass',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A fjord is a deep, narrow inlet from the ocean with high cliffs on three sides.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 10,
        qId: `q3-10`,
        tags: [],
        questionText: 'What is the word for the point where the elevation becomes too high for trees to grow?',
        answerChoices: {
            [AnswerChoice.A]: 'timberline',
            [AnswerChoice.B]: 'timberpoint',
            [AnswerChoice.C]: 'timberpole',
            [AnswerChoice.D]: 'timerspot',
            [AnswerChoice.E]: 'timbertip',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `An alpine timberline is the point where the elevation is too high and the soil is too dry for tree growth.`,
    },
    // {
    //     chapterIndex: 3,
    //     questionIndex: ,
    //     qId: `q3-`,
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

    // Chapter 4 - Sports

    {
        chapterIndex: 4,
        questionIndex: 1,
        qId: `q4-1`,
        tags: [],
        questionText: 'In tennis, what’s the Min number of games you need to win in order to win a set?',
        answerChoices: {
            [AnswerChoice.A]: '4',
            [AnswerChoice.B]: '5',
            [AnswerChoice.C]: '6',
            [AnswerChoice.D]: '12',
            [AnswerChoice.E]: '10',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Generally, winning 7 games wins the set. 
    
    If the set goes to a tiebreak at 6-6, the winnter of the set will have won 7 games for the set.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 2,
        qId: `q4-2`,
        tags: [],
        questionText: 'What does love mean in tennis?',
        answerChoices: {
            [AnswerChoice.A]: 'Zero points in a game.',
            [AnswerChoice.B]: 'Zero games in a set.',
            [AnswerChoice.C]: 'Winning a set.',
            [AnswerChoice.D]: 'Hitting a shot past an opponent.',
            [AnswerChoice.E]: 'Winning the entire match.',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `When a player has zero points in a game, his or her score of that game is referred to as "love" when saying the score.`,
    },
    {
        chapterIndex: 4,
        questionIndex: 3,
        qId: `q4-3`,
        tags: [],
        questionText: 'In tennis, what it called when the score of a game is tied and both players have won at least two points during the game?',
        answerChoices: {
            [AnswerChoice.A]: 'Deuce',
            [AnswerChoice.B]: 'Push',
            [AnswerChoice.C]: 'Break',
            [AnswerChoice.D]: 'Same',
            [AnswerChoice.E]: 'Vueu',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `In tennis, a game ends with a player winning by two points.
        
        If the game is tied at 40-40, instead of winning the game the next player is set to have "advantage". 
        
        If this player wins the next point as well, he or she wins the game. If not, the scores is tied again and is referred to as, "duece".`,
    },

    {
        chapterIndex: 4,
        questionIndex: 4,
        qId: `q4-4`,
        tags: [],
        questionText: 'In tennis, what is called when a player\'s serve hits the net and goes in?',
        answerChoices: {
            [AnswerChoice.A]: 'Let',
            [AnswerChoice.B]: 'Right',
            [AnswerChoice.C]: 'Ace',
            [AnswerChoice.D]: 'Fault',
            [AnswerChoice.E]: 'Set',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `In tennis, if a players' serve hits the net but still goes in the service box it is referred to as a "let".
        
        The point is re-played, no points are awarded to either side, and the serve does not count as a fault.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 5,
        qId: `q4-5`,
        tags: [],
        questionText: 'In football, what it called when a team goes down with the ball in their own end zone, scoring points for the other team?',
        answerChoices: {
            [AnswerChoice.A]: 'Safety',
            [AnswerChoice.B]: 'Touchdown',
            [AnswerChoice.C]: 'Field Goal',
            [AnswerChoice.D]: 'Sac',
            [AnswerChoice.E]: 'Special Temas',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `If a team is taken down in their own endzone, it is referred to as a "safety".
        
        The defending team which forced the safety is awarded 2 points and reeives a punt that the downded team must kick from their own endzone.`,
    },
    {
        chapterIndex: 4,
        questionIndex: 6,
        qId: `q4-6`,
        tags: [],
        questionText: 'How many points are awarded for a “safety” in football?',
        answerChoices: {
            [AnswerChoice.A]: '1',
            [AnswerChoice.B]: '2',
            [AnswerChoice.C]: '3',
            [AnswerChoice.D]: '5',
            [AnswerChoice.E]: '7',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `If a team is taken down in their own endzone, it is referred to as a "safety".
        
        The defending team which forced the safety is awarded 2 points and reeives a punt that the downded team must kick from their own endzone.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 7,
        qId: `q4-7`,
        tags: [],
        questionText: 'What it a word referring to the event where a baseball batter is hit by a pitch?',
        answerChoices: {
            [AnswerChoice.A]: 'Beanball',
            [AnswerChoice.B]: 'Beanbag',
            [AnswerChoice.C]: 'Deadball',
            [AnswerChoice.D]: 'Walk',
            [AnswerChoice.E]: 'Ball',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A player being hit by a pitch is referred to as a "beanball".`,
    },

    {
        chapterIndex: 4,
        questionIndex: 8,
        qId: `q4-8`,
        tags: [],
        questionText: 'In football, What is it called when the quarterback goes down with the ball behind the line of scrimmage?',
        answerChoices: {
            [AnswerChoice.A]: 'Sac',
            [AnswerChoice.B]: 'Spike',
            [AnswerChoice.C]: 'Foul',
            [AnswerChoice.D]: 'Slam',
            [AnswerChoice.E]: 'Draw',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `In football, the quarterback being taken down behind the line of scrimmage is referred to as a sac.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 9,
        qId: `q4-9`,
        tags: [],
        questionText: 'What\’s the max number of points a team can get from a touchdown?',
        answerChoices: {
            [AnswerChoice.A]: '2',
            [AnswerChoice.B]: '3',
            [AnswerChoice.C]: '7',
            [AnswerChoice.D]: '8',
            [AnswerChoice.E]: '10',
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A team is immediately awarded 6 points when running or catching the ball in the endzone, and with a successful 2-point conversion they can bring the total number of points up to eight.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 10,
        qId: `q4-10`,
        tags: [],
        questionText: 'In football, which player generally catches the farthest thrown passes?',
        answerChoices: {
            [AnswerChoice.A]: 'Tight end',
            [AnswerChoice.B]: 'Wide receiver',
            [AnswerChoice.C]: 'Fullback',
            [AnswerChoice.D]: 'Linebacker',
            [AnswerChoice.E]: 'Center',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `The wide receivers are usually the players to run the deepest routes and catch the farthest thrown balls.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 11,
        qId: `q4-11`,
        tags: [],
        questionText: 'In tennis, what is it called when you hit a serve that goes in and your opponents racquet does not even touch it ?',
        answerChoices: {
            [AnswerChoice.A]: 'Ace',
            [AnswerChoice.B]: 'Pass',
            [AnswerChoice.C]: 'Threough',
            [AnswerChoice.D]: 'Straight',
            [AnswerChoice.E]: 'Let',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `An ace is when a player hits a serve the goes in and is hit so well that the opponent cannot even get a raquet on the ball.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 12,
        qId: `q4-12`,
        tags: [],
        questionText: 'How many players are on the court in doubles tennis match?',
        answerChoices: {
            [AnswerChoice.A]: '2',
            [AnswerChoice.B]: '4',
            [AnswerChoice.C]: '6',
            [AnswerChoice.D]: '7',
            [AnswerChoice.E]: '8',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Doubles tennis involes 2 teams with 2 players on each team, or four players total.`,
    },
    {
        chapterIndex: 4,
        questionIndex: 13,
        qId: `q4-13`,
        tags: [],
        questionText: 'In football, How many players per team are allowed on the field during a play?',
        answerChoices: {
            [AnswerChoice.A]: '10',
            [AnswerChoice.B]: '11',
            [AnswerChoice.C]: '12',
            [AnswerChoice.D]: '13',
            [AnswerChoice.E]: '14',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A football game is played between two teams of 11 players each.
        
        Playing with more on the field is punishable by a penalty.`,
    },
    {
        chapterIndex: 4,
        questionIndex: 14,
        qId: `q4-14`,
        tags: [],
        questionText: 'In soccer, How many players per team are allowed on the field during a play?',
        answerChoices: {
            [AnswerChoice.A]: '11',
            [AnswerChoice.B]: '12',
            [AnswerChoice.C]: '13',
            [AnswerChoice.D]: '14',
            [AnswerChoice.E]: '15',
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Although soccer can be played with fewer players, there are generally 11 players on the field per team during a soccer game.
        
        Each team has 10 field players and a goalkeeper.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 15,
        qId: `q4-15`,
        tags: [],
        questionText: 'In basketball, How many players per team are allowed on the counrt during a play ?',
        answerChoices: {
            [AnswerChoice.A]: '4',
            [AnswerChoice.B]: '5',
            [AnswerChoice.C]: '6',
            [AnswerChoice.D]: '7',
            [AnswerChoice.E]: '8',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Five players from each team may be on the court at one time.`,
    },


    {
        chapterIndex: 4,
        questionIndex: 16,
        qId: `q4-16`,
        tags: [],
        questionText: 'In lacrosse, How many players per team are allowed on the field during a play ?',
        answerChoices: {
            [AnswerChoice.A]: '9',
            [AnswerChoice.B]: '10',
            [AnswerChoice.C]: '11',
            [AnswerChoice.D]: '12',
            [AnswerChoice.E]: '13',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `There are generally ten lacrosse players on the field at given time: three attackmen, three midfielders, three defensemen, and one goalie.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 17,
        qId: `q4-17`,
        tags: [],
        questionText: 'Which is these is NOT a weightlighting move ?',
        answerChoices: {
            [AnswerChoice.A]: 'Torque',
            [AnswerChoice.B]: 'Squat',
            [AnswerChoice.C]: 'Clean',
            [AnswerChoice.D]: 'natch',
            [AnswerChoice.E]: 'Jerk',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `All of these are weightlifting exercises except "torque".`,
    },

    {
        chapterIndex: 4,
        questionIndex: 18,
        qId: `q4-18`,
        tags: [],
        questionText: 'In tennis, what is it called when a player hits an oppopents shot before the ball ever hits the ground?',
        answerChoices: {
            [AnswerChoice.A]: 'Volley',
            [AnswerChoice.B]: 'Ace',
            [AnswerChoice.C]: 'Net',
            [AnswerChoice.D]: 'Let',
            [AnswerChoice.E]: 'Serve',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A volley in tennis is a shot in which the ball is struck before it bounces on the ground.
        
        Generally a player hits a volley while standing near the net, although it can be executed farther back, in the middle of the tennis court or even near the baseline.`,
    },

    {
        chapterIndex: 4,
        questionIndex: 19,
        qId: `q4-19`,
        tags: [],
        questionText: 'What is it the name of an extreme version of a pullup where the athlete\'s upper body ends up completely above the bar?',
        answerChoices: {
            [AnswerChoice.A]: 'Muscle Up',
            [AnswerChoice.B]: 'Super Up',
            [AnswerChoice.C]: 'Extra Up',
            [AnswerChoice.D]: 'Power Up',
            [AnswerChoice.E]: 'Spike Up',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `This exercise, the muscle up, can also we described as a combination of a radial pull-up followed by a dip`,
    },
    {
        chapterIndex: 4,
        questionIndex: 20,
        qId: `q4-20`,
        tags: [],
        questionText: 'Which of these is generally NOT a cardiovascular exercise?',
        answerChoices: {
            [AnswerChoice.A]: 'Running',
            [AnswerChoice.B]: 'Deadlifts',
            [AnswerChoice.C]: 'Rowing',
            [AnswerChoice.D]: 'Jumping Rope',
            [AnswerChoice.E]: 'Boxing',
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Cardiovascular exercise is any vigorous activity that increases heart rate and respiration and raises oxygen and blood flow throughout the body while using large muscle groups of the body repetitively and rhythmically.

    Though deadlifts can be utlized in cardio exercises that increase heartrate, it's often a controlled, focused exercise aimed at breaking down and strengthening the back and leg muscles.`,
    },
    {
        chapterIndex: 4,
        questionIndex: 21,
        qId: `q4-21`,
        tags: [],
        questionText: 'Which of these exercises does NOT focus on the chest muscles?',
        answerChoices: {
            [AnswerChoice.A]: 'Benchpress',
            [AnswerChoice.B]: 'Dips',
            [AnswerChoice.C]: 'Incline Press',
            [AnswerChoice.D]: 'Pushups',
            [AnswerChoice.E]: 'Military Press',
        },
        correctAnswer: AnswerChoice.E,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Military press is a seated exercise where a bar is raised straight above the athlete's head.

    This exercises focuses more on the shoulder muscles rather than the chest.`,
    },

    // {
    //     chapterIndex: 4,
    //     questionIndex: ,
    //     qId: `q4-`,
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

    // Chapter 5 - Technology

    {
        chapterIndex: 5,
        questionIndex: 1,
        qId: `q5-1`,
        tags: [],
        questionText: 'When referring to a website’s address was does the acronym URL stand for?',
        answerChoices: {
            [AnswerChoice.A]: 'Uniform Resource Locator',
            [AnswerChoice.B]: 'Unique Resource Location',
            [AnswerChoice.C]: 'Unified Request Locator',
            [AnswerChoice.D]: 'Unique Response Length',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `URL stands for Uniform Resource Locator, colloquially termed a "web address". It is a reference to a web resource that specifies its location on a computer network and a mechanism(s) for retrieving it.`,
    },

    {
        chapterIndex: 5,
        questionIndex: 2,
        qId: `q5-2`,
        tags: [],
        questionText: 'In computer programming, which of these things are “invoked”?',
        answerChoices: {
            [AnswerChoice.A]: 'functions',
            [AnswerChoice.B]: 'objects',
            [AnswerChoice.C]: 'arrays',
            [AnswerChoice.D]: 'integers',
            [AnswerChoice.E]: 'strings'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Invoking, also referred to as calling or evaluating a function means to run the code within the function definition (with some or no parameters).`,
    },
    {
        chapterIndex: 5,
        questionIndex: 3,
        qId: `q5-3`,
        tags: [],
        questionText: 'HTML and CSS are computer languages primary used to create what?',
        answerChoices: {
            [AnswerChoice.A]: 'Websites',
            [AnswerChoice.B]: 'Socket servers',
            [AnswerChoice.C]: 'Queuing systems',
            [AnswerChoice.D]: 'Databases',
            [AnswerChoice.E]: 'Operating systems '
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `HTML and CSS are used to define front-end UI structure and styles, traditionally for websites and web applications but more recently also for desktop applications and mobile applications.`,
    },

    {
        chapterIndex: 5,
        questionIndex: 4,
        qId: `q5-4`,
        tags: [],
        questionText: 'Which piece of computer hardware might have a size of 1 terabyte ?',
        answerChoices: {
            [AnswerChoice.A]: 'Hard drive',
            [AnswerChoice.B]: 'Motherboard',
            [AnswerChoice.C]: 'Graphics Card',
            [AnswerChoice.D]: 'RAM sticks',
            [AnswerChoice.E]: 'Coaxial Cable'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Of these choices, only hard drives and RAM are devices that store memory on the magnitude of terabytes.`,
    },

    {
        chapterIndex: 5,
        questionIndex: 5,
        qId: `q5-5`,
        tags: [],
        questionText: 'During a given in which vehicle do you have the highest likelyhood of being in a fatal accident?',
        answerChoices: {
            [AnswerChoice.A]: 'Car',
            [AnswerChoice.B]: 'Airplane',
            [AnswerChoice.C]: 'Train',
            [AnswerChoice.D]: 'Boat',
            [AnswerChoice.E]: 'Bicycle'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Statistically, the average person has the highest chance of dieing in a car accident than in any other verhicle.`,
    },
    {
        chapterIndex: 5,
        questionIndex: 6,
        qId: `q5-6`,
        tags: [],
        questionText: 'What is the last car of a train called?',
        answerChoices: {
            [AnswerChoice.A]: 'Lavoose',
            [AnswerChoice.B]: 'Madoose',
            [AnswerChoice.C]: 'Garoose',
            [AnswerChoice.D]: 'Caboose',
            [AnswerChoice.E]: 'Bakoose'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `the last car of a train is called the caboose.`,
    },


    {
        chapterIndex: 5,
        questionIndex: 7,
        qId: `q5-7`,
        tags: [],
        questionText: 'At around what speed (in miles per hour) does the average commercial airline fly?',
        answerChoices: {
            [AnswerChoice.A]: '500',
            [AnswerChoice.B]: '1000',
            [AnswerChoice.C]: '1500',
            [AnswerChoice.D]: '2000',
            [AnswerChoice.E]: '2500'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Commercial airlines generally fly at a speed of around 540–570 miles per hour.`,
    },


    {
        chapterIndex: 5,
        questionIndex: 8,
        qId: `q5-8`,
        tags: [],
        questionText: 'What is a word for the phenomenon that keeps boats afloat?',
        answerChoices: {
            [AnswerChoice.A]: 'Abaft',
            [AnswerChoice.B]: 'Binnacle',
            [AnswerChoice.C]: 'Dory',
            [AnswerChoice.D]: 'Buoyancy',
            [AnswerChoice.E]: 'Gash'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Buoyancy is an upward force exerted by a the water that keeps boats afloat.`,
    },

    {
        chapterIndex: 5,
        questionIndex: 9,
        qId: `q5-9`,
        tags: [],
        questionText: 'How many feet of chain has a vessel laid, when it has paid out "two shot”?',
        answerChoices: {
            [AnswerChoice.A]: '44',
            [AnswerChoice.B]: '60',
            [AnswerChoice.C]: '120',
            [AnswerChoice.D]: '180',
            [AnswerChoice.E]: '240'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `"Two shot" is equivalent to 180 feet (a single “shot” is 15 fathoms, or 90 feet).`,
    },
    {
        chapterIndex: 5,
        questionIndex: 10,
        qId: `q5-10`,
        tags: [],
        questionText: 'The difference between a sedan and a coupe is the number of __________?',
        answerChoices: {
            [AnswerChoice.A]: 'Doors',
            [AnswerChoice.B]: 'Wheels',
            [AnswerChoice.C]: 'Headlights',
            [AnswerChoice.D]: 'Gears',
            [AnswerChoice.E]: 'Mufflers'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `The difference between a sedan and a coupe is that a sedan has four doors while a coupe has to doors.`,
    },
    {
        chapterIndex: 5,
        questionIndex: 11,
        qId: `q5-11`,
        tags: [],
        questionText: 'Which of these is NOT a type of automotive transmission?',
        answerChoices: {
            [AnswerChoice.A]: 'Automatic',
            [AnswerChoice.B]: 'Manual',
            [AnswerChoice.C]: 'CVT',
            [AnswerChoice.D]: 'Eastern Standard'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Eastern standard is not a type of automotive transmission.`,
    },

    {
        chapterIndex: 5,
        questionIndex: 12,
        qId: `q5-12`,
        tags: [],
        questionText: 'What is the name of the left - hand side of a boat (from the perspective of standing in it facing forward)',
        answerChoices: {
            [AnswerChoice.A]: 'Starborn',
            [AnswerChoice.B]: 'Port',
            [AnswerChoice.C]: 'Bow',
            [AnswerChoice.D]: 'Starboard',
            [AnswerChoice.E]: 'Sort'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `When looking forward, toward the bow of a ship, port and starboard refer to the left and right sides, respectively.`,
    },
    {
        chapterIndex: 5,
        questionIndex: 13,
        qId: `q5-13`,
        tags: [],
        questionText: 'The inventor of cruise control was _____.',
        answerChoices: {
            [AnswerChoice.A]: 'a 12-year-old child.',
            [AnswerChoice.B]: 'a homeless man.',
            [AnswerChoice.C]: 'a blind man.',
            [AnswerChoice.D]: 'a robot.',
            [AnswerChoice.E]: 'a dog.'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Modern cruise control was invented in 1948 by mechanical engineer Ralph Teetor who became blind at age five in an accident. His idea was borne out of the frustration of riding in a car driven by his lawyer, who kept speeding up and slowing down as he talked.`,
    },


    // {
    //     chapterIndex: 5,
    //     questionIndex: ,
    //     qId: `q5-`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     correctAnswer: AnswerChoice.B,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     moreExplanation: ``,
    // },


    // Chapter 6 - Finance

    {
        chapterIndex: 6,
        questionIndex: 1,
        qId: `q6-1`,
        tags: [],
        questionText: `If you buy a call option on a stock, you are making a bet that:`,
        answerChoices: {
            [AnswerChoice.A]: 'Adoption assistance',
            [AnswerChoice.B]: 'Tuition reduction',
            [AnswerChoice.C]: 'Archer medical savings accounts',
            [AnswerChoice.D]: 'Membership dues to athletic facilities'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'the stock\'s price will go up.',
            [AnswerChoice.B]: 'the stock\'s price will go down.',
            [AnswerChoice.C]: 'the stock\'s price will move very little.',
            [AnswerChoice.D]: 'the the price of oil will go up.'
        },
        moreExplanation: `If you buy a call option, your position increases in value as the underlying stock price goes up.`,
    },
    {
        chapterIndex: 6,
        questionIndex: 2,
        qId: `q6-2`,
        tags: [],
        questionText: 'What is the formula for net working capital?',
        answerChoices: {
            [AnswerChoice.A]: 'Assets - Depreciation',
            [AnswerChoice.B]: 'Liabilities - Depreciation',
            [AnswerChoice.C]: 'Assets - Liabilities',
            [AnswerChoice.D]: 'Liabilities - Assets',
            [AnswerChoice.E]: 'Assets - Variable Costs'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Net working capital is calculated as the difference of assets minus liabilities.`,
    },
    {
        chapterIndex: 6,
        questionIndex: 3,
        qId: `q6-3`,
        tags: [],
        questionText: 'In the future value formula FV = X * (1 + i)^n, what does i represent?',
        answerChoices: {
            [AnswerChoice.A]: 'Number of periods',
            [AnswerChoice.B]: 'Original investment',
            [AnswerChoice.C]: 'Interest rate',
            [AnswerChoice.D]: 'Future Value',
            [AnswerChoice.E]: 'Asset Price'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `In the future value formula (and many other finance formulae) the lowercase i represents the interest rate.`,
    },
    {
        chapterIndex: 6,
        questionIndex: 4,
        qId: `q6-4`,
        tags: [],
        questionText: 'Business assets minus business liabilities equals which of the following?',
        answerChoices: {
            [AnswerChoice.A]: 'Accrual method of accounting',
            [AnswerChoice.B]: 'Net working capital',
            [AnswerChoice.C]: 'Liabilities',
            [AnswerChoice.D]: 'Assets',
            [AnswerChoice.E]: 'Variable Costs'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `Net working capital is calculated as the difference of assets minus liabilities.`,
    },
    {
        chapterIndex: 6,
        questionIndex: 5,
        qId: `q6-5`,
        tags: [],
        questionText: 'How any federal reserve banks are ther in the united states?',
        answerChoices: {
            [AnswerChoice.A]: '6',
            [AnswerChoice.B]: '8',
            [AnswerChoice.C]: '10',
            [AnswerChoice.D]: '12',
            [AnswerChoice.E]: '14'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: '',
            [AnswerChoice.E]: ''
        },
        moreExplanation: `There are 12 Federal Reserve Banks, each of which is responsible for member banks located in its district. They are located in Boston, New York, Philadelphia, Cleveland, Richmond, Atlanta, Chicago, St. Louis, Minneapolis, Kansas City, Dallas, and San Francisco.`,
    },

    // {
    //     chapterIndex: 5,
    //     questionIndex: ,
    //     qId: `q5-`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     correctAnswer: AnswerChoice.B,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     moreExplanation: ``,
    // },

    // {
    //     chapterIndex: 5,
    //     questionIndex: ,
    //     qId: `q5-`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     correctAnswer: AnswerChoice.B,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     moreExplanation: ``,
    // },

    // {
    //     chapterIndex: 5,
    //     questionIndex: ,
    //     qId: `q5-`,
    //     tags: [],
    //     questionText: '',
    //     answerChoices: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     correctAnswer: AnswerChoice.B,
    //     explanations: {
    //         [AnswerChoice.A]: '',
    //         [AnswerChoice.B]: '',
    //         [AnswerChoice.C]: '',
    //         [AnswerChoice.D]: '',
    //         [AnswerChoice.E]: ''
    //     },
    //     moreExplanation: ``,
    // },

    // How does the federal reserve change the money supply?

    // In what year was the first dollar bill printed?

    // How many federal reserve Banks are there in the us?


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