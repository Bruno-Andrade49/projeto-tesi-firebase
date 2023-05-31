import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaCreatePage } from './idea-create.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaCreatePageRoutingModule {}
