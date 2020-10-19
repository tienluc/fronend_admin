import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { TablesComponent } from './Admin/tables/tables.component';
import { FormsComponent } from './Admin/forms/forms.component';
import { TypographyComponent } from './Admin/typography/typography.component';
import { MapsComponent } from './Admin/maps/maps.component';
import { NotificationsComponent } from './Admin/notifications/notifications.component';
import { StaffComponent } from './Admin/staff/staff.component';
import { AddStaffComponent } from './Admin/add-staff/add-staff.component';
import { UpdateStaffComponent } from './Admin/update-staff/update-staff.component';
import { CustomerManagerComponent } from './Admin/customer-manager/customer-manager.component';
import { CarManagerComponent } from './Admin/car-manager/car-manager.component';
import { CarAddComponent } from './Admin/car-add/car-add.component';
import { CarUpdateComponent } from './Admin/car-update/car-update.component';
import { BrandManagerComponent } from './Admin/brand-manager/brand-manager.component';
import { BrandAddComponent } from './Admin/brand-add/brand-add.component';
import { BrandUpdateComponent } from './Admin/brand-update/brand-update.component';
import { FeatureManagerComponent } from './Admin/feature-manager/feature-manager.component';
import { FeatureAddComponent } from './Admin/feature-add/feature-add.component';
import { FeatureUpdateComponent } from './Admin/feature-update/feature-update.component';
import { ModelManagerComponent } from './Admin/model-manager/model-manager.component';
import { ModelAddComponent } from './Admin/model-add/model-add.component';
import { ModelUpdateComponent } from './Admin/model-update/model-update.component';
import { IndexAdminComponent } from './Admin/index-admin/index-admin.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { RegisterAdminComponent } from './Admin/register-admin/register-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    TypographyComponent,
    MapsComponent,
    NotificationsComponent,
    StaffComponent,
    AddStaffComponent,
    UpdateStaffComponent,
    CustomerManagerComponent,
    CarManagerComponent,
    CarAddComponent,
    CarUpdateComponent,
    BrandManagerComponent,
    BrandAddComponent,
    BrandUpdateComponent,
    FeatureManagerComponent,
    FeatureAddComponent,
    FeatureUpdateComponent,
    ModelManagerComponent,
    ModelAddComponent,
    ModelUpdateComponent,
    IndexAdminComponent,
    LoginAdminComponent,
    RegisterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
    ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
