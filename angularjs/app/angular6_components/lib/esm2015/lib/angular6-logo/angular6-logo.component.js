/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';
export class Angular6LogoComponent {
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
if (false) {
    /** @type {?} */
    Angular6LogoComponent.prototype.count;
    /** @type {?} */
    Angular6LogoComponent.prototype.click;
}
/** @type {?} */
export const Angular6LogoComponentDowngraded = downgradeComponent({
    component: Angular6LogoComponent,
    selectors: ['angular6-logo']
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjYtbG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyNi1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyNi1sb2dvL2FuZ3VsYXI2LWxvZ28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBUzdELE1BQU07SUFJTDtxQkFIZ0MsQ0FBQztxQkFDWSxJQUFJLFlBQVksRUFBUTtLQUdwRTs7OztJQUVNLFdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztZQWZuQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isd2JBQTZDO2dCQUU3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7OztvQkFFQyxLQUFLO29CQUNMLE1BQU07Ozs7Ozs7OztBQVVSLGFBQWEsK0JBQStCLEdBQUcsa0JBQWtCLENBQUM7SUFDakUsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7Q0FDNUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZG93bmdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsaWItYW5ndWxhcjYtbG9nbycsXG5cdHRlbXBsYXRlVXJsOiAnLi9hbmd1bGFyNi1sb2dvLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vYW5ndWxhcjYtbG9nby5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyNkxvZ29Db21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgY291bnQ6IG51bWJlciA9IDA7XG5cdEBPdXRwdXQoKSBwdWJsaWMgY2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdHB1YmxpYyBoYW5kbGVDbGljaygpOiB2b2lkIHtcblx0XHR0aGlzLmNsaWNrLmVtaXQoKTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgQW5ndWxhcjZMb2dvQ29tcG9uZW50RG93bmdyYWRlZCA9IGRvd25ncmFkZUNvbXBvbmVudCh7XG5cdGNvbXBvbmVudDogQW5ndWxhcjZMb2dvQ29tcG9uZW50LFxuXHRzZWxlY3RvcnM6IFsnYW5ndWxhcjYtbG9nbyddXG59KTsiXX0=