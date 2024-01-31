import { Component, EventEmitter, Input, Output } from '@angular/core';
import { People } from './people';

@Component({
  selector: 'app-people',
  template: `
    <mat-card class="example-card" *ngIf="people">
      <mat-card-header>
        <mat-card-title>{{people.name}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
       <p> Height:- {{people.height}}</p>
       <p> Hair Colour:- {{people.hair_color}}</p>
       <p> Eye Colour:- {{people.eye_color}}</p>
      </mat-card-content>
    </mat-card>

  `,
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  @Input() people?: People;

  @Output() like = new EventEmitter<string>();
  @Output() dislike = new EventEmitter<string>();

  onLike(id: string): void {
    // this.like.next(id);
  }

  onDislike(id: string): void {
    // this.dislike.next(id);
  }
}
