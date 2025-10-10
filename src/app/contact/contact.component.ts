import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  phoneNumber = '+92 319 9220813';
  email = 'info&#64;sportsbrand.pk'; // use HTML entity for @ to avoid NG5002 error
  address = 'Karachi, Pakistan';
}
