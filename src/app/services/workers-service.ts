import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Worker{
  id:number;
  name: string;
  role:number;
  salary:number;
}
@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  getWorkers(){
    return this.httpService.get<Worker[]>('/assets/workers.json');
  }
  constructor(private httpService: HttpClient) { }

}
