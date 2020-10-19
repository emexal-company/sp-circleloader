import { Base } from '@spectrum/sp-base';
export declare class Circleloader extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    value: number;
    indeterminate: boolean;
    large: boolean;
    small: boolean;
    overbackground: boolean;
    input: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-circleloader': Circleloader;
    }
}
