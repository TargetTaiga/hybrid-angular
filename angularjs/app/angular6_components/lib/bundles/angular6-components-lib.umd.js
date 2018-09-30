(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/upgrade/static'), require('@angular/platform-browser'), require('@angular/platform-browser-dynamic')) :
    typeof define === 'function' && define.amd ? define('angular6-components-lib', ['exports', '@angular/core', '@angular/upgrade/static', '@angular/platform-browser', '@angular/platform-browser-dynamic'], factory) :
    (factory((global.Angular6Components = {}),global.ng.core,global.ng.upgrade.static,global.ng.platformBrowser,global.ng.platformBrowserDynamic));
}(this, (function (exports,core,_static,platformBrowser,platformBrowserDynamic) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Angular6LogoComponent = (function () {
        function Angular6LogoComponent() {
            this.count = 0;
            this.click = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        Angular6LogoComponent.prototype.handleClick = /**
         * @return {?}
         */
            function () {
                this.click.emit();
            };
        Angular6LogoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-angular6-logo',
                        template: "<div class=\"angular6-logo\">\n\t<img class=\"angular6-logo__img\"\n\t\t src=\"/app/angular6_components/src/projects/angular6-components-lib/assets/angular6_logo.jpg\"\n\t\t (click)=\"handleClick()\">\n\t<div class=\"angular6-logo__text\">\n\t\t<h3>Angular 6.1 Component</h3>\n\t\t<h4>Click on the logo emits an event to AngularJS</h4>\n\t\t<h4>Clicks: {{count}} - value provided to Angular by AngularJS</h4>\n\t</div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [".angular6-logo{border:1px solid #000;padding:10px;display:flex;align-items:center}.angular6-logo__text{flex:1;padding-left:10px}.angular6-logo__img{height:100px;cursor:pointer}"]
                    }] }
        ];
        /** @nocollapse */
        Angular6LogoComponent.ctorParameters = function () { return []; };
        Angular6LogoComponent.propDecorators = {
            count: [{ type: core.Input }],
            click: [{ type: core.Output }]
        };
        return Angular6LogoComponent;
    }());
    /** @type {?} */
    var Angular6LogoComponentDowngraded = _static.downgradeComponent({
        component: Angular6LogoComponent,
        selectors: ['angular6-logo']
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Angular6ComponentsLibModule = (function () {
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
            { type: core.NgModule, args: [{
                        imports: [
                            platformBrowser.BrowserModule,
                            _static.UpgradeModule
                        ],
                        declarations: [Angular6LogoComponent],
                        entryComponents: [Angular6LogoComponent]
                    },] }
        ];
        return Angular6ComponentsLibModule;
    }());
    /** @type {?} */
    var bootstrapFn = function (extraProviders) {
        /** @type {?} */
        var platformRef = platformBrowserDynamic.platformBrowserDynamic(extraProviders);
        return platformRef.bootstrapModule(Angular6ComponentsLibModule, { ngZone: 'zone.js' });
    };
    /** @type {?} */
    var Angular6ComponentsLibModuleId = _static.downgradeModule(bootstrapFn);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.Angular6ComponentsLibModuleId = Angular6ComponentsLibModuleId;
    exports.Angular6LogoComponentDowngraded = Angular6LogoComponentDowngraded;
    exports.ɵa = Angular6LogoComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjYtY29tcG9uZW50cy1saWIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyNi1jb21wb25lbnRzLWxpYi9saWIvYW5ndWxhcjYtbG9nby9hbmd1bGFyNi1sb2dvLmNvbXBvbmVudC50cyIsIm5nOi8vYW5ndWxhcjYtY29tcG9uZW50cy1saWIvbGliL2FuZ3VsYXI2LWNvbXBvbmVudHMtbGliLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkb3duZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2xpYi1hbmd1bGFyNi1sb2dvJyxcblx0dGVtcGxhdGVVcmw6ICcuL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9hbmd1bGFyNi1sb2dvLmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXI2TG9nb0NvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBjb3VudDogbnVtYmVyID0gMDtcblx0QE91dHB1dCgpIHB1YmxpYyBjbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0cHVibGljIGhhbmRsZUNsaWNrKCk6IHZvaWQge1xuXHRcdHRoaXMuY2xpY2suZW1pdCgpO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBBbmd1bGFyNkxvZ29Db21wb25lbnREb3duZ3JhZGVkID0gZG93bmdyYWRlQ29tcG9uZW50KHtcblx0Y29tcG9uZW50OiBBbmd1bGFyNkxvZ29Db21wb25lbnQsXG5cdHNlbGVjdG9yczogWydhbmd1bGFyNi1sb2dvJ11cbn0pOyIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZVJlZiwgTmdab25lLCBTdGF0aWNQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSwgcGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBkb3duZ3JhZGVNb2R1bGUsIFVwZ3JhZGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IEFuZ3VsYXI2TG9nb0NvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhcjYtbG9nby9hbmd1bGFyNi1sb2dvLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdFVwZ3JhZGVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbQW5ndWxhcjZMb2dvQ29tcG9uZW50XSxcblx0ZW50cnlDb21wb25lbnRzOiBbQW5ndWxhcjZMb2dvQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyNkNvbXBvbmVudHNMaWJNb2R1bGUge1xuXHRwdWJsaWMgbmdEb0Jvb3RzdHJhcCgpOiB2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnQW5ndWxhcjYgTW9kdWxlIEJvb3RzdHJhcHBlZCcpO1xuXHR9XG59XG5cbmNvbnN0IGJvb3RzdHJhcEZuID0gKGV4dHJhUHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtUmVmID0gcGxhdGZvcm1Ccm93c2VyRHluYW1pYyhleHRyYVByb3ZpZGVycyk7XG5cdHJldHVybiBwbGF0Zm9ybVJlZi5ib290c3RyYXBNb2R1bGUoQW5ndWxhcjZDb21wb25lbnRzTGliTW9kdWxlLCB7IG5nWm9uZTogJ3pvbmUuanMnIH0pO1xufTtcbmV4cG9ydCBjb25zdCBBbmd1bGFyNkNvbXBvbmVudHNMaWJNb2R1bGVJZCA9IGRvd25ncmFkZU1vZHVsZShib290c3RyYXBGbik7XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIklucHV0IiwiT3V0cHV0IiwiZG93bmdyYWRlQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiVXBncmFkZU1vZHVsZSIsInBsYXRmb3JtQnJvd3NlckR5bmFtaWMiLCJkb3duZ3JhZGVNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQWNDO3lCQUhnQyxDQUFDO3lCQUNZLElBQUlBLGlCQUFZLEVBQVE7U0FHcEU7Ozs7UUFFTSwyQ0FBVzs7OztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O29CQWZuQkMsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLHdiQUE2Qzt3QkFFN0MsYUFBYSxFQUFFQyxzQkFBaUIsQ0FBQyxJQUFJO3dCQUNyQyxlQUFlLEVBQUVDLDRCQUF1QixDQUFDLE1BQU07O3FCQUMvQzs7Ozs7NEJBRUNDLFVBQUs7NEJBQ0xDLFdBQU07O29DQVpSOzs7QUFzQkEsUUFBYSwrQkFBK0IsR0FBR0MsMEJBQWtCLENBQUM7UUFDakUsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7S0FDNUIsQ0FBQzs7Ozs7O0FDekJGOzs7Ozs7UUFlUSxtREFBYTs7OztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDOzs7b0JBVjdDQyxhQUFRLFNBQUM7d0JBQ1QsT0FBTyxFQUFFOzRCQUNSQyw2QkFBYTs0QkFDYkMscUJBQWE7eUJBQ2I7d0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLGVBQWUsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUN4Qzs7MENBYkQ7OztJQW9CQSxJQUFNLFdBQVcsR0FBRyxVQUFDLGNBQWdDOztRQUNwRCxJQUFNLFdBQVcsR0FBR0MsNkNBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsT0FBTyxXQUFXLENBQUMsZUFBZSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDdkYsQ0FBQzs7QUFDRixRQUFhLDZCQUE2QixHQUFHQyx1QkFBZSxDQUFDLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9