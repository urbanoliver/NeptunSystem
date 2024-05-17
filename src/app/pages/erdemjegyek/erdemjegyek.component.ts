import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ErdemjegyService } from '../../service/erdemjegy_service/erdemjegy.service';
import { ErdemjegyekDTO } from '../../../../models';
import { Router } from '@angular/router';
import { AsyncPipe, UpperCasePipe, LowerCasePipe, CurrencyPipe } from '@angular/common';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-erdemjegyek',
  standalone: true,
  imports: [
    NavigationComponent,
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    SearchPipe,
    CurrencyPipe
  ],
  templateUrl: './erdemjegyek.component.html',
  styleUrl: './erdemjegyek.component.css'
})
export class ErdemjegyekComponent implements OnInit {

  erdemjegyService = inject(ErdemjegyService);

  router = inject(Router);

  erdemjegyek: ErdemjegyekDTO[] = [];

  list$ = this.erdemjegyService.getAll();
  
  filterText = signal<string>('');

  ngOnInit(): void {

    this.erdemjegyService.getAll().subscribe({
      next: (erdemjegyek) => this.erdemjegyek = erdemjegyek,
      error: (err) => console.error(err)
    });
  }

  goToEditErdemjegy(id: number) {
    this.router.navigate([ 'edit-erdemjegyek', id ]);
  }
  
}
