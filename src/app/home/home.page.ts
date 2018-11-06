import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor( private router: Router, private _lugaresS: LugaresService ) {

    console.log(this._lugaresS.getLugares());

  }


  ir() {
    // this.router.navigate(['/config']);
    this.router.navigateByUrl('/config');
  }
}
