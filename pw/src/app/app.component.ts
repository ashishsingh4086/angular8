import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0
  includeLetters = false
  includeNumbers = false
  includeSymbols = false
  password = ''
  title = 'pw';

  onChangeUseLetters(e) {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers(e) {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols(e) {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  onChange( e: Event){
      console.log(e)
  }

  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let validChars = ''
    if (this.includeLetters) {
      validChars += letters
    }

    if (this.includeNumbers) {
      validChars += numbers
    }

    if (this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
  }

  onDisabled() {
    return !(
      this.length > 0 &&
      (this.includeLetters || this.includeNumbers || this.includeSymbols)
    )
  }

  getName() {
    return 'Test'
  }
}
