import { NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

// const lifecycles = singleSpaAngular({
//   bootstrapFunction: singleSpaProps => {
//     singleSpaPropsSubject.next(singleSpaProps);
//     return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
//   },
//   template: '<child-root />',
//   Router,
//   NavigationStart,
//   NgZone,
// });

// export const bootstrap = lifecycles.bootstrap;
// export const mount = lifecycles.mount;
// export const unmount = lifecycles.unmount;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
