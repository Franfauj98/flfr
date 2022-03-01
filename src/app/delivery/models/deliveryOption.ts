export class DeliveryOption {
  libelle = '';
  value = 0;

  constructor(libelle: string, value: number) {
    this.libelle = libelle;
    this.value = value;
  }
}
