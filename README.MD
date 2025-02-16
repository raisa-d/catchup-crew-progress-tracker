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
- Stores all of the homework, due date, and assignment and shows it to you based on what class you are at
- Mark when you completed each #100Devs class/which one you are on
- Mark whether homework is completed or in progress
- Section for rollover homework
- OAuth to login
- Edit the homework names if you want to describe it in different wording/provide a new link if it is broken
- Tab/page for upcoming homework, in progress homework (this is the default tab, shows what is due by the next class you watch and rollover), and completed homework. Then there is also one where you can see it all chronologically if you want to. 

## Technologies Used
React, TailwindCSS, DaisyUI, Appwrite, Node, Express, Vite

## Development Log
Started by creating boilerplate with `npm create vite`

## Optimizations
- Networking page to track your coffee chats
- Resources tab for resources you want to add when you hear about them in class or in general. Preloaded with resources from CommunityTaught or that I have compiled.

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