import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";
import { chapters } from "../../../../data/chapters";

@Component({
    selector: "FastFeedbackOptions",
    templateUrl: "./fast-feedback-options.component.html",
    styleUrls: ["./fast-feedback-options.scss"]
})
export class FastFeedbackOptionsComponent implements OnInit {

    startBtnDisabled = false

    allToggle = true

    chapterToggles = chapters.map(chapter => {
        return {
            ...chapter,
            checked: true
        }
    })

    constructor(private routerExtensions: RouterExtensions) { }

    ngOnInit(): void { }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(arg: EventData) {

        if (arg)
            this.routerExtensions.navigate([arg], {
                transition: {
                    name: "fade"
                }
            })

    }

    onCheckedChange(value: boolean, chapter: string) {

        if (chapter === 'All') {

            this.allToggle = !this.allToggle

            this.chapterToggles.forEach(chapterToggle => {
                chapterToggle.checked = this.allToggle
            });

            if (value)
                this.startBtnDisabled = false
            else
                this.startBtnDisabled = true

        }
        else {

            let checkedToggleFound = false

            this.chapterToggles.forEach(chapterToggle => {
                if (chapter === chapterToggle.chapter)
                    chapterToggle.checked = value

                if (chapterToggle.checked)
                    checkedToggleFound = true
            });

            if (checkedToggleFound)
                this.startBtnDisabled = false
            else
                this.startBtnDisabled = true

        }

    }

    onNextBtnTap() {

        const selectedChapters: number[] = this.chapterToggles
            .filter(chapterToggle => {
                if (chapterToggle.checked)
                    return chapterToggle
            })
            .reduce((acc, chapterToggle) => [...acc, chapterToggle.chapter], [])

        this.routerExtensions.navigate(['/ffq', { selectedChapters: selectedChapters }], {
            transition: {
                name: "fade"
            }
        })
    }

}
