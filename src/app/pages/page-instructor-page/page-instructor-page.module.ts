import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageInstructorPageRoutingModule } from './page-instructor-page-routing.module';
import { PageInstructorPageComponent } from './page-instructor-page.component';

@NgModule({
    declarations: [PageInstructorPageComponent],
    imports: [CommonModule, PageInstructorPageRoutingModule],
})
export class PageInstructorPageModule {}
