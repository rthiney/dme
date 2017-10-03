import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './contact.component';

export const contactRoutes: Routes = [
    {
        path: '',
        component: ContactComponent,
        data: {
            pageTitle: 'Contact'
        }
    }
];

export const contactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);
