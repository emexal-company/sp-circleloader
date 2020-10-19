import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import circleloaderStyles from './circleloader.styles';
import template from './circleloader.template';
let Circleloader = class Circleloader extends Base {
    constructor() {
        super(...arguments);
        this.value = 0;
        this.indeterminate = false;
        this.large = false;
        this.small = false;
        this.overbackground = false;
        this.input = false;
    }
    render() {
        return template.call(this);
    }
};
Circleloader.componentStyles = [circleloaderStyles];
__decorate([
    property({ type: Number }),
    __metadata("design:type", Object)
], Circleloader.prototype, "value", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Circleloader.prototype, "indeterminate", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Circleloader.prototype, "large", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Circleloader.prototype, "small", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Circleloader.prototype, "overbackground", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Circleloader.prototype, "input", void 0);
Circleloader = __decorate([
    customElement('sp-circleloader')
], Circleloader);
export { Circleloader };
//# sourceMappingURL=circleloader.component.js.map