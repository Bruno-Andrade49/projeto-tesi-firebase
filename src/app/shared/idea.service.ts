import { Injectable } from '@angular/core';

import { Idea } from "../shared/idea";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from "@angular/fire/compat/database"

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  ideaListRef: any;
  ideaRef!: AngularFireObject<unknown>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Idea) {
    this.ideaListRef = this.db.list('/idea');
      return this.ideaListRef.push({
        name: apt.name,
        email: apt.email,
        mobile: apt.mobile,
        endereco: apt.endereco,
        salario: apt.salario
      });
    }
    // Get Single
    getBooking(id: string) {
      this.ideaRef = this.db.object('/idea/' + id);
      return this.ideaRef;
    }
    // Get List
    getBookingList() {
      this.ideaListRef = this.db.list('/idea');
      return this.ideaListRef;
    }
    // Update
    updateBooking(apt: Idea) {
      return this.ideaRef.update({
        name: apt.name,
        email: apt.email,
        mobile: apt.mobile,
        endereco: apt.endereco,
        salario: apt.salario
      });
    }
    // Delete
    deleteBooking(id: string) {
      this.ideaRef = this.db.object('/idea/' + id);
      this.ideaRef.remove();
    }
}
