// Lazy Loading a Module

// feature.module.ts
@NgModule({
    declarations: [FeatureComponent],
    imports: [CommonModule, RouterModule.forChild([{ path: '', component: FeatureComponent }])],
})
export class FeatureModule {}

// Add lazy loading in app-routing.module.ts:
const routes: Routes = [
    { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
];

// Lazy loading improves performance by loading modules only when needed.
// Now, the FeatureModule will load only when the user navigates to /feature.

// Lazy loading is an optimization technique in Angular that loads feature 
// modules only when they are needed, instead of including them in the initial bundle. 
// This improves performance by reducing the size of the initial application load.
