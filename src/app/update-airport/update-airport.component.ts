import { Component, OnInit } from '@angular/core';
import { Airport } from '../Airport';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-update-airport',
  templateUrl: './update-airport.component.html',
  styleUrls: ['./update-airport.component.css']
})
export class UpdateAirportComponent implements OnInit {
  code: string
  airport: Airport=new Airport();

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.airport= new Airport();
    this.code = this.route.snapshot.params['airportCode'];
    this.service.getAirportByCode(this.code).subscribe(
      data=> {
        this.airport=data
      },
        error => console.log(error)
    );
  }

  updateAirport(){
    this.service.updateAirport(this.airport).subscribe(
      data =>console.log(data),
      error=>console.log(error)
    )
    this.gotoViewAirportList();
  }

  gotoViewAirportList(){
    this.router.navigate(['view-airportlist'])
  }
}
