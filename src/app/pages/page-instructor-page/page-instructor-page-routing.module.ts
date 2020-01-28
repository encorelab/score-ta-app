import { PageInstructorPageComponent } from './page-instructor-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PageInstructorPageComponent,
        data: { shouldReuse: true, key: 'page-instructor' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageInstructorPageRoutingModule {}
