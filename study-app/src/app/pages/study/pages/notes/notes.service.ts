import { Injectable } from "@angular/core";
import { Chapter } from "~/app/data/_data.models/chapter.model";
import { IQuestion } from "~/app/data/_data.models/question.model";
import { environment } from '../../../../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class NotesService {

    notes = []

    constructor() {

        console.log('creating notes service')
    }

    async getNotes() {

        console.log('getting notes 2...', this.notes)

        if (this.notes.length === 0) {

            console.log('getting notes 3')
            console.log('loading...')
            let chaptersData = (await import(`../../../../data/${environment.theme}/chapters`));
            console.log('chap was: ', chaptersData)
            console.log('chap was: ', chaptersData.chapters)
            chaptersData = chaptersData.chapters;
            console.log('chap was: ', chaptersData)

            console.log("chapesData: ", JSON.stringify(chaptersData))

            const questionBank = (await import(`../../../../data/${environment.theme}/question-bank`)).questionBank;

            this.buildNotes(chaptersData, questionBank);

            console.log("theme: ", environment.theme)
        }

        return this.notes

    }

    private buildNotes(chaptersData: Chapter[], questionBank: IQuestion[]): void {

        console.log('building stuff: ', chaptersData.length, ' ', questionBank.length)

        while (chaptersData.length > 0 && questionBank.length > 0) {

            console.log('lengths: ', chaptersData.length, ' ', questionBank.length)
            console.log('comparing: ', chaptersData[0].index, ' ', questionBank[0].chapterIndex)

            if (chaptersData[0].index <= questionBank[0].chapterIndex) {
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