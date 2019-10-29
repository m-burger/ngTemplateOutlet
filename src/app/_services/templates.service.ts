import {Injectable, TemplateRef} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  public templates = {};

  constructor() { }

  public add(name: string, template: TemplateRef<any>) {
    this.templates[name] = template;
  }

  public get(name: string) {
    return this.templates[name];
  }
}
