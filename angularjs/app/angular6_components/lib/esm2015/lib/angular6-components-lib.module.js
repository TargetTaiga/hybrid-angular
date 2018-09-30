/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeModule, UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Angular6LogoComponent } from './angular6-logo/angular6-logo.component';
export class Angular6ComponentsLibModule {
    /**
     * @return {?}
     */
    ngDoBootstrap() {
        console.log('Angular6 Module Bootstrapped');
    }
}
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
/** @type {?} */
const bootstrapFn = (extraProviders) => {
    /** @type {?} */
    const platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(Angular6ComponentsLibModule, { ngZone: 'zone.js' });
};
const ɵ0 = bootstrapFn;
/** @type {?} */
export const Angular6ComponentsLibModuleId = downgradeModule(bootstrapFn);
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjYtY29tcG9uZW50cy1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjYtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhcjYtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsYUFBYSxFQUFtQixNQUFNLDJCQUEyQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFVaEYsTUFBTTs7OztJQUNFLGFBQWE7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs7O1lBVjdDLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsYUFBYTtvQkFDYixhQUFhO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNyQyxlQUFlLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQzthQUN4Qzs7O0FBT0QsTUFBTSxXQUFXLEdBQUcsQ0FBQyxjQUFnQyxFQUFFLEVBQUU7O0lBQ3hELE1BQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Q0FDdkYsQ0FBQzs7O0FBQ0YsYUFBYSw2QkFBNkIsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVSZWYsIE5nWm9uZSwgU3RhdGljUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUsIHBsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgZG93bmdyYWRlTW9kdWxlLCBVcGdyYWRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBBbmd1bGFyNkxvZ29Db21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXI2LWxvZ28vYW5ndWxhcjYtbG9nby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0QnJvd3Nlck1vZHVsZSxcblx0XHRVcGdyYWRlTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW0FuZ3VsYXI2TG9nb0NvbXBvbmVudF0sXG5cdGVudHJ5Q29tcG9uZW50czogW0FuZ3VsYXI2TG9nb0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjZDb21wb25lbnRzTGliTW9kdWxlIHtcblx0cHVibGljIG5nRG9Cb290c3RyYXAoKTogdm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ0FuZ3VsYXI2IE1vZHVsZSBCb290c3RyYXBwZWQnKTtcblx0fVxufVxuXG5jb25zdCBib290c3RyYXBGbiA9IChleHRyYVByb3ZpZGVyczogU3RhdGljUHJvdmlkZXJbXSkgPT4ge1xuXHRjb25zdCBwbGF0Zm9ybVJlZiA9IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoZXh0cmFQcm92aWRlcnMpO1xuXHRyZXR1cm4gcGxhdGZvcm1SZWYuYm9vdHN0cmFwTW9kdWxlKEFuZ3VsYXI2Q29tcG9uZW50c0xpYk1vZHVsZSwgeyBuZ1pvbmU6ICd6b25lLmpzJyB9KTtcbn07XG5leHBvcnQgY29uc3QgQW5ndWxhcjZDb21wb25lbnRzTGliTW9kdWxlSWQgPSBkb3duZ3JhZGVNb2R1bGUoYm9vdHN0cmFwRm4pO1xuIl19