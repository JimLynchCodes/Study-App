import { Injectable } from "@angular/core";
import { Chapter } from "~/app/data/_data.models/chapter.model";
import { IQuestion } from "~/app/data/_data.models/question.model";
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private notes = []
    private chapters = []
    private questionBank = []

    async getChapters() {
        await this.init()
        console.log('getting chapters...', this.chapters)
        return this.chapters
    }
    
    async getQuestionBank() {
        await this.init()

        console.log('bank is: ', this.questionBank)
        return this.questionBank
    }
    
    async getNotes() {
        
        await this.init()
        
        return this.notes
        
    }
    
    private async init() {
        
        console.log('initializing...', this.notes.length, this.chapters.length)
        if (this.notes.length === 0) {
            
            let chaptersData = (await import(`../data/${environment.theme}/chapters`));
            
            this.chapters = [...chaptersData.chapters];

            console.log('got data ', chaptersData.chapters)
            console.log('this chapters ', this.chapters)

            this.questionBank = (await import(`../data/${environment.theme}/question-bank`)).questionBank;

            this.buildNotes(this.chapters, this.questionBank);

            console.log("theme: ", environment.theme)
        }
    }

    private buildNotes(realChaptersData: Chapter[], realQuestionBank: IQuestion[]): void {

        const chaptersData = [...realChaptersData]
        const questionBank = [...realQuestionBank]

        while (chaptersData.length > 0 || questionBank.length > 0) {

            // console.log('lengths: ', chaptersData.length, ' ', questionBank.length)
            // console.log('comparing: ', chaptersData[0].index, ' ', questionBank[0].chapterIndex)

            if (chaptersData.length > 0 && chaptersData[0].index <= questionBank[0].chapterIndex) {
                const nextItem = chaptersData.shift()
                this.notes.push({
                    type: 'title',
                    text: 'Ch ' + nextItem.chapter + ') ' + nextItem.title
                })
            }
            else {
                const nextItem = questionBank.shift()
                this.notes.push({
                    type: 'note',
                    text: nextItem.moreExplanation
                })
            }

        }

    }

}