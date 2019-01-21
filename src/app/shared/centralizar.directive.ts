import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCentralizar]'
})
export class CentralizarDirective {

  constructor(private _element: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._element.nativeElement, 'text-align', 'center');
  }
}
