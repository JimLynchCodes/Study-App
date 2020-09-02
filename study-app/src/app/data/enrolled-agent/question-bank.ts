import { IQuestion, AnswerChoice } from "../_data.models/question.model";

// TEST / DEV Questions

// export const questionBank: IQuestion[] = [
//
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
            [AnswerChoice.D]: 'Subchapter S-Corporation'
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
            [AnswerChoice.D]: 'General partnership'
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

    {
        chapterIndex: 1,
        questionIndex: 11,
        qId: `q1-11`,
        tags: [],
        questionText: 'The XYZ Partnership is comprised of. What is the partnership’s “required tax year” end?',
        answerChoices: {
            [AnswerChoice.A]: 'June 30',
            [AnswerChoice.B]: 'None of these choices',
            [AnswerChoice.C]: 'September 30',
            [AnswerChoice.D]: 'December 31'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is June 30',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Their required tax year end is June 30. Sam’s 30% + Earl’s 30% = 60%. Both of their tax years end on June 30. Since this is a majority, June 30 is the required tax year.
       A partnership generally must conform its tax year to its partners’ tax years. The rules for determining the required tax year are as follows:
       
       MAJORITY INTEREST TAX YEAR. If one or more partners having the same tax year own an interest in partnership profits and capital of more than 50% (a majority interest), the partnership must use the tax year of those partners.
       TESTING DAY. The partnership determines if there is a majority interest tax year on the testing day, which is usually the first day of the partnership’s current tax year.
       CHANGE IN TAX YEAR. If a partnership’s majority tax year changes, it will not be required to change to another tax year for 2 years following the year of change.
       PRINCIPAL PARTNER. If there is no majority interest tax year, the partnership must use the tax year of all its principal partners.
       LEAST AGGREGATE DEFERRAL OF INCOME. If there is no majority interest tax year and the principal partners do not have the same tax year, the partnership generally must use a tax year that results in the least aggregate deferral of income to the partners.`
    },

    {
        chapterIndex: 1,
        questionIndex: 12,
        qId: `q1-12`,
        tags: [],
        questionText: `New ABC Partnership is organized during the year with three general partners. The partners include a corporation with a tax year ending on March 31 and a 60% interest in partnership capital and profits, and two individuals, each having a calendar tax year and a 20% interest in partnership capital and profits.
       The partnership’s required tax year ends on:`,
        answerChoices: {
            [AnswerChoice.A]: 'March 31',
            [AnswerChoice.B]: 'December 31',
            [AnswerChoice.C]: 'September 30',
            [AnswerChoice.D]: 'October 31'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is March 31',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 1,
        questionIndex: 13,
        qId: `q1-13`,
        tags: [],
        questionText: `Maggie and Simon each have a 50% interest in a partnership that started business October 1. Maggie uses a calendar year while Simon has a fiscal year ending November 30.
       Which of the following is correct?`,
        answerChoices: {
            [AnswerChoice.A]: 'Both (The partnership may use the fiscal year ending September 30 provided a section 444 election and payment are made.) and (The partnership may use the fiscal year ending November 30 as that results in the least deferral.)',
            [AnswerChoice.B]: 'The partnership may use the fiscal year ending November 30 as that results in the least deferral.',
            [AnswerChoice.C]: 'The partnership may use the fiscal year ending September 30 provided a section 444 election and payment are made.',
            [AnswerChoice.D]: 'The partnership may use the calendar year.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The partnership may not use the calendar year. It does not result in the least aggregate deferral of income.`
    },
    {
        chapterIndex: 1,
        questionIndex: 14,
        qId: `q1-14`,
        tags: [],
        questionText: 'Ray Johnson operates a retail store using the accrual method of accounting and reporting on Schedule C, Net Profit or Loss from Business. He plans to start a lawn-care service to operate only in the summer months. With regard to this scenario, which of the following statements is true?',
        answerChoices: {
            [AnswerChoice.A]: 'A different accounting method may be used for each separate and distinct business if the method used for each clearly shows the income.',
            [AnswerChoice.B]: 'All businesses operated by one individual must use the same method of accounting.',
            [AnswerChoice.C]: 'He can use the cash method of accounting for the lawn care business by first getting IRS permission.',
            [AnswerChoice.D]: 'He must use the accrual method of accounting for the lawn care business.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `If a taxpayer operates more than one business, a different accounting method may be used for each separate and distinct business if the method used for each clearly shows the income. They are separate and distinct only if the taxpayer maintains complete and separate books and records for each business.
       BUSINESS AND PERSONAL ITEMS. A taxpayer can account for business and personal items under different accounting methods. For example, Ray can figure his business income under an accrual method, even if he uses the cash method to figure personal items.`

    },
    {
        chapterIndex: 1,
        questionIndex: 15,
        qId: `q1-15`,
        tags: [],
        questionText: 'When a taxpayer operates two or more separate and distinct businesses:',
        answerChoices: {
            [AnswerChoice.A]: 'The same accounting method does not have to be used for both businesses if separate and distinct books and records are kept.',
            [AnswerChoice.B]: 'The IRS must approve the accounting method.',
            [AnswerChoice.C]: 'The cash method of accounting must be used for both businesses.',
            [AnswerChoice.D]: 'The same accounting period must be used for both businesses.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `When a taxpayer operates two or more separate and distinct businesses, with separate and distinct books and records, the same accounting method does NOT have to be used for both businesses. `
    },
    {
        chapterIndex: 1,
        questionIndex: 16,
        qId: `q1-16`,
        tags: [],
        questionText: 'Which of the following changes does NOT require IRS approval?',
        answerChoices: {
            [AnswerChoice.A]: 'An adjustment in the useful life of a depreciable asset',
            [AnswerChoice.B]: 'A change from the cash method of accounting to an accrual method',
            [AnswerChoice.C]: 'All of these choices',
            [AnswerChoice.D]: 'A change from an accrual method of accounting to the cash method'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `An adjustment in the useful life of a depreciable asset is not a change in accounting methods and does NOT require IRS approval.
       The following changes are examples of types of changes that require IRS approval:
       
       A change from the cash method to an accrual method or vice versa
       A change in the method or basis used to value inventory
       A change in the method of figuring depreciation (except certain permitted changes to the straight-line method for property placed in service before 1981)`
    },
    {
        chapterIndex: 1,
        questionIndex: 17,
        qId: `q1-17`,
        tags: [],
        questionText: `In September 2018, Charlie, a self-employed lawyer, performed legal services for a client that has a men’s clothing store. In payment for his services, Charlie received store credit of $3,500 in 2018. Charlie uses $1,500 of his store credit in 2018 and the balance in 2019.
    How much income should Charlie include in 2018 and 2019?`,
        answerChoices: {
            [AnswerChoice.A]: '2018 $3,500; 2019 $ -0-',
            [AnswerChoice.B]: '2018 $1,500; 2019 $2,000',
            [AnswerChoice.C]: '2018 $1,750; 2019 $1,750',
            [AnswerChoice.D]: '2018 $ -0-; 2019 $3,500'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `$3,500 is reported for tax year 2018 and $-0- is reported for tax year 2019. Under the cash method of accounting, all items of income actually or constructively received during the year are included in gross income for that year. If property and services are received, the fair market value is included in income.
       Under the accrual method of accounting, generally include an amount in gross income for the tax year in which all events that fix the taxpayer’s right to receive the income have occurred, and the amount can be determined with reasonable accuracy.`
    },
    {
        chapterIndex: 1,
        questionIndex: 18,
        qId: `q1-18.`,
        tags: [],
        questionText: 'The Pine Tree Partnership produces and sells toys. It had gross receipts of $1,000,000 in 2018. It had gross receipts of $500,000 in 2014; $1,000,000 in 2015 and $1,500,000 in 2017. Pine Tree may use the cash method of accounting.',
        answerChoices: {
            [AnswerChoice.A]: 'True',
            [AnswerChoice.B]: 'False',

        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Tree may NOT use the cash method of accounting. `
    },
    {
        chapterIndex: 1,
        questionIndex: 19,
        qId: `q1-19`,
        tags: [],
        questionText: `Eric, a cash basis taxpayer, owned 25% of Watson, Inc. stock. Watson, Inc. files a calendar year U.S. Corporate Income Tax Return Form 1120 employing the accrual method of accounting. Eric loaned Watson, Inc. $100,000 at the beginning of 2017. The accrued interest on this loan was $5,000 as of December 31, 2017. Watson, Inc. paid Eric the $5,000 in January of 2018.
    How should Eric report the interest income and Watson, Inc.report the interest expense from this transaction ?`,

        answerChoices: {
            [AnswerChoice.A]: 'Watson, Inc. reports the expense in 2017 and Eric reports the income in 2018.',
            [AnswerChoice.B]: 'Watson, Inc. reports the expense in 2017 and Eric reports the income in 2017.',
            [AnswerChoice.C]: 'None of these choices',
            [AnswerChoice.D]: 'Watson, Inc. reports the expense in 2018 and Eric reports the income in 2018.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Watson, Inc. reports the expense in 2017 and Eric reports the income in 2018.
       Under an accrual method of accounting, generally report income in the year earned and DEDUCT or capitalize expenses in the year incurred. Since the accrued interest was $5,000 as of 12/31/2017, Watson Inc. economic performance has occurred and the expense can be deducted. Economic performance occurs with the passage of time (as the borrower uses, and the lender forgoes use of, the lender’s money) rather than as payments are made.
       
       Eric includes the $5,000 as income in 2018 because under the cash method, include in gross income all items of income actually or constructively received during the tax year. Income is constructively received when an amount is credited to taxpayer’s account or made available to him without restriction.
       
       Business expenses and interest owed to a RELATED person who uses the cash method of accounting are not deductible UNTIL taxpayer makes the payment and the corresponding amount is includible in the related person’s gross income. HOWEVER, in this problem, Watson Inc. and Eric are not related persons. For purposes of the related persons rule, a related person is an individual and a corporation when the individual owns, directly or indirectly, more than 50% of the value of the outstanding stock of the corporation. Therefore Watson, Inc. deducts the interest expense in the year incurred; and Eric reports the interest in 2018 because this is when he actually received the income.`
    },
    {
        chapterIndex: 1,
        questionIndex: 20,
        qId: `q1-20`,
        tags: [],
        questionText: 'Which of the following items is NOT included in inventory?',
        answerChoices: {
            [AnswerChoice.A]: 'Goods consigned TO the taxpayer',
            [AnswerChoice.B]: 'Work in process',
            [AnswerChoice.C]: 'Goods OUT on consignment',
            [AnswerChoice.D]: 'Raw materials'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The following merchandise is NOT included in inventory:
       Goods the taxpayer has sold, but only if title has passed to the buyer
       Goods consigned to the taxpayer
       Goods ordered for future delivery if the taxpayer does not yet have title
       Inventory includes all of the following:
       
       Merchandise or stock in trade
       Raw materials
       Work in process
       Finished products
       Supplies that physically become a part of the item intended for sale
       Merchandise included in inventory includes:
       
       Purchased merchandise if title has passed to the taxpayer, even if the merchandise is in transit or the taxpayer does not have physical possession for another reason
       Goods under contract for sale that the taxpayer has not yet segregated and applied to the contract
       Goods out on consignment
       Goods held for a sale in display rooms, merchandise mart rooms, or booths located away from the taxpayer’s place of business`
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
            [AnswerChoice.D]: 'Attorney fees'
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
        questionText: 'Business bad debts are deducted:',
        answerChoices: {
            [AnswerChoice.A]: 'On Schedule 1, line 21 of Form 1040',
            [AnswerChoice.B]: 'On the business tax return as an expense',
            [AnswerChoice.C]: 'On Schedule D (Form 1040) as short-term capital loss',
            [AnswerChoice.D]: 'On Schedule D (Form 1040) as long-term capital loss'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: 'Business bad debts are deducted on the business tax return as an expense',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Business bad debts are deducted as an expense on the business tax return when figuring business income or loss.

        Non-business bad debts are reported as short-term capital losses on Form 8949 and carried to Schedule D (Form 1040). Business bad debts are deducted as an expense.`,
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
        questionText: 'Patricia is a computer programmer and was laid off from Hard Drive Inc. due to downsizing. Hard Drive asked Patricia to work on a one-time project. They agreed to pay her a flat fee to create an advance product. The number of hours to complete this project is unknown and there is no guaranteed minimum payment for the hours spent. Hard Drive provides the specifications to Patricia for the product. Patricia uses her own high-end computer, and is not required to attend meetings held by the software engineering group. Is Patricia an independent contractor?',
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
        questionText: 'The receipt of Agricultural Program Payments by a farmer for refraining from growing crops should be reported as:',
        answerChoices: {
            [AnswerChoice.A]: 'Farm income, not subject to self-employment tax',
            [AnswerChoice.B]: 'Farm income, subject to self-employment tax',
            [AnswerChoice.C]: 'Rental income, not subject to self-employment tax',
            [AnswerChoice.D]: 'Miscellaneous income on Form 1040'
        },
        correctAnswer: AnswerChoice.B,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: 'Farm income, subject to self-employment tax',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `The receipt of Agricultural Program Payments by a farmer for refraining from growing crops should be reported as farm income on Schedule F, line 6a (Form 1040). These payments are subject to self-employment tax.

        LINES 6a and 6b, Schedule F. Enter on line 6a the TOTAL of the following amounts:
        
        a. Price support payments
        b. Market gain from the repayment of a secured Commodity Credit Corporation (CCC) loan for less than the original loan amount
        c. Diversion payments
        d. Cost-share payments (sight drafts)
        e. Payments in the form of materials (such as fertilizer or lime) or services (such as grading or building dams)
        
        These amounts are government payments taxpayer received, usually reported to the taxpayer on FORM 1099-G. Report on line 6b only the taxable amount.`,
    },

    // Chapter 9
    // (NOTE: DUP of 10-1!!)
    {
        chapterIndex: 9,
        questionIndex: 1,
        qId: `q9-1`,
        tags: [],
        questionText: 'Regarding partnership "pass-through" income, which of the following statements is FALSE?',
        answerChoices: {
            [AnswerChoice.A]: 'Partners are not employees of the partnership.',
            [AnswerChoice.B]: 'Partners must report their share of partnership income even if a distribution is not made.',
            [AnswerChoice.C]: 'Each partner reports his share of the partnership net profit or loss on his personal Form 1040 tax return.',
            [AnswerChoice.D]: 'Neither general partners nor limited partners must pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: 'Neither general partners nor limited partners must pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.'
        },
        moreExplanation: `The FALSE statement is (Neither general partners nor limited partners must pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.) because GENERAL partners MUST pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.

        a. Each partner reports his share of the partnership net profit or loss on his personal Form 1040 tax return.
        b. Partners must report their share of partnership income even if a distribution is not made.
        c. Partners are not employees of the partnership.
        d. Limited partners are subject to self-employment tax ONLY on guaranteed payments, such as professional fees for services rendered.`,
    },

    // Chapter 10
    {
        chapterIndex: 10,
        questionIndex: 1,
        qId: `q10-1`,
        tags: [],
        questionText: 'Regarding partnership "pass-through" income, which of the following statements is FALSE?',
        answerChoices: {
            [AnswerChoice.A]: 'Partners are not employees of the partnership.',
            [AnswerChoice.B]: 'Partners must report their share of partnership income even if a distribution is not made.',
            [AnswerChoice.C]: 'Each partner reports his share of the partnership net profit or loss on his personal Form 1040 tax return.',
            [AnswerChoice.D]: 'Neither general partners nor limited partners must pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: 'Neither general partners nor limited partners must pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.'
        },
        moreExplanation: `The FALSE statement is (Neither general partners nor limited partners must pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.) because GENERAL partners MUST pay self-employment tax on their net earnings from self-employment assigned to them from the partnership.

        a. Each partner reports his share of the partnership net profit or loss on his personal Form 1040 tax return.
        b. Partners must report their share of partnership income even if a distribution is not made.
        c. Partners are not employees of the partnership.
        d. Limited partners are subject to self-employment tax ONLY on guaranteed payments, such as professional fees for services rendered.`,
    },

    // Chapter 11

    {
        chapterIndex: 11,
        questionIndex: 1,
        qId: `q11-1`,
        tags: [],
        questionText: `Phil and Don are equal partners in the Hilldale Company. Hilldale has a fiscal year ending on January 31. Phil and Don file their individual tax returns on a calendar year basis. For the tax year ending January 31, 2018, Hilldale had taxable income from the active conduct of its business of $100,000 of which $60,000 was earned in 2017.

        How much of their partnership taxable income should Phil and Don each include in computing their taxable income limit for the 2018 tax year?`,
        answerChoices: {
            [AnswerChoice.A]: '$30,000',
            [AnswerChoice.B]: '$20,000',
            [AnswerChoice.C]: '$50,000',
            [AnswerChoice.D]: '$-0-'
        },
        correctAnswer: AnswerChoice.C,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '$50,000',
            [AnswerChoice.D]: ''
        },
        moreExplanation: `Phil and Don each include $50,000 (each partner's entire share) of partnership taxable income in computing their business income limit for the year.

        A partner's income or loss from a partnership is the partner's distributive share of partnership items for the partnership's tax year that ends with or WITHIN THE PARTNER'S tax year.
        
        For purposes of the business income limit, the taxable income of a partner engaged in the active conduct of one or more of a partnership's trades or businesses includes his allocable share of taxable income derived from the partnership's active conduct of any trade or business.
        
        DIFFERENT TAX YEARS. For purposes of section 179, if the partner's tax year and that of the partnership differ, the partner's share of the partnership's taxable income for a tax year is determined based on the partnership tax year that ends with or within the partner's tax year.`,
    },

    // Chapter 12

    {
        chapterIndex: 12,
        questionIndex: 1,
        qId: `q12-1`,
        tags: [],
        questionText: 'A partnership terminates when:',
        answerChoices: {
            [AnswerChoice.A]: 'Any of these events takes place.',
            [AnswerChoice.B]: 'A partnership converts into an LLC classified as a partnership.',
            [AnswerChoice.C]: 'At least 1/3 of the total interest in partnership capital and profits is sold or exchanged within a 12-month period, including a sale or exchange to another partner.',
            [AnswerChoice.D]: 'All of its operations are discontinued and no part of any business, financial operations, or venture is continued by any of its partners in a partnership.'
        },
        correctAnswer: AnswerChoice.D,
        explanations: {
            [AnswerChoice.A]: '',
            [AnswerChoice.B]: '',
            [AnswerChoice.C]: '',
            [AnswerChoice.D]: 'All of its operations are discontinued and no part of any business, financial operations, or venture is continued by any of its partners in a partnership.'
        },
        moreExplanation: `A partnership terminates when all of its operations are discontinued and NO part of any business, financial operations, or venture is continued by any of its partners in a partnership or a limited liability company classified as a partnership.`,
    }


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
