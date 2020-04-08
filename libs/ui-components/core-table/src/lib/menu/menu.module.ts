import { NgModule } from '@angular/core';

import { CoreTableMenuComponent } from './menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

const COMPONENTS = [CoreTableMenuComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [MatButtonModule, MatIconModule, MatMenuModule],
})
export class CoreTableMenuModule {}
