import { PageHomePageComponent } from './page-home-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PageHomePageComponent,
        data: { shouldReuse: true, key: 'page-home' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageHomePageRoutingModule {}
