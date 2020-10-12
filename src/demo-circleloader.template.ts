import { html } from 'lit-element';
import { DemoCircleloader } from './demo-circleloader.component';

import '@spectrum/sp-circleloader';
import '@spectrum/sp-container';


export default function template(this: DemoCircleloader) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="200">
    <pre><sp-circleloader small value="0"></sp-circleloader></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-circleloader value="20"></sp-circleloader></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-circleloader large value="40"></sp-circleloader></pre>
</sp-demo>
<sp-rule medium label="Over Background"></sp-rule>
  <sp-demo width="200">
  <pre><div style="background-color: #939393; padding: 16px; width: fit-content">
 <sp-circleloader overbackground small value="0"></sp-circleloader>
</div></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><div style="background-color: #939393; padding: 16px; width: fit-content">
  <sp-circleloader overbackground small value="20"></sp-circleloader>
 </div></pre>
</sp-demo>
<sp-demo width="200">
<pre><div style="background-color: #939393; padding: 16px; width: fit-content">
<sp-circleloader overbackground small value="40"></sp-circleloader>
</div></pre>
</sp-demo>
<sp-rule medium label="Indeterminate"></sp-rule>
  <sp-demo width="200">
    <pre><sp-circleloader small indeterminate></sp-circleloader></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><sp-circleloader indeterminate></sp-circleloader></pre>
</sp-demo>
<sp-demo width="200">
<pre><sp-circleloader large indeterminate></sp-circleloader></pre>
</sp-demo>
<sp-rule medium label="Over Background Indeterminate"></sp-rule>
  <sp-demo width="200">
    <pre><div style="background-color: #939393; padding: 16px; width: fit-content">
 <sp-circleloader overbackground small indeterminate></sp-circleloader>
</div></pre>
  </sp-demo>
  <sp-demo width="200">
  <pre><div style="background-color: #939393; padding: 16px; width: fit-content">
 <sp-circleloader overbackground indeterminate></sp-circleloader>
</div></pre>
</sp-demo>
<sp-demo width="200">
<pre><div style="background-color: #939393; padding: 16px; width: fit-content">
 <sp-circleloader overbackground large indeterminate></sp-circleloader>
</div></pre>
</sp-demo>
  </sp-container>
  `;
}
