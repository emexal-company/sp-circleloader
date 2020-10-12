import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-circleloader.styles';
import template from './demo-circleloader.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Circleloader } from '@spectrum/sp-circleloader';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-circleloader')
export class DemoCircleloader extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-circleloader': DemoCircleloader;
  }
}
