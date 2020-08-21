import { IQuestion, AnswerChoice } from "../../models/question";

// TEST / DEV Questions

// export const questionBank: IQuestion[] = [
//     {
//         qId: `q0-1`,
//         chapterIndex: 0,
//         questionIndex: 1,
//         tags: ['first question', 'yeah buddy'],
//         questionText: 'what is the meaning of this very long question that I am reading right now?',
//         answerChoices: {
//             [AnswerChoice.A]: 'chyeah this is an example of quite a long answer that surely would never fit on just one line!',
//             [AnswerChoice.B]: 'ok',
//             [AnswerChoice.C]: 'well then',
//             [AnswerChoice.D]: 'hmm',
//             [AnswerChoice.E]: 'say what, now?',
//         },
//         correctAnswer: AnswerChoice.A,
//         explanations: {
//             [AnswerChoice.A]: 'chyeah is the correct answer because... chyeah.',
//             [AnswerChoice.B]: 'I could be ok, but it\'s actually chyeah.',
//             [AnswerChoice.C]: 'ahh, well then... chyeah.',
//             [AnswerChoice.D]: 'hmmm... well that is interesting...',
//             [AnswerChoice.E]: 'yay, five choices!'
//         },
//         moreExplanation: 'The phrase chyeah originated in 1987 when people needed to express yeah in a more cool form.',
//     },
// {
//     chapterIndex: 0,
//     questionIndex: 2,
//     qId: `q0-2`,
//     tags: ['second question', 'yeah buddy'],
//     questionText: 'second question',
//     answerChoices: {
//         [AnswerChoice.A]: '1',
//         [AnswerChoice.B]: '2',
//         [AnswerChoice.C]: '3',
//         [AnswerChoice.D]: '4',
//         [AnswerChoice.E]: '5',
//     },
//     correctAnswer: AnswerChoice.D,
//     explanations: {
//         [AnswerChoice.A]: '1 is good, but 4 is better!',
//         [AnswerChoice.B]: '2 is for you, but 4 is much more. ;)',
//         [AnswerChoice.C]: '3 is a nice one, but four is t?".',
//         [AnswerChoice.E]: 'ahh four, what a great number!',
//         [AnswerChoice.D]: '5 is much too big. What do you think of four?',
//     },
//     moreExplanation: 'Four, 4, glorious FOUR!!',
// },
// {
//     chapterIndex: 2,
//     questionIndex: 1,
//     qId: `q2-1`,
//     tags: [],
//     questionText: 'Which of the following costs is NOT included in the basis of a patent a taxpayer gets for his invention?',
//     answerChoices: {
//         [AnswerChoice.A]: 'The cost of research (deducted as current business expense)',
//         [AnswerChoice.B]: 'Working model expenditures',
//         [AnswerChoice.C]: 'Experimental expenditures',
//         [AnswerChoice.D]: 'Attorney fees'
//     },
//     correctAnswer: AnswerChoice.A,
//     explanations: {
//         [AnswerChoice.A]: 'Attorney fees are the cost of research (deducted as current business expense).',
//         [AnswerChoice.B]: '[no reason provided why Working model expenditures is incorrect.]',
//         [AnswerChoice.C]: '[no reason provided why Experimental expenditures is incorrect.]',
//         [AnswerChoice.D]: '[no reason provided why Attorney fees is incorrect.]'
//     },
//     moreExplanation: `The cost of research (deducted as current business expense) cannot be included in the basis of a patent.

//     The basis of a patent a taxpayer gets for his invention is the cost of development, such as research and experimental expenditures, drawings, working models, and attorneys' and governmental fees. HOWEVER, if the taxpayer deducts the research and experimental expenditures as current business expenses, the taxpayer cannot include them in the basis of the patent. The value of the inventor's time spent on an invention is not part of the basis.`,
// },
// {
//     chapterIndex: 3,
//     questionIndex: 1,
//     qId: `q3-1`,
//     tags: [],
//     questionText: `On April 6, Sue Thompson bought a house to use as residential rental property. She made several repairs and had it ready for rent on July 5. She did not actually rent the property until August 1, and the family moved in on August 15.

