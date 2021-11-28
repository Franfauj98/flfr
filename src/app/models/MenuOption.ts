export class MenuOption {
  libelle = '';
  moduleRoute = '';
  selected = false;


  constructor(libelle: string, moduleRoute: string, selected: boolean) {
    this.libelle = libelle;
    this.moduleRoute = moduleRoute;
    this.selected = selected;
  }
}
