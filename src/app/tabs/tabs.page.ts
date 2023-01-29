import { Component } from '@angular/core';
import { AppService } from './../app.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
   fullscreen:boolean = false;
   constructor(private appService: AppService) {
       this.appService.getfullscreensync().subscribe((changed:any)=>{
             if(changed==1){
               this.fullscreen = true;
             }else{
               this.fullscreen = false;
             }
       });

  }
}
