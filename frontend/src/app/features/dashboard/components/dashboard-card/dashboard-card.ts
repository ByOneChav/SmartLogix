import {Component, Input} from "@angular/core";

@Component({
  selector: "app-dashboard-card",
  imports: [],
  templateUrl: "./dashboard-card.html",
  styleUrl: "./dashboard-card.css",
})
export class DashboardCard {
  @Input() titulo = '';
  @Input() descripcion = '';
  @Input() valor = '';
  @Input() color = 'bg-primary';
}
