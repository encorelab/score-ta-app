import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDatatableComponent } from './class-datatable.component';

describe('ClassDatatableComponent', () => {
    let component: ClassDatatableComponent;
    let fixture: ComponentFixture<ClassDatatableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClassDatatableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClassDatatableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
