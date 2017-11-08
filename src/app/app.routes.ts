// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { dogRoutes }    from './home/dog.routes';
// import { catRoutes }    from './cats/cat.routes';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: 'app/user/user.module#UserModule',
    canLoad: [AuthGuard]
  },
  // { path: '/', redirectTo:''},
  // otherwise redirect to home
  { path: '**', component: PageNotFoundComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
