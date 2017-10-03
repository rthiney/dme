import { ForbiddenComponent } from './errors/views/forbidden/forbidden.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout.component';
import { CanActivateViaAuthGuard } from './core/guards/can-activate-via-auth-guard';
import { InternalUserOnlyGuard } from './core/guards/internal-user-only-guard';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [CanActivateViaAuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
            {
                path: 'member-information',
                loadChildren: 'app/member-information/member-information.module#MemberInformationModule'
            },
            {
                path: 'queues',
                loadChildren: 'app/queue-list/queue-list.module#QueueListModule',
                // canActivate: [InternalUserOnlyGuard]
            },
            {
                path: 'contact',
                loadChildren: 'app/contact/contact.module#ContactModule'
            },
            {
                path: 'forbidden',
                component: ForbiddenComponent,
            },
            {
                path: 'form-inputs',
                loadChildren: 'app/form-inputs/form-inputs.module#FormInputsModule'
            }
              ,
            {
                path: 'auth-detail',
                loadChildren: 'app/auth-detail/auth-detail.module#AuthDetailModule',
                canActivate: [CanActivateViaAuthGuard],
            }  
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
