import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorInscripcion]'
})
export class ColorInscripcionDirective implements OnInit {

@Input('appColorInscripcion') inscripcionAbierta!: boolean;

  constructor(
    private elemento : ElementRef,
    private renderer : Renderer2
  ) {} 

    ngOnInit(): void {
      this.renderer.setStyle(this.elemento.nativeElement, 'padding', '5px 15px 5px 15px');
      this.renderer.setStyle(this.elemento.nativeElement, 'color', '#000');
      this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '15px');
      this.renderer.setStyle(this.elemento.nativeElement, 'font-weight', '700');
      this.renderer.setStyle(this.elemento.nativeElement, 'background-color', 
      this.inscripcionAbierta ? '#4CAF50' : '#F44336');


    }


}
