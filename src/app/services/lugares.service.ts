import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private lugaresColeccion: AngularFirestoreCollection<any>;

  constructor( private afDB: AngularFireDatabase, private afs: AngularFirestore ) { }

  public getLugares() {
    return this.lugaresColeccion = this.afs.collection<any>('lugares');
  }
}
