import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'sa-full-screen',
  templateUrl: './full-screen.component.html'
})
export class FullScreenComponent {
  onToggle() {
    let $body = $('body');

    let documentMethods = {
      enter: [
        'requestFullscreen',
        'mozRequestFullScreen',
        'webkitRequestFullscreen',
        'msRequestFullscreen'
      ],
      exit: [
        'cancelFullScreen',
        'mozCancelFullScreen',
        'webkitCancelFullScreen',
        'msCancelFullScreen'
      ]
    };

    if (!$body.hasClass('full-screen')) {
      $body.addClass('full-screen');
      document.documentElement[documentMethods.enter.filter((method) => {
        return document.documentElement[method]
      })[0]]();
    } else {
      $body.removeClass('full-screen');
      document[documentMethods.exit.filter((method) => {
        return document[method]
      })[0]]();
    }
  }
}
