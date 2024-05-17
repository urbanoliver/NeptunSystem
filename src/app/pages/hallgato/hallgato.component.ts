import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { Router } from '@angular/router';
import { HallgatokDTO } from '../../../../models';
import { HallgatoService } from '../../service/hallgato_service/hallgato.service';
import { AsyncPipe } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';
import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { TantargyakDTO } from '../../../../models';
import { TantargyService } from '../../service/tantargy_service/tantargy.service';
import { ErdemjegyekDTO } from '../../../../models';
import { ErdemjegyService } from '../../service/erdemjegy_service/erdemjegy.service';


@Component({
  selector: 'app-hallgato',
  standalone: true,
  imports: [ 
     NavigationComponent,
     AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    SearchPipe,
    CurrencyPipe
  ],
  templateUrl: './hallgato.component.html',
  styleUrl: './hallgato.component.css'
})
export class HallgatoComponent implements OnInit {

  hallgatoService = inject(HallgatoService);
  tantargyService = inject(TantargyService);
  erdemjegyService = inject(ErdemjegyService);

  router = inject(Router);

  hallgatok: HallgatokDTO[] = [];

  tantargyak: TantargyakDTO[] = [];

  erdemjegyek: ErdemjegyekDTO[] = [];



  list$ = this.erdemjegyService.getAll();
  
  filterText = signal<string>('');

  ngOnInit(): void {
    this.hallgatoService.getAll().subscribe({
      next: (hallgatok) => this.hallgatok = hallgatok,
      error: (err) => console.error(err)
    });
  }

  deleteHallgato(hallgato: HallgatokDTO) {
    this.hallgatoService.delete(hallgato.id).subscribe({
      next: () => {
        const index = this.hallgatok.indexOf(hallgato);
        if (index > -1){
          this.hallgatok.splice(index, 1);

        }

      },
      error: (err) => {
        //TODO notification
        console.error(err);
      }
    });
  }

}

