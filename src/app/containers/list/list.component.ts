import { AfterViewInit, Component, TemplateRef} from '@angular/core';
import {TemplatesService} from '../../_services/templates.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {

  item: TemplateRef<any>;
  item2: TemplateRef<any>;
  myContext = {
    name: 'toto',
    myFunc: this.myFunc
  };

  constructor(public templatesService: TemplatesService) { }

  ngAfterViewInit(): void {
    this.item = this.templatesService.get('item');
    this.item2 = this.templatesService.get('item2');
  }

  public myFunc() {
    console.log('myFunc, I am triggered within list.component, I am the master and true king of this page, watch me process things !');
  }

}
