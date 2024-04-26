import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { MapComponentComponent } from '../mapComponent/mapComponent.component';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

export interface description {
  title: string;
  description: string;
}

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    CommonModule,
    MapComponentComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contactCardItem.component.html',
  styleUrl: './contactCardItem.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactCardItemComponent {


  public email: string = 'carlosroby2013@hotmail.com'

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: ['' , Validators.required],
    lastName: ['' , Validators.required] ,
    info: ['', Validators.required],
    message: ['', Validators.required]
});


sendEmail() {

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Mensaje enviado con exito",
    showConfirmButton: false,
    timer: 1200
  });


  emailjs
      .send('service_29z7wxj', 'template_n1pw1s8', {
          from_name: this.myForm.value.name,
          from_lastName: this.myForm.value.lastName,
          message: this.myForm.value.message,
          info: this.myForm.value.info,
      }, {
          publicKey: 'oEjFwyPAiEXF4g5lm',
      })
      .then(
          (response) => {


          console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
          console.log('FAILED...', err);
          },
      );

      this.myForm.setValue({
        name: '',
        lastName: '',
        info: '',
        message: ''
      })
}


}
