import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as AppRoutes from './appRoutePaths';

const PROVIDERS = [
	{
		provide: APP_BASE_HREF,
		useValue: '/'
	}
];

const routes: Routes = [
	{ path: '', redirectTo: '/doc-heading', pathMatch: 'full' },
	{
		path: AppRoutes.appRoutePaths.documents,
		loadChildren: () => import('@hza/documents').then((m) => m.DocumentsModule)
	},
	{
		path: AppRoutes.appRoutePaths.loans,
		loadChildren: () => import('@hza/loans').then((m) => m.LoansModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			useHash: true,
			enableTracing: false,
			scrollPositionRestoration: 'enabled',
			anchorScrolling: 'enabled'
		})
	],
	exports: [RouterModule],
	providers: PROVIDERS
})
export class AppRoutingModule {}
