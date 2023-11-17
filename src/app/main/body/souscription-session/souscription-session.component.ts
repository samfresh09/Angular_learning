import { Component } from '@angular/core';

@Component({
  selector: 'app-souscription-session',
  templateUrl: './souscription-session.component.html',
  styleUrls: ['./souscription-session.component.css']
})
export class SouscriptionSessionComponent {

  emailUser: string = "sajkjdbdlk";
  afficherEmail(){
    console.log(this.emailUser);
  }

}
