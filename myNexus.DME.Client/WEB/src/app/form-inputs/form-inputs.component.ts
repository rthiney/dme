import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { JsonApiService } from './../core/api/json-api.service';

declare var $: any;

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent implements OnInit {
  public noUiSliderValue = [264, 776];

  public model: any = {
    username: 'superuser',
    firstname: 'N/A',
    sex: 'not selected',
    group: 'Admin',
    vacation: '25.02.2013',
    combodate: '15/05/1984',
    event: null,
    comments: 'awesome user!',
    state2: 'California',
    fruits: 'peach,apple',
    dob: '1984-05-15'
  };

  public fruits = [
    { value: 'banana', text: 'banana' },
    { value: 'peach', text: 'peach' },
    { value: 'apple', text: 'apple' },
    { value: 'watermelon', text: 'watermelon' },
    { value: 'orange', text: 'orange' }
  ];

  public genders = [
    { value: 'not selected', text: 'not selected' },
    { value: 'Male', text: 'Male' },
    { value: 'Female', text: 'Female' }
  ];

  public groups = [
    { value: 'Guest', text: 'Guest' },
    { value: 'Service', text: 'Service' },
    { value: 'Customer', text: 'Customer' },
    { value: 'Operator', text: 'Operator' },
    { value: 'Support', text: 'Support' },
    { value: 'Admin', text: 'Admin' }
  ];

  public options = {
    mode: 'inline',
    disabled: false,
    inline: true
  };

  public listOptions = [
    {key: 'option1', value: 'Option 1'},
    {key: 'option2', value: 'Option 2'},
    {key: 'option3', value: 'Option 3'},
    {key: 'option4', value: 'Option 4'},
    {key: 'option5', value: 'Option 5'},
    {key: 'option6', value: 'Option 6'},
    {key: 'option7', value: 'Option 7'},
    {key: 'option8', value: 'Option 8', selected: true},
    {key: 'option9', value: 'Option 9', selected: true},
    {key: 'option0', value: 'Option 10'},
    {key: 'option0', value: 'Option 11'},
    {key: 'option0', value: 'Option 12'},
    {key: 'option0', value: 'Option 13'},
    {key: 'option0', value: 'Option 14'},
    {key: 'option0', value: 'Option 15'},
    {key: 'option0', value: 'Option 16'},
    {key: 'option0', value: 'Option 17'},
    {key: 'option0', value: 'Option 18'},
    {key: 'option0', value: 'Option 19'},
    {key: 'option0', value: 'Option 20'}
  ];

public pictures = [
    {
      src: 'assets/img/gallery-demo/superbox-thumb-1.jpg',
      img: 'assets/img/gallery-demo/superbox-full-1.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },
    {
      src: 'assets/img/gallery-demo/superbox-thumb-2.jpg',
      img: 'assets/img/gallery-demo/superbox-full-2.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-3.jpg',
      img: 'assets/img/gallery-demo/superbox-full-3.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-4.jpg',
      img: 'assets/img/gallery-demo/superbox-full-4.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-5.jpg',
      img: 'assets/img/gallery-demo/superbox-full-5.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Study Time',
    },
    {
      src: 'assets/img/gallery-demo/superbox-thumb-6.jpg',
      img: 'assets/img/gallery-demo/superbox-full-6.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-7.jpg',
      img: 'assets/img/gallery-demo/superbox-full-7.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'New Styla',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-8.jpg',
      img: 'assets/img/gallery-demo/superbox-full-8.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Cristpta',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-9.jpg',
      img: 'assets/img/gallery-demo/superbox-full-9.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-10.jpg',
      img: 'assets/img/gallery-demo/superbox-full-10.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-11.jpg',
      img: 'assets/img/gallery-demo/superbox-full-11.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Elegance',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-12.jpg',
      img: 'assets/img/gallery-demo/superbox-full-12.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'China Town',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-13.jpg',
      img: 'assets/img/gallery-demo/superbox-full-13.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Sky Diving',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-14.jpg',
      img: 'assets/img/gallery-demo/superbox-full-14.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-15.jpg',
      img: 'assets/img/gallery-demo/superbox-full-15.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },
    {
      src: 'assets/img/gallery-demo/superbox-thumb-16.jpg',
      img: 'assets/img/gallery-demo/superbox-full-16.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-17.jpg',
      img: 'assets/img/gallery-demo/superbox-full-17.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Snowpine',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-18.jpg',
      img: 'assets/img/gallery-demo/superbox-full-18.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-19.jpg',
      img: 'assets/img/gallery-demo/superbox-full-19.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-20.jpg',
      img: 'assets/img/gallery-demo/superbox-full-20.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Dragon Fly',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-21.jpg',
      img: 'assets/img/gallery-demo/superbox-full-21.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Kinds Road',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-22.jpg',
      img: 'assets/img/gallery-demo/superbox-full-22.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme', title: 'Tokyo',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-23.jpg',
      img: 'assets/img/gallery-demo/superbox-full-23.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Rome',
    },

    {
      src: 'assets/img/gallery-demo/superbox-thumb-24.jpg',
      img: 'assets/img/gallery-demo/superbox-full-24.jpg',
      alt: 'My first photoshop layer mask on a high end PSD template theme',
      title: 'Traning',
    }
  ];

  public baseUrl: string = 'https://jsonplaceholder.typicode.com';

  private dataTableOptions = {
    dom: 'Bfrtip',
    ajax: (data, callback, settings) => {
      this.http.get(this.baseUrl + '/posts')
        .map(this.extractData)
        .catch(this.handleError)
        .subscribe((data) => {
          console.log('data from rest endpoint', data);
          callback({
            aaData: data.slice(0, 100)
          })
        })
    },
    columns: [
      { data: 'userId' },
      { data: 'id' },
      { data: 'title' },
      { data: 'body' },
    ]
  };

  public treeViewDemo1: any;
  public treeViewDemo2: any;

  public demo1: any;
  public nestable1DemoOutput: any;

  public demo2: any;
  public nestable2DemoOutput: any;

  public demo3: any;
  public nestable3DemoOutput: any;

  public demoAutocompleteWords = [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
  ];

  private ajaxAutocompleteOptions = {
    source: (request, response) => {
      jQuery.ajax({
        url: 'https://jqueryui.com/resources/demos/autocomplete/search.php',
        dataType: 'jsonp',
        data: {
          term: request.term
        },
        success: (data) => {
          response(data);
        }
      });
    },
    minLength: 2,
    select: (event, ui) => {
      console.log('Selected: ' + ui.item.value + ' aka ' + ui.item.id);
      this.ajaxAutocompleteSelected = ui.item.id
    }
  };

  private ajaxAutocompleteSelected: string;

  private simpleDialogOptions = {
    autoOpen : false,
    width : 600,
    resizable : false,
    modal : true,
    closeText: '',
    title : '<div class=\'widget-header\'><h4><i class=\'fa fa-warning\'></i> Empty the recycle bin?</h4></div>',
    buttons : [{
      html : '<i class=\'fa fa-trash-o\'></i>&nbsp; Delete all items',
      'class' : 'btn btn-danger',
      click : function() {
        $(this).dialog('close');
      }
    }, {
      html : '<i class=\'fa fa-times\'></i>&nbsp; Cancel',
      'class' : 'btn btn-default',
      click : function() {
        $(this).dialog('close');
      }
    }]
  };

  private messageDialogOptions = {
    autoOpen : false,
    modal : true,
    closeText: '',
    title : '<div class=\'widget-header\'><h4><i class=\'icon-ok\'></i> jQuery UI Dialog</h4></div>',
    buttons : [{
      html : 'Cancel',
      'class' : 'btn btn-default',
      click : function() {
        $(this).dialog('close');
      }
    }, {
      html : '<i class=\'fa fa-check\'></i>&nbsp; OK',
      'class' : 'btn btn-primary',
      click : function() {
        $(this).dialog('close');
      }
    }]
  };
  constructor(private http: Http, private jsonApiService: JsonApiService) { }

  ngOnInit() {
    this.jsonApiService.fetch('/fake-data/nestable-lists.json').subscribe(data => {
      this.demo1 = data.demo1;
      this.demo2 = data.demo2;
      this.demo3 = data.demo2;
    });

    this.jsonApiService.fetch('/fake-data/tree-view.json').subscribe(data => {
      this.treeViewDemo1 = data.demo1;
      this.treeViewDemo2 = data.demo2;
    })
  }

  public onChange1(payload) {
    this.nestable1DemoOutput = payload
  }

  public onChange2(payload) {
    this.nestable2DemoOutput = payload
  }

  public onChange3(payload) {
    this.nestable3DemoOutput = payload
  }

  treeViewChangeLstener(payload) {
    console.log('change payload', payload)
  }

  onWizardComplete(data) {
    console.log('fuel-ux wizard complete', data);
    alert(data);
  }

  onImageDelete(picture) {
    console.log('GalleryDemoComponent onImageDelete', picture)
  }

  onImageEdit(picture) {
    console.log('GalleryDemoComponent onImageEdit', picture)
  }

  private extractData(res: Response) {
    let body = res.json();
    if (body) {
      return body.data || body;
    } else {
      return {};
    }
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
