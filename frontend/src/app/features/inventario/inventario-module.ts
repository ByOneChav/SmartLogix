import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing-module';
import { Inventario } from './inventario';

@NgModule({
  declarations: [Inventario],
  imports: [CommonModule, InventarioRoutingModule],
})
export class InventarioModule {}
