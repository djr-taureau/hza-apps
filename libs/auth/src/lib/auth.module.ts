import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [],
  imports: [CommonModule]

})
export class AuthModule {}
