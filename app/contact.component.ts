import { Component} from '@angular/core';
import { Router } from '@angular/router';

class Contact{
    name:string;
    email:string;
    subject:string;
    
}

@Component({
  selector: 'my-contact',
  templateUrl: 'app/contact.component.html',
 

  
})
export class ContactComponent {
  subject = ["Ask about product","Return the product","Ask a question"];
  model:Contact=new Contact();
  constructor(private router: Router){ }
  submitted = false;
  register() {
    this.submitted = true;
  }

 
   
  }