//     The house is considered placed in service on:`,
//     answerChoices: {
//         [AnswerChoice.A]: 'April 6',
//         [AnswerChoice.B]: 'August 1',
//         [AnswerChoice.C]: 'August 15',
//         [AnswerChoice.D]: 'July 5'
//     },
//     correctAnswer: AnswerChoice.D,
//     explanations: {
//         [AnswerChoice.A]: '[no reason provided why April 6 is incorrect.]',
//         [AnswerChoice.B]: '[no reason provided why August 1 is incorrect.]".',
//         [AnswerChoice.C]: '[no reason provided why August 15 is incorrect.]',
//         [AnswerChoice.D]: 'The house is considered placed in service on July 5th when it was ready and available for rent. She can begin to depreciate it in July.'
//     },
//     moreExplanation: 'Property is placed in service when it is ready and available for a specific use, whether in a business activity, an income-producing activity, or a personal activity. Even if the property is not being used, it is in service when it is ready and available for its specific use.',
// },
// {
//     chapterIndex: 4,
//     questionIndex: 1,
//     qId: `q4-1`,
//     tags: [],
//     questionText: 'A disposition of property includes:',
//     answerChoices: {
//         [AnswerChoice.A]: 'Abandoned property',
//         [AnswerChoice.B]: 'Property transferred to satisfy a debt',
//         [AnswerChoice.C]: 'All of these choices',
//         [AnswerChoice.D]: 'Property exchanged for other property'
//     },
//     correctAnswer: AnswerChoice.C,
//     explanations: {
//         [AnswerChoice.A]: '"Abandoned property" is a disposition of property, but the other answer choices are true as well!',
//         [AnswerChoice.B]: '"Property transferred to satisfy a debt" is a disposition of property, but are the answer answer choices!',
//         [AnswerChoice.C]: 'The correct answer is all of these choices.',
//         [AnswerChoice.D]: '"Property exchanged for other property" is a disposition of property, but are the answer answer choices!'
//     },
//     moreExplanation: `Property is sold for cash or other property.
//     Property is exchanged for other property.
//     Money may be received as a tenant for the cancellation of a lease.
//     Property may be transferred to satisfy a debt.
//     Property may be abandoned.
//     A bank or other financial institution may foreclose on a mortgage or repossesses the financed property.

//     (Not a complete list.)`,
// },
// {
//     chapterIndex: 5,
//     questionIndex: 1,

//     qId: `q5-1`,
//     tags: [],
//     questionText: 'Business bad debts are deducted:',
//     answerChoices: {
//         [AnswerChoice.A]: 'On Schedule 1, line 21 of Form 1040',
//         [AnswerChoice.B]: 'On the business tax return as an expense',
//         [AnswerChoice.C]: 'On Schedule D (Form 1040) as short-term capital loss',
//         [AnswerChoice.D]: 'On Schedule D (Form 1040) as long-term capital loss'
//     },
//     correctAnswer: AnswerChoice.B,
//     explanations: {
//         [AnswerChoice.A]: '__',
//         [AnswerChoice.B]: 'On the business tax return as an expense.',
//         [AnswerChoice.C]: '__',
//         [AnswerChoice.D]: '__'
//     },
//     moreExplanation: `Business bad debts are deducted as an expense on the business tax return when figuring business income or loss.

//     Non-business bad debts are reported as short-term capital losses on Form 8949 and carried to Schedule D (Form 1040). Business bad debts are deducted as an expense.`,
// }

// ]

/**
 * Prod Questions!
 */

export const questionBank: IQuestion[] = [
    {
        chapterIndex: 1,
        questionIndex: 1,
        qId: `q1-1`,
        tags: [],
        questionText: 'What is a group of hyenas called a:',
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
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'You can only get vitamin A can only be got via...',
            [AnswerChoice.B]: 'You can only get vitamin B can only be got via...',
            [AnswerChoice.C]: 'You can only get vitamin C can only be got via...',
            [AnswerChoice.D]: 'You can only get vitamin D can only be got via...'
        },
        moreExplanation: `The cost of research (deducted as current business expense) cannot be included in the basis of a patent.
        
        The basis of a patent a taxpayer gets for his invention is the cost of development, such as research and experimental expenditures, drawings, working models, and attorneys' and governmental fees. HOWEVER, if the taxpayer deducts the research and experimental expenditures as current business expenses, the taxpayer cannot include them in the basis of the patent. The value of the inventor's time spent on an invention is not part of the basis.`,
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