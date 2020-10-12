import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Circleloader } from './circleloader.component';

export default function template(this: Circleloader) {

    var angle;
    var submask1Transform;
    var submask2Transform;
    
    const classes = {
      'spectrum-CircleLoader--large': this.large,
      'spectrum-CircleLoader--small': this.small,
      'spectrum-CircleLoader--indeterminate': this.indeterminate,
      'spectrum-CircleLoader--overBackground': this.overbackground
    };

    if(this.indeterminate) {
      submask1Transform = '';
      submask2Transform = '';
    }
    else if(this.value > 0 && this.value <= 50) {
      angle = -180 + (this.value/50 * 180);
      submask1Transform = 'transform: rotate('+angle+'deg)';
      submask2Transform = 'transform: rotate(-180deg)';
    }
    else if (this.value > 50) {
      angle = -180 + (this.value-50)/50 * 180;
      submask1Transform = 'transform: rotate(0deg)';
      submask2Transform = 'transform: rotate('+angle+'deg)';
    }  
    
    return html`
    <div class="spectrum-CircleLoader ${classMap(classes)}">
    <div class="spectrum-CircleLoader-track"></div>
    <div class="spectrum-CircleLoader-fills">
      <div class="spectrum-CircleLoader-fillMask1">
        <div class="spectrum-CircleLoader-fillSubMask1" style="${submask1Transform}">          
          <div class="spectrum-CircleLoader-fill"></div>
        </div>
      </div>
      <div class="spectrum-CircleLoader-fillMask2">
        <div class="spectrum-CircleLoader-fillSubMask2" style="${submask2Transform}">
        <div class="spectrum-CircleLoader-fill"></div>
      </div>
        </div>
        </div>
    </div>
        `;
}
