import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes this service available application-wide
})
export class MealService {
  employeeMealData: Array<{
    userId: string;
    date: string;
    time: string;
    meal: string;
  }> = [];

  // Method to add a new meal entry
  addMealEntry(entry: { userId: string; date: string; time: string; meal: string }) {
    this.employeeMealData.push(entry);
  }

  // Method to fetch all meal data
  getMealData() {
    return this.employeeMealData;
  }
}
