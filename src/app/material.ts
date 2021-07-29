import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field'; 
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input';

const MaterialModules = [
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({

    imports: [
        MaterialModules
    ],
    exports: [
        MaterialModules
    ],
}
)

export class MaterialModule { }