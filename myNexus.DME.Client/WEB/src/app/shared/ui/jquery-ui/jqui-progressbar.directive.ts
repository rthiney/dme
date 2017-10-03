import { Directive, OnInit, ElementRef, Input } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[saJquiProgressbar]',
})
export class JquiProgressbarDirective implements OnInit {
  @Input() saJquiProgressbar: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    $(this.el.nativeElement).progressbar(this.saJquiProgressbar || {});
  }
}
