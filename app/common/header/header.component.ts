import { Component, Injector, Inject, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { staticData } from '../../../global/static';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subMenu: boolean    = false;
  menu: Array<Object>  = staticData.menu;
  faBars = faBars;
  faTimes = faTimes;
  name1 = staticData.basic.name1;
  name2 = staticData.basic.name2;
  
  constructor(private injector: Injector, @Inject(DOCUMENT) 
              private document: any,private router: Router, 
              private renderer: Renderer2, 
              private el: ElementRef) { }

  ngOnInit() { }

  public onMenuClose() {
    this.subMenu = false;
    this.renderer.removeClass(this.document.body, 'scroll-hidden');
  }
  public onMenuOpen() {
    this.renderer.addClass(this.document.body, 'scroll-hidden');
    this.subMenu = true;
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, 'scroll-hidden');
  }
}
