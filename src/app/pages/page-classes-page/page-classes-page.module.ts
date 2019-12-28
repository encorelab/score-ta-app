import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageClassesPageRoutingModule } from './page-classes-page-routing.module';
import { PageClassesPageComponent } from './page-classes-page.component';

@NgModule({
    declarations: [PageClassesPageComponent],
    imports: [CommonModule, PageClassesPageRoutingModule],
})
export class PageClassesPageModule {}
