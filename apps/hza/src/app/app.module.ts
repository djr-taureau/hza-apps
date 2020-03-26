import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from '@hza/core';
import { ClarityModule } from '@clr/angular';

const routes: Routes = [
	{
		path: 'loans',
		loadChildren: () => import('@hza/loans').then((m) => m.LoansModule)
	}
];
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes), CoreModule, ClarityModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
