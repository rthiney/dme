import { Directive, OnInit, ElementRef, Input } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[saJquiAutocomplete]'
})
export class JquiAutocompleteDirective implements OnInit {
  @Input() saJquiAutocomplete: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    $(this.el.nativeElement).autocomplete(this.saJquiAutocomplete || {});
  }
}
