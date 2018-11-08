import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){}
  
    @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    }
    @HostListener('mouseleave') mouseLeaveEvent (eventData:Event){
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    }

  

}
