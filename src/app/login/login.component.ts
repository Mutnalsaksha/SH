import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mobileNumber: string = '';
  otp: string[] = ['', '', '', '', '', '']; // An array to hold each digit of the OTP
  showOTPForm: boolean = false;

  navigateToOTP() {
    // Add your authentication logic here (for demonstration purposes, always navigate to OTP)
    // You can send the mobile number to a server for verification and handle the response accordingly
    // For now, we'll simply show the OTP form
    this.showOTPForm = true;
  }

  login() {
    // Add your login logic here
    // This is where you typically verify the OTP and authenticate the user
    console.log('Mobile Number:', this.mobileNumber);
    console.log('OTP:', this.otp.join(''));

    // For demonstration purposes, let's reset the form and hide the OTP form after "logging in"
    this.mobileNumber = '';
    this.otp = ['', '', '', '', '', '']; // Reset each digit of the OTP
    this.showOTPForm = false;
  }

  moveToNextInput(event: any, index: number) {
    if (event.target.value.length === 1 && index < this.otp.length ) {
      const nextInput = document.getElementById(`otp${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

}
