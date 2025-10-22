import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Poem } from '../../models/poem';

@Component({
  selector: 'app-poem-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poem-list.component.html',
  styleUrls: ['./poem-list.component.css']
})
export class PoemListComponent {
  @Input() poems: Poem[] = [];
  @Input() loading: boolean = false;
  @Input() error: string = '';

  
}

