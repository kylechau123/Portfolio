import React from 'react';
import birthdayBuddy from '../img/birthdaybuddy.png';
import foodForEveryone from '../img/FoodForEveryone.png';
import Project from './Project';

function Portfolio(props) {
    const projects = [
        {
            name: "BirthdayBuddy",
            deploy: "https://birthday-buddy.herokuapp.com/",
            github: "https://github.com/juliaghany/BirthdayBuddy",
            img: birthdayBuddy,
        },
        {
            name: "BirthdayBuddy",
            deploy: "https://whirlwindraven.github.io/Food-For-Everyone/",
            github: "https://github.com/bragceo/Food-For-Everyone",
            img: foodForEveryone,
        }
    ]
    return (
        <div class="flex-container">
            <Project
                name = {projects[0].name}
                deploy={projects[0].deploy}
                github={projects[0].github}
                img={projects[0].img}
            />
            <Project
                name = {projects[1].name}
                deploy={projects[1].deploy}
                github={projects[1].github}
                img={projects[1].img}
            />
        </div>
    );
}

export default Portfolio;