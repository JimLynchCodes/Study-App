import { IQuestion, AnswerChoice } from "../models/question";

export const questionBank: IQuestion[] = [
    {
        qId: `q0-1`,
        chapterIndex: 0,
        questionIndex: 1,
        tags: ['first question', 'yeah buddy'],
        questionText: 'what?',
        answerChoices: {
            [AnswerChoice.A]: 'chyeah',
            [AnswerChoice.B]: 'ok',
            [AnswerChoice.C]: 'well then',
            [AnswerChoice.D]: 'hmm',
            [AnswerChoice.E]: 'say what, now?',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'chyeah is the correct answer because... chyeah.',
            [AnswerChoice.B]: 'I could be ok, but it\'s actually chyeah.',
            [AnswerChoice.C]: 'ahh, well then... chyeah.',
            [AnswerChoice.D]: 'hmmm... well that is interesting...',
            [AnswerChoice.E]: 'yay, five choices!'
        },
        moreExplanation: 'The phrase chyeah originated in 1987 when people needed to express yeah in a more cool form.',
    },
    {
        chapterIndex: 0,
        questionIndex: 2,
        qId: `q0-2`,
        tags: ['second question', 'yeah buddy'],
        questionText: 'second question',
        answerChoices: {
            [AnswerChoice.A]: '1',
            [AnswerChoice.B]: '2',
            [AnswerChoice.C]: '3',
            [AnswerChoice.D]: '4',
            [AnswerChoice.E]: '5',
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '1 is good, but 4 is better!',
            [AnswerChoice.B]: '2 is for you, but 4 is much more. ;)',
            [AnswerChoice.C]: '3 is a nice one, but four is t?".',
            [AnswerChoice.E]: 'ahh four, what a great number!',
            [AnswerChoice.D]: '5 is much too big. What do you think of four?',
        },
        moreExplanation: 'Four, 4, glorious FOUR!!',
    },
    {
        chapterIndex: 2,
        questionIndex: 1,
        qId: `q2-1`,
        tags: [],
        questionText: 'Which of the following costs is NOT included in the basis of a patent a taxpayer gets for his invention?',
        answerChoices: {
            [AnswerChoice.A]: 'The cost of research (deducted as current business expense)',
            [AnswerChoice.B]: 'Working model expenditures',
            [AnswerChoice.C]: 'Experimental expenditures',
            [AnswerChoice.D]: 'Attorney fees'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'Attorney fees are the cost of research (deducted as current business expense).',
            [AnswerChoice.B]: '[no reason provided why Working model expenditures is incorrect.]',
            [AnswerChoice.C]: '[no reason provided why Experimental expenditures is incorrect.]',
            [AnswerChoice.D]: '[no reason provided why Attorney fees is incorrect.]'
        },
        moreExplanation: `The cost of research (deducted as current business expense) cannot be included in the basis of a patent.

        The basis of a patent a taxpayer gets for his invention is the cost of development, such as research and experimental expenditures, drawings, working models, and attorneys' and governmental fees. HOWEVER, if the taxpayer deducts the research and experimental expenditures as current business expenses, the taxpayer cannot include them in the basis of the patent. The value of the inventor's time spent on an invention is not part of the basis.`,
    },
    {
        chapterIndex: 3,
        questionIndex: 1,
        qId: `q3-1`,
        tags: [],
        questionText: `On April 6, Sue Thompson bought a house to use as residential rental property. She made several repairs and had it ready for rent on July 5. She did not actually rent the property until August 1, and the family moved in on August 15.

        The house is considered placed in service on:`,
        answerChoices: {
            [AnswerChoice.A]: 'April 6',
            [AnswerChoice.B]: 'August 1',
            [AnswerChoice.C]: 'August 15',
            [AnswerChoice.D]: 'July 5'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '[no reason provided why April 6 is incorrect.]',
            [AnswerChoice.B]: '[no reason provided why August 1 is incorrect.]".',
            [AnswerChoice.C]: '[no reason provided why August 15 is incorrect.]',
            [AnswerChoice.D]: 'The house is considered placed in service on July 5th when it was ready and available for rent. She can begin to depreciate it in July.'
        },
        moreExplanation: 'Property is placed in service when it is ready and available for a specific use, whether in a business activity, an income-producing activity, or a personal activity. Even if the property is not being used, it is in service when it is ready and available for its specific use.',
    },
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
            [AnswerChoice.A]: '"Abandoned property" is a disposition of property, but the other answer choices are true as well!',
            [AnswerChoice.B]: '"Property transferred to satisfy a debt" is a disposition of property, but are the answer answer choices!',
            [AnswerChoice.C]: 'The correct answer is all of these choices.',
            [AnswerChoice.D]: '"Property exchanged for other property" is a disposition of property, but are the answer answer choices!'
        },
        moreExplanation: `Property is sold for cash or other property.
        Property is exchanged for other property.
        Money may be received as a tenant for the cancellation of a lease.
        Property may be transferred to satisfy a debt.
        Property may be abandoned.
        A bank or other financial institution may foreclose on a mortgage or repossesses the financed property.
        
        (Not a complete list.)`,
    },
    {
        chapterIndex: 5,
        questionIndex: 1,

        qId: `q5-1`,
        tags: [],
        questionText: 'Business bad debts are deducted:',
        answerChoices: {
            [AnswerChoice.A]: 'On Schedule 1, line 21 of Form 1040',
            [AnswerChoice.B]: 'On the business tax return as an expense',
            [AnswerChoice.C]: 'On Schedule D (Form 1040) as short-term capital loss',
            [AnswerChoice.D]: 'On Schedule D (Form 1040) as long-term capital loss'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '__',
            [AnswerChoice.B]: 'On the business tax return as an expense.',
            [AnswerChoice.C]: '__',
            [AnswerChoice.D]: '__'
        },
        moreExplanation: `Business bad debts are deducted as an expense on the business tax return when figuring business income or loss.

        Non-business bad debts are reported as short-term capital losses on Form 8949 and carried to Schedule D (Form 1040). Business bad debts are deducted as an expense.`,
    }
]