# Sales Dashboard Project

A simple, interactive sales dashboard built with Next.js, TypeScript, and Tailwind CSS. It displays sales data using various chart types and allows for dynamic filtering.

## ✨ Features

-   View sales data for the years 2022, 2023, and 2024.
-   Switch between **Bar**, **Line**, and **Pie** charts.
-   Filter sales by a minimum threshold value.
-   Built with a component-based **Atomic Design** structure.
-   Fully responsive layout.

## 🛠️ Tech Stack

-   **Framework**: [Next.js]
-   **Language**: [TypeScript]
-   **Styling**: [Tailwind CSS]
-   **Charting**: [Recharts]
-   **Linting**: [ESLint]

## 🏗️ Project Structure

This project follows the **Atomic Design** methodology to ensure components are reusable, organized, and scalable.

```
components/
├── atoms/      # Smallest UI elements (Button, Input)
├── molecules/  # Groups of atoms (Filter controls)
└── organisms/  # Complex components (The main chart)
```

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) (v18 or later) and npm installed on your computer.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/kartik-270/sales-dashboard.git](https://github.com/kartik-270/sales-dashboard.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd sales-dashboard
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔮 Future Enhancements

-   **API Integration**: Replace the mock data with real-time data fetched from a sales API.
-   **Authentication**: Add user login to view personalized dashboards.
-   **Data Persistence**: Connect to a database like PostgreSQL or MongoDB.