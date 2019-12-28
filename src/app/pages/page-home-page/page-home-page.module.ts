import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomePageRoutingModule } from './page-home-page-routing.module';
import { PageHomePageComponent } from './page-home-page.component';

@NgModule({
    declarations: [PageHomePageComponent],
    imports: [CommonModule, PageHomePageRoutingModule],
})
export class PageHomePageModule {}
