import { customElement, LitElement, property, html, css } from 'lit-element';

@customElement(my-greeting)
export class Greeting extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: red;
      }
    `;
  };

  @property()
  message = '';

  render() {
    return html`
      <h1>Hello ${message}!</h1>
    `;
  };
};
