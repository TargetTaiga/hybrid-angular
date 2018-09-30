/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeModule, UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Angular6LogoComponent } from './angular6-logo/angular6-logo.component';
var Angular6ComponentsLibModule = /** @class */ (function () {
    function Angular6ComponentsLibModule() {
    }
    /**
     * @return {?}
     */
    Angular6ComponentsLibModule.prototype.ngDoBootstrap = /**
     * @return {?}
     */
    function () {
        console.log('Angular6 Module Bootstrapped');
    };
    Angular6ComponentsLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        UpgradeModule
                    ],
                    declarations: [Angular6LogoComponent],
                    entryComponents: [Angular6LogoComponent]
                },] }
    ];
    return Angular6ComponentsLibModule;
}());
export { Angular6ComponentsLibModule };
/** @type {?} */
var bootstrapFn = function (extraProviders) {
    /** @type {?} */
    var platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(Angular6ComponentsLibModule, { ngZone: 'zone.js' });
};
var ɵ0 = bootstrapFn;
/** @type {?} */
export var Angular6ComponentsLibModuleId = downgradeModule(bootstrapFn);
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjYtY29tcG9uZW50cy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjYtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhcjYtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFtQixNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7SUFXeEUsbURBQWE7Ozs7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs7Z0JBVjdDLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsYUFBYTt3QkFDYixhQUFhO3FCQUNiO29CQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDeEM7O3NDQWJEOztTQWNhLDJCQUEyQjs7QUFNeEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxjQUFnQzs7SUFDcEQsSUFBTSxXQUFXLEdBQUcsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztDQUN2RixDQUFDOzs7QUFDRixXQUFhLDZCQUE2QixHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZVJlZiwgTmdab25lLCBTdGF0aWNQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgcGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBkb3duZ3JhZGVNb2R1bGUsIFVwZ3JhZGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IEFuZ3VsYXI2TG9nb0NvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhcjYtbG9nby9hbmd1bGFyNi1sb2dvLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdFVwZ3JhZGVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbQW5ndWxhcjZMb2dvQ29tcG9uZW50XSxcblx0ZW50cnlDb21wb25lbnRzOiBbQW5ndWxhcjZMb2dvQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyNkNvbXBvbmVudHNMaWJNb2R1bGUge1xuXHRwdWJsaWMgbmdEb0Jvb3RzdHJhcCgpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnQW5ndWxhcjYgTW9kdWxlIEJvb3RzdHJhcHBlZCcpO1xuXHR9XG59XG5cbmNvbnN0IGJvb3RzdHJhcEZuID0gKGV4dHJhUHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtUmVmID0gcGxhdGZvcm1Ccm93c2VyRHluYW1pYyhleHRyYVByb3ZpZGVycyk7XG5cdHJldHVybiBwbGF0Zm9ybVJlZi5ib290c3RyYXBNb2R1bGUoQW5ndWxhcjZDb21wb25lbnRzTGliTW9kdWxlLCB7IG5nWm9uZTogJ3pvbmUuanMnIH0pO1xufTtcbmV4cG9ydCBjb25zdCBBbmd1bGFyNkNvbXBvbmVudHNMaWJNb2R1bGVJZCA9IGRvd25ncmFkZU1vZHVsZShib290c3RyYXBGbik7XG4iXX0=