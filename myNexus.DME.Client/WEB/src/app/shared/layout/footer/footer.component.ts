import { Component } from '@angular/core';

@Component({
  selector: 'sa-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private year: number = new Date().getFullYear();
}
