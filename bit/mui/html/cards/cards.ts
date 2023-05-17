const colors = {
  theme1: `
    --primary-color: red;
    --primary-contrast-color: white;
    --secondary-color: black;
    --secondary-contrast-color: white;
  `,
  theme2: `
    --primary-color: blue;
    --primary-contrast-color: white;
    --secondary-color: red;
    --secondary-contrast-color: white;
  `,
  base: `
    --primary-color: white;
    --primary-contrast-color: black;
    --secondary-color: black;
    --secondary-contrast-color: white;
  `,
};

const styles = (theme) => {
  console.log(colors[theme]);
  return `
  <style>
    :host {
      position: relative;
    }
    swc-hero {
      position: relative;
      max-width: 2000px;
      display: block;
      margin: 0 auto;
      ${colors[theme || 'base']}
    }

    [slot="content"] {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      padding: 30px;
      background-color: rgba(0,0,0,.7);
      box-sizing: border-box;
      width: 100%;
      max-width: 768px;
    }

    [slot="content"] * {
      margin: 0;
      color: white;
    }

    [slot="content"] h1 {
      font-size: 60px;
    }

    [slot="content"] p {
      font-size: 16px;
    }
    
    [slot="content"] .actions button {
      color: black;
      padding: 15px;
      font-size: 20px;
      border: 0;
    }
    
    [slot="content"] .actions button {
      color: black;
      padding: 15px;
      font-size: 20px;
      border: 0;
    }

    [slot="content"] .actions .primary {
      background-color: var(--primary-color);
      color: var(--primary-contrast-color);
      border: 1px solid var(--primary-contrast-color);;
    }

    [slot="content"] .actions .secondary {
      background-color: var(--secondary-color);
      color: var(--secondary-contrast-color);
      border: 1px solid var(--secondary-contrast-color);
    }

    [slot="bkg"] img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      display: block;
      min-height: 300px;
    }
  </style>
`;
};

export function Hero(theme?: string) {
  const template = document.createElement('template');
  template.innerHTML = `
    <slot name="bkg"></slot>
    <slot name="content"></slot>
  `;

  class SwcHero extends HTMLElement {
    //Using attributes as data
    static get observedAttributes() {
      return ['theme'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'theme') {
        console.log(newVal);
        const styleElement = this.querySelector('style');
        if (styleElement) {
          styleElement.innerHTML = styles(newVal);
        }
      }
    }

    connectedCallback() {
      const node = document.importNode(template.content, true);
      const styleElement = document.createElement('style');
      styleElement.innerHTML = styles(this.getAttribute('theme'));
      this.appendChild(styleElement);
      this.attachShadow({ mode: 'open' }).appendChild(node);
      this.listen(this.querySelectorAll('button'));
    }

    listen(elems) {
      elems.forEach((element) => {
        element.addEventListener('click', function (e) {
          alert(e.target.textContent);
        });
      });
    }
  }

  try {
    customElements.define('swc-hero', SwcHero);
  } catch {
    console.log('already defined');
  }

  return '';
}
