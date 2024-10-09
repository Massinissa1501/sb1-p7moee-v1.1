import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  navigateToExpenses() {
    this.routerExtensions.navigate(['/expenses']);
  }

  navigateToAddExpense() {
    this.routerExtensions.navigate(['/add-expense']);
  }

  navigateToStats() {
    this.routerExtensions.navigate(['/stats']);
  }
}