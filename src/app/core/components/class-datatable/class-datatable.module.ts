import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogoComponent} from '../logo/logo.component';
import {ClassDatatableComponent} from './class-datatable.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [ClassDatatableComponent],
    exports: [ClassDatatableComponent],
    imports: [CommonModule, MatTableModule]
})
export class ClassDatatableModule { }
