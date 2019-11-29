import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { TestComponent } from './pages/test/test.component';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: 'category/:category',
    component: MainComponent,
  },
  {
    path: 'category/:category/product/:id',
    component: ProductComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/category/SERVICE',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
