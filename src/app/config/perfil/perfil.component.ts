import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  id: any;

  constructor( private aRouter: ActivatedRoute ) { }

  ngOnInit() {
    // primera forma para obtener parametro que viene por la url
    this.id = this.aRouter.snapshot.paramMap.get('id');

    // segunda forma para obtener parametro que viene por la url
    this.aRouter.params.subscribe( (dataparametro: any) => {
      this.id = dataparametro.id;
      // console.log(dataparametro.id);
    });
  }

}
