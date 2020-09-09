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
    {
        chapterIndex: 2,
        questionIndex: 2,
        qId: `q2-2`,
        tags: [],
        questionText: 'The basis of a patent taxpayer gets for his invention does NOT include:',
        answerChoices: {
            [AnswerChoice.A]: 'Value of inventor\'s time',
            [AnswerChoice.B]: 'Cost of research and experimental expenditures',
            [AnswerChoice.C]: 'Drawings',
            [AnswerChoice.D]: 'Cost of development'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The basis of a patent taxpayer gets for his invention is the cost of development, such as research and experimental expenditures, drawings, working models, and attorneys’ and governmental fees. If taxpayer deducts the research and experimental expenditures as current business expenses, he cannot include them in the basis of the patent. The value of the inventor’s time spent on an invention is not part of the basis. `
    },
    {
        chapterIndex: 2,
        questionIndex: 3,
        qId: `q2-3`,
        tags: [],
        questionText: `Tony purchased a truck to be used in his excavation business. The truck’s cost was $22,000. In addition, Tony paid sales tax of $1,100 and $900 freight to have the truck delivered immediately from another dealer.
        What is the depreciable basis of the truck?`,
        answerChoices: {
            [AnswerChoice.A]: '$24,000',
            [AnswerChoice.B]: '$22,900',
            [AnswerChoice.C]: '$23,100',
            [AnswerChoice.D]: '$22,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The depreciable basis of the truck is $24,000 ($22,000 cost of truck + $1,100 sales tax + $900 freight).
       The basis of property taxpayer buys is usually its cost increased by:
       
       Sales tax charged on the purchase
       Installation and testing charges
       Freight charges to obtain the property
       Excise taxes
       Legal and accounting fees (when they must be capitalized)
       Revenue stamps
       Recording fees
       Real estate taxes (if assumed by the seller)`
    },
    {
        chapterIndex: 2,
        questionIndex: 4,
        qId: `q2-4`,
        tags: [],
        questionText: 'Which of the following costs would NOT be included in calculating the original basis of a service van retrofitted with special equipment to test gasoline station pumps?',
        answerChoices: {
            [AnswerChoice.A]: 'Property damage insurance paid to cover the van for the first 6 months ',
            [AnswerChoice.B]: 'Sales tax paid on the van',
            [AnswerChoice.C]: 'Freight charges to obtain the van',
            [AnswerChoice.D]: 'Installation and testing charges of the van\'s special equipment'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 5,
        qId: `q2-5`,
        tags: [],
        questionText: 'The cost basis of property a taxpayer buys does NOT include:',
        answerChoices: {
            [AnswerChoice.A]: 'Real estate taxes (not assumed for the seller) ',
            [AnswerChoice.B]: 'Freight charges to obtain the property',
            [AnswerChoice.C]: 'Sales tax charged on the purchase',
            [AnswerChoice.D]: 'Recording fees'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 6,
        qId: `q2-6`,
        tags: [],
        questionText: 'Certain costs of getting started in business, before the taxpayer actually begins business operations, are capital expenses. Which of the following costs would be a capital expense under this rule?',
        answerChoices: {
            [AnswerChoice.A]: 'Both "Advertising (successful business launch)" and "Wages for training employees (successful business launch)"',
            [AnswerChoice.B]: 'Advertising (successful business launch)',
            [AnswerChoice.C]: 'Costs incurred before making a decision to begin a business (unsuccessful business launch)',
            [AnswerChoice.D]: 'Wages for training employees (successful business launch)'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The costs of getting started in business, before the taxpayer actually beings business operations, are capital expenses. These costs may include expenses for advertising, travel, or wages for training employees.
       If a taxpayer’s attempts to launch a business are NOT successful, the expenses incurred in trying to establish the business fall into two categories.
       
       Costs incurred before making a decision to acquire or begin a specific business are personal and nondeductible. They include any costs incurred during a general search for, or preliminary investigation of, a business or investment possibility. If the taxpayer is a corporation and attempts to go into a new trade or business are not successful, all investigatory costs may be deductible as a loss.
       Costs incurred in an attempt to acquire or begin a specific business are capital expenses and are deductible as a capital loss.`
    },
    {
        chapterIndex: 2,
        questionIndex: 7,
        qId: `q2-7`,
        tags: [],
        questionText: 'Which of the following activities would subject a taxpayer to the uniform capitalization rules?',
        answerChoices: {
            [AnswerChoice.A]: 'Taxpayer produces real or tangible personal property for sale to customers.',
            [AnswerChoice.B]: 'None of these choices',
            [AnswerChoice.C]: 'Taxpayer  produces  real or tangible property for non-business use.',
            [AnswerChoice.D]: 'Taxpayer acquires property not for resale.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 8,
        qId: `q2-8`,
        tags: [],
        questionText: 'Which of the following classes of property are EXCEPTED from the uniform capitalization rules?',
        answerChoices: {
            [AnswerChoice.A]: 'All of these choices',
            [AnswerChoice.B]: 'Qualified creative expenses incurred as a self-employed writer, photographer, or artist, that are otherwise deductible',
            [AnswerChoice.C]: 'Timber and certain ornamental trees raised, harvested, or grown, and the underlying land',
            [AnswerChoice.D]: 'Intangible drilling and development costs of oil and gas or geothermal wells'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The uniform capitalization rules do not apply to certain classes of property. These items are all excepted from the uniform capitalization rules.`
    },
    {
        chapterIndex: 2,
        questionIndex: 9,
        qId: `q2-9`,
        tags: [],
        questionText: `The XYZ Partnership bought a business for $1,000,000 in January. Included in the purchase price were business assets as follows: certificate of deposit $100,000, accounts receivable of $200,000, and inventory of $300,000. Also purchased but not separately valued were an office building, land, and going concern value. The real estate tax assessment was $300,000 and the buyer estimated the building was worth twice the land value.
       What values would be assigned to the building, land and going concern?`,
        answerChoices: {
            [AnswerChoice.A]: 'Building $200,000; Land $100,000; Going Concern $100,000',
            [AnswerChoice.B]: 'Building $100,000; Land $200,000; Going Concern $100,000',
            [AnswerChoice.C]: 'Building $200,000; Land $200,000; Going Concern $ -0- ',
            [AnswerChoice.D]: 'Building $250,000; Land $150,000; Going Concern $ -0-'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 10,
        qId: `q2-10`,
        tags: [],
        questionText: `George purchased a business on May 31 of the current year for a lump sum price of $1,400,000. The values of the assets on the seller’s books were as follows: 
                         Book Value    Fair Market Value
            Cash              $200,000          $200,000
            Land              $150,000          $150,000
            Building          $300,000          $450,000
            Equipment         $250,000          $300,000
            Covenant Not to Compete $0          $100,000
       George did not assume any loans. What is his basis for goodwill and the equipment?`,
        answerChoices: {
            [AnswerChoice.A]: 'Goodwill $200,000; Equipment $300,000',
            [AnswerChoice.B]: 'Goodwill $200,000; Equipment $350,000',
            [AnswerChoice.C]: 'Goodwill $ -0-; Equipment $300,000',
            [AnswerChoice.D]: 'Goodwill $ -0-; Equipment $350,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 11,
        qId: `q2-11`,
        tags: [],
        questionText: `Setting Sun Partnership purchased a business, Family Dry Cleaners, for $750,000. The acquired Family Dry Cleaners assets consisted of the following:
       $50,000 in cash
       Equipment with a fair market value of $200,000
       Land and building with a fair market value of $450,000
       For real estate tax purposes, the city assessed the value of the land at $100,000 and the building at $200,000. The buyer and seller did not enter into an allocation agreement for this transaction.
       
       What basis must Setting Sun Partnership use for the land, building, and intangible asset “goodwill?”`,
        answerChoices: {
            [AnswerChoice.A]: 'Land $150,000; Building $300,000; and Goodwill $50,000',
            [AnswerChoice.B]: 'Land $100,000; Building $200,000; and Goodwill $150,000',
            [AnswerChoice.C]: 'Land $150,000; Building $300,000; and Goodwill $-0-',
            [AnswerChoice.D]: 'Land $100,000; Building $350,000; and Goodwill $50,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 12,
        qId: `q2-12`,
        tags: [],
        questionText: 'When acquiring a sole proprietorship, a taxpayer must allocate the purchase price to the various assets acquired (equipment, building, intangible assets, land, etc.) based on the portion of the fair market value on the date of purchase of each asset.',
        answerChoices: {
            [AnswerChoice.A]: 'True',
            [AnswerChoice.B]: 'False ',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `If taxpayer acquires a trade or business, allocate the purchase price to the various assets acquired. For asset acquisitions occurring after January 5, 2000, the allocation must be made among the following assets in proportion to (but not more than) their fair market value on the purchase date in the following order:
       Certificates of deposit, U.S. Government securities, foreign currency, and actively traded personal property, including stock and securities
       Accounts receivable, other debt instruments, and assets taxpayer mark to market at least annually for federal income tax purposes
       Property of a kind that would properly be included in inventory if on hand at the end of the tax year or property held primarily for sale to customers in the ordinary course of business
       All other assets except section 197 intangibles, goodwill, and going concern value
       Section 197 intangibles except goodwill and going concern value
       Goodwill and going concern value (whether or not they qualify as Section 197 intangibles)`
    },
    {
        chapterIndex: 2,
        questionIndex: 13,
        qId: `q2-13`,
        tags: [],
        questionText: `Regarding allocation of consideration paid for a business, the residual method must be used for any transfer of a group of assets that constitutes a trade or business and for which the buyer’s basis is determined only by the amount paid for the assets.
       The residual method provides for the consideration to be reduced first by which of the following?`,
        answerChoices: {
            [AnswerChoice.A]: 'Cash and general deposit accounts, including checking and savings accounts but excluding certificates of deposit',
            [AnswerChoice.B]: 'Certificates of deposit, U.S. Government securities, foreign currency, and actively traded personal property, including stock and securities',
            [AnswerChoice.C]: 'Accounts receivable, other debt instruments, and assets that the taxpayer mark to market at least annually for federal income tax purposes',
            [AnswerChoice.D]: 'Section 197 intangibles (other than goodwill and going concern value).'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The residual method provides for the consideration to be reduced first by cash and general deposit accounts, including checking and savings accounts but excluding certificates of deposit.
       The following definitions are the classifications for deemed or actual asset acquisitions. Allocate the consideration among the assets in the following order. The amount allocated to an asset, other than a Class VII asset, cannot exceed its fair market value on the purchase date. The amount that can be allocated to an asset also is subject to any applicable limits under the IRC or general principles of tax law.
       
       Class I assets are cash and general deposit accounts, including checking and savings accounts but excluding certificates of deposit.
       Class II assets are Certificates of deposit, U.S. Government securities, foreign currency, and actively traded personal property, including stock and securities.
       Class III assets are accounts receivable, other debt instruments, and assets that the taxpayer mark to market at least annually for federal income tax purposes.
       Class IV assets are property of a kind that would properly be included in inventory if on hand at the end of the tax year or property held by the taxpayer primarily for sale to customers in the ordinary course of business.
       Class V assets are assets other than Class I, II, III, IV, and VII assets.
        

       ► NOTE. Furniture and fixtures, buildings, land, vehicles, and equipment, which constitute all or part of a trade or business are generally Class V assets.
        
       
       Class VI assets are Section 197 intangibles (other than goodwill and going concern value).
       Class VII assets are goodwill and going concern value (whether the goodwill or going concern value qualifies as a section 197 intangible.
       If the asset described in one of the classifications described above can be included in more than one class, include it in the lower numbered class. For example, if an asset is described in both Class II and Class IV, choose Class II.
       
       AGREEMENT. The buyer and seller may enter into a written agreement as to the allocation of any consideration or the FMV of any of the assets. This agreement is binding on both parties unless the IRS determines the amounts are not appropriate.`
    },
    {
        chapterIndex: 2,
        questionIndex: 14,
        qId: `q2-14`,
        tags: [],
        questionText: 'Amounts paid or incurred to demolish a structure are:',
        answerChoices: {
            [AnswerChoice.A]: 'Capitalized and added to the basis of the land where the demolished structure was located',
            [AnswerChoice.B]: 'Capitalized and amortized over a 180 month period',
            [AnswerChoice.C]: 'Deductible as a casualty loss',
            [AnswerChoice.D]: 'Treated as a reduction of the basis of the structure'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Amounts paid or incurred to demolish a structure are capitalized and added to the basis of the land where the demolished structure was located. Do not claim the costs as a current deduction.`
    },
    {
        chapterIndex: 2,
        questionIndex: 15,
        qId: `q2-15`,
        tags: [],
        questionText: `In December, 2017, Mr. Smith purchased a manufacturing plant for $92,600. The cost was allocated as follows:
       Land (20%) $18,520
       Building (80%) $74,080
       The following items relating to the property occurred before the property was placed in service on January 1, 2018:
       
       Building remodeling expenses $15,000
       Storm damage (casualty loss) to building $9,000
       Easement granted for right-of-way $2,500
       Legal fees for perfecting title paid $3,600
       What is the adjusted basis of the building and land on January 1, 2018?`,
        answerChoices: {
            [AnswerChoice.A]: 'Building $82,960; Land $16,740',
            [AnswerChoice.B]: 'Building $80,080; Land $19,240',
            [AnswerChoice.C]: 'Building $89,080; Land $18,520',
            [AnswerChoice.D]: 'Building $81,180; Land $18,520'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Building $82,960; Land $16,740, figured as follows:
        
       
          $74,080  Allocated           $18,520 Allocated
                   building cost               land cost
           15,000  Remodeling          - 2,500 Easement
                   expenses
          - 9,000  Storm damage
          + 2,880  80% of legal fees     + 720   20% legal
           ------                        -----
          $82,960  Adjusted            $16,740  Adjusted
                    building basis              land basis
                    
`
    },
    {
        chapterIndex: 2,
        questionIndex: 16,
        qId: `q2-16`,
        tags: [],
        questionText: `Larry purchased an office building and land on February 1, for $1,000,000. No liabilities were assumed. The assessed value of the assets for real estate purposes at the time of the purchase were as follows:
                        Assessed Value
       
            Land        $300,000
            Building    $500,000
       What is the basis of the building?`,
        answerChoices: {
            [AnswerChoice.A]: '$625,000',
            [AnswerChoice.B]: '$700,000',
            [AnswerChoice.C]: '$500,000',
            [AnswerChoice.D]: '$600,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The basis of the building is $625,000 ($500,000/$800,000 x $1,000,000).
       If taxpayer buys a building and the land on which it stands for a lump sum, allocate the basis of the property among the land and the building so taxpayer can figure the depreciation allowable on the buildings.
       
       Figure the basis of each asset by multiplying the lump sum by a fraction. The numerator is the FMV of that asset and the denominator is the FMV of the whole property at the time of purchase. If taxpayer is not certain of the FMV of the land and buildings, taxpayer can allocate the basis based on their assessed values for real estate tax purposes.`
    },
    {
        chapterIndex: 2,
        questionIndex: 17,
        qId: `q2-17`,
        tags: [],
        questionText: 'Which of the following does NOT reduce the basis of property?',
        answerChoices: {
            [AnswerChoice.A]: 'Section 179 deductions',
            [AnswerChoice.B]: 'Zoning Costs',
            [AnswerChoice.C]: 'Depreciation',
            [AnswerChoice.D]: 'Credit for qualified electric vehicles'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 18,
        qId: `q2-18`,
        tags: [],
        questionText: 'All of the following items will increase the basis in an asset EXCEPT:',
        answerChoices: {
            [AnswerChoice.A]: 'Section 179 deduction',
            [AnswerChoice.B]: 'Installation costs',
            [AnswerChoice.C]: 'Zoning cost',
            [AnswerChoice.D]: 'Capital improvements'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 2,
        questionIndex: 19,
        qId: `q2-19`,
        tags: [],
        questionText: `Michael wants to convert his personal residence to a rental property. He paid $300,000 for the property and the allocation of value for tax assessment has always been 2/3 building and 1/3 land. Over the years he incurred $50,000 in permanent improvements to the house. He claimed a casualty loss deduction of $5,000 in one year. On the date of conversion the fair market value of the property was $600,000.
       What is the basis for depreciation of this rental?`,
        answerChoices: {
            [AnswerChoice.A]: '$245,000',
            [AnswerChoice.B]: '$600,000',
            [AnswerChoice.C]: '$345,000',
            [AnswerChoice.D]: '$400,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The basis for depreciation of this rental is $245,000 ($300,000 basis x 2/3) + $50,000 improvements – $5,000 casualty loss deduction. Land is never depreciable.
       When property that was held for personal use is changed to rental use (for example, a former home is rented out) the basis for depreciation is figured using the LESSER of fair market value or adjusted basis.`
    },
    {
        chapterIndex: 2,
        questionIndex: 20,
        qId: `q2-20`,
        tags: [],
        questionText: `Taxpayer’s construction company bought and placed in service a dump truck that cost $55,000 and a chain saw that cost $2,000. Section 179 expensing was elected and applied $2,000 to the chain saw and $22,000 to the dump truck for a total of $24,000.
       What is the depreciable basis in each item for the year?`,
        answerChoices: {
            [AnswerChoice.A]: 'Saw $ -0-; Truck $33,000',
            [AnswerChoice.B]: 'None of these choices',
            [AnswerChoice.C]: 'Saw $2,000; Truck $37,000',
            [AnswerChoice.D]: 'Saw $2,000; Truck $55,00 '
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The $2,000 deduction for the saw completely recovered its cost. The depreciable basis is zero.`
    },

    // Chapter 3
    {
        chapterIndex: 3,
        questionIndex: 1,
        qId: `q3-1`,
        tags: [],
        questionText: `On April 6, Sue Thompson bought a house to use as residential rental property. She made several repairs and had it ready for rent on July 5. She did not actually rent the property until August 1, and the family moved in on August 15.
   The house is considered placed in service on:`,
        answerChoices: {
            [AnswerChoice.A]: 'July 5',
            [AnswerChoice.B]: 'August 15',
            [AnswerChoice.C]: 'August 1',
            [AnswerChoice.D]: 'April 6'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The house is considered placed in service on July 5th when it was ready and available for rent. She can begin to depreciate it in July.
   Property is placed in service when it is ready and available for a specific use, whether in a business activity, an income-producing activity, or a personal activity. Even if the property is not being used, it is in service when it is ready and available for its specific use.`
    },
    {
        chapterIndex: 3,
        questionIndex: 2,
        qId: `q3-2`,
        tags: [],
        questionText: 'What is the main difference(s) between the general depreciation system and the alternative depreciation system?',
        answerChoices: {
            [AnswerChoice.A]: 'Both (ADS generally provides for a longer recovery period.) and (ADS uses only the straight-line method of depreciation to figure a deduction.)',
            [AnswerChoice.B]: 'None of these choices',
            [AnswerChoice.C]: 'ADS uses only the straight-line method of depreciation to figure a deduction.',
            [AnswerChoice.D]: 'ADS generally provides for a longer recovery period.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The main difference between the two systems is that ADS generally provides for a longer recovery period and uses only the straight-line method of depreciation to figure a deduction.`
    },
    {
        chapterIndex: 3,
        questionIndex: 3,
        qId: `q3-3`,
        tags: [],
        questionText: 'For 2018, which of the following is NOT listed property?',
        answerChoices: {
            [AnswerChoice.A]: 'Cell phones ',
            [AnswerChoice.B]: 'Property used for transportation',
            [AnswerChoice.C]: 'A passenger automobile weighing 5,000 pounds',
            [AnswerChoice.D]: 'A property of a type generally used for entertainment'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `For tax years beginning after 2009, cellular telephones and similar telecommunications equipment have been removed from the definition of listed property.
   Listed property is any of the following:
   
   Any passenger automobile. (Any four-wheeled vehicle made primarily for use on public streets, roads, and highways and rated at 6,000 pounds or less of unloaded gross vehicle weight (6,000 pounds or less of gross vehicle weight for trucks and vans)
   Any other property used for transportation, unless it is an excepted vehicle
   Any property of a type generally used for entertainment, recreation, or amusement (including photographic, phonographic, communication, and video-recording equipment)
   Any computer and related peripheral equipment, UNLESS it is used only at a regular business establishment and is owned or leased by the person operating the establishment. A regular business establishment includes a portion of a dwelling unit that is used both regularly and exclusively for business.
 `
    },
    {
        chapterIndex: 3,
        questionIndex: 4,
        qId: `q3-4`,
        tags: [],
        questionText: `Mr. Skiles purchased the following business equipment in 2018:

          Pick-up truck (<6000 Gross Weight)  $ 15,000
          Cellular phones                     $    450
          Desks                               $  1,500
          Chairs                              $    275
          Total                               $ 17,225 

   How much of his purchase is considered listed property for depreciation purposes?`,
        answerChoices: {
            [AnswerChoice.A]: '$15,000',
            [AnswerChoice.B]: '$17,225',
            [AnswerChoice.C]: '$ -0-',
            [AnswerChoice.D]: '$15,450'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `$15,000 (only the pick-up truck) is listed property for depreciation purposes.
   Beginning in 2010, the Small Business Jobs and Credit Act removed cell phones from the category of listed property.
    
   Listed property includes any of the following:
   
   Any passenger automobile. A passenger automobile is any four-wheeled vehicle made primarily for use on public streets, roads, and highways and rated at 6,000 pounds or less of unloaded gross vehicle weight (6,000 pounds or less of gross vehicle weight for trucks and vans). It includes any part, component, or other item physically attached to the automobile or usually included in the purchase price of an automobile.
   Any other property used for transportation, unless it is an excepted vehicle
   Any property of a type generally used for entertainment, recreation, or amusement (including photographic, phonographic, communication, and video-recording equipment)
   Any computer and related peripheral equipment UNLESS it is used only at a regular business establishment and owned or leased by the person operating the establishment
   Before 2010, any cellular telephone (or similar telecommunication equipment) placed in service or leased in a tax year beginning after 1989 was included as listed property.`
    },
    {
        chapterIndex: 3,
        questionIndex: 5,
        qId: `q3-5`,
        tags: [],
        questionText: 'What is the property class (recovery period) for automobiles under GDS?',
        answerChoices: {
            [AnswerChoice.A]: '5-year property',
            [AnswerChoice.B]: '3-year property',
            [AnswerChoice.C]: '6-year property',
            [AnswerChoice.D]: '7-year property'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The property class (recovery period) for automobiles is 5-years under GDS. 5-year property includes automobiles, taxis, buses, trucks, computers and peripheral equipment, office machinery (such as typewriters, calculators, copiers, etc,.) and any property used in research and experimentation. Also, breeding and dairy cattle.`
    },
    {
        chapterIndex: 3,
        questionIndex: 6,
        qId: `q3-6`,
        tags: [],
        questionText: `Pat Snow bought a truck weighing 8,000 lb. She uses the truck to make deliveries in her candy business. She bought the truck on July 1, 2018 at a cost of $25,000.
   What is the first year’s depreciation under the MACRS rules using the following table? (No special depreciation allowance.)
   
         Table A-1 3-, 5-, 7-, 10-, 15-, and 20-Year Property Half-Year Convention
           Year        3 yr      5 yr     7 yr     10 yr
            1          33.33%    20.00%   14.29%   10.00%
            2          44.45%    32.00%   24.49%   18.00%`,
        answerChoices: {
            [AnswerChoice.A]: '$5,000',
            [AnswerChoice.B]: '$3,572.50',
            [AnswerChoice.C]: '$2,500',
            [AnswerChoice.D]: '$3,160'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The first year depreciation under the MACRS rules is $5,000 ($25,000 x .20). The half-year convention is incorporated into the table. The calculation for the first year is: double declining balance / useful life = 2/5 = 40% / 2 = 20%
   Automobiles and light duty trucks are 5-year property. (The truck weighed over 6,000 pounds, so it is not subject to the passenger automobile limits.) The percentage amount for the first year of 5-year property is 20%.
   
   (Report depreciation on Form 4562.)`
    },
    {
        chapterIndex: 3,
        questionIndex: 7,
        qId: `q3-7`,
        tags: [],
        questionText: 'Generally, a taxpayer must depreciate MACRS (Modified Accelerated Cost Recovery System) property that was acquired in a like-kind exchange of other MACRS property over the remaining period of the exchanged property, and continue to use the same depreciation method.',
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
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 3,
        questionIndex: 8,
        qId: `q3-8`,
        tags: [],
        questionText: 'What convention is used for residential rental property depreciated under MACRS?',
        answerChoices: {
            [AnswerChoice.A]: 'Mid-month',
            [AnswerChoice.B]: 'Mid-quarter',
            [AnswerChoice.C]: 'Half-year',
            [AnswerChoice.D]: 'All of these choices'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `A mid-month convention is always used for residential rental and nonresidential real property. For all other property depreciated under MACRS, use either a half-year or mid-quarter convention depending on the convention used when the property was placed in service.`
    },
    {
        chapterIndex: 3,
        questionIndex: 9,
        qId: `q3-9`,
        tags: [],
        questionText: `In June of this year, Gail bought a new computer for her business for $7,500. She uses the computer 90% for her business and 10% for personal purposes.
   What is the business cost of the computer used to figure her allowable Section 179 expense deduction?
 `,
        answerChoices: {
            [AnswerChoice.A]: '$ 6,750',
            [AnswerChoice.B]: '$ 7,500',
            [AnswerChoice.C]: '$ -0-',
            [AnswerChoice.D]: '$ 750'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `$6,750 ($7,500 cost x .90 of business use)
   The Section 179 deduction cannot be more than the business cost of the qualifying property. In addition, in figuring the deduction, the following limits must be applied:
   
   Maximum dollar limit ($1,000,000 for 2018)
   Investment limit: For each dollar of the business cost over $2,500,000 for Section 179 property placed in service during the year, reduce the maximum dollar limit by one dollar (but not below zero).
   Taxable income limit: The total Section 179 cost that can be deducted each year is limited to the taxable income from the active conduct of any trade or business during the tax year.
   Percentage of business use`
    },
    {
        chapterIndex: 3,
        questionIndex: 10,
        qId: `q3-10`,
        tags: [],
        questionText: 'Generally, the maximum Section 179 expense taxpayer can elect to deduct for property placed in service in tax year beginning January 1, 2018 is:',
        answerChoices: {
            [AnswerChoice.A]: '$1,000,000',
            [AnswerChoice.B]: '$2,500,000',
            [AnswerChoice.C]: '$2,030,000',
            [AnswerChoice.D]: '$510,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 3,
        questionIndex: 11,
        qId: `q3-11`,
        tags: [],
        questionText: 'During the year, Judy placed in service a machine that cost $257,000. If she placed no other section 179 property in service during the year, how much is her Section 179 maximum dollar limit?',
        answerChoices: {
            [AnswerChoice.A]: '$257,000',
            [AnswerChoice.B]: '$250,000',
            [AnswerChoice.C]: '$108,000',
            [AnswerChoice.D]: '$125,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The maximum Section 179 deduction taxpayer can elect for property placed in service during the year is $1,000,000 for qualified Section 179 property. This limit is REDUCED by the amount by which the cost of section 179 property placed in service during the tax year EXCEEDS $2,500,000. (Report on Form 4562.)
   There are increased limits for qualified disaster area property.`
    },
    {
        chapterIndex: 3,
        questionIndex: 12,
        qId: `q3-12`,
        tags: [],
        questionText: 'Which of the following is NOT Section 1245 property?',
        answerChoices: {
            [AnswerChoice.A]: 'Office building',
            [AnswerChoice.B]: 'Covenant not to compete',
            [AnswerChoice.C]: 'Computer',
            [AnswerChoice.D]: 'Display shelving'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Section 1245 property is personal property. It does not include buildings and structural components.
   An office building is Section 1250 property. Section 1250 property includes all real property that is subject to an allowance for depreciation and that is not and never has been Section 1245 property.
   
   Section 1245 property includes certain assets used as an integral part of manufacturing, production, or extraction; or of furnishing transportation, communications, electricity, gas, water, or sewage disposal services. It also includes single purpose agricultural (livestock) or horticultural structures.`
    },
    {
        chapterIndex: 3,
        questionIndex: 13,
        qId: `q3-13`,
        tags: [],
        questionText: `If nonlisted property was used more than 50% in a qualified business in the year it was placed in service and it was then used 50% or less in a later year, part of the Section 179 expense deduction may have to be recaptured in the later year.
   Which form is used to figure the recapture amount?`,
        answerChoices: {
            [AnswerChoice.A]: 'Form 4797',
            [AnswerChoice.B]: 'Form 3115',
            [AnswerChoice.C]: 'Form 4562',
            [AnswerChoice.D]: 'Form 6251'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Form 4797 is used to calculate recapture of Section 179 deduction for nonlisted property.`
    },
    {
        chapterIndex: 3,
        questionIndex: 14,
        qId: `q3-14`,
        tags: [],
        questionText: 'The Adams & Baker Partnership bought James’ B&B restaurant, which was located in an exclusive section of town. The goodwill associated with the purchase of this business was valued at $60,000. Per Section 197, what is the number of years over which goodwill can be amortized?',
        answerChoices: {
            [AnswerChoice.A]: '15 years',
            [AnswerChoice.B]: '5 years',
            [AnswerChoice.C]: '10 years',
            [AnswerChoice.D]: '20 years'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Taxpayer must generally amortize over 15 years the capitalized costs of “section 197 intangibles” taxpayer acquired after August 10, 1993. Taxpayer must amortize these costs if he holds the section 197 intangibles in connection with his trade or business or in an activity engaged in for the production of income.`
    },
    {
        chapterIndex: 3,
        questionIndex: 15,
        qId: `q3-15`,
        tags: [],
        questionText: `On March 1, taxpayer purchased a business with the following asset values for $250,000:
   Equipment $ 175,000
   Goodwill $ 60,000
   Cash $ 15,000
   What is the amortization deduction?`,
        answerChoices: {
            [AnswerChoice.A]: '$ 3,330',
            [AnswerChoice.B]: '$ 333',
            [AnswerChoice.C]: '$ -0-',
            [AnswerChoice.D]: '$28,320'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The amortization deduction is $3,330, figured as follows: ($60,000/15 years = $4,000/12 = $333 x 10 months)
   If taxpayer acquired a business after August 10, 1993, and part of the price included goodwill, taxpayer must amortize the cost of goodwill (Section 197 intangible) ratably over a period of 15 years beginning with the month acquired.
   
   Section 197 intangibles include:
   
   Goodwill
   Going concern value,Workforce in place, including its composition and terms and conditions (contractual or otherwise) of its employment
   Business books and records, operating systems, or other information base including lists or other information concerning current or prospective customers
   A patent, copyright, formula, process, design, pattern, know-how, format, or similar item
   A customer-based or supplier-based intangible
   A license, permit, or other right granted by a governmental unit or agency (including renewals)
   A covenant not to compete entered into in connection with the acquisition of an interest in a trade or business
   A franchise, trademark, or trade name (including renewals)`
    },
    {
        chapterIndex: 3,
        questionIndex: 16,
        qId: `q3-16`,
        tags: [],
        questionText: `The Pine Corporation opened for business at the beginning of this year and elected to deduct its startup expenses.
   What is the maximum amount that can be immediately deducted?`,
        answerChoices: {
            [AnswerChoice.A]: '$5,000',
            [AnswerChoice.B]: '$10,000',
            [AnswerChoice.C]: 'Any amount the corporation has during the year',
            [AnswerChoice.D]: 'Startup expenses must be amortized'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The maximum amount that can be deducted is $5,000.
   Business start-up and organizational costs are generally capital expenditures. Costs paid or incurred before October 23, 2004, must be capitalized unless an election is made to amortize them. Taxpayer can choose to deduct up to $5,000 of business start-up and $5,000 of organizational costs, paid or incurred during 2018, as a current business expense. The remaining costs can be amortized over an 180-month period. The $5,000 deduction is reduced by the amount the total start-up or organizational costs exceed $50,000.`
    },
    {
        chapterIndex: 3,
        questionIndex: 17,
        qId: `q3-17`,
        tags: [],
        questionText: `On November 15 of the current year, Partnership Z paid $10,000 in accounting and legal fees to prepare and file the partnership agreement. The partnership began business on December 1.
   Which of the following is a permissible election for treatment of the $10,000 payment?`,
        answerChoices: {
            [AnswerChoice.A]: 'Deduct $5,000 and amortize the remaining $5,000 over 180 months.',
            [AnswerChoice.B]: 'Deduct $5,000 and amortize the remaining $5,000 over a 5-year period.',
            [AnswerChoice.C]: 'Deduct $10,000.',
            [AnswerChoice.D]: 'Amortize $10,000 over a 5-year period.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Partnership Z can deduct organization costs of $5,000 and amortize the remaining $5,000 over 180 months.
   Business start-up and organizational costs are generally capital expenditures. Costs paid or incurred before October 23, 2004, must be capitalized unless an election is made to amortize them. Taxpayer can choose to deduct up to $5,000 of business start-up and $5,000 of organizational costs, paid or incurred after October 22, 2004, as a current business expense. The remaining costs can be amortized over an 180-month period. The $5,000 deduction is reduced by the amount the total start-up or organizational costs exceed $50,000.
   
   ORGANIZATIONAL COSTS FOR A PARTNERSHIP INCLUDE:
   
   Legal fees incident to the organization of the partnership
   Accounting fees incident to the organization of the partnership
   Filing fees`
    },
    {
        chapterIndex: 3,
        questionIndex: 18,
        qId: `q3-18`,
        tags: [],
        questionText: `Sandy and Buffy formed the S&B Partnership in November of the year. They began business operations in December. During the year they incurred the following costs:
   $2,500 to their attorney for negotiating and preparing the partnership agreement
   $250 for filing fees for the partnership agreement
   $1,000 to their CPA for services incident to the organization of the partnership
   $500 in costs associated with transferring assets to the partnership
   What is the maximum dollar amount that S&B Partnership can elect to amortize as organizational costs?`,
        answerChoices: {
            [AnswerChoice.A]: '$3,750',
            [AnswerChoice.B]: '$4,000',
            [AnswerChoice.C]: '$1,750',
            [AnswerChoice.D]: '$4,250'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The maximum dollar amount that S&B can elect to amortize as organizational costs is $3,750 ($2,500 legal fees + $250 filing fees + $1,000 CPA fees). (The $500 costs associated with transferring assets to the partnership cannot be amortized.)
   Organizational costs for partnerships include the following fees:
   
   Legal fees for services incident to the organization of the partnership, such as negotiation and preparation of the partnership agreement
   Accounting fees for services incident to the organization of the partnership
   Filing fees
   The following costs CANNOT be amortized:
   
   The cost of acquiring assets for the partnership or TRANSFERRING ASSETS to the partnership (The $500, in this problem.)
   The cost of admitting or removing partners, other than at the time the partnership is first organized
   The cost of making a contract concerning the operation of the partnership trade or business (including a contract between a partner and the partnership)
   The costs for issuing and marketing interests in the partnership (such as brokerage, registration, and legal fees and printing costs)
   These “syndication fees” are capital expenses that cannot be depreciated or amortized.`
    },
    {
        chapterIndex: 3,
        questionIndex: 19,
        qId: `q3-19`,
        tags: [],
        questionText: `In starting up a new corporate business this year, the following expenditures were made:
   Analysis of potential markets
   Advertising for the opening of the business
   Salaries and fees for consultants
   Salaries and wages for training new employees
   Real estate tax expense on the real property
   Which of the above are NOT business start-up costs?`,
        answerChoices: {
            [AnswerChoice.A]: 'Real estate taxes',
            [AnswerChoice.B]: 'Salaries for training new employees and real estate taxes',
            [AnswerChoice.C]: 'Advertising for the opening of the business and real estate taxes',
            [AnswerChoice.D]: 'Analysis of potential markets and real estate taxes'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Start-up costs do not include deductible interest, taxes, or research and experimental costs. The real estate tax expense on the real property is not included.
   QUALIFYING COSTS. A start-up cost is amortizable if it meets both the following tests.
   
   It is a cost that could be deducted if the business paid or incurred it to operate an existing active trade or business (in the same field as the one the business entered into).
   It is a cost paid or incurred before the day the active trade or business begins.
   Start-up costs include amounts paid for the following:
   
   An analysis or survey of potential markets, products, labor supply, transportation facilities, etc.
   Advertisements for the opening of the business
   Salaries and wages for employees who are being trained and their instructors
   Salaries and fees for executives and consultants, or for similar professional services
   The cost must qualify as one of the following:
   
   A business start-up cost
   An organizational cost for a corporation
   An organizational cost for a partnership
   ORGANIZATIONAL COSTS FOR A CORPORATION INCLUDE:
   
   The cost of temporary directors
   The cost of organizational meetings
   State incorporation fees
   The cost of legal services
   Accounting services for setting up the corporation`
    },
    {
        chapterIndex: 3,
        questionIndex: 20,
        qId: `q3-20`,
        tags: [],
        questionText: 'Which of the following costs qualify as business “start-up costs?”',
        answerChoices: {
            [AnswerChoice.A]: 'A survey of potential markets',
            [AnswerChoice.B]: 'Research and experimental costs',
            [AnswerChoice.C]: 'Deductible interest',
            [AnswerChoice.D]: 'State and local taxes'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Start-up costs include a survey of potential markets.
   Start-up costs are costs incurred for creating an active trade or business or for investigating the creation or acquisition of an active trade or business.
   
   Start-up costs are costs incurred for creating an active trade or business or for investigating the creation or acquisition of an active trade or business. Start-up costs include costs for the following:
   
   Surveys of potential markets
   Analyses of available facilities, labor, supplies, etc.
   Advertisements for the opening
   Salaries and wages for employees who are being trained, and their instructors
   Travel and other necessary costs for securing prospective distributors, suppliers, or customers
   Salaries and fees for executive and consultants, or for similar professional services`
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
    {
        chapterIndex: 4,
        questionIndex: 2,
        qId: `q4-2`,
        tags: [],
        questionText: 'With regard to the sale of a business, which of the following statements is true?',
        answerChoices: {
            [AnswerChoice.A]: 'All of these choices are correct.',
            [AnswerChoice.B]: 'The sale of real property used in business and held longer than 1 year results in gain or loss from a section 1231 transaction.',
            [AnswerChoice.C]: 'The sale of inventory results in ordinary income or loss.',
            [AnswerChoice.D]: 'The gain or loss on each asset is figured separately.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The sale of a business usually is not a sale of one asset. Instead, all the assets of the business are sold. Generally, when this occurs, each asset is treated as being sold separately for determining the treatment of gain or loss.
       A business usually has many assets. When sold, these assets must be classified as capital assets, depreciable property used in the business, real property used in the business, or property held for sale to customers, such as inventory or stock in trade. The gain or loss on each asset is figured separately. The sale of capital assets results in capital gain or loss. The sale of real property or depreciable property used in the business and held longer than 1 year results in gain or loss from a section 1231 transaction. The sale of inventory results in ordinary income or loss.`
    },
    {
        chapterIndex: 4,
        questionIndex: 3,
        qId: `q4-3`,
        tags: [],
        questionText: 'Arthur is a proprietor of Arthur’s Pizza Emporium. He bought a commercial building several years ago. He made a down payment of $20,000 in cash and assumed a mortgage for $100,000. After he paid off the mortgage, Arthur later sold the building for $180,000. Straight-line depreciation taken up to the date of sale was $18,000. What is the total gain on the sale?',
        answerChoices: {
            [AnswerChoice.A]: '$78,000',
            [AnswerChoice.B]: '$80,000',
            [AnswerChoice.C]: '$160,000',
            [AnswerChoice.D]: '$60,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The gain on the sale is $78,000, figured as follows:
        
       
        SALE of property                   $180,000
            $20,000 cash payment
         + $100,000 assumed mortgage
         - $ 18,000 depreciation taken
        ADJUSTED BASIS                      102,000
                                           --------
        TOTAL GAIN                         $ 78,000
                                           ========
        
       
       The taxpayer starts with the amount realized minus the adjusted basis. If the amount realized is more than the adjusted basis, it is a gain. If the adjusted basis is more than the amount realized, it is a loss.
       
       The AMOUNT REALIZED is the total of all money received plus the FMV of all property or services received. It also includes any liabilities assumed by the buyer, such as real estate taxes or a mortgage. The adjusted basis is the original cost plus improvements, and minus depreciation and casualty losses. Selling expenses are added to the adjusted basis.
       
       FORM 4797. Use Form 4797 to report gain or loss from a sale, exchange, or involuntary conversion of property used for business or that is depreciable or amortizable. Use Form 4797 with Forms 1040, 1065, 1120, or 1120S.`
    },
    {
        chapterIndex: 4,
        questionIndex: 4,
        qId: `q4-4`,
        tags: [],
        questionText: 'Sal used a building in his business that cost $200,000. In September, Sal sold the building to Benno for $100,000 cash. Benno also agreed to assume Sal’s $150,000 mortgage and pay Sal’s $5,000 accrued real estate taxes. The total depreciation claimed on the building was $30,000. Sal paid $10,000 selling expenses on the sale. What was Sal’s gain or loss on the sale of the building?',
        answerChoices: {
            [AnswerChoice.A]: '$75,000 gain',
            [AnswerChoice.B]: '$65,000 gain',
            [AnswerChoice.C]: '$70,000 loss',
            [AnswerChoice.D]: '$80,000 loss'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Sal’s gain on the sale of the building is $75,000.
        
       
       A gain is the excess of the amount realized from a sale or exchange of property over its adjusted basis. A loss is the excess of the adjusted basis of the property over the amount realized.
       
       
        Amount realized
         Cash ............................. $100,000
         Real estate taxes assumed .......     5,000
         Mortgage assumed ...............    150,000
         Amount realized ............................... $255,000
        Adjusted basis
         Cost of building .................. $200,000
         Minus: Depreciation ............... ( 30,000)
                                             --------
         Adjusted basis ...................  $170,000
         Plus: Selling expenses                10,000
                                             --------     180,000
                                                         --------
        GAIN ON SALE                                     $ 75,000
                                                         ========
       Start with the amount realized minus the adjusted basis. If the amount realized is more than the adjusted basis, it is a gain. If the adjusted basis is more than the amount realized, it is a loss.
       
       The AMOUNT REALIZED is the total of all money received plus the FMV of all property or services received. It also includes any liabilities assumed by the buyer, such as real estate taxes or a mortgage.
       
       The ADJUSTED BASIS is the original cost plus improvements, and minus depreciation and casualty losses. Selling expenses are added to the adjusted basis.
       
       FORM 4797. Form 4797 is used to report gain or loss from a sale, exchange, or involuntary conversion of property used in a trade or business or that is depreciable or amortizable. Form 4797 can be used with Forms 1040, 1065, 1120, or 1120S.`
    },
    {
        chapterIndex: 4,
        questionIndex: 5,
        qId: `q4-5`,
        tags: [],
        questionText: `Milton spent $70,000 for a building that he used in his business. He made improvements at a cost of $20,000 and deducted depreciation of $10,000. He sold the building for $100,000 cash, and received property having a fair market value of $20,000. The buyer assumed Milton’s real estate taxes of $3,000 and a mortgage of $17,000 on the building. Selling expenses were $4,000.
       The gain on the sale is:`,
        answerChoices: {
            [AnswerChoice.A]: '$56,000',
            [AnswerChoice.B]: '$40,000',
            [AnswerChoice.C]: '$10,000',
            [AnswerChoice.D]: '$52,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The gain on the sale is $56,000, figured as follows:
        
       
         Amount realized:
          Cash .................... $100,000
          FMV of property received.   20,000
          Real estate taxes assumed
          by buyer ................    3,000
          Mortgage assumed by buyer.  17,000....... $140,000
         Adjusted basis:
          Cost of building ......... $70,000
          Improvements .............  20,000
         TOTAL...................... $90,000
          Minus: Depreciation.......  10,000
         ADJUSTED BASIS............. $80,000
          Plus: Selling expenses....   4,000 ....... $84,000
                                                     -------
         GAIN ON SALE............................... $56,000
                                                     =======
        
       
       A gain is the amount realized from a sale or exchange of property that is more than its adjusted basis.
       
       AMOUNT REALIZED. The amount realized is the total of all money received plus the FMV of all property or services received. The amount realized also includes any liabilities that were assumed by the buyer and any liabilities to which the property taxpayer transferred is subject, such as real estate taxes or a mortgage.
       
       ADJUSTED BASIS. The adjusted basis is taxpayer’s original cost or other basis plus certain additions and minus certain deductions, such as depreciation and casualty losses.`
    },
    {
        chapterIndex: 4,
        questionIndex: 6,
        qId: `q4-6`,
        tags: [],
        questionText: 'Clarence sold his business backhoe for $65,000. He purchased the backhoe in 2013 for $90,000. He has taken $60,000 of depreciation, which includes $10,000 Section 179 expensing election. Clarence will report the following on the sale of the backhoe:',
        answerChoices: {
            [AnswerChoice.A]: 'Ordinary income of $35,000',
            [AnswerChoice.B]: 'Ordinary income of $10,000 and long-term capital gain of $25,000',
            [AnswerChoice.C]: 'Ordinary loss of $25,000',
            [AnswerChoice.D]: 'Long-term capital gain of $35,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `$90,000 Purchase price
         -  60,000 Depreciation and section 179 expense
           -------
         = $30,000 Adjusted basis
           =======
       
           $65,000 Sale of backhoe
         -  30,000 Adjusted basis
           -------
         = $35,000 Gain
           =======
        
       
       DEPRECIATION AND AMORTIZATION. Depreciation and amortization that must be recaptured as ordinary income include (but are not limited to) the following items:
       1.    Ordinary depreciation deductions
       2.    The 30% special depreciation allowance for property acquired after September 10, 2001
       3.    The section 179 deduction
       (Not a complete list.)
       
        
       First, figure the adjusted basis by decreasing the purchase price by the depreciation taken and the section 179 expense. Then, subtract the adjusted basis from the sales price of the backhoe.
       
       Since the depreciation and section 179 deduction of $60,000 exceeded the realized gain of $35,000, the entire $35,000 is recognized as ordinary income.
       
       REPORTING. Use Form 4797 to report ordinary income from depreciation.`
    },
    {
        chapterIndex: 4,
        questionIndex: 7,
        qId: `q4-7`,
        tags: [],
        questionText: 'In a like-kind exchange which of the following may trigger some taxable gain in the year of exchange?',
        answerChoices: {
            [AnswerChoice.A]: 'Both "Relief from debt" and "Cash"',
            [AnswerChoice.B]: 'Like-kind property',
            [AnswerChoice.C]: 'Relief from debt',
            [AnswerChoice.D]: 'Cash'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Section 1031 provides an exception and allows the taxpayer to postpone paying tax on the gain if the proceeds are reinvested in similar property as part of a qualifying like-kind exchange.
       If cash, relief from debt, or property that is not like-kind is received, some taxable gain may be triggered in the year of the exchange.`
    },
    {
        chapterIndex: 4,
        questionIndex: 8,
        qId: `q4-8`,
        tags: [],
        questionText: 'Which of the following statements with respect to the exchange of like-kind property is correct?',
        answerChoices: {
            [AnswerChoice.A]: 'If there is an exchange of like-kind property in which taxpayer also gives cash and the exchange results in a loss to taxpayer, taxpayer CANNOT deduct a loss.',
            [AnswerChoice.B]: 'If there is an exchange of like-kind property in which taxpayer also received cash and the exchange results in a loss to taxpayer, taxpayer is allowed to deduct a loss to the extent of cash received.',
            [AnswerChoice.C]: 'If there is an exchange of like-kind property in which taxpayer also gives cash and the exchange results in a gain to taxpayer, taxpayer must report any gain to the extent of the cash given.',
            [AnswerChoice.D]: 'If there is an exchange of like-kind property in which taxpayer also receives cash and the exchange results in a gain to taxpayer, taxpayer does NOT have to report the gain.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The exchange for the same kind of property is the most common type of nontaxable exchange. A nontaxable exchange is an exchange in which taxpayer is not taxed on any gain and taxpayer cannot deduct any loss.`
    },
    {
        chapterIndex: 4,
        questionIndex: 9,
        qId: `q4-9`,
        tags: [],
        questionText: 'Which of the following property exchanges does NOT qualify as a like-kind exchange?',
        answerChoices: {
            [AnswerChoice.A]: 'Exchange of partnership interests',
            [AnswerChoice.B]: 'Exchange of improved property for unimproved property',
            [AnswerChoice.C]: 'Exchange of city property for farm property',
            [AnswerChoice.D]: 'Exchange of an ownership in real estate for a thirty year lease in real estate'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The exchange of partnership interests does not qualify as a like-kind exchange.
       REPORTING. Like-kind exchanges must be reported on Form 8824, even though no gain or loss is recognized. Recognized gain is reported on Schedule D, or Form 4797, whichever applies.
       
       The rules for like-kind exchanges do NOT apply to exchanges of the following property:
       
       Partnership interests
       Property used for personal purposes, such as taxpayer’s home and family car
       Stock in trade or other property held primarily for sale, such as inventories, raw materials, and real estate held by dealers
       Stocks, bonds, notes, or other securities or evidences of indebtedness, such as accounts receivable
       Certificates of trust or beneficiary interest
       Choses in action
       The exchange of real estate for real estate are exchanges of like-kind property.`
    },
    {
        chapterIndex: 4,
        questionIndex: 10,
        qId: `q4-10`,
        tags: [],
        questionText: 'A deferred exchange is one in which a taxpayer transfers property he used in business or held for investment and later receives like-kind property he will use in business or hold for investment. The taxpayer must identify the property to be received within:',
        answerChoices: {
            [AnswerChoice.A]: '45 days after the date the taxpayer transferred the property given up in the exchange',
            [AnswerChoice.B]: '30 days after the date of the transfer',
            [AnswerChoice.C]: 'By the 180th day after the date on which the taxpayer transferred the property',
            [AnswerChoice.D]: 'By the due date, including extensions, for the tax return for the tax year in which the transfer of the property given up occurs'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The taxpayer must IDENTIFY the property to be received within 45 days after the date the taxpayer transferred the property given up in the exchange.`
    },
    {
        chapterIndex: 4,
        questionIndex: 11,
        qId: `q4-11`,
        tags: [],
        questionText: 'Sam bought real estate on December 4, 2017. On June 3, 2018, he traded it for another parcel of real estate in a nontaxable exchange. When Sam sells the land he acquired in the nontaxable exchange:',
        answerChoices: {
            [AnswerChoice.A]: 'The holding period of the new asset begins on the same day as the holding period for the old property.',
            [AnswerChoice.B]: 'The holding period does not matter because the tax treatment on like-kind exchange property is always long-term.',
            [AnswerChoice.C]: 'The holding period will begin on June 4, 2018.',
            [AnswerChoice.D]: 'The holding period begins on June 3, 2018.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `When an asset is acquired in exchange for another asset, the basis and the holding period for the new asset is figured, in whole or part, by the basis and the holding period in the old property. The holding period of the new asset begins on the same day as the holding period for the old property.`
    },
    {
        chapterIndex: 4,
        questionIndex: 12,
        qId: `q4-12`,
        tags: [],
        questionText: 'Which of the following related parties can recognize a loss on the sale or exchange of an asset between themselves for tax purposes?',
        answerChoices: {
            [AnswerChoice.A]: 'Daughter-in-law and mother-in-law',
            [AnswerChoice.B]: 'Grandfather and granddaughter',
            [AnswerChoice.C]: 'Brother and sister',
            [AnswerChoice.D]: 'Corporation and sole shareholder'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `A daughter-in-law and mother-in-law can recognize a loss on the sale or exchange of an asset between themselves for tax purposes.
       A loss on the sale or exchange of property between related persons is not deductible. This applies to both direct and indirect transactions, but not to distributions of property from a corporation in a complete liquidation. The following are related persons:
       
       An individual and a corporation if the individual directly or indirectly owns more than 50% in value of the outstanding stock of the corporation
       An individual is treated as owning the stock owned, directly or indirectly, by or for his family (Family INCLUDES only brothers and sisters (including half brothers and sisters), a spouse, ancestors, and lineal descendants.)`
    },
    {
        chapterIndex: 4,
        questionIndex: 13,
        qId: `q4-13`,
        tags: [],
        questionText: 'Which of the following is NOT considered a related person?',
        answerChoices: {
            [AnswerChoice.A]: 'An Individual and a Corporation where the individual owns, directly or indirectly 25% of the stock of the Corporation',
            [AnswerChoice.B]: 'Grantor of any Trust',
            [AnswerChoice.C]: 'Two S-Corporations if the same person owns more than 50% of each',
            [AnswerChoice.D]: 'Members of a family'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The persons that are not considered related are the individual and a corporation where the individual owns, directly or indirectly 25% of the stock of the corporation.
       A “related person” is defined as an individual and a corporation if the individual directly or indirectly owns more than 50% of the outstanding stock of the corporation.`
    },
    {
        chapterIndex: 4,
        questionIndex: 14,
        qId: `q4-14`,
        tags: [],
        questionText: 'In 2018, Jason sold a business lot to his son Adam for $120,000. Jason received this lot in a tax-deferred exchange in 2014 for a lot that cost him $175,000 in 2011. Jason will recognize the following on his 2018 tax return:',
        answerChoices: {
            [AnswerChoice.A]: 'No gain or loss',
            [AnswerChoice.B]: 'A long term gain of $120,000',
            [AnswerChoice.C]: 'An ordinary loss of $55,000',
            [AnswerChoice.D]: 'A long term loss of $175,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Jason will recognize no gain or loss. Although Jason has a loss of $55,000 ($175,000 cost – $120,000 selling price to son), he cannot take the loss due to the following rule.
       RULE. Taxpayer cannot deduct a loss on the sale or trade of property, other than a distribution in complete liquidation of a corporation, if the transaction is directly or indirectly between taxpayer and a related party.
       
       PROPERTY RECEIVED FROM A RELATED PARTY. If Adam later sells or trades at a gain this property acquired from his father, Adam will recognize the gain only to the extent that it is more than the loss previously disallowed to Jason (his father).`
    },
    {
        chapterIndex: 4,
        questionIndex: 15,
        qId: `q4-?`,
        tags: [],
        questionText: 'Rebecca exchanges real estate held for investment with an adjusted basis of $400,000 and a mortgage of $100,000 for other real estate to be held for investment. The other party agrees to assume the mortgage. The fair market value of the real estate Rebecca receives is $500,000. She pays exchange expenses of $10,000. What amount of gain does Rebecca realize?',
        answerChoices: {
            [AnswerChoice.A]: '$190,000 gain',
            [AnswerChoice.B]: '$100,000 gain',
            [AnswerChoice.C]: '$200,000 gain',
            [AnswerChoice.D]: '$ 90,000 gain'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Rebecca realizes $190,000, figured as follows:
        
       
           $500,000   FMV of like-kind property received
           +100,000   Mortgage assumed by other party (treated as cash)
         = $600,000   Total received
          -  10,000   Exchange expenses
         = $590,000   Amount realized
          - 400,000   Adjusted basis of property Rebecca gave up
          ---------
         = $190,000   Realized gain
           ========
       ASSUMPTION OF LIABILITIES. If the other party to a nontaxable exchange assumes any of taxpayer’s liabilities, taxpayer will be treated as if he received cash in the amount of the liability.
       
       REPORTING. Like-kind exchanges must be reported on Form 8824, even though no gain or loss is recognized. Recognized gain is reported on Schedule D, or Form 4797, whichever applies.`
    },
    {
        chapterIndex: 4,
        questionIndex: 16,
        qId: `q4-16`,
        tags: [],
        questionText: 'On December 31, 2018, John sold an apartment building for $225,000. He had purchased the building and placed it in service July 31, 2001, for $200,000. The depreciation deducted as of December 31, 2017 was $75,000. In 2018, the depreciation deducted was $7,000. What is the amount of the realized gain?',
        answerChoices: {
            [AnswerChoice.A]: '$107,000',
            [AnswerChoice.B]: '$118,000',
            [AnswerChoice.C]: '$ 25,000',
            [AnswerChoice.D]: '$ 27,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Realized gain is $107,000 as calculated below:
        
       
          $ 200,000 Cost or other basis
          -  82,000 Depreciation taken
            -------
          $ 118,000 Adjusted basis
       
          $ 225,000 Selling price
         -  118,000 Adjusted basis
            -------
          $ 107,000 Realized gain 
            =======`
    },
    {
        chapterIndex: 4,
        questionIndex: 17,
        qId: `q4-17`,
        tags: [],
        questionText: 'Which of the following transactions is NOT a transaction that results in a gain or loss subject to section 1231 treatment?',
        answerChoices: {
            [AnswerChoice.A]: 'The sale of a copyright, literary, musical, or artistic composition that taxpayer created',
            [AnswerChoice.B]: 'Sales or exchanges of cattle and horses',
            [AnswerChoice.C]: 'Sales or exchanges of leaseholds',
            [AnswerChoice.D]: 'Sales or exchanges of unharvested crops sold together with land to the same buyer'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The sale of a copyright, literary, musical, or artistic composition, or similar property is not a section 1231 transaction if taxpayer’s personal efforts created the property, or if taxpayer acquired the property in a way that entitled taxpayer to the basis of the previous owner whose personal efforts created it (for example, if taxpayer received the property as a gift). The sale of such property results in ORDINARY INCOME and generally is reported in PART II of Form 4797.
       The following transactions result in gain or loss subject to Section 1231 gain. Their treatment as ordinary or capital depends on whether taxpayer has a net gain or a net loss from all Section 1231 transactions:
       
       Sales or exchanges of real property or depreciable personal property (This property must be used in a trade or business and held longer than 1 year.) Generally, property held for the production of rents or royalties is considered to be used in a trade or business. Depreciable personal property includes amortizable section 197 intangibles.
       Sales or exchanges of leaseholds (held longer than one year)
       Sales or exchanges of cattle and horses (The cattle and horses must be held for draft, breeding, dairy, or sporting purposes and held for 2 years or longer.)
       Sales or exchanges of other livestock (This livestock does not include poultry.) It must be held for draft, breeding, dairy, or sporting purposes and held for 1 year or longer.
       Sales or exchanges of unharvested crops (The crop and land must be sold, exchanged, or involuntarily converted at the same time and to the same person and the land must be held longer than 1 year.)
       Cutting of timber or disposal of timber, coal, or iron ore
       Condemnations
       Casualties and thefts`
    },
    {
        chapterIndex: 4,
        questionIndex: 18,
        qId: `q4-18`,
        tags: [],
        questionText: 'Alex, a tennis pro, built a tennis facility to suit his business needs. During 2017, Alex purchased 5 ball machines for $3,500. Depreciation allowable on the ball machines was as follows: 2017 in $700; 2018 in $560. Alex sold all of the ball machines in December 2018 for $3,700. What is the amount and character of the gain from the sale?',
        answerChoices: {
            [AnswerChoice.A]: 'Ordinary income $1,260; Section 1231 gain $ 200',
            [AnswerChoice.B]: 'Ordinary income $ 200; Section 1231 gain $1,720',
            [AnswerChoice.C]: 'Ordinary income $1,460; Section 1231 gain $ -0-',
            [AnswerChoice.D]: 'Ordinary income $ -0-; Section 1231 gain $1,460'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The amount and character of the gain from the sale is $1,260 ordinary income and $200 capital gain, figured as follows:
       The amount of gain treated as ordinary income on the sale, exchange, or involuntary conversion of Section 1245 property, including a sale and leaseback transaction, is limited.
        
       
          $ 3,500 Cost of machines
          - 1,260 Depreciation taken ($700 + $560)
            -----
          $ 2,240 Basis of machines
       
          $ 3,700 Selling price
          - 2,240 Basis of machines
            -----
          $ 1,460 Gain on sale
          - 1,260 Recapture (ordinary gain due to depreciation)
            -----
          $   200 Capital gain
            =====
        
       
       FORM 4797. Use Part III of Form 4797 to figure the ordinary income part of the gain.`
    },
    {
        chapterIndex: 4,
        questionIndex: 19,
        qId: `q4-19`,
        tags: [],
        questionText: 'A used car lot owner sold an adjacent lot on June 9 of the current year for $125,000. He purchased this lot on August 6, three years earlier for $65,000. He did not pave this lot or make any improvements to it. He paid $4,600 in closing costs at the sale. How much gain does he have, and what type of gain is it?',
        answerChoices: {
            [AnswerChoice.A]: '$55,400; Section 1231 gain',
            [AnswerChoice.B]: '$60,000; Schedule D gain',
            [AnswerChoice.C]: '$55,400; Section 1250 gain',
            [AnswerChoice.D]: '$ 4,600; Section 1245 gain and $50,800; Section 1231 gain'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `He has a Section 1231 gain of $55,400 [$125,000 – $69,600 ($65,000 purchase price + $4,600 closing costs)].
       When a taxpayer disposes of business property, the taxpayer’s taxable gain or loss is usually a Section 1231 gain or loss. If closing costs are incurred, the taxpayer should subtract these expenses from the consideration received to figure the amount realized on the exchange.`
    },
    {
        chapterIndex: 4,
        questionIndex: 20,
        qId: `q4-20`,
        tags: [],
        questionText: 'On December 31, 2018, Tom sold an apartment building for $230,000. He had purchased the building and placed it in service on July 31, 2001, for $200,000. The depreciation deducted as of December 31, 2017, was $75,000 of which $25,000 was excess of depreciation adjustments over depreciation using the straight-line method. In 2018, the depreciation deducted was $7,000 of which $2,000 was excess depreciation. What is the total capital gain and straight-line depreciation?',
        answerChoices: {
            [AnswerChoice.A]: '$ 85,000',
            [AnswerChoice.B]: '$ 27,000',
            [AnswerChoice.C]: '$ 55,000',
            [AnswerChoice.D]: '$112,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The capital gain and straight-line depreciation is $85,000, figured as follows:
 

       A gain on the disposition of Section 1250 property is treated as ordinary income to the extent of additional depreciation allowed or allowable on the property.
        
       
          $ 200,000 Cost or other basis
          -  82,000 Depreciation taken ($27,000 excess depreciation)
            -------
          $ 118,000 Adjusted basis
       
          $ 230,000 Selling price
         -  118,000 Adjusted basis
            -------
          $ 112,000 Realized gain
          -  27,000 Excess depreciation
            -------
          $  85,000 Total capital gain and straight line depreciation.
            =======
        
       
       The realized gain is recognized as ordinary income to the extent the depreciation exceeded depreciation under the straight-line method. The excess depreciation $27,000 ($25,000 + $2,000) must be recaptured as ordinary income. The balance of $85,000 ($112,000 realized gain – $27,000 excess depreciation) is Section 1231 gain.`
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
    {
        chapterIndex: 5,
        questionIndex: 2,
        qId: `q5-2`,
        tags: [],
        questionText: `Mary, a seamstress, made loans of $5,000 and $1,000 to Buttons & Bows and Thread Bare, respectively. Both of these establishments are partnerships. Mary also made a loan of $2,000 to her cousin Sarah, who was starting her own business as a proprietorship. The loans to both partnerships improved Mary’s business, which was the reason Mary made the loans.
   If all three loans become uncollectible, what amount may Mary deduct as a business bad debt?`,
        answerChoices: {
            [AnswerChoice.A]: '$2,000',
            [AnswerChoice.B]: '$1,000',
            [AnswerChoice.C]: '$5,000',
            [AnswerChoice.D]: '$6,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Mary may deduct $6,000 ($5,000 + $1,000 loans made to partnerships). A business bad debt is a loss from the worthlessness of a debt that was either:
   Created or acquired in taxpayer’s trade or business, or
   Closely related to taxpayer’s trade or business when it became partly or totally worthless
   A debt is closely related to taxpayer’s trade or business if his primary motive for incurring the debt is business related. If taxpayer makes a loan to a client, supplier, employee, or distributor for a business reason and it becomes worthless, taxpayer has a business bad debt. Taxpayer can deduct business bad debts on his business tax return.
   
   All other debts are nonbusiness bad debts and are reported as short-term capital losses on Form 8949 and carried to Schedule D.`
    },
    {
        chapterIndex: 5,
        questionIndex: 3,
        qId: `q5-3`,
        tags: [],
        questionText: `The Flap Jack Partnership, guaranteed a $30,000 note for Elegant Restaurant, one of Flap Jack’s customers, for a good faith business purpose. Elegant Restaurant filed for bankruptcy and defaulted on the loan after paying $10,000 of the note. Flap Jack Partnership paid the bank the balance of the note.
   What is the amount Flap Jack Partnership can deduct as a bad debt?`,
        answerChoices: {
            [AnswerChoice.A]: '$20,000',
            [AnswerChoice.B]: '$10,000',
            [AnswerChoice.C]: '$-0-',
            [AnswerChoice.D]: '$30,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The Partnership can deduct $20,000 ($30,000 guaranteed note – $10,000 paid by Elegant Restaurant).
   Since the loan guarantee was made in the course of Flap Jack Partnership’s business for a good faith business purpose, the partnership can take a business bad debt deduction.
   
   BUSINESS LOAN GUARANTEE. If taxpayer guarantees a debt that becomes worthless, the debt can qualify as a business bad debt if all the following requirements are met:
   
   Taxpayer made the guarantee in the course of his trade or business.
   Taxpayer has a legal duty to pay the debt.
   Taxpayer made the guarantee before the debt became worthless. Taxpayer meets this requirement if he reasonably expected he would not have to pay the debt without full reimbursement from the issuer.
   Taxpayer receives reasonable consideration for making the guarantee. This requirement is met if taxpayer made the guarantee in accord with normal business practice or for a GOOD FAITH BUSINESS PURPOSE.`
    },
    {
        chapterIndex: 5,
        questionIndex: 4,
        qId: `q5-4`,
        tags: [],
        questionText: `In 2017, the Hydrangea Company (a sole proprietorship) had gross income of $158,000, a bad debt deduction of $3,500, and other allowable deductions of $49,437. The business reported on the accrual method of accounting and used the specific charge-off method for bad debts. The entire bad debt deduction reduced the taxable income on the 2017 return. In 2018, the business recovered $2,000 of the $3,500 deducted in 2017.
   How should the recovery be treated?`,
        answerChoices: {
            [AnswerChoice.A]: 'Include $2,000 in income on the 2018 return.',
            [AnswerChoice.B]: 'None of these choices',
            [AnswerChoice.C]: 'Include $3,500 in income on the 2018 return.',
            [AnswerChoice.D]: 'Amend the 2017 return to add the $2,000.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The business should include $2,000 in income on the 2018 return.
   The entire bad debt deduction reduced the tax on the 2017 corporate return. In 2018 the business recovers $2,000 of the $3,500 it deducted in 2017. Since the entire bad debt deduction reduced the taxable income on the 2017 return, Hydrangea must include the $2,000 recovered in 2018 as income. For 2018, Hydrangea Company reports the recovery as “OTHER INCOME” on its business return.`
    },
    {
        chapterIndex: 5,
        questionIndex: 5,
        qId: `q5-5`,
        tags: [],
        questionText: 'If a taxpayer does not carry on his business or investment activity to make a profit, there is a limit on the deductions that can be taken. An activity is presumed to be carried on for profit if it produced a profit in at least __________ including the current year.',
        answerChoices: {
            [AnswerChoice.A]: '3 of the last 5 years',
            [AnswerChoice.B]: 'There is no such criteria to determine "for profit" objective.',
            [AnswerChoice.C]: 'All of the last 5 years',
            [AnswerChoice.D]: '2 of the last 5 years'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `An activity is presumed carried on for profit if it produced a profit in at least 3 of the last 5 tax years including the current year. Activities that consist primarily of breeding, training, showing, or racing horses are presumed carried on for profit if they produced a profit in at least 2 of the last 7 tax years including the current year.`
    },
    {
        chapterIndex: 5,
        questionIndex: 6,
        qId: `q5-6`,
        tags: [],
        questionText: 'For pay to be deductible by the employer, certain tests must be met. Which of the following is NOT one of the tests?',
        answerChoices: {
            [AnswerChoice.A]: 'The pay must not be for an employee-shareholder.',
            [AnswerChoice.B]: 'The pay must be reasonable.',
            [AnswerChoice.C]: 'The pay must be for services performed.',
            [AnswerChoice.D]: 'The pay must be ordinary and necessary business expense.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The pay can be for an employee-shareholder. However, if a corporation pays an employee (who is also a shareholder) a salary that is unreasonably high considering the services actually performed, the excess part of the salary may be treated as a constructive distribution of earnings to the employee-shareholder.
   To be deductible, the employee’s pay must be an ordinary and necessary expense and the employer must pay or incur it in the tax year. In addition, the pay must meet both the following tests:
   
   Test 1. The pay must be reasonable.
   Test 2. The pay must be for services performed.
    
   
   The employer must be able to show that the salary, wage, or other payment for services an employee performs for the employer is ordinary and necessary expense and how it is directly connected with the business.`
    },
    {
        chapterIndex: 5,
        questionIndex: 7,
        qId: `q5-7`,
        tags: [],
        questionText: `Mr. Aspen, a cash basis CPA, pays Gail Smith to work during tax season as a data entry clerk. Mr. Aspen pays Gail the following:
   Hourly wages $6,275
   Bonuses $500
   Loan $150
   How much can Mr. Aspen deduct as compensation?`,
        answerChoices: {
            [AnswerChoice.A]: '$6,775',
            [AnswerChoice.B]: '$6,875',
            [AnswerChoice.C]: '$7,135',
            [AnswerChoice.D]: '$6,035'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Mr. Aspen can deduct as compensation $6,775 ($6,275 hourly wages + $500 bonus).
   An employer generally can deduct as wages a loan or advance made to an employee that the employer expects the employee to NOT repay if it is for personal services actually performed. The total must be reasonable when added to the employee’s other pay. HOWEVER, if the employee performs no services, the advanced amount is treated as a loan, which cannot be deducted unless it becomes a bad debt.`
    },
    {
        chapterIndex: 5,
        questionIndex: 8,
        qId: `q5-8`,
        tags: [],
        questionText: 'Carol owns a dress shop and employs three people full time. In December, Carol paid bonuses to the three employees in addition to their regular salaries. The bonuses were reasonable and for service performed. She intended the bonuses as additional pay for their services. The bonuses consisted of property and cash. Carol may deduct the entire amount of bonuses paid.',
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
        moreExplanation: `Employers generally can deduct as a business expense salaries, wages, and other forms of pay made to employees for personal services.`
    },
    {
        chapterIndex: 5,
        questionIndex: 9,
        qId: `q5-9`,
        tags: [],
        questionText: 'For the special rules regarding pay when the accrual method of accounting was used, which of the following is NOT considered a related taxpayer?',
        answerChoices: {
            [AnswerChoice.A]: 'Cousins',
            [AnswerChoice.B]: 'Grandparents',
            [AnswerChoice.C]: 'An individual and a corporation in which more than 50% of the value of the outstanding stock is owned indirectly by or for that individual',
            [AnswerChoice.D]: 'Grandchildren'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Cousins are not related taxpayers for this rule. If an accrual method of accounting was used, the salaries, wages, and other expenses owed to a related taxpayer are NOT deducted until:
   The tax year the payments is made, and
   The amount is includible in the income of the person paid.
   Related persons for the special rule regarding accrual method payers include:
   
   Members of a family, but only:
   Brothers and sisters (either whole or half-blood)
   Spouses
   Ancestors (parents, grandparents, etc.)
   Lineal descendants (children, grandchildren, etc.)
   An individual and a corporation in which more than 50% of the value of the outstanding stock is owned directly or indirectly by or for that individual.
 `
    },
    {
        chapterIndex: 5,
        questionIndex: 10,
        qId: `q5-10`,
        tags: [],
        questionText: `In February, Omega, Inc. partially compensates employee Tom Jones with 100 shares of stock. Omega, Inc. stock is selling for $200 per share at the time Tom receives his shares. On December 31, Tom sells his 100 shares of Omega, Inc. stock for $300 each.
   How much of an employee compensation expense can Omega, Inc.deduct for Tom’s 100 shares ?`,
        answerChoices: {
            [AnswerChoice.A]: '$20,000',
            [AnswerChoice.B]: '$10,000',
            [AnswerChoice.C]: '$-0-',
            [AnswerChoice.D]: '$30,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Omega Inc. can deduct $20,000 ($200 FMV x 100 shares of stock).
   If a corporation transfers it’s company’s stock to an employee as payment for services, it can generally deduct it as wages. The amount that can be deducted is the property’s fair market value on the date of the transfer.`
    },
    {
        chapterIndex: 5,
        questionIndex: 11,
        qId: `q5-11`,
        tags: [],
        questionText: `Alan is a sole proprietor of the SAFE Auto Towing Company. Alan paid Landslide Land, Inc., (unrelated), $24,000 for the entire year for the use of the garage where he operates his business. On September 1, Alan signed a contract to purchase the garage. His rent payments from September through December will be applied to his equity interest in the business.
   What is the rent expense deduction that Alan may take on his Schedule C for the year?`,
        answerChoices: {
            [AnswerChoice.A]: '$16,000',
            [AnswerChoice.B]: '$24,000',
            [AnswerChoice.C]: '$ 8,000',
            [AnswerChoice.D]: '$ -0-'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The rent expense deduction that Alan may take on his Schedule C for the year is $16,000 ($2,000 per month x 8 months). He can deduct only the portion of the prepaid rent used up before he acquired the garage.
   If taxpayer has or will receive equity in or title to the property, the rent is not deductible.
   
   Generally, rent paid in taxpayer’s trade or business is deductible in the year paid or accrued. However, if taxpayer pays rent in advance, he can deduct only the amount that applies to his use of the rented property during the tax year.`
    },
    {
        chapterIndex: 5,
        questionIndex: 12,
        qId: `q5-12`,
        tags: [],
        questionText: `On June 30, Sally, who uses the cash method of accounting, borrowed $25,000 from a bank for use in her business. Sally was to repay the loan in one payment with $2,000 interest on December 30. On December 30, she renewed that loan plus the interest due. The new loan was for $27,000.
    What is the amount of interest expense that Sally can deduct for the year ?`,
        answerChoices: {
            [AnswerChoice.A]: '$ -0-',
            [AnswerChoice.B]: '$2,000',
            [AnswerChoice.C]: '$333',
            [AnswerChoice.D]: '$1,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `If the cash method of accounting is used, interest paid with funds borrowed from the original lender through a second loan, an advance, or any other arrangement similar to a loan is not deductible. Such interest expense is deductible once the taxpayer starts making payments on the new loan.`
    },
    {
        chapterIndex: 5,
        questionIndex: 13,
        qId: `q5-13`,
        tags: [],
        questionText: 'The M&M partnership constructed a commercial building at a cost of $350,000. M&M borrowed $200,000 to help pay for the construction. The interest paid on the loan was $16,000. M&M also borrowed money to purchase a truck to be used in the business. The truck cost $30,000. M&M put $6,000 down and borrowed $24,000 and paid interest of $2,400. M&M can deduct $_______ in interest expense on its tax return.',
        answerChoices: {
            [AnswerChoice.A]: '$ 2,400',
            [AnswerChoice.B]: '-$0-',
            [AnswerChoice.C]: '$16,000',
            [AnswerChoice.D]: '$18,400'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The $2,400 interest paid on the truck used for business can be deducted. However, the business cannot deduct interest they are required to capitalize under the uniform capitalization rules. Under the uniform capitalization rules, the business generally must capitalize interest on debt equal to the expenditures to produce real property or certain tangible personal property. The property must be produced by the business for use in the trade or business or for sale to customers. Businesses cannot deduct interest they are required to capitalize under the uniform capitalization rules.
   Interest paid or incurred during the production period must be capitalized if the property produced is designated property. Designated property is any of the following:
   
   Real property
   Tangible personal property with a class life of 20 years or more
   Tangible personal property with an estimated production period of more than 2 years
   Tangible personal property with an estimated production period of more than 1 year if the estimated cost of production is more than $1 million
   Treat capitalized interest as a cost of the property produced. Businesses recover the interest when they sell or use the property.`
    },
    {
        chapterIndex: 5,
        questionIndex: 14,
        qId: `q5-14`,
        tags: [],
        questionText: 'Which of the following taxes are NOT deductible currently as a business expense?',
        answerChoices: {
            [AnswerChoice.A]: 'Sales tax paid on depreciable business property',
            [AnswerChoice.B]: 'State income tax',
            [AnswerChoice.C]: 'Franchise taxes',
            [AnswerChoice.D]: 'Occupational taxes'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Sales tax paid on depreciable business property is added to the basis of the property.
   SALES TAX. Treat any sales tax paid on a service or on the purchase of property as part of the cost of the service or property. If the service or the cost or use of the property is a deductible business expense, taxpayer can deduct the tax as part of that service or cost. If the property is merchandise bought for resale, the sales tax is part of the cost of the merchandise. If the property is DEPRECIABLE, add the sales tax to the BASIS for depreciation.
   
   Do not deduct state and local sales taxes imposed on the buyer that taxpayer must collect and pay over to the state or local government.`
    },
    {
        chapterIndex: 5,
        questionIndex: 15,
        qId: `q5-15`,
        tags: [],
        questionText: `Which of the following statements regarding deductible taxes is correct?
   1.    Local benefit taxes for business assets are deductible only if they are for maintenance, repair, or interest charges related to those benefits.
   2.    Real estate taxes on business property included in monthly mortgage payments placed in escrow cannot be deducted unless the lender actually paid the taxing authority.
   3.    Taxes on gasoline, diesel fuel and other motor fuels that taxpayer uses in his business should be deducted as part of the cost of the fuel.
   4.    Any tax imposed by a state or local government on personal property used in taxpayer’s trade or business is deductible.`,
        answerChoices: {
            [AnswerChoice.A]: '1, 2, 3, and 4',
            [AnswerChoice.B]: '1, 2, and 4',
            [AnswerChoice.C]: '1 and 3',
            [AnswerChoice.D]: '2 and 4'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `more explanation...`
    },
    {
        chapterIndex: 5,
        questionIndex: 16,
        qId: `q5-16`,
        tags: [],
        questionText: `Pleasant Beach City, to improve downtown commercial business, converted a downtown business area street into an enclosed pedestrian mall. The city assessed the full cost of construction, financed with 10-year bonds, against the affected business properties. The city is paying the principal and interest with the annual payments made by the property owners.
    The portion that the business owners were assessed to pay the construction costs is:`,
        answerChoices: {
            [AnswerChoice.A]: 'Deductible as taxes',
            [AnswerChoice.B]: 'A depreciable capital expenditure',
            [AnswerChoice.C]: 'A non-depreciable capital expenditure',
            [AnswerChoice.D]: 'Deductible as a business expense'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The portion that the business owners were assessed to pay the construction costs is a depreciable capital expenditure.
   Before figuring depreciation taxpayer must usually make certain adjustments to the basis of property. Increase the basis of any property by all items properly added to a capital account. These include the cost of any improvements having a useful life of more than 1 year.
   
   Taxpayers increase the depreciable basis of property by assessments for items such as paving roads and building ditches that increase the value of the property assessed. Do NOT DEDUCT them as taxes. However, taxpayers can deduct as taxes charges for maintenance, repairs, or interest charges related to the improvements.
   
   Use Form 4562 to depreciate capital expenditures.`
    },
    {
        chapterIndex: 5,
        questionIndex: 17,
        qId: `q5-17`,
        tags: [],
        questionText: 'Generally, a cash basis taxpayer can deduct insurance payments paid in advance, even if, in effect, it creates an asset with a useful life extending substantially beyond the end of the current year.',
        answerChoices: {
            [AnswerChoice.A]: 'False',
            [AnswerChoice.B]: 'True',
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `If taxpayer uses the cash method of accounting, he generally deducts insurance premiums in the tax year he actually paid them, even if he incurred them in an earlier year.`
    },
    {
        chapterIndex: 5,
        questionIndex: 18,
        qId: `q5-18`,
        tags: [],
        questionText: `The taxpayer operates a business and files his tax return on a calendar-year basis. He bought a fire insurance policy on an office building effective November 1, 2018, and paid a premium of $1,200 for 2 years of coverage.
    How much can he deduct on his 2018 return?`,
        answerChoices: {
            [AnswerChoice.A]: '$100',
            [AnswerChoice.B]: '$1,200',
            [AnswerChoice.C]: '$600',
            [AnswerChoice.D]: '$50'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `He can deduct $100 ($1,200 / 24 x 2 months). Expenses paid in advance are not deductible. This rule applies to any expense paid far enough in advance to, in effect, create an asset with a useful life extending substantially beyond the end of the current tax year.`
    },
    {
        chapterIndex: 5,
        questionIndex: 19,
        qId: `q5-19`,
        tags: [],
        questionText: `Sara’s client owns Pizza Joe’s and is planning a business trip to Florence, Italy for an annual four-day Pizzeria Convention. He plans to be gone for less than one week total and to stop in Venice briefly to visit his cousin Vincent. As his trusted tax preparation professional, he asked Sara if all of his air fare expenses to and from Italy will be deductible. Sara tells him that even though he will not be spending the entire time on business activities, the trip is considered entirely for business if he meets at least ONE of the following exceptions.
    Which of the following is NOT one of those exceptions?`,
        answerChoices: {
            [AnswerChoice.A]: 'The taxpayer spends less than 10% on personal activities.',
            [AnswerChoice.B]: 'Vacation was not a major consideration.',
            [AnswerChoice.C]: 'The taxpayer had no substantial control over planning the trip.',
            [AnswerChoice.D]: 'The taxpayer was outside the U.S. no more than a week.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `One of the four exceptions is that the taxpayer spends less than 25% on personal activities, NOT 10%.
   If any part of the business travel is outside the U.S., some of the deductions for the cost of getting to and from the destination may be limited. If the trip is entirely for business or considered entirely for business, all of the travel expenses can be deducted. Even if the taxpayer did not spend the entire time on business activities, the trip is considered entirely for business if the taxpayer meets at least ONE of the following four exceptions:
   
   The taxpayer spends less than 25% on personal activities.
   Vacation was not a major consideration.
   The taxpayer was outside the U.S. no more than a week. In counting the days, do not count the day the taxpayer leaves the United States, but do count the day he returns to the United States.
   The taxpayer had no substantial control over the trip.`
    },
    {
        chapterIndex: 5,
        questionIndex: 20,
        qId: `q5-20`,
        tags: [],
        questionText: 'Which of the following is adequate documentation to prove the expense of a business meal?',
        answerChoices: {
            [AnswerChoice.A]: 'Date, amount, location, business reason, and who attended',
            [AnswerChoice.B]: 'Date and amount',
            [AnswerChoice.C]: 'Date, amount, and location',
            [AnswerChoice.D]: 'Date, amount,business reason, and who attended'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Adequate documentation to prove the expense of a business meal includes date, amount, location, business reason, and who attended.
    
   MEAL and ENTERTAINMENT EXPENSE. Documentation is required to prove the deduction for ANY amount. Include:
   
   Date
   Amount
   Location
   Business reason
   Who attended
`
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
    {
        chapterIndex: 6,
        questionIndex: 2,
        qId: `q6-2`,
        tags: [],
        questionText: 'An employer’s cafeteria plan CANNOT include:',
        answerChoices: {
            [AnswerChoice.A]: 'Dependent care assistance',
            [AnswerChoice.B]: 'Adoption assistance',
            [AnswerChoice.C]: 'Moving expense reimbursements',
            [AnswerChoice.D]: 'Accident and health benefits'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Moving expense reimbursements are not allowable benefits under a cafeteria plan.
       Qualified cafeteria plan benefits include:
       
       Accident and health benefits (not Archer medical savings accounts or long-term care insurance)
       Adoption assistance
       Dependent care assistance
       Group-term life insurance coverage (including costs that cannot be excluded from wages)
       Health Savings Accounts (HSA)
       Benefits NOT allowed include:
       
       Archer medical savings accounts
       Athletic facilities
       De minimis (minimal) benefits
       Educational assistance
       Employee discounts
       Lodging on business premises
       Meals
       Moving expense reimbursements
       No-additional-cost services
       Transportation (commuting) services
       Tuition reduction
       Working condition benefits
`
    },
    {
        chapterIndex: 6,
        questionIndex: 3,
        qId: `q6-3`,
        tags: [],
        questionText: 'An employer can exclude the value of a de minimis benefit from an employee’s wages. De minimis benefits for this purpose does NOT include:',
        answerChoices: {
            [AnswerChoice.A]: 'Holiday gift of cash (small amount)',
            [AnswerChoice.B]: 'Group-term life insurance payable on the death of the employee\'s spouse of $2, 000',
            [AnswerChoice.C]: 'Coffee, doughnuts, and soft drinks',
            [AnswerChoice.D]: 'Occasional tickets for entertainment'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Cash, no matter how little, is never deductible as a de minimis fringe benefit, except for occasional meal money or transportation fare.
       Examples of de minimis fringe benefits include the following:
       
       Occasional personal use of a company’s copying machine if the employer sufficiently controls its use so that at least 85% of its use is for business purposes
       Occasional typing of personal letters by a company secretary
       Occasional parties or picnics for employees and their guests
       Occasional tickets for entertainment or sporting events
       Occasion meals, meal money, or local transportation fare, not based on hours worked, provided to an employee because the employee is working overtime and, for meals and meal money, provided to enable the employee to work overtime
       Holiday gifts, other than cash, with a low FMV
       Coffee, doughnuts, or soft drinks furnished to employees
       Group-term life insurance payable on the death of an employee’s spouse or dependent if the face amount is NOT more than $2,000
`
    },
    {
        chapterIndex: 6,
        questionIndex: 4,
        qId: `q6-4`,
        tags: [],
        questionText: 'All of the following are excludable from wages EXCEPT:',
        answerChoices: {
            [AnswerChoice.A]: 'Employer provided vehicles when used by employee for personal purposes',
            [AnswerChoice.B]: 'A non-cash achievement award valued at $100',
            [AnswerChoice.C]: 'De minimis fringe benefit',
            [AnswerChoice.D]: 'Meals furnished during work hours for the benefit of the employer'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `If an employer provides a car for an employee’s use, the amount that can be excluded as a working condition benefit is the amount that would be allowable as a deductible business expense if the employee paid for its use. That is, the employee uses the car for both business and personal use, the value of the working condition benefit is the part determined to be for business use of the vehicle.
       Any fringe benefit an employer provides is taxable and must be included in the recipient’s pay unless the law specifically excludes it.
       
       Achievement awards are exempt up to $1,600 ($400 for nonqualified awards). Meals are exempt if either furnished for the employer’s convenience or if de minimis. De minimis (minimal) benefits are exempt. (This is not a complete list).`
    },
    {
        chapterIndex: 6,
        questionIndex: 5,
        qId: `q6-5`,
        tags: [],
        questionText: 'Regarding high-deductible health plans, preventive care includes:',
        answerChoices: {
            [AnswerChoice.A]: 'All of these choices',
            [AnswerChoice.B]: 'Obesity weight-loss programs',
            [AnswerChoice.C]: 'Tobacco cessation programs',
            [AnswerChoice.D]: 'Adult immunizations'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `An HDHP may provide preventive care benefits without a deductible or with a deductible below the minimum annual deductible. Preventive care includes, but is not limited to the following:
       Periodic health evaluations, including tests and diagnostic procedures ordered in connection with routine examinations, such as annual physicals
       Routine prenatal and well-child care
       Child and adult immunizations
       Tobacco cessation programs
       Obesity weight-loss programs
       Screening services
`
    },
    {
        chapterIndex: 6,
        questionIndex: 6,
        qId: `q6-6`,
        tags: [],
        questionText: 'With regard to the Disabled Access Credit (Form 8826), which of the following statements is true?',
        answerChoices: {
            [AnswerChoice.A]: 'The expenses must be paid to enable the business to comply with the Americans with Disabilities Act of 1990.',
            [AnswerChoice.B]: 'The credit is refundable.',
            [AnswerChoice.C]: 'All businesses are eligible.',
            [AnswerChoice.D]: 'The credit equals 100% of eligible expenditures in excess of $250 and less than $10,000.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The disabled access credit (Form 8826) is a nonrefundable tax credit for an eligible small business that pays or incurs expenses to provide access to persons who have disabilities.
       The taxpayer must pay or incur the expenses to enable the business to comply with the Americans with Disabilities Act of 1990. An eligible small business is any business that had gross receipts for the preceding tax year that did not exceed $1 million or had no more than 30 full-time employees during the preceding tax year. The credit equals 50% of eligible expenditures in excess of $250 and less than $10,000. Limited to $5,000.`
    },
    {
        chapterIndex: 6,
        questionIndex: 7,
        qId: `q6-7`,
        tags: [],
        questionText: 'Which of the following general business credits has a special tax liability limit and is NOT reported on Form 3800?',
        answerChoices: {
            [AnswerChoice.A]: 'All general business credits must be reported on Form 3800.',
            [AnswerChoice.B]: 'Disabled access credit (Form 8826)',
            [AnswerChoice.C]: 'Research credit (Form 6765)',
            [AnswerChoice.D]: 'Low-income housing credit (Form 8586)'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Form 3800 must be filed to claim any of the general business credits.
       Before 2008, the following five general business credits which have special tax liability limits were NOT reported on Form 3800:
       
       The empowerment zone and renewal community employment credit from Form 8844.
       The work opportunity credit from Form 5884
       The credit for alcohol used as fuel from Form 6478
       The renewal electricity, refined coal, and Indian coal production credit from Section B of Form 8835
       The credit for employer Social Security and Medicare taxes paid on certain employee tips from Form 8846
       If taxpayer’s only source of credits listed on Form 3800, Part I, is from pass-through entities, taxpayer may not be required to complete the source credit form. Instead, taxpayer may be able to report the credit directly on Form 3800.`
    },
    {
        chapterIndex: 6,
        questionIndex: 8,
        qId: `q6-8`,
        tags: [],
        questionText: 'Form 3800 generally must be completed if the taxpayer has ____________.',
        answerChoices: {
            [AnswerChoice.A]: 'All of these choices',
            [AnswerChoice.B]: 'Credit for Employer Social Security and Medicare taxes (Form 8846)',
            [AnswerChoice.C]: 'Work Opportunity Credit (Form 5884)',
            [AnswerChoice.D]: 'Credit for Alcohol Used as a Fuel (Form 6478)'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Form 3800 must be filed to claim any of the General Business Credits.`
    },
    {
        chapterIndex: 6,
        questionIndex: 9,
        qId: `q6-9`,
        tags: [],
        questionText: 'The General Business Credit CANNOT lower taxpayer’s tax below:',
        answerChoices: {
            [AnswerChoice.A]: 'The taxpayer\'s alternative minimum tax for the tax year',
            [AnswerChoice.B]: 'The taxpayer\'s tax for the prior year',
            [AnswerChoice.C]: 'The poverty level for the year',
            [AnswerChoice.D]: 'A number IRS announces each year'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The General Business Credit cannot lower taxpayer’s tax below the taxpayer’s alternative minimum tax for the tax year.
       ALTERNATIVE MINIMUM TAX (AMT). Although taxpayer may not owe AMT, taxpayer must still figure the tentative minimum tax on Form 6251 if he claims a general business credit.
       
       Taxpayer’s general business credit for the year consists of his carryforward of business credits from prior years plus the total of his current year business credits. In addition, taxpayer’s general business credit for the current year may be increased later by the carryback of business credits from later years.`
    },
    {
        chapterIndex: 6,
        questionIndex: 10,
        qId: `q6-10`,
        tags: [],
        questionText: `Santergraph, Inc. remodeled and converted a portion of their building into a licensed child care facility open for the care of any of their employees’ children.
       The cost of this remodeling qualifies for which of the following?`,
        answerChoices: {
            [AnswerChoice.A]: 'A tax credit of 25% of the qualified expenses, maximum credit of $150,000, with the balance depreciable',
            [AnswerChoice.B]: 'Section 179 expensing election',
            [AnswerChoice.C]: 'An adjustment to income of 75% of the costs, with the balance depreciable',
            [AnswerChoice.D]: 'An asset to be depreciated over the remaining useful life of the building'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The cost of this remodeling qualifies for the Credit for Employer-Provided Child Care Facilities and Services. (Form 8882)
       This credit applies to the qualifying expenses an employer paid for employee child care and qualified expenses paid for child care resource and referral services. The credit is 25% of qualified expenses the employer paid for employee child care and 10% of qualified expenses paid for child care resource and referral services. This credit is limited to $150,000 each year. The balance is depreciable.`
    },
    {
        chapterIndex: 6,
        questionIndex: 11,
        qId: `q6-11`,
        tags: [],
        questionText: 'In regards to the credit for Employer-Provided Childcare facilities and services, which of the following is NOT true?',
        answerChoices: {
            [AnswerChoice.A]: 'The dollar amount of the credit is not limited.',
            [AnswerChoice.B]: 'The credit allows for 10% of qualified expenses paid for childcare resource and referral services.',
            [AnswerChoice.C]: 'The employer applies for the credit on Form 8882, Credit for Employer-Provided Child Care Facilities and Services.',
            [AnswerChoice.D]: 'The credit allows for 25% of qualified expenses paid for employee childcare.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The dollar amount of the credit is limited.
       For tax years beginning in 2002, a tax credit called the Employer-Provided Child Care Credit (Code. Sec. 45F) may be claimed. The amount of the credit for a tax year is the sum of 25% of the qualified child care expenditures and 10% of the qualified resource and referral expenditures. The maximum amount of credit allowed in any given year is $150,000. Form 8882 is to be used to calculate and claim the credit. The credit is part of and subject to the limitations and carryover rules of the general business credit. No double benefit is allowed for expenditures used to claim the employer-provided child care credit and the basis of the child care facility must be reduced by the amount of the credit taken.`
    },
    {
        chapterIndex: 6,
        questionIndex: 12,
        qId: `q6-12`,
        tags: [],
        questionText: `Gary is a calendar-year eligible small employer and wishes to take advantage of the Credit for Small Employer Pension Plan Startup Costs. He incurred $2,000 in qualified startup costs in 2018 for an eligible plan that will become effective on January 1, 2019.
       What is Gary’s Pension Startup Costs credit amount for calendar year 2018?`,
        answerChoices: {
            [AnswerChoice.A]: '$500',
            [AnswerChoice.B]: '$-0-',
            [AnswerChoice.C]: '$2,000',
            [AnswerChoice.D]: '$1,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Gary’s Pension Startup Costs credit is $500. (50% x $2,000 = $1,000; however, the maximum amount is $500.)
       Taxpayer may be able to claim a tax credit for part of the ordinary and necessary costs of starting a SEP, SIMPLE, or qualified plan. The credit equals 50% of the cost to set up and administer the plan and educate employees about the plan, up to a maximum of $500 per year for each of the first 3 years of the plan.
       
       The credit is part of the general business credit, which can be carried back or forward to other tax years if it cannot be used in the current year. The credit is reported on Form 8881, Credit for small Employer Pension Plan Startup Costs.`
    },
    {
        chapterIndex: 6,
        questionIndex: 13,
        qId: `q6-12`,
        tags: [],
        questionText: `Rob and George own an office building that was built in 1976. They opened a tax return business in 2017 and made numerous renovations during 2018 to the building to bring it into compliance with the Americans with Disabilities Act of 1990. They had gross receipts of $750,000 dollars and ten full-time employees during 2017. They spent $15,000 in eligible access expenditures.
       What is the current year Disabled Access Credit?`,
        answerChoices: {
            [AnswerChoice.A]: '$5,000',
            [AnswerChoice.B]: '$7,500',
            [AnswerChoice.C]: '$1,500',
            [AnswerChoice.D]: '$14,750'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The current year Disabled Access Credit is $5,000, figured as follows:
        
       
        1. Total eligible access expenditures ..... $15,000
        2. Minimum amount .........................     250
        3. Subtract line 2 from line 1............. $14,750
        4. Maximum amount ......................... $10,000
        5. Smaller of line 3 or line 4............. $10,000
        6. Multiply line 5 by 50% ................. $ 5,000
                                                    =======
       The credit is figured by multiplying eligible expenditures by 50%, limited to $5,000.
       $5,000, figured as follows:
       
       
       For purposes of the credit, an eligible small business is any business or person that:
       
       Had gross receipts for the PRECEDING tax year that did not exceed $1 million or had no more than 30 full-time employees during the preceding tax year, and
       Elects by filing Form 8826 to claim the disabled excess credit for the tax year
`
    },
    {
        chapterIndex: 6,
        questionIndex: 14,
        qId: `q6-14`,
        tags: [],
        questionText: `Ryan runs a manufacturing business employing several people with young children. These employees require daycare as both parents work. He decided that, in order to make it easier for his employees to come to work each day, he would allocate some of the unused space in his manufacturing facility to a child care facility. During the year, he incurred $20,000 in qualified childcare facility expenditures. He had no qualified childcare resource and referral expenditures and had no pass through credits.
       What is Ryan’s credit?`,
        answerChoices: {
            [AnswerChoice.A]: '$5,000',
            [AnswerChoice.B]: '$20,000',
            [AnswerChoice.C]: '$2,000',
            [AnswerChoice.D]: '$10,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Ryan’s credit is $5,000 ($20,000 x 25%).
       The credit is 25% of the qualified childcare facility expenditures plus 10% of the qualified childcare resource and referral expenditures paid or incurred during the tax year. The credit is limited to $150,000 per tax year. (Report on Form 8882.)
       
        
       Qualified childcare facility expenditures are amounts paid/incurred:
       
       To acquire, construct, rehabilitate, or expand property that:
       Is to be used as part of a qualified childcare facility of the taxpayer
       Is depreciable (or amortizable) property, and
       Is NOT part of the principal residence of the taxpayer or any employee of the taxpayer
       For the operating expenses of a qualified childcare facility of the taxpayer, including expenses for training of employees, scholarship programs, and providing increased compensation to employees with higher levels of childcare training; or
       Under a contract with a qualified childcare facility to provide childcare services to employees of the taxpayer
        
       
       Any expenses for childcare included in qualified childcare facility expenditures may not exceed the FMV of such care.`
    },
    {
        chapterIndex: 6,
        questionIndex: 15,
        qId: `q6-15`,
        tags: [],
        questionText: `A company increased their research expenses above its base amount by $3,600.
       What is the maximum credit they may qualify for on their tax return for the tax year?`,
        answerChoices: {
            [AnswerChoice.A]: '$ 720',
            [AnswerChoice.B]: '$ 900',
            [AnswerChoice.C]: '$2,700',
            [AnswerChoice.D]: '$ 360'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: ` The maximum credit the company may qualify for is $720 ($3,600 x 20%). The research credit is designed to encourage businesses to increase the amounts they spend on research and experimental activities. The credit is generally a maximum of 20% of the amount by which research expenses for the year are more than the taxpayer’s base amount. (Report on Form 6765.)  `
    },
    {
        chapterIndex: 6,
        questionIndex: 16,
        qId: `q6-16`,
        tags: [],
        questionText: `The F&E Partnership spent $100,000 on eligible access expenditures that qualify for the disabled access credit. The partnership had gross receipts of $1 million and 30 full-time employees during the preceding tax year.
       What is the amount of the disabled access credit for the tax year?`,
        answerChoices: {
            [AnswerChoice.A]: '$5,000',
            [AnswerChoice.B]: '$50,000',
            [AnswerChoice.C]: '$10,000',
            [AnswerChoice.D]: '$250'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The amount of Disabled Access Credit is $5,000. The credit equals 50% of eligible expenditures in excess of $250 and less than $10,250. (Form 8826, Disabled Access Credit.)
       The Disabled Access Credit is a nonrefundable tax credit for an eligible small business that pays or incurs expenses to provide access to persons who have disabilities. For purposes of the credit, an eligible small business is any business or person that had gross receipts for the preceding tax year that did not exceed $1 million or had no more than 30 full-time employees during the preceding tax year.`
    },
    {
        chapterIndex: 6,
        questionIndex: 17,
        qId: `q6-17`,
        tags: [],
        questionText: `The Barrow and Jones partnership incurred qualified rehabilitation expenses of $50,000 on a certified HISTORIC structure.
       What is the Rehabilitation Investment Credit before tax limitations are applied?`,
        answerChoices: {
            [AnswerChoice.A]: '$10,000',
            [AnswerChoice.B]: '$7,500',
            [AnswerChoice.C]: '$5,000',
            [AnswerChoice.D]: '$6,000'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `The partnership’s credit before limitations are applied is $10,000 ($50,000 x 20%).
       Taxpayers are allowed a credit for qualified rehabilitation expenditures made for any qualified rehabilitated building. The credit is 10% of the expenditures for any qualified rehabilitated building other than a certified historic structure. The credit is 20% of the expenditures for a certified historic structure. (Report on Form 3468, Investment Credit.)`
    },
    {
        chapterIndex: 6,
        questionIndex: 18,
        qId: `q6-18`,
        tags: [],
        questionText: `During the year, Colleen started a SIMPLE plan for all five of her employees and herself. It cost her $400 in fees to administer the plan. She never had a pension plan prior to starting this plan. 
       Her tax credit is:`,
        answerChoices: {
            [AnswerChoice.A]: '$200',
            [AnswerChoice.B]: '$400',
            [AnswerChoice.C]: '$100',
            [AnswerChoice.D]: '$-0-'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Her tax credit is $200 ($400 x 50%). The credit is 50% of the first $1,000.
       This credit applies to pension plan start-up costs. If an employer begins a new qualified defined benefit or defined contribution plan (including a 401(k) plan), SIMPLE plan, or simplified employee pension, the employer can receive a tax credit of 50% of the first $1,000 of qualified start-up costs. (Report on Form 8881, Credit for Small Employer Pension Plan Start-up Costs.)`
    },
    {
        chapterIndex: 6,
        questionIndex: 19,
        qId: `q6-19`,
        tags: [],
        questionText: `John has three full-time employees. Two of the employees worked for John since 2015. The other employee began working for John on January 1, 2018 and is certified as a member of a targeted group. Each employee makes $1,300 per month.
       How much can John claim as qualified first year wages in computing the Work Opportunity Credit?`,
        answerChoices: {
            [AnswerChoice.A]: '$6,000',
            [AnswerChoice.B]: '$6,240',
            [AnswerChoice.C]: '$15,600',
            [AnswerChoice.D]: '$48,600'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `John can claim $6,000 (the maximum amount) as qualified first year wages.
       The credit is 40% of first year wages up to $6,000 if the individual worked 400 hours or more during the year, or 25% for qualified employees who worked between 120 and 400 hours during the year. Employees must be certified by the state workforce agency and include veterans, ex-felons, vocational rehabilitation referrals, employees of summer youth programs, and recipients of food stamps, SSI, and Temporary Assistance for Needy Families (TANF). The credit is 50% for qualified second-year wages up to $10,000 of employees certified as long-term assistance recipients.
       
       QUALIFIED VETERANS. The amount of qualified first-year wages that may be taken into account for an employee certified as a qualified veteran is limited to 40% of either $6,000; $12,000; $14,000; or $24,000, depending on the circumstances.
        
       
       FORM 5884. Use Form 5884 to claim the work opportunity credit for qualified first- or second-year wages paid to or incurred for targeted group employees during the tax year. The business does not have to be located in an empowerment zone, renewal community, or rural renewal county to qualify for this credit.`
    },
    {
        chapterIndex: 6,
        questionIndex: 20,
        qId: `q6-20`,
        tags: [],
        questionText: 'All of the following statements about fringe benefits for the current year are correct EXCEPT:',
        answerChoices: {
            [AnswerChoice.A]: 'An employer can treat all meals furnished to employees on their premises as furnished for the employer\'s convenience if half of these employees are furnished the meals for a substantial nonpay business reason.',
            [AnswerChoice.B]: 'An employer can exclude qualified transportation fringe benefits from an employee\'s wages even if they are provided in place of pay.',
            [AnswerChoice.C]: 'Employee wages do not include the value of any property or service that has so little value that accounting for it would be unreasonable or administratively impracticable.',
            [AnswerChoice.D]: 'An employer cannot use the vehicle cents-per-mile rule to figure the value of an employee\'s use of an automobile first made available to the employee for personal use in 2018, if the fair market value of the automobile is more than $16,500.'
        },
        correctAnswer: AnswerChoice.A,
        explanations: {
            [AnswerChoice.A]: 'The answer is A because...',
            [AnswerChoice.B]: 'The answer is not b because...',
            [AnswerChoice.C]: 'The answer is not c because...',
            [AnswerChoice.D]: 'The answer is not d because...'
        },
        moreExplanation: `Under a special rule enacted in 1998 for any tax year, employers can treat ALL meals furnished to employees on their premises as furnished for the employer’s convenience if MORE than half (instead of substantially all) of these employees are furnished the meals for the employer’s convenience.`
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
