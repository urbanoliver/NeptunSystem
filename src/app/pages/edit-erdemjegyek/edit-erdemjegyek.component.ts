import { Component, inject, OnInit } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { ErdemjegyService } from '../../service/erdemjegy_service/erdemjegy.service';
import { ErdemjegyekDTO } from '../../../../models';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-erdemjegyek',
  standalone: true,
  imports: [
    NavigationComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-erdemjegyek.component.html',
  styleUrl: './edit-erdemjegyek.component.css'
})
export class EditErdemjegyekComponent implements OnInit {

  erdemjegyService = inject(ErdemjegyService);

  formBuilder = inject(FormBuilder);

  router = inject(Router);

  erdemjegyek: ErdemjegyekDTO[] = [];

  activetedRoute = inject(ActivatedRoute);

  erdemjegyForm = this.formBuilder.group<ErdemjegyekDTO>({
    id: 0,
    hallgatoId: 0,
    tantargyId: 0,
    kurzusId: 0,
    erdemjegy: 0
  });
  
  isNewErdemjegy = true;
  ngOnInit(): void {
    const id = this.activetedRoute.snapshot.params['id'];

      if (id) {
        this.isNewErdemjegy = false;

        this.erdemjegyService.getOne(id).subscribe({
          next: (erdemjegy) => this.erdemjegyForm.setValue(erdemjegy),
          error: (err) => {
            //TODO notification

            console.error(err)
          }
        });
      }
    
  }

  saveErdemjegy() {
    const erdemjegy = this.erdemjegyForm.value as ErdemjegyekDTO;

    if(this.isNewErdemjegy) {
      this.erdemjegyService.create(erdemjegy).subscribe({
        next: (erdemjegyCreated) => {
          // TODO notification
            this.router.navigateByUrl('/erdemjegyek');
        },
        error: (err) => {
          // TODO notification

          console.error(err);
        }
      });
    }
    else {
      this.erdemjegyService.update(erdemjegy).subscribe({
        next: (erdemjegyUpdated) => {
          // TODO notification
            this.router.navigateByUrl('/erdemjegyek');
        },
        error: (err) => {
          //TODO notification

          console.error(err);
        }
      });

    }
  }

}
