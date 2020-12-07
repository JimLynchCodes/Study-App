import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment'

// const firebase = require("nativescript-plugin-firebase");

@Injectable({
    providedIn: 'root'
})
export class VideoAdManagerService {

    constructor() { }

    ngOnInit() {
        console.log('loading?')
    }

    preloadVideoAd(): Promise<void> {

        // admob.preloadInterstitial({
        //     testing: true,
        //     iosInterstitialId: "ca-app-pub-5959386651087574~4497233380",
        //     androidInterstitialId: "", // add your own
        //     iosTestDeviceIds: [],
        //     keywords: ["keyword1", "keyword2"], // add keywords for ad targeting
        //     onAdClosed: function () { console.log("interstitial closed") }
        // }).then(
        //     function () {
        //         console.log("interstitial preloaded - you can now call 'showInterstitial' whenever you're ready to do so");
        //     },
        //     function (error) {
        //         console.log("admob preloadInterstitial error: " + error);
        //     }
        // )

        return new Promise((resolve, reject) => {

            // firebase.admob.preloadRewardedVideoAd({
            //     testing: true,
            //     iosAdPlacementId: environment.admobKey,
            //     androidAdPlacementId: environment.admobKey,
            //     keywords: ["keyword1", "keyword2"], // add keywords for ad targeting
            // }).then(

            //     function () {
            //         // const ok = 5 / 0

            //         console.log("RewardedVideoAd preloaded - you can now call 'showRewardedVideoAd' whenever you're ready to do so");
            //         resolve()
            //     },
            //     function (error) {
            //         console.log("admob preloadRewardedVideoAd error: " + error);
            //         reject()
            //     }
            // )

        })
    }
}