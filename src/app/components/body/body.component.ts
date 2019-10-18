import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent implements OnInit {

    mostrar = true;
    personaje: string[] = ['Batman', 'Venom', 'Spiderman', 'Dr.Octopus'];
    frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Peter Parker'
    };

    constructor() {}

    ngOnInit(): void {

    }

}
