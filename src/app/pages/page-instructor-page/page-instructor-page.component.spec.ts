import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInstructorPageComponent } from './page-instructor-page.component';

describe('PageInstructorPageComponent', () => {
    let component: PageInstructorPageComponent;
    let fixture: ComponentFixture<PageInstructorPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PageInstructorPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageInstructorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
