import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  private _http = inject(HttpClient);

  delete(): void {
  this._http.delete
  ('http://localhost:5000/api/user/delete-by-id/68861dcea846d241e9dcd96d').subscribe();
  }
}
