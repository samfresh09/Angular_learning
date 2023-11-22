import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-produits-session',
  templateUrl: './nos-produits-session.component.html',
  styleUrls: ['./nos-produits-session.component.css']
})
export class NosProduitsSessionComponent implements OnInit {

  produits: Array<Produit>= [];

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits() {
    let produit1 = new Produit();
    produit1.id = 1;
    produit1.image = 'assets/images/p1.png';
    produit1.libelle = 'Atana';
    produit1.prix = 1000;
    produit1.isDisponible = true;

    // methode unshift pertmet d'ajouter un element au debut du tableau
    // this.produits.unshift(produit1);

    // methode push pertmet d'ajouter un element a la fin du tableau
    this.produits.push(produit1);

    //produit2
    let produit2 = new Produit();
    produit2.id = 2;
    produit2.image = 'assets/images/p2.png';
    produit2.libelle = 'Lossomessine';
    produit2.prix = 1500;
    produit2.isDisponible = false;

    this.produits.push(produit2);

    //produit3
    let produit3 = new Produit();
    produit3.id = 3;
    produit3.image = 'assets/images/p3.png';
    produit3.libelle = 'Tchouk';
    produit3.prix = 1500;
    produit3.isDisponible = false;

    this.produits.push(produit3);

    //produit4
    let produit4 = new Produit();
    produit4.id = 4;
    produit4.image = 'assets/images/p4.png';
    produit4.libelle = 'doggy';
    produit4.prix = 2000;
    produit4.isDisponible = true;

    this.produits.push(produit4);


    //produit5
    let produit5 = new Produit();
    produit5.id = 5;
    produit5.image = 'assets/images/p5.png';
    produit5.libelle = 'kbmassine';
    produit5.prix = 2500;
    produit5.isDisponible = true;

    this.produits.push(produit5);

  }



}
