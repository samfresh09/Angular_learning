import { Component } from '@angular/core';

@Component({
  selector: 'app-apropos-session',
  templateUrl: './apropos-session.component.html',
  styleUrls: ['./apropos-session.component.css']
})
export class AproposSessionComponent {

  fastDelivery: string = "Livraison rapide";

  freeShiping: string = "Livraison gratuite";

  getFreeShiping(): string {
    return this.freeShiping;
  }
}
