import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CouleurService } from '../couleur.service';
import { codeToRGB, RGBToCode } from '../tools';

@Component({
  selector: 'app-couleur-slide',
  templateUrl: './couleur-slide.component.html',
  styleUrls: ['./couleur-slide.component.css']
})
export class CouleurSlideComponent implements OnInit {

  constructor(private CS: CouleurService) {
  }

  ngOnInit() {
  }

  get B(): number {
    console.log("R");
    return codeToRGB(this.CS.colorCode).B; 
  }

  set B(v: number) {
    this.CS.colorCode = RGBToCode({
      R: this.R,
      G: this.G,
      B: v
    });
  }

  get G(): number {
    return codeToRGB(this.CS.colorCode).G; 
  }

  set G(v: number) {
    this.CS.colorCode = RGBToCode({
      R: this.R,
      G: v,
      B: this.B
    });
  }

  get R(): number {
    return codeToRGB(this.CS.colorCode).R; 
  }

  set R(v: number) {
    this.CS.colorCode = RGBToCode({
      R: v,
      G: this.G,
      B: this.B
    });
  }
}