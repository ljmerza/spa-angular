// import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { Router, NavigationStart } from '@angular/router';

// import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

import { AppModule } from './app/app.module';
// import { singleSpaPropsSubject } from './single-spa/single-spa-props';

// const lifecycles = singleSpaAngular({
//   bootstrapFunction: singleSpaProps => {
//     singleSpaPropsSubject.next(singleSpaProps);
//     return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
//   },
//   template: '<root-root />',
//   Router,
//   NavigationStart,
//   NgZone,
// });

// export const bootstrap = lifecycles.bootstrap;
// export const mount = lifecycles.mount;
// export const unmount = lifecycles.unmount;

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  // bootstrap AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  import { registerApplication, start } from 'single-spa';
  

  registerApplication({
    name: 'child1',
    app: () => import('child1'),
    activeWhen: ['/child1'],
  });
  
  start();

