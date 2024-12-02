import { Component} from '@angular/core';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent  {

  employees = [
    { id: 'E12345', name: 'John Doe' },
    { id: 'E67890', name: 'Jane Smith' },
    { id: 'E54321', name: 'Alice Johnson' },
  ];

  employeeId: string = '';
  errorMessage: string = '';
  showCard: boolean = false;
  mealType: string = '';
  employeeName: string = '';
  checkInTime: string = '';

  constructor(private mealService: MealService) {}

  checkInEmployee() {
    const currentEmployee = this.employees.find((emp) => emp.id === this.employeeId);

    if (!currentEmployee) {
      this.errorMessage = 'Employee ID not found!';
      this.showCard = false; // Hide card on invalid input
      return;
    }

    this.errorMessage = '';
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const mealType = this.getMealType(hours);
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const formattedDate = currentTime.toISOString().split('T')[0];

    if (mealType) {
      // Add the meal entry using the shared service
      this.mealService.addMealEntry({
        userId: this.employeeId,
        date: formattedDate,
        time: formattedTime,
        meal: mealType,
      });

      // Update card details
      this.showCard = true;
      this.mealType = mealType;
      this.employeeName = currentEmployee.name;
      this.checkInTime = formattedTime;

      //alert(`Check-in successful! Meal: ${mealType}, Time: ${formattedTime}`);
    } else {
      //alert('Not within meal hours!');
      this.showCard = false; // Hide card if not within meal hours
    }

    this.employeeId = ''; // Reset input
  }

  getMealType(hours: number): string | null {
    if (hours >= 8 && hours < 10) return 'Breakfast';
    if (hours >= 12 && hours < 15) return 'Lunch';
    if (hours >= 20 && hours < 23) return 'Dinner';
    return null;
  }

}
