import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DomService {

  public scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element !== null) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

}
