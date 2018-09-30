import { NgModule, NgModuleRef, NgZone, StaticProvider } from '@angular/core';
import { BrowserModule, platformBrowser } from '@angular/platform-browser';
import { downgradeModule, UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Angular6LogoComponent } from './angular6-logo/angular6-logo.component';

@NgModule({
	imports: [
		BrowserModule,
		UpgradeModule
	],
	declarations: [Angular6LogoComponent],
	entryComponents: [Angular6LogoComponent]
})
export class Angular6ComponentsLibModule {
	public ngDoBootstrap(): void {
		console.log('Angular6 Module Bootstrapped');
	}
}

const bootstrapFn = (extraProviders: StaticProvider[]) => {
	const platformRef = platformBrowserDynamic(extraProviders);
	return platformRef.bootstrapModule(Angular6ComponentsLibModule, { ngZone: 'zone.js' });
};
export const Angular6ComponentsLibModuleId = downgradeModule(bootstrapFn);
