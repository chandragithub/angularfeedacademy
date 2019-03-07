import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlatformLocation } from '@angular/common';
import { staticData } from '../../global/static';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  ourTutorials: Array<Object> = staticData.tutorials;
  title: string = '';
  constructor(private titleService: Title, private location: PlatformLocation) { 
    this.title = 'angularfeed | ' + location.pathname.split('/')[1];
    titleService.setTitle(this.title);
  }

  ngOnInit() {}

}
