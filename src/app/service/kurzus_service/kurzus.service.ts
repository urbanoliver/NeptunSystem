import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KurzusokDTO } from '../../../../models';

@Injectable({
  providedIn: 'root'
})
export class KurzusService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<KurzusokDTO[]>('/api/kurzus');
  }

  getOne(id: number) {
    return this.http.get<KurzusokDTO>(`/api/kurzus/` + id);
  }

  create(kurzus: KurzusokDTO) {
    return this.http.post<KurzusokDTO>('/api/kurzus', kurzus);
  }

  update(kurzus: KurzusokDTO) {
    return this.http.put<KurzusokDTO>('/api/kurzus', kurzus);
  }

  delete(id: number) {
    return this.http.delete(`/api/kurzus/` + id);
  }


}

