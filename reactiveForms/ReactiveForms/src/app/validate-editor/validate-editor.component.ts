import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-validate-editor',
  templateUrl: './validate-editor.component.html',
  styleUrls: ['./validate-editor.component.css']
})
export class ValidateEditorComponent implements OnInit {


  myForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
      , password: ['', [
        Validators.required,
        Validators.pattern('^[0-9]')
      ]]
      , age: [null, [
        Validators.required
        , Validators.maxLength(2)
        , Validators.min(1)
        ,Validators.max(30)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    })

  }

  get email() {
    return this.myForm.get('email')
  }

  get password() {
    return this.myForm.get('password')
  }

  get age() {
    return this.myForm.get('age')
  }
  get agree() {
    return this.myForm.get('agree')
  }

}
