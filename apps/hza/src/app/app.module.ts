import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from '@hza/core';
import { ClarityModule } from '@clr/angular';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@hza/loans').then((m) => m.LoansModule)
	},
	{
		path: '',
		loadChildren: () => import('@hza/documents').then((m) => m.DocumentsModule)
	}
];
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, {
			useHash: true,
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			enableTracing: false
		}),
		CoreModule,
		ClarityModule,
		BrowserAnimationsModule
	],
	providers: [],
	exports: [BrowserAnimationsModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
