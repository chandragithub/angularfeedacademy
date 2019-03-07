import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { ShareButtonsOptions, IShareButtons } from '@ngx-share/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';

import { TutorialComponent } from './tutorial.component';
import { SharedModule } from '../shared/shared.module';
import { RouteModule } from '../route/route.module';
import { TechnologyComponent } from './technology/technology.component';

const customOptions: ShareButtonsOptions = {
  include: ['facebook', 'twitter', 'google'],
  exclude: [],
  theme: 'modern-light',
  gaTracking: true,
  autoSetMeta: true,
  twitterAccount: 'username'
}

const icons = [
  faFacebookSquare
];

library.add(...icons);

const customProps: IShareButtons = {
  facebook: {
    icon: ['fab', 'facebook-square']
  }
};

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouteModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule.forRoot({ options: customOptions, prop: customProps })
  ],
  declarations: [
    TutorialComponent, 
    TechnologyComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialModule { }
