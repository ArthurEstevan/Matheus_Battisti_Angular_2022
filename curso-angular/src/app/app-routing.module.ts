import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
    {path: '', component: RouterOutletComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'emitter', component: EmitterComponent},
    {path: 'events', component: EventsComponent},
    {path: 'firstComponent', component: FirstComponentComponent},
    {path: 'ifRender', component: IfRenderComponent},
    {path: 'listRender', component: ListRenderComponent},
    {path: 'parentData', component: ParentDataComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'twoWayBinding', component: TwoWayBindingComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};