import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./component/auth/auth.component";

const appRoutes: Routes  = [
  {
    path: 'auth',
    component: AuthComponent
  }
]

export const appRoutingProviders: any[] = [
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
