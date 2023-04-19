import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js'; // eslint-disable-line import/extensions

@customElement('lit-home')
export class LitHome extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  title = '';
  @property()
  description = '';
  @property()
  image = '';
  @property()
  imageText = '';
  @property()
  ctaRow = [];

  render() {
    return html`
      <div>
        <img src="${this.image}" alt="${this.imageText}" />
        <h1>${this.title}!</h1>
        <p>${this.description}</p>
        ${this.ctaRow.map((cta) => html`<a href="${cta}" />`)}
      </div>
    `;
  }
}
