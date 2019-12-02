import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from '../core/core.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ItemComponent } from './item/item.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { CreateMachineComponent } from './create-machine/create-machine.component';
import { ListMachinesComponent } from './list-machines/list-machines.component';
import { AuthorizationComponent } from './authorization/authorization.component';

export function getHighlightLanguages() {
  return {
    bash: () => import('highlight.js/lib/languages/bash'),
  };
}

@NgModule({
  declarations: [
    AuthComponent,
    NotFoundComponent,
    MarketplaceComponent,
    ItemComponent,
    CreateMachineComponent,
    ListMachinesComponent,
    AuthorizationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormsModule,
    NgZorroAntdModule,
    CoreModule,
    HighlightModule,
  ],
  exports: [AuthComponent, NotFoundComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages(),
      },
    },
  ],
})
export class PagesModule {}
