import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})


export class ListadoComponent {
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitanga America'];
    heroeBorrado: string = '';
  borrarHeroe() {
     this.heroeBorrado = this.heroes.shift() || '';
    
    }
}


