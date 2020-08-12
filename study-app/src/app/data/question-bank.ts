import { IQuestion, AnswerChoice } from "../models/question";

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
        questionText: 'A domestic LLC with at least two members that does NOT file Form 8832 is classified as a ____________ for Federal income tax purposes.',
        answerChoices: {
            [AnswerChoice.A]: 'Partnership',
            [AnswerChoice.B]: 'Corporation',
            [AnswerChoice.C]: 'Sole Proprietorship',
            [AnswerChoice.D]: 'Subchapter S-Corporation',
            [AnswerChoice.E]: '',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'A domestic LLC with at least two members that does NOT file Form 8832 is classified as a partnership for Federal income tax purposes.',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
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
        questionText: 'If an election is NOT made and the default rules apply, which of the following is true?',
        answerChoices: {
            [AnswerChoice.A]: 'Any new domestic eligible entity having at least two or more members is classified as a partnership.',
            [AnswerChoice.B]: 'Any new domestic eligible entity with a single member is disregarded as an entity separate from its owner.',
            [AnswerChoice.C]: 'If all members of a new foreign entity have limited liability, it is classified as an association taxable as a corporation.',
            [AnswerChoice.D]: 'All of these choices are true.'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: 'All of these choices are true!'
        },
        moreExplanation: `All of the statements are true. Unless an election is made on Form 8832, a domestic eligible entity is:

        1. A partnership if it has two or more members
        2. Disregarded as an entity separate from its owner if it has a single owner
        
        FOREIGN DEFAULT RULE. Unless an election is made on Form 8832, a foreign eligible entity is:
        
        1. A partnership if it has two or more members and at least one member does not have limited liability
        2. An association taxable as a corporation if all members have limited liability
        3. Disregarded as an entity separate from its owner if it has a single owner that does not have limited liability`,
    },
    {
        chapterIndex: 1,
        questionIndex: 3,
        qId: `q1-3`,
        tags: [],
        questionText: 'Which of the following is NOT characteristic of a sole proprietorship?',
        answerChoices: {
            [AnswerChoice.A]: 'Income from the business is generally subject to self-employment taxes.',
            [AnswerChoice.B]: 'Income and expenses of the proprietorship retain their character when reported by the proprietor.',
            [AnswerChoice.C]: 'A sole proprietorship is a separate legal entity.',
            [AnswerChoice.D]: 'A sole proprietor can transfer his appreciated assets to and from the business activity without incurring a tax liability.'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: 'A sole proprietorship is a separate legal entity.',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A sole proprietorship is conducted in the owner's individual capacity without the organization of a separate legal entity.

        The net profit or loss from the proprietorship is reported on Schedule C, Form 1040 and is generally subject to self-employment tax.
        
        Income and expenses of the proprietorship retain their character when reported by the proprietor. Ordinary income of the proprietorship is treated as ordinary income on the owner's individual Form 1040, and capital gain is treated as capital gain on the owner's individual Form 1040.
        
        A sole proprietor can transfer appreciated assets to and from the business without incurring a tax liability. Since no separate entity exists, a sale of the business will be treated as a sale of each of the individual assets of the proprietorship.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 4,
        qId: `q1-4`,
        tags: [],
        questionText: 'From a liability standpoint, a sole proprietorship and a ____________ are comparable.',
        answerChoices: {
            [AnswerChoice.A]: 'Family limited partnership',
            [AnswerChoice.B]: 'None of these choices',
            [AnswerChoice.C]: 'Limited partnership',
            [AnswerChoice.D]: 'General partnership',
            [AnswerChoice.E]: '',
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: 'From a liability standpoint, a sole proprietorship and a general partnership are comparable.',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `From a liability standpoint, a general partnership is comparable to a sole proprietorship since a general partner has unlimited liability for the obligations of the partnership.
        
        Limited partners are only at risk for the amounts they have invested in the partnership. In limited partnerships, only the general partner bears the risk of unlimited liability.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 5,
        qId: `q1-5`,
        tags: [],
        questionText: 'A domestic limited liability company with at least two members that does NOT file Form 8832, Entity Classification Election, is classified as:',
        answerChoices: {
            [AnswerChoice.A]: 'A corporation',
            [AnswerChoice.B]: 'A partnership',
            [AnswerChoice.C]: 'An entity disregarded as an entity separate from its owner by applying the rules in regulations section 301.7701-3',
            [AnswerChoice.D]: 'A non-entity which requires members to report the income and related expenses on Form 1040'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: 'A domestic limited liability company with at least two members that does NOT file Form 8832, Entity Classification Election, is classified as a partnership.',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `It is correct that a domestic LLC with at least two members that does NOT file Form 8832 is classified as a partnership for federal income tax purposes.

        LIMITED LIABILITY COMPANY. A limited liability company (LLC) is an entity formed under state law by filing articles of organization as an LLC. Unlike a partnership, none of the members of an LLC are personally liable for its debts. An LLC may be classified as either a partnership, a corporation, or an entity disregarded as an entity separate from its owner by applying the rules in regulations section 301.7701-3.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 6,
        qId: `q1-6`,
        tags: [],
        questionText: 'Which of the following is NOT a characteristic of a C corporation?',
        answerChoices: {
            [AnswerChoice.A]: 'It is subject to one level of taxation.',
            [AnswerChoice.B]: 'Its equity structure can be comprised of more than one class of stock.',
            [AnswerChoice.C]: 'It must adhere to corporate formalities.',
            [AnswerChoice.D]: 'It is a permanent legal entity that has an independent existence separate and distinct from its owners.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'It is subject to one level of taxation.',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `The corporation is subject to federal income tax separate from its owners. The profits that have accumulated after payment of the corporate level tax are subject to tax once again when those profits are distributed to the owners as dividends. This is referred to as "double taxation."

        A corporation is a permanent legal entity that has an independent existence separate and distinct from its owners. In order to maintain that separate status, the corporation must adhere to "corporate formalities" such as obtaining and maintaining state registration, selecting officers, and holding shareholder meetings and keeping minutes.
        
        A corporation's equity structure can be comprised of multiple classes of equity investment (stock). Stock may be common or`,
    },
    {
        chapterIndex: 1,
        questionIndex: 7,
        qId: `q1-7`,
        tags: [],
        questionText: 'The tax advantage of _____________ is that qualifying businesses may be treated as partnerships for tax purposes, thereby avoiding the problem of double taxation associated with regular corporations.',
        answerChoices: {
            [AnswerChoice.A]: 'C-Corporations',
            [AnswerChoice.B]: 'Professional Service Corporations',
            [AnswerChoice.C]: 'Sole Proprietorship',
            [AnswerChoice.D]: 'LLCs'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: 'The tax advantage of LLCs is that qualifying businesses may be treated as partnerships for tax purposes, thereby avoiding the problem of double taxation associated with regular corporations.'
        },
        moreExplanation: ``,
    },
    {
        chapterIndex: 1,
        questionIndex: 8,
        qId: `q1-8`,
        tags: [],
        questionText: 'A taxpayer has adopted a tax year if the taxpayer:',
        answerChoices: {
            [AnswerChoice.A]: 'Filed an application for an extension of time to file an income tax return',
            [AnswerChoice.B]: 'Filed an application for an employer identification number',
            [AnswerChoice.C]: 'Filed a first income tax return using that tax year',
            [AnswerChoice.D]: 'Paid estimated taxes for that tax year'
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
    {
        chapterIndex: 1,
        questionIndex: 9,
        qId: `q1-9`,
        tags: [],
        questionText: 'Which of the following dates would NOT be considered the end of a tax year?',
        answerChoices: {
            [AnswerChoice.A]: 'April 15, 2018',
            [AnswerChoice.B]: 'The last Friday in June',
            [AnswerChoice.C]: 'September 30, 2018',
            [AnswerChoice.D]: 'December 31, 2018'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `April 15, 2018 would not be considered the end of a tax year. April 15, the due date for individuals. A calendar year is 12 consecutive months beginning January 1 and ending December 31.

        Taxpayers can elect to use a 52-53 week tax year if the taxpayer keeps books and records and reports income and expenses on that basis. If a taxpayer makes this election, the tax year will be 52 or 53 weeks long and always end on the same day of the week. Taxpayer can choose to have his tax year end on the same day of the week that:
        
        a. Last occurs in a particular month, or
        b. Occurs nearest to the last day of a particular calendar month.`,
    },
    {
        chapterIndex: 1,
        questionIndex: 10,
        qId: `q1-10`,
        tags: [],
        questionText: `A partnership is generally required to have one of the following tax years.
        
        Which of the following is NOT one of them?`,
        answerChoices: {
            [AnswerChoice.A]: 'A tax year common to the partners with an interest of 3% or more in the partnership profits or capital',
            [AnswerChoice.B]: 'A tax year common to all of the partnerships principal partners',
            [AnswerChoice.C]: 'The tax year of a majority of its partners',
            [AnswerChoice.D]: 'The tax year that results in the least aggregate deferral of income',
            [AnswerChoice.E]: '',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'A tax year common to the partners with an interest of 3% or more in the partnership profits or capital.',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `A tax year common to the partners with an interest of 3% or more in the partnership profits or capital is not one of the required tax years.

        RULE. If there is no majority tax year, then the tax year common to all of the partnership's principal partners (partners with an interest of 5% OR MORE in the partnership profits or capital).
        
        A partnership is generally required to have one of the following tax years:
        
        1. The tax year of a majority of its partners (majority tax year)
        2. If there is no majority tax year, then the tax year common to all of the partnership's principal partners (partners with an interest of 5% OR MORE in the partnership profits or capital)
        3. If there is neither a majority tax year nor a tax year common to all principal partners, then the tax year that results in the least aggregate deferral of income
        4. Some other tax year, if:
        a.The partnership can establish that there is a business purpose for the tax year.
        b.The partnership elects under section 444 to have a tax year other than a required tax year by filing Form 8716, Election to Have a Tax Year Other Than a Required Tax Year. For a partnership to have this election in effect, it must make the payments required by section 7519 and file Form 8752.`,
    },
    
    // Chapter 2
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
            [AnswerChoice.D]: 'Attorney fees',
            [AnswerChoice.E]: '',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The cost of research (deducted as current business expense)',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
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
            [AnswerChoice.A]: ' April 6',
            [AnswerChoice.B]: 'August 1',
            [AnswerChoice.C]: ' August 15',
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
    }
    // ,
    // {
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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
    

    /**
     * Copy this for new questions
     */

    // {
    //     chapterIndex: ?,
    //     questionIndex: ?,
    //     qId: `q?-?`,
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

]