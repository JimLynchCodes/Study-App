import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "@nativescript/angular";

@Component({
    selector: "settings-modal",
    template: `
		<FlexboxLayout class="p-20" flexDirection="column" justifyContent="space-between">
            <Label class="h2 text-center" text="This is a modal window!" textWrap="true"></Label>
            <Button class="-primary" text="Close Modal" (tap)="close()"></Button>
        </FlexboxLayout>
	`
})
export class SettingsModalComponent implements OnInit {

    constructor(private params: ModalDialogParams) {}

    ngOnInit() {}

    close() {
        this.params.closeCallback();
    }
}
