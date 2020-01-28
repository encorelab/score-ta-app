import { PageClassesPageComponent } from './page-classes-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PageClassesPageComponent,
        data: { shouldReuse: true, key: 'page-classes' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageClassesPageRoutingModule {}
