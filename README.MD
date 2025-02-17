# 100Devs Catchup Crew Tracker
The 100Devs Catchup Crew Progress Tracker allows software developers to track their progress in #100Devs over time regarding both homework and classes. One place where they can see when they did each class and homework as well as rollover. 

This web app is inspired by an excel spreadsheet I use to track all of my personal progress in 100Devs. It helps me stay organized and get a general overview of all of the progress I've made and the timeline. I thought this could also help other developers stay organized.

## Table of Contents
- [Design](#design)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Development Log](#development-log)
- [Optimizations](#optimizations)
- [Lessons Learned](#lessons-learned)
- [Resources](#resources)
- [Contact](#contact)

## Features
- Stores all of the homework, due date, and assignment and shows it to you based on what class you are at ✅
- Mark when you completed each #100Devs class/which one you are on ✅
- Mark whether homework is completed or not ✅
- Homeage shows upcoming homework and classes ✅
- Assignment page to see all assignments and if they're completed ✅
- Classes page to see all classes and when/if they were completed ✅
- "X classes to go" on Homepage ✅
- Email/OAuth login
- Section for rollover homework on homepage
- Edit the homework names if you want to describe it in different wording/provide a new link if it is broken

## Technologies Used
Appwrite, Node, Express, Materialize, EJS, Vite

## Development Log
- Started by creating boilerplate with `npm create vite`.
- It took a long while to get things up and running, separate everything into MVC, and then debug from there. 
- Now that I have the assignments and classes all displayed and added the ability to check off whether an assignment is done or not, I want to update `index.ejs` so that each table row for date is actually a form if it doesn't already exist
- I did so by making the table row a form always and pre-filling it with an existing date if there is one. This way, users can edit existing dates if they made a mistake and set new ones.

- Next step: only showing the upcoming homework/class on the homepage 
  - Assignments page: Showing all assignments from the currently due ones to the old ones. Column for future assignments separately? I want the ones they're working on to be easily accessible at the top
  - Classes page: Show all classes
- ***It was pretty easy to get the next classes on the homepage, but I am struggling with filtering the assignments by a string due date to get only the assignments due for the upcoming class. I may need to input all of the assignments with the exact same class names they have in the classes database. Continuing working on this when I get back to it.
- I woke up today and immediately thought of the solution. Instead of my previous method, I am finding the first assignment that is not completed and is not and then displaying all homework due that same class.

Next Steps:
- Update getDueAssignments() in homeControllers.js to use the order property of the next class to get the assignments due for that class. ✅
  - I am going to add an "order" property to each class and all the assignments due at that class. Any classes with a 0 have no homework due. It will make it easier to compare numbers to decide which assignments are upcoming, rollover and set it. ✅
  - Sort assignments so that completed ones are on the bottom ✅
- Update getUpcomingClasses() in homeControllers to get the classes a different way, it doesn't always work.
- Host it live ❌
- Improve Styling ❌
- Optimizing features ❌
  - Rollover assignments section on homepage
  - Authentication - spent like 2 hours on this and got nowhere, ended up going in circles lol

## Optimizations
- Networking page to track your coffee chats.
- Resources tab for resources you want to add when you hear about them in class or in general. Preloaded with resources from CommunityTaught or that I have compiled.
- Once class has been assigned a date, change due date from class number to the date of the class.
- Scheduling feature so you can plan when you'll do each class.

## Lessons Learned
- This is my first app I'm building using Appwrite
- Had to go through the Appwrite Docs for about an hour to figure out how to start with a login page and get it to work
- Trying to figure out context, I've never used this before with React

## Resources
- Used a Vite template to set up React with `npm create vite`. Currently, two official plugins are available:
    - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
    - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contact
<p> 
  <a href="https://raisadorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Ibsite-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/raisa-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge" alt="LinkedIn">
  </a>
  <a href="https://bsky.app/profile/rai-bread.bsky.social" target="blank">
    <img src="https://img.shields.io/badge/Bluesky-563d7c?style=for-the-badge&logoColor=white" alt="@rai__bread on Bluesky" />
  </a> 
</p>