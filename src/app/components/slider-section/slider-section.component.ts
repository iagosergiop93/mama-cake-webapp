import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Cake } from 'src/app/models/cake';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent implements OnInit, AfterViewInit {

	@Input() sectionName = '';
	cakes:Cake[] = [
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Almond Cake', image: '../../../assets/daily-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 },
		{ title: 'Cherry Cake', image: '../../../assets/birthday-cake-sm.jpg', price: 20 }
	];
	range:number;
	idx = 0;

	constructor() { }

	ngOnInit() {
		this.defineSliderRange();
	}

	ngAfterViewInit() {
		this.displayImages();
	}

	private defineSliderRange() {
		let width = document.body.offsetWidth;
		if(width > 1400) this.range = 5;
		else if(width > 1000) this.range = 4;
		else if(width > 700) this.range = 3;
		else if(width > 500) this.range = 2;
		else this.range = 1; 
	}

	scrollSlider() {
		this.idx += this.range;
		if(this.idx >= this.cakes.length) this.idx -= this.cakes.length;
		this.displayImages();
	}

	displayImages() {
		let elementList: HTMLCollectionOf<HTMLDivElement> = document.getElementsByClassName('slider-item') as HTMLCollectionOf<HTMLDivElement>;
		for(let i=0;i < elementList.length;i++) {
			elementList[i].style.display = 'none';
		}

		for(let i=this.idx;i - this.idx < this.range;i++) {
			elementList[i].style.display = 'block';
		}
	}
}
