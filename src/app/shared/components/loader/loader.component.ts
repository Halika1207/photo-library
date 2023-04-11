import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() diameter: number;
  @Input() color: ThemePalette;
  @Input() fullScreen = true;
  @Input() isOverlayed = false;
}
