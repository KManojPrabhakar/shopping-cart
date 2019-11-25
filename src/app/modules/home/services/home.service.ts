import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { environment } from 'src/environments/environment';
import { API_CONSTANTS } from 'src/app/shared/constants/api.constant';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private BASE_URL = `${environment.apiBaseUrl}`;

  constructor(private apiService: ApiService) { }
  getAllBooks(): Observable <any> {
    const url = `${this.BASE_URL}${API_CONSTANTS.BOOKS}`;
    return this.apiService.get(url);
  }
}
