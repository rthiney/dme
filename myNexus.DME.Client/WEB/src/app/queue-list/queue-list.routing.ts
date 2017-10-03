import { Routes, RouterModule } from '@angular/router';
import { QueueListComponent } from './queue-list.component';
import { ModuleWithProviders } from '@angular/core';

export const queueListRoutes: Routes = [
    {
        path: '',
        component: QueueListComponent,
        data: {
            pageTitle: 'Queues'
        }
    }
];

export const queueListRouting: ModuleWithProviders = RouterModule.forChild(queueListRoutes);
