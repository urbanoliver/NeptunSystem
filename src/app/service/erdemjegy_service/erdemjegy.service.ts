import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErdemjegyekDTO } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class ErdemjegyService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<ErdemjegyekDTO[]>('/api/erdemjegyek');
  }

  getAllFieldsData() {
    return this.http.get<ErdemjegyekDTO[]>('/api/erdemjegyek/hallgatoId');
  }

  getOne(id: number) {
    return this.http.get<ErdemjegyekDTO>(`/api/erdemjegyek/` + id);
  }

  create(erdemjegy: ErdemjegyekDTO) {
    return this.http.post<ErdemjegyekDTO>('/api/erdemjegyek', erdemjegy);
  }

  update(erdemjegy: ErdemjegyekDTO) {
    return this.http.put<ErdemjegyekDTO>('/api/erdemjegyek', erdemjegy);
  }

  delete(id: number) {
    return this.http.delete(`/api/erdemjegyek/` + id);
  }
}
