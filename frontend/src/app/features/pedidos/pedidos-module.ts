import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing-module';
import { Pedidos } from './pedidos';

@NgModule({
  declarations: [Pedidos],
  imports: [CommonModule, PedidosRoutingModule],
})
export class PedidosModule {}
