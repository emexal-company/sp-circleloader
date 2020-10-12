import { customElement,  property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import circleloaderStyles from './circleloader.styles';
import template from './circleloader.template';

@customElement('sp-circleloader')
export class Circleloader extends Base {
  public static componentStyles = [circleloaderStyles];

  @property({ type: Number }) value = 0;
  @property({ type: Boolean }) indeterminate = false;
  @property({ type: Boolean }) large = false;
  @property({ type: Boolean }) small = false;
  @property({ type: Boolean }) overbackground = false;
  @property({ type: Boolean }) input = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-circleloader': Circleloader;
  }
}
