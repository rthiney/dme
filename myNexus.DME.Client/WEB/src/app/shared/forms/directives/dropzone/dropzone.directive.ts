import { Directive, Input, ElementRef } from '@angular/core';

declare var dropzone: any;

@Directive({
  selector: '[saDropzone]'
})
export class DropzoneDirective {
  @Input() saDropzone: any;

  private dropzone: any;

  constructor(private el: ElementRef) {
    System.import('dropzone').then((dz) => {
      this.initDropzone(dz)
    })
  }

  initDropzone(Dropzone) {
    Dropzone.autoDiscover = false;
    this.dropzone = new Dropzone(this.el.nativeElement, this.saDropzone || {});
  }
}
