# JobBoard

**JobBoard** is a modern job search platform that allows users to browse job listings and filter them based on custom criteria. It leverages **React.js** for the frontend and **Firebase Firestore** as the backend.

## Features

- Display job listings with details such as title, company, job type, experience level, and location.
- Custom filtering for job type, title, experience, and location.
- Responsive and visually appealing UI built with TailwindCSS.
- Integration with Firebase Firestore for real-time data fetching.
- "Apply" button linking directly to job application pages.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/JobBoard.git
   cd JobBoard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project and Firestore database.
   - Replace the Firebase configuration in `firebase.config.js` with your project's credentials.

4. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Firebase Firestore
- **Libraries**: `dayjs`, `firebase`
- **Tools**: Visual Studio Code, Git, GitHub

## Future Enhancements

- Add authentication for user accounts.
- Implement job application tracking.
- Enhance filters with salary and industry options.
- Add pagination for large datasets.
- Create an admin panel for job postings.

## Example Firebase Data Structure

```json
{
  "jobs": [
    {
      "title": "Software Engineer",
      "company": "TechCorp",
      "type": "Full-time",
      "experience": "Mid-level",
      "location": "San Francisco, CA",
      "skills": ["React", "Node.js", "JavaScript"],
      "postedOn": "2025-01-20T00:00:00.000Z",
      "job_link": "https://www.example.com/apply"
    }
  ]
}
```
