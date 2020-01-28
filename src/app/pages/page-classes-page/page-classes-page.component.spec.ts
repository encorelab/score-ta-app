import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClassesPageComponent } from './page-classes-page.component';

describe('PageClassesPageComponent', () => {
    let component: PageClassesPageComponent;
    let fixture: ComponentFixture<PageClassesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageClassesPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageClassesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
