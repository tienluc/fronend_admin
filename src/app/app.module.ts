import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
