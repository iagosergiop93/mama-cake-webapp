import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-section',
  templateUrl: './slider-section.component.html',
  styleUrls: ['./slider-section.component.scss']
})
export class SliderSectionComponent implements OnInit {

	@Input() sectionName = '';

	constructor() { }

	ngOnInit() {
	}

}
