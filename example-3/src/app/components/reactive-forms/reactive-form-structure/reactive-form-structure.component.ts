import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-reactive-form-structure',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './reactive-form-structure.component.html',
  styleUrl: './reactive-form-structure.component.css'
})
export class ReactiveFormStructureComponent {

  userForm = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    address: new FormControl('', Validators.required)
  })

  ngOnInit() {
    this.userForm.get('address')?.setValue('road1');
  }

  onSubmit(value: any) {
    console.log(value);
    this.userForm.reset();
  }

}
