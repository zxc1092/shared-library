import { Hero } from './cards';

export const BaseSWCHero = `
  <swc-hero>
    <div slot="bkg">
      <img class="background" src="https://picsum.photos/id/124/2000/500" alt="background">
    </div>
    <div slot="content">
      <h1> Title for hero </h1>
      <p> Description for Hero: we will talk about web components.</p>
      <div class="actions">
        <button class="primary">Action 1</button>
        <button class="secondary">Action 2</button>
      </div>
    </div>
  </swc-hero>
  ${Hero()}
`;

export const Theme1SWCHero = `
  <swc-hero theme="theme1">
    <div slot="bkg">
      <img class="background" src="https://picsum.photos/id/124/2000/500" alt="background">
    </div>
    <div slot="content">
      <h1> Title for hero </h1>
      <p> Description for Hero: we will talk about web components.</p>
      <div class="actions">
        <button class="primary">Action 1</button>
        <button class="secondary">Action 2</button>
      </div>
    </div>
  </swc-hero>
  ${Hero()}
`;

export const Theme2SWCHero = `
  <swc-hero theme="theme2">
    <div slot="bkg">
      <img class="background" src="https://picsum.photos/id/124/2000/500" alt="background">
    </div>
    <div slot="content">
      <h1> Title for hero </h1>
      <p> Description for Hero: we will talk about web components.</p>
      <div class="actions">
        <button class="primary">Action 1</button>
        <button class="secondary">Action 2</button>
      </div>
    </div>
  </swc-hero>
  ${Hero()}
`;
