import bookshow2 from '../../assets/projectImage/bookshow2.jpeg';
import myPortfolio from '../../assets/projectImage/my-portfolio2.png';
import weatherApp from '../../assets/projectImage/weatherApp.png';
import expenseTrack from '../../assets/projectImage/expenseTrack.png';
import noteKeeper from '../../assets/projectImage/noteKeeper.png'
const projectData = [
    {
      name: "My Portfolio",
      id: 1,
      imageSrc: myPortfolio,
      aboutProject: "This is my own portfolio website that I created using React. This is a responsive website with creative UI/UX.",
      techUsed: "HTML, CSS, Javascript, React-Js",
      learned: "While creating my portfolio I learn more about css and styling.",
      code: "https://github.com/seshansh/my-portfolio",
    },
    {
      name: "Weather App",
      id: 2,
      imageSrc: weatherApp,
      aboutProject: "Created user friendly weather web application, Which can forecast weather for any city. It fetch current forecast weather data collection from the open weather API.",
      techUsed: "HTML, CSS, Javascript, React-Js",
      learned: "When I was working on this project I learned how to fetch data from an open source API.",
      code: "https://github.com/seshansh/weather-app",
    },
    {
      name: "Book-Show",
      id: 3,
      imageSrc:bookshow2,
      aboutProject: "A basic UI to display the show names and a few details about show, and after click on a particular show listed there it redirect the user to another screen that shows the summary of the particular show. The second screen have a button to book a movie ticket which will open a form with the movie name already present and a few relevant details. After booking user's data will be saved in local-storage and automatically redirected to the home page",
      techUsed: "HTML, CSS, Javascript, React-Js, React-router",
      learned: "Although I already knew everything that I used to make this project but I would say I had fun while making this website and had good practice of creating a multi-page website.",
      code: "https://github.com/seshansh/book-show",
    },
    {
      name: "Expense-Track",
      id: 4,
      imageSrc: expenseTrack,
      aboutProject: "this is a website where you can add and track all of your expenses of each day, month and year. you can track your expenses by simply clicking on the filter option where you can see your saved expenses of per year.",
      techUsed: "HTML, CSS, Javascript, React",
      learned: "While making this project I learned how to apply dynamic css, as this project have a section of expense-chart that change dynamically based on user's expenses per-month of each years.",
      code: "https://github.com/seshansh/expense-track",
    },
    {
      name: "Note-Keeper",
      id: 5,
      imageSrc: noteKeeper,
      aboutProject: "This is a basic react project that keeps our notes and we can delete it if we want.",
      techUsed: "HTML, CSS, React",
      learned: "This was my first React project that I built on my own and since this was first project I really enjoyed while creating this website and that was the time when I ReactJs",
      code: "https://github.com/seshansh/note-keeper",
    },
    
    
  ];
  
  export { projectData };
  