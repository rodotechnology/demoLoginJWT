import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authSrv: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(this.authSrv.isAuthenticated()){
        return true;
      }
      else{
        //Redirige al usuario al componente de inicio de sesión si no está autenticado
        this.router.navigate(['/login'], { replaceUrl: true })
        return false;
      }
  }
  
}
