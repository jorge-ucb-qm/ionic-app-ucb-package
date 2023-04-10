import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
//import { CalendarioUcbPackageModule } from 'calendario-ucb-package';
@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule, 
    IonicModule, 
    //CalendarioUcbPackageModule
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
