import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public Genderarr:string[]=['Male','Female','Others']
  user = {
    firstName:'',
    lastName:'',
    userName:'',
    password:'',
    gender:'',
    city:'',
    state:'',
    pincode:''
  };

  openModal(userForm: NgForm){
    if (userForm.valid){
      const modaldiv = document.getElementById('myModal')
      if(modaldiv!=null){
        modaldiv.style.display='block';
      }
    }
    else{
      const modaldiv2 = document.getElementById('myModal2')
      if(modaldiv2!=null){
        modaldiv2.style.display='block';
    }
  }
  
}
closeModal(){
  const modaldiv = document.getElementById('myModal')
  if(modaldiv!=null){
    modaldiv.style.display='none';
  }
}
closeModal2(){
  const modaldiv = document.getElementById('myModal2')
  if(modaldiv!=null){
    modaldiv.style.display='none';
  }
}



//   onSubmit() {
// //     alert(`Firstname: ${this.user.firstName} lastname: ${this.user.lastName} Username: ${this.user.userName}
// // Gender:${this.user.gender} City: ${this.user.city} State: ${this.user.state} Pincode: ${this.user.pincode}`)

// }
}
