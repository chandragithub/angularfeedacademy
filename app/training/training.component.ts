import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as $ from 'jquery';

import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  trainingList: Array<Object> = [];
  title: string = 'angularfeed - Trainings';
  isExploreClick = false;

  constructor(
    private trainingService: TrainingService,
    private spinner: Ng4LoadingSpinnerService,
    private titleService: Title) {
      this.titleService.setTitle(this.title);
      this.spinner.show();
  }

  ngOnInit() {
    this.trainingService.getTrainingList().subscribe(data => {
      this.trainingList = data.json().slice(0, 10);
      this.spinner.hide();
      $('.exploreList').addClass('hidden');
    },
      error => {
        throw error;
      })
  }

  ngAfterViewInit() {
    $('.exploreList').addClass('hidden');
  }

  explore() {
    this.isExploreClick = true;
  }
}
