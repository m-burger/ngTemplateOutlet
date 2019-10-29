import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {TemplatesService} from '../../_services/templates.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit, AfterContentInit {

  item: TemplateRef<any>;
  salade: TemplateRef<any>;
  myContext = {
    name: 'toto',
    myFunc: () => console.log('myFunc')
  };

  constructor(public templatesService: TemplatesService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit item : ', this.item);
    this.item = this.templatesService.get('item');
    this.salade = this.templatesService.get('salade');
    console.log('templates : ', this.templatesService.templates);
  }


  ngAfterContentInit(): void {
    console.log('afterContentInit item : ', this.item);
  }

}
