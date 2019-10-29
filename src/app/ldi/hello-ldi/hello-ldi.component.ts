import {AfterViewInit, Component, TemplateRef, ViewChild} from '@angular/core';
import {TemplatesService} from '../../_services/templates.service';

@Component({
  selector: 'app-hello-ldi',
  templateUrl: './hello-ldi.component.html',
  styleUrls: ['./hello-ldi.component.css']
})
export class HelloLdiComponent implements AfterViewInit {

  @ViewChild('item', {static: true}) public item: TemplateRef<any>;
  @ViewChild('salade', {static: true}) public salade: TemplateRef<any>;

  constructor(private templatesService: TemplatesService) { }

  ngAfterViewInit(): void {
    this.templatesService.add('item', this.item);
    this.templatesService.add('salade', this.salade);
  }

  public myLocalFunc() {
    console.log('myLocalFunc');
  }
}
