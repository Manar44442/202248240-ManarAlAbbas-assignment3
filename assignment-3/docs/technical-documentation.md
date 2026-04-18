# Overview
Personal portfolio webpage for Manar Al Abbas displaying profile, skills, projects, GitHub API, and contact form. Built with HTML, CSS, and JavaScript.

# Technologies
- HTML– Structure.
- CSS – Styling and layout.
- JavaScript – Dynamic greeting with visitor name, website time span and gitHub repos.
- Google Fonts – Roboto, Public Sans.

# File structure
assignment-1/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore

# Sections
- Header: Navbar, profile box, dynamic greeting (#greeting-text) with visitor name, time span of usage.
- About (#about): Paragraph with academic background.
- Skills (#skills): Grid of skill cards with images and tags, hover effects.
- Projects (#projects): Project cards with images, title, description (appears on hover).
- GitHub (#github): Integration with gitHub API; keeps project content up-to-date automatically, buttons to navigate to gitHub website.
- Contact (#contact): Form with name, email, message, and submit button.

5. CSS Highlights
- Theme variables (:root): Colors & fonts for consistency.
- Layout: Flexbox and Grid for responsive sections (skills, projects).
- Cards: Hover effects (scale, shadow) for interaction feedback.
- Scroll snap: Smooth navigation between sections.
- Forms: Styled inputs, textareas, and buttons with focus & hover effects.
- GitHub Button: Custom-styled button that redirects users to GitHub profile.

# JavaScript
- How it works: 
    - Displays morning, afternoon, or evening greeting based on the current hour.
    - Displays greeting with visitor name .
    - calculate time span the user has used the website in hours, minuts and seconds.
    - Import GitHub account information based on a provided username and display it in the profile and repositories sections.
    - Provide continuous user feedback during data loading and when data fails to fetch.
    - Provide buttons to navigate to the GitHub profile and individual repository links.   

# Features/ Functionality
- Greeting based on time (Morning/ afternoon/ evening).
- Store user name and display it greeting message.
- Displays time of website usage.
- Navigate to sections by choosing from tabs.
- Expand content on hover.
- Diaplays owner Github account (API).
- A loading indicator when fetching data from API. 
- Error messages for invalid or empty form inputs.
- Smooth scrolling.
- Interactive skill/project cards.
- Responsive layout.
- Styled contact form.
- Real-time user feedback.
 
 # User Experience
 The user can navigate throw sections using both scrolling and navigating bar in the first section.
## Home Section
- Displays a greeting message based on the time of day with the visitor name.
- Displays time of website usage.
- Contains a navigation bar for accessing other sections.
- Contains a profile box showing the owner’s name, university, and some key skills.
## About Section
- Provides a brief introduction about the owner and her skills.
## Projects section
- Displays project titles and icons.
- Shows more details about each project when hovering over the cards.
## Skills section
- Lists the owner’s skills along with supporting tools and techniques.
## GitHub section
- Displays the owner’s profile picture, username or name, bio, and the most recently updated repository.
- Alerts the user if there is an issue fetching data (e.g., no internet connection).
- Keeps the user informed while data is loading.
- Automatically shows the up-to-date page corresponding to the owner’s GitHub account.
- Allows the user to navigate to the owner’s GitHub profile using the “Visit GitHub Profile” button.
- Allows the user to navigate to the owner’s last modified repository using the “View Repository” button.
## Contact section 
- Users must enter their name and email address in the correct format for the form to be sent.
- Users may optionally include a message.

# Implemented functionalities for this assigment
- Github repository.
- Timer (how long a visitor has been on your site).
- Store and display a visitor’s name.
- Compressed large images.
- Removed unused code, files, or images.
- Use efficient CSS and JavaScript.
- Test with Lighthouse with a result of 99 performance.






