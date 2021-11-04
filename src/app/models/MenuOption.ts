export class MenuOption {
  libelle = '';
  selected = false;


  constructor(libelle: string, selected: boolean) {
    this.libelle = libelle;
    this.selected = selected;
  }
}
