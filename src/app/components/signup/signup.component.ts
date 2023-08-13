import { Router } from "@angular/router";
import { UserService } from "./../../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { MustMatch } from "src/app/validators/confirmPwd";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  path: string;
  imagePreview: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.path = this.router.url;

    this.signupForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.required, Validators.minLength(3)]],
        lastName: ["", [Validators.required, Validators.minLength(5)]],
        email: ["", [Validators.email, Validators.required]],
        password: [
          "",
          [
            Validators.minLength(6),
            Validators.maxLength(12),
            Validators.required,
          ],
        ],
        confirmPassword: [""],
        img: [""],
      },
      {
        validators: MustMatch("pwd", "confirmPwd"),
      }
    );
  }
  signup() {
    if (this.path == "/subscription") {
      this.signupForm.value.role = "client";
    } else {
      this.signupForm.value.role = "admin";
    }
    console.log(this.signupForm.value.img);

    this.userService
      .signup(this.signupForm.value, this.signupForm.value.img)
      .subscribe((data) => {
        console.log("Here data after signup", data.message);
        // this.router.navigate(['login']);
      });
  }
  onImageSelected(event: Event) {
    console.log("here event into signup ", event);

    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
