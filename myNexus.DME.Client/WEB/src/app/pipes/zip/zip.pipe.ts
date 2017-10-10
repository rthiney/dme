import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zip'
})
export class ZipPipe implements PipeTransform {

  transform(zip: any, args?: any): any {
    var value = zip.toString().trim().replace(/^\+/, '');    
    if (value.match(/[^0-9]/)) {
        return zip;
    }
    var main, suffix
    switch (value.length) {
        case 5: // #####
            main = value.slice(0, 5);
            suffix = '';
            break;

        case 9: // #########
            main = value.slice(0,5);
            suffix = '-' + value.slice(5);
            break;

        default:
            return zip;
    }
    let formattedZip = main + suffix;
    return formattedZip.trim();
  }

}