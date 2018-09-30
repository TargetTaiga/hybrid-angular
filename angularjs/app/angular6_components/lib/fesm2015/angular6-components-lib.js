import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, NgModule } from '@angular/core';
import { downgradeComponent, downgradeModule, UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Angular6LogoComponent {
    constructor() {
        this.count = 0;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    handleClick() {
        this.click.emit();
    }
}
Angular6LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-angular6-logo',
                template: "<div class=\"angular6-logo\">\n\t<img class=\"angular6-logo__img\"\n\t\t src=\"/app/angular6_components/src/projects/angular6-components-lib/assets/angular6_logo.jpg\"\n\t\t (click)=\"handleClick()\">\n\t<div class=\"angular6-logo__text\">\n\t\t<h3>Angular 6.1 Component</h3>\n\t\t<h4>Click on the logo emits an event to AngularJS</h4>\n\t\t<h4>Clicks: {{count}} - value provided to Angular by AngularJS</h4>\n\t</div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".angular6-logo{border:1px solid #000;padding:10px;display:flex;align-items:center}.angular6-logo__text{flex:1;padding-left:10px}.angular6-logo__img{height:100px;cursor:pointer}"]
            }] }
];
/** @nocollapse */
Angular6LogoComponent.ctorParameters = () => [];
Angular6LogoComponent.propDecorators = {
    count: [{ type: Input }],
    click: [{ type: Output }]
};
/** @type {?} */
const Angular6LogoComponentDowngraded = downgradeComponent({
    component: Angular6LogoComponent,
    selectors: ['angular6-logo']
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Angular6ComponentsLibModule {
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
/** @type {?} */
const Angular6ComponentsLibModuleId = downgradeModule(bootstrapFn);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { Angular6ComponentsLibModuleId, Angular6LogoComponentDowngraded, Angular6LogoComponent as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjYtY29tcG9uZW50cy1saWIuanMubWFwIiwic291cmNlcyI6WyJuZzovL2FuZ3VsYXI2LWNvbXBvbmVudHMtbGliL2xpYi9hbmd1bGFyNi1sb2dvL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyNi1jb21wb25lbnRzLWxpYi9saWIvYW5ndWxhcjYtY29tcG9uZW50cy1saWIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRvd25ncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbGliLWFuZ3VsYXI2LWxvZ28nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYW5ndWxhcjYtbG9nby5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjZMb2dvQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRwdWJsaWMgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG5cdFx0dGhpcy5jbGljay5lbWl0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IEFuZ3VsYXI2TG9nb0NvbXBvbmVudERvd25ncmFkZWQgPSBkb3duZ3JhZGVDb21wb25lbnQoe1xuXHRjb21wb25lbnQ6IEFuZ3VsYXI2TG9nb0NvbXBvbmVudCxcblx0c2VsZWN0b3JzOiBbJ2FuZ3VsYXI2LWxvZ28nXVxufSk7IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlUmVmLCBOZ1pvbmUsIFN0YXRpY1Byb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlLCBwbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGRvd25ncmFkZU1vZHVsZSwgVXBncmFkZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgQW5ndWxhcjZMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyNi1sb2dvL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0VXBncmFkZU1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtBbmd1bGFyNkxvZ29Db21wb25lbnRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtBbmd1bGFyNkxvZ29Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI2Q29tcG9uZW50c0xpYk1vZHVsZSB7XG5cdHB1YmxpYyBuZ0RvQm9vdHN0cmFwKCk6IHZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdBbmd1bGFyNiBNb2R1bGUgQm9vdHN0cmFwcGVkJyk7XG5cdH1cbn1cblxuY29uc3QgYm9vdHN0cmFwRm4gPSAoZXh0cmFQcm92aWRlcnM6IFN0YXRpY1Byb3ZpZGVyW10pID0+IHtcblx0Y29uc3QgcGxhdGZvcm1SZWYgPSBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKGV4dHJhUHJvdmlkZXJzKTtcblx0cmV0dXJuIHBsYXRmb3JtUmVmLmJvb3RzdHJhcE1vZHVsZShBbmd1bGFyNkNvbXBvbmVudHNMaWJNb2R1bGUsIHsgbmdab25lOiAnem9uZS5qcycgfSk7XG59O1xuZXhwb3J0IGNvbnN0IEFuZ3VsYXI2Q29tcG9uZW50c0xpYk1vZHVsZUlkID0gZG93bmdyYWRlTW9kdWxlKGJvb3RzdHJhcEZuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWNDO3FCQUhnQyxDQUFDO3FCQUNZLElBQUksWUFBWSxFQUFRO0tBR3BFOzs7O0lBRU0sV0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDOzs7O1lBZm5CLFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3Qix3YkFBNkM7Z0JBRTdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDL0M7Ozs7O29CQUVDLEtBQUs7b0JBQ0wsTUFBTTs7O0FBVVIsTUFBYSwrQkFBK0IsR0FBRyxrQkFBa0IsQ0FBQztJQUNqRSxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztDQUM1QixDQUFDOzs7Ozs7QUN6QkY7Ozs7SUFlUSxhQUFhO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQzs7OztZQVY3QyxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLGFBQWE7b0JBQ2IsYUFBYTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDckMsZUFBZSxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDeEM7OztBQU9ELE1BQU0sV0FBVyxHQUFHLENBQUMsY0FBZ0M7O0lBQ3BELE1BQU0sV0FBVyxHQUFHLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELE9BQU8sV0FBVyxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0NBQ3ZGLENBQUM7O0FBQ0YsTUFBYSw2QkFBNkIsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDOzs7Ozs7Ozs7Ozs7OzsifQ==