import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plates } from '../plates';
import { PlatesService } from '../plates.service';
;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  plateForm: Plates = {
    idPlate:0,
    namePlate:'',
    price:0,
    favorite:false,
    stars:0,
    imageUrl:'',  
    cookTime:'',
    idrestaurant:0,
  };
 

  constructor(private plateService:PlatesService,
    private router:Router) { }

  ngOnInit(): void {
  }

  create(){
    this.plateService.create(this.plateForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/plates/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
