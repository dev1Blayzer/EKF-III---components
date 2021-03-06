import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { BEM, hostClasses } from '../../utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
})
export class MyComponent {
  private readonly componentName: string = 'my-component';

  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  @Prop() modifier: string = '';

  @Event({bubbles: false}) clicked!: EventEmitter<void>;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  
  private handleSubmit(e): string {
    alert (e.value());
    return e.value;
  }

  


  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
      modifier: this.modifier,
    });

    return (
      <Host
        class={cssClasses}
        onClick={() => this.clicked.emit()}>
        <ion-card class="ion-padding">Please enter your zip code</ion-card>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          <ion-input placeholder="Enter your Zip Code"></ion-input>
          </form>
      </Host>
      
    );
  }
}
