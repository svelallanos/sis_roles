import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { MedicalComponent } from './medical.component';
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "../common-component/header/header.component";
import {SidebarComponent} from "../common-component/sidebar/sidebar.component";
import {ModalComponent} from "../core/modal/modal.component";
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    MedicalComponent,
   // HeaderComponent,
     // SidebarComponent,
  ],
  imports: [
    CommonModule,
    MedicalRoutingModule,
    SharedModule,
    ModalComponent,
    CoreModule
  ]
})
export class MedicalModule { }
