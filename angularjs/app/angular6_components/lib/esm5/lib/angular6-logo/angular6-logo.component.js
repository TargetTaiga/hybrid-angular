/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
var Angular6LogoComponent = /** @class */ (function () {
    function Angular6LogoComponent() {
        this.count = 0;
        this.click = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'lib-angular6-logo',
                    template: "<div class=\"angular6-logo\">\n\t<img class=\"angular6-logo__img\"\n\t\t src=\"/app/angular6_components/src/projects/angular6-components-lib/assets/angular6_logo.jpg\"\n\t\t (click)=\"handleClick()\">\n\t<div class=\"angular6-logo__text\">\n\t\t<h3>Angular 6.1 Component</h3>\n\t\t<h4>Click on the logo emits an event to AngularJS</h4>\n\t\t<h4>Clicks: {{count}} - value provided to Angular by AngularJS</h4>\n\t</div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [".angular6-logo{border:1px solid #000;padding:10px;display:flex;align-items:center}.angular6-logo__text{flex:1;padding-left:10px}.angular6-logo__img{height:100px;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    Angular6LogoComponent.ctorParameters = function () { return []; };
    Angular6LogoComponent.propDecorators = {
        count: [{ type: Input }],
        click: [{ type: Output }]
    };
    return Angular6LogoComponent;
}());
export { Angular6LogoComponent };
if (false) {
    /** @type {?} */
    Angular6LogoComponent.prototype.count;
    /** @type {?} */
    Angular6LogoComponent.prototype.click;
}
/** @type {?} */
export var Angular6LogoComponentDowngraded = downgradeComponent({
    component: Angular6LogoComponent,
    selectors: ['angular6-logo']
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjYtbG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyNi1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyNi1sb2dvL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQWE1RDtxQkFIZ0MsQ0FBQztxQkFDWSxJQUFJLFlBQVksRUFBUTtLQUdwRTs7OztJQUVNLDJDQUFXOzs7O1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7OztnQkFmbkIsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLHdiQUE2QztvQkFFN0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDL0M7Ozs7O3dCQUVDLEtBQUs7d0JBQ0wsTUFBTTs7Z0NBWlI7O1NBVWEscUJBQXFCOzs7Ozs7OztBQVlsQyxXQUFhLCtCQUErQixHQUFHLGtCQUFrQixDQUFDO0lBQ2pFLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO0NBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRvd25ncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbGliLWFuZ3VsYXI2LWxvZ28nLFxuXHR0ZW1wbGF0ZVVybDogJy4vYW5ndWxhcjYtbG9nby5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50LnNjc3MnXSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcjZMb2dvQ29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGNvdW50OiBudW1iZXIgPSAwO1xuXHRAT3V0cHV0KCkgcHVibGljIGNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRwdWJsaWMgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG5cdFx0dGhpcy5jbGljay5lbWl0KCk7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IEFuZ3VsYXI2TG9nb0NvbXBvbmVudERvd25ncmFkZWQgPSBkb3duZ3JhZGVDb21wb25lbnQoe1xuXHRjb21wb25lbnQ6IEFuZ3VsYXI2TG9nb0NvbXBvbmVudCxcblx0c2VsZWN0b3JzOiBbJ2FuZ3VsYXI2LWxvZ28nXVxufSk7Il19