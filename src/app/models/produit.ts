export class Produit {

  id: number;
  image: string;
  libelle: string;
  prix: number;
  isDisponible: boolean;

  constructor() {
    this.id = 0;
    this.image = '';
    this.libelle = '';
    this.prix = 0;
    this.isDisponible = true;
  }
}
