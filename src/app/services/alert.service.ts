import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

ShowSuccess(){
  Swal.fire(
    'Fruta añadida',
    "",
    'success',

  )
}

}

