import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nos-produits-session',
  templateUrl: './nos-produits-session.component.html',
  styleUrls: ['./nos-produits-session.component.css']
})
export class NosProduitsSessionComponent implements OnInit {

  constructor(
    private produitService: ProductService
  )
   {

  }

  produits: Array<Produit>= [];
  datenow:Date = new Date();

  ngOnInit(): void {

    this.getProduits();
  }

  getProduits() {
    this.produits = this.produitService.getProduits();
  }
}
