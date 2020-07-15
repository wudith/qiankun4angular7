import 'core-js/es7/reflect';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import singleSpaAngular from 'single-spa-angular';
import { getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {

  enableProdMode();
}
debugger;
//test angular7 custom-webpack
if (!(window as any).__POWERED_BY_QIANKUN__) {
platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule)
  .catch(err => console.log(err));
}

 const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
  
    singleSpaPropsSubject.next(singleSpaProps);

    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule).catch(err => console.error(err));
  },
  template: '<my-app-root />',
  Router,
  NgZone: NgZone
});


export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
