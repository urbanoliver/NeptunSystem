import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TantargyakDTO } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class TantargyService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<TantargyakDTO[]>('/api/tantargy');

  }


  getOne(id: number) {
    return this.http.get<TantargyakDTO>(`/api/tantargy/` + id);
  }

  create(tantargy: TantargyakDTO) {
    return this.http.post<TantargyakDTO>('/api/tantargy', tantargy);
  }

  update(tantargy: TantargyakDTO) {
    return this.http.put<TantargyakDTO>('/api/tantargy', tantargy);
  }

  delete(id: number) {
    return this.http.delete(`/api/tantargy/` + id);
  }
}
