import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '**',
    component: EmptyRouteComponent
  }
];
