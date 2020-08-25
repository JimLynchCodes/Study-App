import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/common";
import { SettingsModalComponent } from "./modal/settings.modal";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html",
    providers: [ModalDialogService]
})
export class SettingsComponent implements OnInit {

    constructor(private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    openModalBtnClick() {
        console.log('modal btn clicked');

        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {}
        };
        this.modalService.showModal(SettingsModalComponent, options);
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

}
