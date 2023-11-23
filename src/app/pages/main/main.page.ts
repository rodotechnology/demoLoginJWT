import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  profile: Profile = { id: 0, email: '', password: '', name: '', role:'', avatar: '' }

  constructor(
    private userSrv: UserService,
    private authSrv: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProfile()
  }

  loadProfile(): void{
    this.userSrv.getProfile().subscribe(
      (profile) => {
        this.profile = profile
      },
      (error) => {
        console.error('Error al cargar el perfil', error)
      }
    )
  }

  logout(){
    this.authSrv.clearToken()
    this.router.navigate(['/login'], { replaceUrl : true })
  }

}
