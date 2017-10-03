import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthDetailComponent } from './auth-detail.component';

export const authDetailRoutes: Routes = [
    {
        path: '',
        component: AuthDetailComponent,
        data: {
            pageTitle: 'Auth Detail'
        }
    }
];

export const authDetailRouting: ModuleWithProviders = RouterModule.forChild(authDetailRoutes);
