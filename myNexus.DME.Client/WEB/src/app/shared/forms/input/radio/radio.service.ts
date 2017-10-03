import { RadioType } from './radio.type';

export class RadioService extends RadioType {
    public show: any = {};
    radioClick(callback) {
        this.show = {}; // Reset to default
        this.show[callback.value] = true;
    }
}
