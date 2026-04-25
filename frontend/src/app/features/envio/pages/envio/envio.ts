import { Component } from "@angular/core";
import {EnvioTable} from "../../components/envio-table/envio-table";

@Component({
  selector: "app-envio",
    imports: [
        EnvioTable
    ],
  templateUrl: "./envio.html",
  styleUrl: "./envio.css",
})
export class Envio {

  columnas = ['ID', 'Cliente', 'Producto', 'Estado', 'Fecha'];


  pedidos = [
    { ID: '#001', Cliente: 'Juan Pérez', Producto: 'Laptop HP', Estado: 'Entregado', Fecha: '25/04/2026' },
    { ID: '#002', Cliente: 'María López', Producto: 'Mouse Logitech', Estado: 'En tránsito', Fecha: '24/04/2026' },
    { ID: '#003', Cliente: 'Carlos Díaz', Producto: 'Monitor Samsung', Estado: 'Preparando', Fecha: '24/04/2026' },
    { ID: '#004', Cliente: 'Ana Rojas', Producto: 'Teclado Mecánico', Estado: 'Cancelado', Fecha: '23/04/2026' },
  ];

}
