import { InternalUserOnlyGuard } from './core/guards/internal-user-only-guard';
import { ErrorViewsModule } from './errors/views/error-views.module';
import { ResponseErrorHandler } from './errors/response-error-handler';
import { ResponseError } from './errors/responce-error';
import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing'
import { CoreModule } from './core/core.module';
import { CanActivateViaAuthGuard } from './core/guards/can-activate-via-auth-guard';
import { SmartadminLayoutModule } from './shared/layout/layout.module';
import { SmartadminFormsModule } from './shared/forms/smartadmin-forms.module';
import { AppErrorHandler } from './errors/app-error-handler';
import { AuthDetailModule } from './auth-detail/auth-detail.module';
import { QueueListService } from './queue-list/queue-list.service';
import { DataService } from './services/data.service';
import { DiagnosisService } from './services/diagnosis.service';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes/notes.service';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SmartadminLayoutModule,
    SmartadminFormsModule,
    routing,
    ErrorViewsModule
  ],
  exports: [],
  providers: [
    QueueListService,
    CanActivateViaAuthGuard,
    DataService,
    DiagnosisService,
    InternalUserOnlyGuard,
    NotesService,
    { // Tell Angular of using AppErrorHandler instead of native ErrorHandler
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    ResponseErrorHandler,
    ResponseError
  ]
})
export class AppModule { }

