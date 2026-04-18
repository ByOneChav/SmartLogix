import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnviosRoutingModule } from './envios-routing-module';
import { Envios } from './envios';

@NgModule({
  declarations: [Envios],
  imports: [CommonModule, EnviosRoutingModule],
})
export class EnviosModule {}
