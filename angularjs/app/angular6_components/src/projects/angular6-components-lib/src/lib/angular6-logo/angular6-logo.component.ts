import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
	selector: 'lib-angular6-logo',
	templateUrl: './angular6-logo.component.html',
	styleUrls: ['./angular6-logo.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class Angular6LogoComponent {
	@Input() public count: number = 0;
	@Output() public click: EventEmitter<void> = new EventEmitter<void>();

	constructor() {
	}

	public handleClick(): void {
		this.click.emit();
	}
}

export const Angular6LogoComponentDowngraded = downgradeComponent({
	component: Angular6LogoComponent,
	selectors: ['angular6-logo']
});