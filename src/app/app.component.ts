import { AppStateService } from './app-state.service';
import { AppData } from './types/app-data';
import { faTv } from './../../node_modules/@fortawesome/free-solid-svg-icons/faTv.d';
import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { AppComponentService } from './app-component.service';

// import { faTv} from '@fortawesome/fontawesome-free';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  faTVIcon = faTv;
  nbtvLogoSrc = '../assets/img/logo_contact_us.png';
  appData: AppData = null;
  isDataInitialized = false;

  constructor(private menu: MenuController,
    private appComponentService: AppComponentService,
    private toastController: ToastController,
    private appStateService: AppStateService
  ) {}

  ngOnInit(): void {
    this.appComponentService.fetchAppData().subscribe(response => {
      this.appData = response;
      this.appStateService.setAppData(response);
      // set the live TV source
      this.appStateService.setLiveTvSource(this.appData.liveTvURL[0]);
      this.isDataInitialized = true;
      console.dir(this.appData);
    }, error => {
      console.error(error);
      this.isDataInitialized = true;
      this.showErrorMessage();
    });
  }

  // opens the side navigation when the hamburger menu icon is clicked in the
  // toolbar
  openAboutMenuItem() {
    console.log('openAboutMenuItem');
    this.menu.enable(true,'aboutMenu');
    this.menu.open('aboutMenu');

  }

  async showErrorMessage() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Error communicating with server'
    });

    await toast.present();
  }

}
