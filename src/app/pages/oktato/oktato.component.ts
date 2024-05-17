import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { OktatoService } from '../../service/oktato_service/oktato.service';
import { OktatokDTO } from '../../../../models';
import { TantargyakDTO } from '../../../../models';
import { TantargyService } from '../../service/tantargy_service/tantargy.service';
import { Router } from '@angular/router';
import { AsyncPipe, CommonModule, CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';


@Component({
  selector: 'app-oktato',
  standalone: true,
  imports: [ 
    NavigationComponent,
    CommonModule,
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    SearchPipe,
    CurrencyPipe

  ],
  templateUrl: './oktato.component.html',
  styleUrl: './oktato.component.css'
})

export class OktatoComponent implements OnInit {

  oktatoService = inject(OktatoService);
  tantargyService = inject(TantargyService);

  router = inject(Router);

  oktatok: OktatokDTO[] = [];

  tantargyak: TantargyakDTO[] = [];


  list$ = this.tantargyService.getAll();
  
  filterText = signal<string>('');


  ngOnInit(): void {
    this.oktatoService.getAll().subscribe({
      next: (oktatok) => this.oktatok = oktatok,
      error: (err) => console.error(err)
    });
  }


  deleteOktato(oktato: OktatokDTO) {
    this.oktatoService.delete(oktato.id).subscribe({
      next: () => {
        const index = this.oktatok.indexOf(oktato);
        if (index > -1){
          this.oktatok.splice(index, 1);

        }

      },
      error: (err) => {
        //TODO notification
        console.error(err);
      }
    });
  }

}

