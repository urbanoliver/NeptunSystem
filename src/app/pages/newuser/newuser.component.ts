import { Component, OnInit , inject} from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OktatoService } from '../../service/oktato_service/oktato.service';
import { OktatokDTO } from '../../../../models';
import { HallgatoService } from '../../service/hallgato_service/hallgato.service';
import { HallgatokDTO } from '../../../../models';
import { TantargyService } from '../../service/tantargy_service/tantargy.service';
import { TantargyakDTO } from '../../../../models';
import { KurzusService } from '../../service/kurzus_service/kurzus.service';
import { KurzusokDTO } from '../../../../models';


@Component({
  selector: 'app-newuser',
  standalone: true,
  imports: [
    NavigationComponent,
    ReactiveFormsModule
  ],
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})
export class NewuserComponent implements OnInit {

  formBuilder = inject(FormBuilder);

  oktatoService = inject(OktatoService);
  hallgatoService = inject(HallgatoService);
  tantargyService = inject(TantargyService);
  kurzusService = inject(KurzusService);

  activetedRoute = inject(ActivatedRoute);

  router = inject(Router);


  oktatoForm = this.formBuilder.group<OktatokDTO>({

    id: 0,
    nev: '',
    tanszek: '',
    
  });

  hallgatoForm = this.formBuilder.group<HallgatokDTO>({

    id: 0,
    nev: '',
    tankor: '',
  });

  tantargyForm = this.formBuilder.group<TantargyakDTO>({

    id: 0,
    nev: '',
    oktatoId: 0,
  })

  kurzusForm = this.formBuilder.group<KurzusokDTO>({

    id: 0,
    idopont: '',
    tantargyId: 0,

  })

  isNewOktato = true;
  isNewHallgato = true;
  isNewTantargy = true;
  isNewKurzus = true;
  

  saveOktato() {
    const oktato = this.oktatoForm.value as OktatokDTO;

    if(this.isNewOktato) {
      this.oktatoService.create(oktato).subscribe({
        next: (oktatoCreated) => {
          // TODO notification
            this.router.navigateByUrl('/home');
        },
        error: (err) => {
          // TODO notification

          console.error(err);
        }
      });
    }
    else {
      this.oktatoService.update(oktato).subscribe({
        next: (oktatoCreated) => {
          // TODO notification
            this.router.navigateByUrl('/home');
        },
        error: (err) => {
          //TODO notification

          console.error(err);
        }
      });

    }

    
  }


  saveHallgato() {
    const hallgato = this.hallgatoForm.value as HallgatokDTO;

    if(this.isNewHallgato) {
      this.hallgatoService.create(hallgato).subscribe({
        next: (hallgatoCreated) => {
          // TODO notification
            this.router.navigateByUrl('/home');
        },
        error: (err) => {
          // TODO notification

          console.error(err);
        }
      });
    }
    else {
      this.hallgatoService.update(hallgato).subscribe({
        next: (hallgatoCreated) => {
          // TODO notification
            this.router.navigateByUrl('/home');
        },
        error: (err) => {
          //TODO notification

          console.error(err);
        }
      });

    }

    
  }

  saveTantargy() {
    const tantargy = this.tantargyForm.value as TantargyakDTO;

    if(this.isNewTantargy) {
      this.tantargyService.create(tantargy).subscribe({
        next: (tantargyCreated) => {
          // TODO notification
            this.router.navigateByUrl('/home');
        },
        error: (err) => {
          // TODO notification
        
        }
      });
    }
  }

  saveKurzus() {
    const kurzus = this.kurzusForm.value as KurzusokDTO;

    if(this.isNewKurzus) {
      this.kurzusService.create(kurzus).subscribe({
        next: (kurzusCreated) => {
          // TODO notification
            this.router.navigateByUrl('/home');
        },
        error: (err) => {
          // TODO notification
        
        }
      });
    }
  }


  ngOnInit(): void {

    const o_id = this.activetedRoute.snapshot.params['id'];
    const h_id = this.activetedRoute.snapshot.params['id'];
    const t_id = this.activetedRoute.snapshot.params['id'];
    const k_id = this.activetedRoute.snapshot.params['id'];

    if (o_id) {
      this.isNewOktato = false;

      this.oktatoService.getOne(o_id).subscribe({
        next: (oktato) => this.oktatoService.update(oktato),
        error: (err) => {
          //TODO notification

          console.error(err)
        }
      });
    }

    if (h_id) {
      this.isNewHallgato = false;

      this.hallgatoService.getOne(h_id).subscribe({
        next: (hallgato) => this.hallgatoService.update(hallgato),
        error: (err) => {
          //TODO notification

          console.error(err)
        }
      });

    }

    if (t_id) {
      this.isNewTantargy = false;

      this.tantargyService.getOne(t_id).subscribe({
        next: (tantargy) => this.tantargyService.update(tantargy),
        error: (err) => {
          //TODO notification
        }
      });
    }

    if (k_id) {
      this.isNewKurzus = false;

      this.kurzusService.getOne(k_id).subscribe({
        next: (kurzus) => this.kurzusService.update(kurzus),
        error: (err) => {
          //TODO notification
        }
      })
    }
  }
}
