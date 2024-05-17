import { Component, OnInit, inject } from '@angular/core';
import { NavigationComponent } from '../../../navigation/navigation.component';
import { KurzusService } from '../../../service/kurzus_service/kurzus.service';
import { Router } from '@angular/router';
import { KurzusokDTO } from '../../../../../models';

@Component({
  selector: 'app-kurzusok',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './kurzusok.component.html',
  styleUrl: './kurzusok.component.css'
})
export class KurzusokComponent implements OnInit {

  kurzusService = inject(KurzusService);

  router = inject(Router);

  kurzusok: KurzusokDTO[] = [];

  ngOnInit(): void {

    this.kurzusService.getAll().subscribe({
      next: (kurzusok) => this.kurzusok = kurzusok,
      error: (err) => console.error(err)
    });
  }


  deleteKurzus(kurzus: KurzusokDTO) {

    this.kurzusService.delete(kurzus.id).subscribe({

      next: () => {
        const index = this.kurzusok.indexOf(kurzus);
        if (index > -1) {
          this.kurzusok.splice(index, 1);

        }

      },

      error: (err) => {
        //TODO notification
        console.error(err);

      }
    });
  }

}
