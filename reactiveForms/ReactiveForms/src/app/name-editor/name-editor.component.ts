import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  //set the initial value - empty string
  myForm: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      phones:this.fb.array([])
    })

  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line:[]
    })

    this.phoneForms.push(phone)

  }

  deletePhone(i) {
    this.phoneForms.removeAt(i)
  }

}
