import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: "are-you-sure-exam-submit-modal",
    template: `
        <StackLayout class="p-20">
            <FlexboxLayout height="100%" justifyContent="space-between" flexDirection="Column">

            <StackLayout>
            <Label class="h1 text-center" text="Time's Up!" textWrap="true"></Label>
            <Label class="h2 text-center" text="You put in a great effort!" textWrap="true"></Label>
            <Label class="h2 text-center" text="We've just scored your exam. Let's see how you did!" textWrap="true"></Label>
            </StackLayout>
            
            <StackLayout>
            <Button class="btn btn-outline -primary" text="View Results" (tap)="viewResults()"></Button>
            </StackLayout>
            </FlexboxLayout>
        </StackLayout>
	`
})
export class TimesUpModalComponent implements OnInit {

    constructor(private params: ModalDialogParams) {}

    ngOnInit() {}

    viewResults() {
        this.params.closeCallback();
    }

}
