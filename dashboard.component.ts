import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  employeeMealData = [
    { userId: "E12345", date: "2024-11-28", time: "08:30 AM", meal: "Breakfast" },
    { userId: "E67890", date: "2024-11-28", time: "01:00 PM", meal: "Lunch" },
    { userId: "E54321", date: "2024-11-28", time: "08:15 PM", meal: "Dinner" },
    { userId: "E98765", date: "2024-11-28", time: "07:45 AM", meal: "Breakfast" },
    { userId: "E65432", date: "2024-11-29", time: "12:30 PM", meal: "Lunch" },
    { userId: "E13579", date: "2024-11-29", time: "08:00 AM", meal: "Breakfast" },
    { userId: "E24680", date: "2024-11-29", time: "07:45 PM", meal: "Dinner" },
  ];

  constructor() {}

  ngOnInit(): void {
    // Register the necessary components for Chart.js
    Chart.register(...registerables);  // This registers all the components for Chart.js

    // Get the meal counts grouped by date
    const mealCountsByDate = this.getMealCountsByDate();

    // Create Pie Chart for multiple days
    new Chart("pieChart", {
      type: "pie",
      data: {
        labels: ["Breakfast", "Lunch", "Dinner"],
        datasets: [
          {
            data: [
              mealCountsByDate["2024-11-28"]['Breakfast'],
              mealCountsByDate["2024-11-28"]['Lunch'],
              mealCountsByDate["2024-11-28"]['Dinner'],
            ],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            label: "2024-11-28",
          },
          {
            data: [
              mealCountsByDate["2024-11-29"]['Breakfast'],
              mealCountsByDate["2024-11-29"]['Lunch'],
              mealCountsByDate["2024-11-29"]['Dinner'],
            ],
            backgroundColor: ["#FF0000", "#36A2FF", "#FF8C00"],
            label: "2024-11-29",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Create Bar Chart for multiple days
    new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Breakfast", "Lunch", "Dinner"],
        datasets: [
          {
            label: "Meals Count for 2024-11-28",
            data: [
              mealCountsByDate["2024-11-28"]['Breakfast'],
              mealCountsByDate["2024-11-28"]['Lunch'],
              mealCountsByDate["2024-11-28"]['Dinner'],
            ],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          },
          {
            label: "Meals Count for 2024-11-29",
            data: [
              mealCountsByDate["2024-11-29"]['Breakfast'],
              mealCountsByDate["2024-11-29"]['Lunch'],
              mealCountsByDate["2024-11-29"]['Dinner'],
            ],
            backgroundColor: ["#FF0000", "#36A2FF", "#FF8C00"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Function to count the number of meals by date and meal type
  getMealCountsByDate() {
    const countsByDate: { [date: string]: { [meal: string]: number } } = {};

    // Iterate over employee meal data to accumulate counts
    this.employeeMealData.forEach((entry) => {
      const { date, meal } = entry;

      // If the date doesn't exist, create it in the countsByDate object
      if (!countsByDate[date]) {
        countsByDate[date] = { Breakfast: 0, Lunch: 0, Dinner: 0 };
      }

      // Increment the count for the respective meal type
      countsByDate[date][meal]++;
    });

    return countsByDate;
  }
}
