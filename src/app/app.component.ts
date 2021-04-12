import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length: number = 0;
  includeSymbols: boolean = false;
  includeNumbers: boolean = false;
  includeLetters: boolean = false;
  includeUppers: boolean = false;
  password: string = '';

  onButtonClick() {
    const numbers: string = '1234567890';
    const lowerLetters: string = 'abcdefghijklmnopqrstuvwyz';
    const symbols: string = '!@#$%^&*()';

    let validChars: string = '';
    if (this.includeLetters) {
      validChars += lowerLetters;
    }
    if (this.includeUppers) {
      validChars += lowerLetters.toUpperCase();
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseUpper() {
    this.includeUppers = !this.includeUppers;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}
