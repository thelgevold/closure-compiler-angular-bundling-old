import {Routes, RouterModule}   from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {TreeviewDemo} from './components/treeview';
import {GridDemo} from './components/grid/grid-demo';
import {SurveyDemo} from './components/dynamic-form';
import {InputControls} from './components/input-controls/input-controls';

const routes: Routes = [
  { path: 'grid', component: GridDemo},
  { path: 'treeview', component: TreeviewDemo},
  { path: 'survey', component: SurveyDemo},
  { path: 'input', component:  InputControls},
  { path: '',   redirectTo: '/grid', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);