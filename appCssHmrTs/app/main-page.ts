import { EventData, View } from 'tns-core-modules/ui/core/view';
import { HelloWorldModel } from './main-view-model';
import { loadCss } from 'tns-core-modules/ui/styling/style-scope';

/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const newCss = "./page.css";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const view = args.object as View;
    const page = view.page;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new HelloWorldModel();

    // loadCss(newCss);
    console.log("Navigating to Main Page ...");
}

// export function navigatedFrom(args: EventData) {
//     console.log("Navigated from Second Page ...");
//     const view = args.object as View;
//     const page = view.page;
//     const frame = page.frame;
//     frame._onCssStateChange();
// }
