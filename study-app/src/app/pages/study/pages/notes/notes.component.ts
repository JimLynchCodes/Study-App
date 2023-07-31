import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from '@nativescript/core/application';
import { EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "@nativescript/angular";
import { LoaderService } from "../../../../utils/loader.service";


enum NoteType {
    title,
    type
}

interface INote {
    text: string
    type: NoteType
}

@Component({
    selector: "notes",
    templateUrl: "./notes.component.html",
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

    chapterTitles
    notes
    chaptersData: any;
    questionBank: any;

    constructor(private routerExtensions: RouterExtensions, private loaderService: LoaderService) {


    }

    async ngOnInit(): Promise<void> {

     
        console.log('getting notes 1')
        this.notes = await this.loaderService.getNotes()
        //
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onTap(args: EventData) {

        this.routerExtensions.navigate([args], {
            transition: {
                name: "fade"
            }

        })

    }
}
