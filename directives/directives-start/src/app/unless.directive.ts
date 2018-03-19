import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
  }
// vcRef = view container ref (what to insert, where to insert )
  constructor(private templateRef: TemplateRef<any>, private  vcRef: ViewContainerRef) { }

}
