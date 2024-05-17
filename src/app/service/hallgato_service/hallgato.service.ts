import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HallgatokDTO } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class HallgatoService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<HallgatokDTO[]>('/api/hallgato');
  }

  getOne(id: number) {
    return this.http.get<HallgatokDTO>(`/api/hallgato/` + id);
  }

  create(hallgato: HallgatokDTO) {
    return this.http.post<HallgatokDTO>('/api/hallgato', hallgato);
  }

  update(hallgato: HallgatokDTO) {
    return this.http.put<HallgatokDTO>('/api/hallgato', hallgato);
  }

  delete(id: number) {
    return this.http.delete(`/api/hallgato/` + id);
  }
}
