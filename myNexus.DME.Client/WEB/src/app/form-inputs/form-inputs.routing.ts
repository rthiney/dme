import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FormInputsComponent } from './form-inputs.component';

export const fomrInputsRoutes: Routes = [
    {
        path: '',
        component: FormInputsComponent,
        data: {
            pageTitle: 'Form Inputs'
        }
    }
];

export const fomrInputsRouting: ModuleWithProviders = RouterModule.forChild(fomrInputsRoutes);
