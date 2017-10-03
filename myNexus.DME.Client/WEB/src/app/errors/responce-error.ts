import { NotificationService } from './../shared/utils/notification.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { UserSessionManager } from './../helpers/user-session-manager';
import { Injectable, Injector } from '@angular/core';
import { ResponceErrors } from './errors.enum';
import { Response } from '@angular/http';

@Injectable()
export class ResponseError {
    private router: Router;
    private notificationService: NotificationService;

    constructor(private injector: Injector) {
        this.router = this.injector.get(Router);
        this.notificationService = this.injector.get(NotificationService);
    }

    // TODO: Need some more work on  managing appropriate responce messages.
    public handle(responce: Response) {
        switch (responce.status) {
            case ResponceErrors.BadRequest: {
                this.alert('Bad Request');
                break;
            }
            case ResponceErrors.Unauthorized: {
                UserSessionManager.clearAll();
                window.location.href = environment.loginBaseUrl; // Back to login.
                break;
            }
            case ResponceErrors.Forbidden: {
                this.router.navigate(['/forbidden']); // Redirect to forbidden page
                break;
            }
            case ResponceErrors.NotFound: {
                this.alert('Resource not found. Please contact myNEXSUS support');
                break;
            }
            case ResponceErrors.InternalServerError: {
                this.alert('Server Error ' + responce);
                break;
            }
            default: {
                this.alert(responce);
            }
        }
    }

    private alert(message) {
        this.notificationService.smartMessageBox({
            title: '<i class=\'fa fa-warning txt-color-orangeDark\'></i> ' + message,
            buttons: '[CLOSE]'
        });
    }
}
