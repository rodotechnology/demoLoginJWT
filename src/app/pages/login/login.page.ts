import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authSrv: AuthService,
    private router: Router
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    console.log('On Init');
  }

  login(): void{
    if(this.loginForm.valid){
      //Llamar al servicio de autenticaión para realizar el inicio de sesión
      this.authSrv.login(this.loginForm.value).subscribe(
        () => {
          // Limpie el formulario
          this.loginForm.reset()

          //Inicio de sesión exitoso, puedes redirigir a otra página
          console.log('Inicio de sesión exitoso')
          this.router.navigate(['/main'], { replaceUrl: true})
        },
        (error) => {
          console.error('Error en el inicio de sesión', error)
        }
      )
    }
  }
}
