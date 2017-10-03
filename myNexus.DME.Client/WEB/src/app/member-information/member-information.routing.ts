import { Routes, RouterModule } from '@angular/router';
import { MemberInformationComponent } from './member-information.component';
import { ModuleWithProviders } from '@angular/core';

export const memberInformationRoutes: Routes = [
    {
        path: '',
        component: MemberInformationComponent,
        data: {
            pageTitle: 'Member Information'
        }
    }
];

export const memberInformationRouting: ModuleWithProviders = RouterModule.forChild(memberInformationRoutes);

