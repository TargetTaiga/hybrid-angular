import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular6LogoComponent } from './angular6-logo.component';

describe('Angular6LogoComponent', () => {
	let component: Angular6LogoComponent;
	let fixture: ComponentFixture<Angular6LogoComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Angular6LogoComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Angular6LogoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
