import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {HelloLdiComponent} from './ldi/hello-ldi/hello-ldi.component';
import {HelloEchosComponent} from './echos/hello-echos/hello-echos.component';

@Directive({
  selector: '[appClient]'
})
export class ClientDirective implements OnInit {

  @Input('appClient') client: string;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    const componentToBuild = this.client === 'ldi' ? HelloLdiComponent : this.client === 'echos' ? HelloEchosComponent : undefined;
    this.loadComponent(componentToBuild);
  }

  private loadComponent(componentToBuild) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToBuild);
    this.vcr.clear();
    const componentRef = this.vcr.createComponent(componentFactory);
  }
}
