import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Cuenta', url: '/cuenta', icon: 'person' },
    { title: 'Configuracion', url: '/configuracion', icon: 'construct' },
    { title: 'Llamar', url: '/aquienvasallamar', icon: 'call' },
    { title: 'Localizame', url: '/localizame', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'person' },
    { title: 'Signup', url: '/signup', icon: 'person' },
    { title: 'Restablecer contraseña', url: '/passwordreset', icon: 'refresh-circle' },
  ];
  constructor() {}
}
