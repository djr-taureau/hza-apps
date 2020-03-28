import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DocEffects } from '../+state/documents/documents.effects';

import { DocsFacade } from '../+state/documents/documents.facade';

import * as fromDocs from '../+state/documents/documents.reducer';

@NgModule({
  imports: [StoreModule.forFeature(fromDocs.docsFeatureKey, fromDocs.docsReducer), EffectsModule.forFeature([DocEffects])],
  providers: [DocEffects, DocsFacade],
})
export class DocumentsStateModule {}
