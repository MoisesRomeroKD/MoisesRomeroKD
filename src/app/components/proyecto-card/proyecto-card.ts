import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyecto-card.html',
  styleUrls: ['./proyecto-card.css']
})
export class ProyectoCard {

  @Input() proyecto: any;
}