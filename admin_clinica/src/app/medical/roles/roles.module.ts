import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { EditRoleUserComponent } from './edit-role-user/edit-role-user.component';
import { ListRoleUserComponent } from './list-role-user/list-role-user.component';
import {AddRoleUserComponent} from "./add-role-user/add-role-user.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RolesComponent,
    AddRoleUserComponent,
    EditRoleUserComponent,
    ListRoleUserComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule
  ]
})
export class RolesModule { }
