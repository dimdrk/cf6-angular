import { Routes } from '@angular/router';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

export const routes: Routes = [
    { path: 'component-input-example', component: ComponentInputExampleComponent },
    { path: 'for-directive-example', component: ForDirectiveExampleComponent },
    { path: 'event-bind-example', component: EventBindExampleComponent },
    { path: 'simple-data-table', component: SimpleDatatableComponent },
    { path: 'component-output-example', component: ComponentOutputExampleComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'template-driven-form', component: TemplateDrivenFormsComponent },
    { path: 'http-client-example', component: HttpClientExampleComponent },
    { path: 'user-registration-example', component: UserRegistrationComponent},
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo:'/welcome', pathMatch:'full' }
];
