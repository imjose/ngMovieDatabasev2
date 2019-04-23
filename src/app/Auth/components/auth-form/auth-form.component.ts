import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
  @Output() Submitted = new EventEmitter <FormGroup> ();

  form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.Submitted.emit(this.form);
  }

  ngOnInit() {
  }

}
