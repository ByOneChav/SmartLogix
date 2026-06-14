import { Component, OnInit } from '@angular/core';
import { DashboardCard } from '../../components/dashboard-card/dashboard-card';
import { DashboardTable } from '../../components/dashboard-table/dashboard-table';
import { PedidoService } from '../../../pedidos/services/pedido.service';
import { InventarioService } from '../../../inventario/services/inventario.service';
import { EnvioService } from '../../../envio/services/envio.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardCard, DashboardTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  columnas = ['ID', 'Cliente', 'Descripción', 'Cant.', 'Precio', 'Estado'];
  pedidos: any[] = [];

  totalInventario = '—';
  totalPedidos = '—';
  totalEnvios = '—';

  constructor(
    private pedidoService: PedidoService,
    private inventarioService: InventarioService,
    private envioService: EnvioService
  ) {}

  ngOnInit(): void {
    this.pedidoService.getAll().subscribe({
      next: data => {
        const lista = Array.isArray(data) ? data : [];
        this.totalPedidos = String(lista.length);
        this.pedidos = lista.map(p => ({
          'ID': p.id,
          'Cliente': p.clienteNombre,
          'Descripción': p.descripcion,
          'Cant.': p.cantidad,
          'Precio': `$${p.precio ?? 0}`,
          'Estado': p.estado
        }));
      },
      error: () => {
        this.pedidos = [];
        this.totalPedidos = '0';
      }
    });

    this.inventarioService.getAll().subscribe({
      next: data => {
        this.totalInventario = String((data ?? []).length);
      },
      error: () => {
        this.totalInventario = '0';
      }
    });

    this.envioService.getAll().subscribe({
      next: data => {
        this.totalEnvios = String(data.length);
      },
      error: () => {
        this.totalEnvios = '0';
      }
    });
  }
}
