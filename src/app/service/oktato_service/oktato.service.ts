import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OktatokDTO } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class OktatoService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<OktatokDTO[]>('/api/oktato');
  }

  getOne(id: number) {
    return this.http.get<OktatokDTO>(`/api/oktato/` + id);
  }

  create(oktato: OktatokDTO) {
    return this.http.post<OktatokDTO>('/api/oktato', oktato);
  }

  update(oktato: OktatokDTO) {
    return this.http.put<OktatokDTO>('/api/oktato', oktato);
  }

  delete(id: number) {
    return this.http.delete(`/api/oktato/` + id);
  }
}
