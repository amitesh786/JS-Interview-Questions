// Dynamic Component Rendering

// Dynamic component rendering is useful when you need to load 
// components at runtime based on specific conditions or data.

// 1. Create Components:

// component-a.component.ts
@Component({
    selector: 'app-component-a',
    template: `<p>Component A</p>`,
})
export class ComponentAComponent {}

// This is a simple Angular component that displays "Component A" in a paragraph (<p>).

// component-b.component.ts
@Component({
    selector: 'app-component-b',
    template: `<p>Component B</p>`,
})
export class ComponentBComponent {}

// Similarly, this is another component that displays "Component B".


// 2. Create a Host Component to Load Dynamic Components:
@Component({
    selector: 'app-dynamic-host',
    template: `<ng-template #dynamicComponent></ng-template>`,
})
export class DynamicHostComponent {
    @ViewChild('dynamicComponent', { read: ViewContainerRef }) container!: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    loadComponent(component: Type<any>) {
        this.container.clear();
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.container.createComponent(factory);
    }
}


// 3. Use the Dynamic Component Loader:
@Component({
    selector: 'app-root',
    template: `
      <app-dynamic-host></app-dynamic-host>
      <button (click)="loadComponentA()">Load Component A</button>
      <button (click)="loadComponentB()">Load Component B</button>
    `,
})
export class AppComponent {
    @ViewChild(DynamicHostComponent) dynamicHost!: DynamicHostComponent;

    loadComponentA() {
        this.dynamicHost.loadComponent(ComponentAComponent);
    }

    loadComponentB() {
        this.dynamicHost.loadComponent(ComponentBComponent);
    }
}

// Explanation:
// ViewContainerRef: Allows dynamically loading components at runtime.
// ComponentFactoryResolver: Resolves a component factory that will be used to create a new component

// DynamicHostComponent acts as a placeholder for loading components.
// AppComponent has buttons to trigger dynamic component loading.
// ViewContainerRef inside DynamicHostComponent manages dynamic component injection.
// ComponentFactoryResolver is used to resolve and instantiate components dynamically.
