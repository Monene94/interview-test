import { KeyValue } from '@angular/common';

export class Hero {
    name: string;
    power: string;
    stats: KeyValue<string, number>[];
}
