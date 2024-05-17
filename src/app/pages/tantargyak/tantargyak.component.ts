import { Component, OnInit, inject } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { TantargyakDTO } from '../../../../models';
import { TantargyService } from '../../service/tantargy_service/tantargy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tantargyak',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './tantargyak.component.html',
  styleUrl: './tantargyak.component.css'
})
export class TantargyakComponent implements OnInit {

  tantargyService = inject(TantargyService);


  router = inject(Router);

  tantargyak: TantargyakDTO[] = [];


  ngOnInit(): void {

    this.tantargyService.getAll().subscribe({
      next: (tantargyak) => this.tantargyak = tantargyak,
      error: (err) => console.error(err)
    });

  }

  deleteTantargy(tantargy: TantargyakDTO) {
    this.tantargyService.delete(tantargy.id).subscribe({
      next: () => {
        const index = this.tantargyak.indexOf(tantargy);
        if (index > -1){
          this.tantargyak.splice(index, 1);

        }

      },
      error: (err) => {
        //TODO notification
        console.error(err);
      }
    });
  }



}
