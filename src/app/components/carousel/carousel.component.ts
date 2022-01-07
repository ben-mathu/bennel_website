import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/services/web.service';
import { Carousel } from 'src/app/models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  carouselData: Carousel[] = [];

  constructor(private webServices: WebService) {
    this.webServices.loadCarousel().subscribe(data => {
      this.carouselData = data;
    })
  }

  ngOnInit(): void {
    console.log("log");
  }

}
