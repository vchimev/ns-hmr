// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";
import { AppModule } from "./app/app.module";

// A traditional NativeScript application starts by initializing global objects, setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization: modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together, so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
// platformNativeScriptDynamic().bootstrapModule(AppModule);

let options: AppOptions = {};
if (module['hot']) {
    const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

    options.hmrOptions = {
        moduleTypeFactory: () => AppModule,
        livesyncCallback: (platformReboot) => {
            console.log("hmrOptions: livesyncCallback...")
            // hmrUpdate();
            setTimeout(platformReboot, 0);
        },
    }
    hmrUpdate();

    global["__hmrLivesyncBackup"] = global.__onLiveSync;
    global.__onLiveSync = function () {
        console.log("HMR: Sync...");
        hmrUpdate();
    };

    global["__hmrRefresh"] = function({ type, module }) {
        global["__hmrNeedReload"] = true;
        setTimeout(() => {
            if(global["__hmrNeedReload"]) {
                global["__hmrNeedReload"] = false;
                global["__hmrLivesyncBackup"]({ type, module });
            }
        });
    }

    global["__hmrInitialSync"] = true; // needed to determine if we are performing initial sync
    global.__onLiveSync();
}

// !!! Don't forget to pass the options when creating the platform
platformNativeScriptDynamic(options).bootstrapModule(AppModule);
