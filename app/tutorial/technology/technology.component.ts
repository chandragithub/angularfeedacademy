import { Component, Injector, Inject, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PlatformLocation, DOCUMENT } from '@angular/common';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

import { TutorialsService } from '../../services/tutorials.service';
import { staticData } from '../../../global/static';

@Component({
  selector: 'app-javascript',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  name: string = '';
  hooks: Object = {};
  interpolate: Object = { language: 'language interpolated' };
  title: string = '';
  technology: string = '';
  tutorials: Array<Object> = [];
  tutorialLists: Array<Object> = [];
  totalCount: Array<Object> = [];
  pageShow: boolean = false;
  pageId: string = '';
  pageUrl: string = '';
  isPageLoadingError: boolean = false;
  subMenu: boolean = false;
  faTimes = faTimes;
  faEllipsisV = faEllipsisV;
  isPageLoaded = false;

  constructor(private tutorialServices: TutorialsService,
    private location: PlatformLocation,
    private titleService: Title,
    private spinner: Ng4LoadingSpinnerService,
    @Inject(DOCUMENT) private document: any,
    private element: ElementRef,
    private renderer: Renderer2) {
    this.title = location.pathname.split('/')[3];
    this.technology = location.pathname.split('/')[2];
    this.location.onPopState(() => {
      this.ngOnInit();
    });
    this.titleService.setTitle(this.title);
    this.spinner.show();
  }

  ngOnInit() {
      this.tutorialServices.getByTitle(location.pathname.split('/')[2], location.pathname.split('/')[3]).subscribe(data => {
      this.pageId = location.pathname.split('/')[3];
      this.pageUrl = document.URL;
      this.tutorials = data.json();
      this.pageShow = true;
      this.spinner.hide();
      this.isPageLoaded = true;
      setTimeout(() => {
        $('.' + this.pageId).addClass('list-active');
      }, 50);
    },
      error => {
        this.isPageLoadingError = true;
        this.spinner.hide();
      })

    this.tutorialServices.getList(location.pathname.split('/')[2]).subscribe(data => {
      this.tutorialLists = data.json();
    },
      error => {
        throw error;
      })
  }

  ngAfterViewInit(): void {

  }

  tutorialClick() {
    this.spinner.show();
    this.subMenu ? this.onMenuClose() : '';
    setTimeout(() => {
      this.title = location.pathname.split('/')[3];
      this.ngOnInit();
      this.titleService.setTitle(this.title);
    }, 50);
  }

  public onMenuClose() {
    this.element.nativeElement.querySelectorAll('.tutorial-body')[0].style.display = 'inline-block';
    this.element.nativeElement.querySelectorAll('.share-btns')[0].style.display = 'inline-block';;
    this.subMenu = false;
    this.renderer.removeClass(this.document.body, 'scroll-hidden');

  }
  public onMenuOpen() {
    this.element.nativeElement.querySelectorAll('.tutorial-body')[0].style.display = 'none';
    this.element.nativeElement.querySelectorAll('.share-btns')[0].style.display = 'none';
    this.renderer.addClass(this.document.body, 'scroll-hidden');
    this.subMenu = true;
  }
}
