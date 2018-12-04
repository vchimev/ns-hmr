import { EventData, View } from 'tns-core-modules/ui/core/view';

export function onNav(args: EventData) {
    const view = args.object as View;
    const page = view.page;
    const frame = page.frame;
    frame.navigate("third-page");
}