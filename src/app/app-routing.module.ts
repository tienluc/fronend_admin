import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { MapsComponent } from './pages/maps/maps.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { StaffComponent } from './pages/staff/staff.component';
import { AddStaffComponent } from './pages/add-staff/add-staff.component';
import { UpdateStaffComponent } from './pages/update-staff/update-staff.component';
import { CustomerManagerComponent } from './pages/customer-manager/customer-manager.component';
import { CarManagerComponent } from './pages/car-manager/car-manager.component';
import { CarAddComponent } from './pages/car-add/car-add.component';
import { CarUpdateComponent } from './pages/car-update/car-update.component';
import { BrandManagerComponent } from './pages/brand-manager/brand-manager.component';
import { BrandAddComponent } from './pages/brand-add/brand-add.component';
import { BrandUpdateComponent } from './pages/brand-update/brand-update.component';
import { FeatureManagerComponent } from './pages/feature-manager/feature-manager.component';
import { FeatureAddComponent } from './pages/feature-add/feature-add.component';
import { FeatureUpdateComponent } from './pages/feature-update/feature-update.component';
import { ModelManagerComponent } from './pages/model-manager/model-manager.component';
import { ModelAddComponent } from './pages/model-add/model-add.component';
import { ModelUpdateComponent } from './pages/model-update/model-update.component';
import { IndexAdminComponent } from './pages/index-admin/index-admin.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';


const routes: Routes = [
  {path: 'admin',   redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginAdminComponent},
  {path: 'register', component: RegisterAdminComponent},


  {path: '',   redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: IndexAdminComponent, children:[
  {path: '',   redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'staffmanager', component: StaffComponent},
  {path: 'addstaff', component: AddStaffComponent},
  {path: 'updatestaff', component: UpdateStaffComponent},
  {path: 'customermanager', component: CustomerManagerComponent},
  {path: 'carmanager', component: CarManagerComponent},
  {path: 'caradd', component: CarAddComponent},
  {path: 'carupdate', component: CarUpdateComponent},
  {path: 'brandmanager', component: BrandManagerComponent, children:[
    {path: 'brandadd', component: BrandAddComponent},
    {path: 'brandupdate', component: BrandUpdateComponent},
  ]},
  {path: 'featuremanager', component: FeatureManagerComponent, children:[
    {path: 'featureadd', component: FeatureAddComponent},
    {path: 'featureupdate', component: FeatureUpdateComponent},
  ]},
  {path: 'modelmanager', component: ModelManagerComponent, children:[
    {path: 'modeladd', component: ModelAddComponent},
    {path: 'modelupdate', component: ModelUpdateComponent},
  ]},
 


  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
