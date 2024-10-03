import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email:any;
  password:any;
  constructor(private alertController:AlertController, private servicio:AuthService) { }

  ngOnInit() {
  }

  async save(){
    const data = {
      email: this.email,
      password: this.password
    };

    this.servicio.save(data.email,data.password).subscribe(
      async (response)=>{
        const alert = await this.alertController.create({
          header: 'Exitoso',
          message: 'Usuario  registrado',
          buttons: ['OK']
        });
        await alert.present();
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un error en el registro',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
}
