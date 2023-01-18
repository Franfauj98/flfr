import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlSegmentGroup,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {BrowserUtils} from "@flfr-app/utils/BrowserUtils";

@Injectable({
  providedIn: 'root'
})
export class MobileGuard implements CanActivate {
  private _userAgentMobile: boolean = false;

  constructor(private _router: Router) {
    this._userAgentMobile = BrowserUtils.isMobileDevice();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._userAgentMobile) {
      this._router.navigateByUrl('/mobile')
      return false
    }
    return true;
  }

}
