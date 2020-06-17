
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigService, appInitializer, CONFIG_URL } from '@hza/shared/services';
import { CoreModule, OnDemandPreloadStrategy } from '@hza/core';

import { environment } from '@hza/shared/environments';


const routes: Routes = [
	{
		path: '',
		component: AppComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('@hza/documents').then((m) => m.DocumentsModule)
			},
			{
				path: '',
				loadChildren: () => import('@hza/shared/loans/shell').then((m) => m.SharedLoansShellModule)
			}
		]
	}
];
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		CoreModule,
		RouterModule.forRoot(routes, {
			useHash: true,
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled',
			enableTracing: true,
			preloadingStrategy: OnDemandPreloadStrategy
		}),
		BrowserAnimationsModule
	],
	providers: [
		ConfigService,
		{
			provide: APP_INITIALIZER,
			useFactory: appInitializer,
			multi: true,
			deps: [ConfigService]
		},
		{ provide: CONFIG_URL, useValue: environment.configUrl },
	],
	exports: [BrowserAnimationsModule],
	bootstrap: [AppComponent]
})
export class AppModule {}
