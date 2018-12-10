import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        

    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
