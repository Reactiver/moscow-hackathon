import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { ItemComponent } from './pages/item/item.component';
import { CreateMachineComponent } from './pages/create-machine/create-machine.component';
import { ListMachinesComponent } from './pages/list-machines/list-machines.component';

const routes: Routes = [
  {
    path: '',
    component: MarketplaceComponent,
  },
  {
    path: 'item/:itemId',
    component: ItemComponent,
  },
  {
    path: 'create/:itemId',
    component: CreateMachineComponent,
  },
  {
    path: 'machines',
    component: ListMachinesComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
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
