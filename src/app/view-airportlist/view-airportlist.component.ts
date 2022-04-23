import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { Airport } from '../Airport';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-airportlist',
  templateUrl: './view-airportlist.component.html',
  styleUrls: ['./view-airportlist.component.css']
})
export class ViewAirportlistComponent implements OnInit {

  airport: Observable<Airport[]>;
  constructor(private service: ServiceService,
    private router: Router) {
      this.airport=service.getAllAirports();
     }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    console.log('reload Data called!!')
    this.airport = this.service.getAllAirports();
}

deleteAirport(code: string){
  this.service.deleteAirport(code)
  .subscribe(
    data=>{
      console.log(data);
      this.reloadData();
    },
    error=> console.log(error)
  )
}

}