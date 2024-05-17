import { Component, importProvidersFrom, inject } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ErdemjegyService } from '../../service/erdemjegy_service/erdemjegy.service';
import { ErdemjegyekDTO } from '../../../../models';
import { HallgatoService } from '../../service/hallgato_service/hallgato.service';
import { HallgatokDTO } from '../../../../models';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-statisztika',
  standalone: true,
  imports: [
    NavigationComponent,
    FormsModule
  ],
  templateUrl: './statisztika.component.html',
  styleUrl: './statisztika.component.css'
})
export class StatisztikaComponent {

  erdemjegyService = inject(ErdemjegyService);
  hallgatoService = inject(HallgatoService);
  router = inject(Router);

  tankor: string = '';
  filteredHallgatoTankor: string = '';
  filteredHallgatoTankorId: number = 0;
  hallgatoId: number = 0;
  averageTK: number = 0;
  average: number = 0;
  summHallgatoAvg: number = 0;
  summ: number = 0;

  erdemjegyek: ErdemjegyekDTO[] = [];
  hallgatok: HallgatokDTO[] = [];


  tankorAtlag(tankor: string): void {

    if (tankor) {
      this.hallgatoService.getAll().subscribe({
        next: (hallgatok) => {
          this.hallgatok = hallgatok.filter(hallgato => hallgato.id  && hallgato.tankor === tankor);
          
          console.log(this.hallgatok);

          for (let hallgato of this.hallgatok) {
            
            console.log(hallgato.id);
            this.hallgatoAtlag(hallgato.id);
            console.log(this.average);
            

          }
          this.averageTK = this.averageTK / this.hallgatok.length;

          return this.averageTK;
          
        },
        error: (err) => {
          //TODO notification
          console.error(err);


        }
      });
    }
  }


  hallgatoAtlag(hallgatoId: number): void {

    
    if (hallgatoId) {
      this.erdemjegyService.getAll().subscribe({
        next: (erdemjegyek) => {
          this.erdemjegyek.length = 0;
          this.summ = 0;
          this.erdemjegyek = erdemjegyek.filter(erdemjegyek => erdemjegyek.hallgatoId === hallgatoId);
          
          for (let erdemjegy of this.erdemjegyek) {
            this.summ += erdemjegy.erdemjegy;
            

          }
          console.log(this.summ);
          this.average = this.summ / this.erdemjegyek.length;
          return this.average;
        },
        error: (err) => {
          //TODO notification
          console.error(err);
        }
      });



    }
  }
}