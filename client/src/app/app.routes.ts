import { Routes } from '@angular/router';
import { RegisterComponent } from './commponents/register/register.component';
import { MemberComponent } from './commponents/member/member.component';
import { UpdateComponent } from './commponents/update/update.component';
import { DeleteComponent } from './commponents/delete/delete.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'member', component: MemberComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'delete', component: DeleteComponent }
];
