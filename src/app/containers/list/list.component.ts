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
    myFunc: () => console.log('myFunc')
  };

  constructor(public templatesService: TemplatesService) { }

  ngAfterViewInit(): void {
    this.item = this.templatesService.get('item');
    this.item2 = this.templatesService.get('item2');
  }

}
