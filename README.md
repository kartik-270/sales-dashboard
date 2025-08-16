Sales Dashboard Project
A responsive, interactive sales dashboard built with Next.js, TypeScript, and Tailwind CSS. It visualizes sales data from 2022-2024 using dynamic charts and allows users to filter data in real-time.

🔴 Live Demo
View the live application deployed on Vercel: https://sales-dashboard-nine-sepia.vercel.app

✨ Features
View sales data for the years 2022, 2023, and 2024.

Switch dynamically between Bar, Line, and Pie chart visualizations.

Filter sales data by a minimum threshold value.

Built with a scalable and maintainable component-based Atomic Design structure.

Fully responsive layout for seamless viewing on all device sizes.

🤔 Tech Stack & Architectural Decisions
This project leverages a modern tech stack chosen to ensure performance, maintainability, and a high-quality developer experience.

Framework: Next.js

Why: Chosen for its hybrid rendering capabilities. While this project uses static data, Next.js provides a production-ready foundation with optimizations like Automatic Code Splitting and Image Optimization. Its file-based routing simplifies page management and it allows for easy scaling to Server-Side Rendering (SSR) or API routes in the future.

Language: TypeScript

Why: To enforce type safety, which significantly reduces runtime errors and improves code quality. TypeScript's static analysis makes the codebase easier to understand, refactor, and maintain, which is crucial for long-term project health.

Styling: Tailwind CSS

Why: A utility-first CSS framework that enables rapid UI development directly within the JSX. This approach co-locates styles with their components, making them more modular and preventing style bleed. It also ensures design consistency and simplifies the creation of a responsive layout.

Charting: Recharts

Why: A declarative charting library built for React. Its component-based API aligns perfectly with React's philosophy, allowing us to build complex charts by composing simple, reusable components like <BarChart>, <Line>, and <Tooltip>.

Component Architecture: Atomic Design

Why: This methodology was chosen to create a highly organized and scalable component library. By breaking the UI down into a hierarchy of Atoms -> Molecules -> Organisms, we ensure that components are reusable, testable, and have a clear separation of concerns. This structure makes the codebase easy to navigate and speeds up future development.

🏗️ Project Structure
The project follows the Atomic Design methodology to ensure components are organized and scalable.

components/
├── atoms/      # Smallest UI elements (Button, Input)
├── molecules/  # Groups of atoms (Filter controls)
└── organisms/  # Complex components (The main chart container)
🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need to have Node.js (v18 or later) and npm installed on your computer.

Installation
Clone the repository:

Bash

git clone https://github.com/kartik-270/sales-dashboard.git
Navigate to the project directory:

Bash

cd sales-dashboard
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.

🛰️ Deployment
This application is configured for seamless deployment on Vercel.

Push your code to a GitHub repository.

Sign up for a free Vercel account and connect it to your GitHub.

Click "Add New..." -> "Project" and import your sales-dashboard repository.

Vercel will auto-detect the Next.js framework. No configuration is needed.

Click "Deploy". Your application will be live in minutes.

Vercel will also enable Continuous Deployment, automatically redeploying your application every time you push a change to the main branch.

✅ Quality Assurance & Testing
This project was manually tested to ensure functionality and a high-quality user experience across different scenarios.

Functional Testing:

Verified that year selection correctly filters the dataset.

Confirmed that chart type buttons (Bar, Line, Pie) render the correct visualization.

Tested the minimum sales filter with various inputs, including zero, positive numbers, and edge cases.

Ensured filter states reset and combine correctly.

Responsive Design:

Checked the layout on multiple screen sizes (mobile, tablet, desktop) to ensure all components are legible and usable.

Cross-Browser Compatibility:

Verified functionality and styling on the latest versions of Chrome, Firefox, and Safari.

⚡ Performance Considerations
Performance was a key consideration during development.

Optimized Filtering: The filtering logic uses the React.useMemo hook. This memoizes the result of the data filtering, ensuring that the expensive computation only re-runs when the filter dependencies (year, minSales) change, preventing unnecessary re-renders.

Next.js Optimizations: The project benefits from Next.js's built-in performance features, including automatic code-splitting (loading only the JavaScript needed for the current page) and static site generation for fast initial load times.

🔮 Future Enhancements
API Integration: Replace the mock data with real-time data fetched from a sales API, implementing proper loading and error states for a robust user experience.

Authentication: Add user login to view personalized or role-based dashboards.

Automated Testing: Introduce Jest and React Testing Library to write unit and integration tests for components and filtering logic, ensuring long-term stability.

Data Persistence: Connect to a database like PostgreSQL or MongoDB to store and manage sales data.