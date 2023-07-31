import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: "are-you-sure-exam-submit-modal",
    template: `
        <StackLayout class="p-20">
            <FlexboxLayout height="100%" justifyContent="space-between" flexDirection="Column">

            <StackLayout>
            <Label class="h1 text-center" text="Grade Exam?" textWrap="true"></Label>
            <Label class="h2 text-center" text="Are you sure you want to submit this exam for grading?" textWrap="true"></Label>
            </StackLayout>
            
            <StackLayout>
            <Button class="btn btn-outline -primary" text="Submit" (tap)="close(true)"></Button>
            <Button class="btn btn-outline -primary" text="Cancel" (tap)="close(false)"></Button>
            </StackLayout>
            </FlexboxLayout>
        </StackLayout>
	`
})
export class AreYouSureExamSubmitModalComponent implements OnInit {

    constructor(private params: ModalDialogParams) {}

    ngOnInit() {}

    close(confimSubmit: boolean) {
        this.params.closeCallback(confimSubmit);
    }
}
