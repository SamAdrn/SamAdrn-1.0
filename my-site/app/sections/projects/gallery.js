"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Thumbnail from "./thumbnail";
import Modal from "./modal";
import Backdrop from "./backdrop";

function Gallery({ isMobile }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [projectIndex, setProjectIndex] = useState(0);

    const projects = [
        {
            id: "pocket-garage",
            title: "Pocket Garage",
            hashtags: ["#reactnative", "#mobiledevelopment"],
            languages: ["React Native", "Firebase"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/PocketGarage",
                },
            ],
            type: "personal",
            date: "July 2023",
            description: [
                {
                    content:
                        "Pocket Garage is an innovative automobile data " +
                        "retrieval application that provides users with quick " +
                        "and detailed information about various vehicles.",
                    showOnMobile: true,
                },
                {
                    content:
                        "Users can easily access comprehensive vehicle " +
                        "information, including specifications such as body " +
                        "classification, fuel type, drivetrain details, " +
                        "engine specifications, and more. I made this project " +
                        "as a form of practicing mobile development.",
                    showOnMobile: false,
                },
                {
                    content:
                        "It is built upon React Native to achieve " +
                        "cross-platform compatibility.",
                    showOnMobile: true,
                },
            ],
            numPreviewImages: 5,
            carouselScheme: "light",
            techstack: ["react", "firebase", "gcloud", "vsc"],
        },
        {
            id: "unity",
            title: "Unity",
            hashtags: ["#swift", "#iosdevelopment", "#geolocation"],
            languages: ["Swift"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/Unity",
                },
            ],
            type: "academic",
            date: "May 2023",
            description: [
                {
                    content:
                        "This app was created as a final project for our IOS  " +
                        "Development class.",
                    showOnMobile: false,
                },
                {
                    content:
                        "Unity is an app that allows its users to engage more " +
                        "with their environment. To achieve this, Unity encourages " +
                        "users to explore their surroundings as it counts their steps " +
                        "using it as a currency to purchase various icons for the " +
                        "purpose of collecting them.",
                    showOnMobile: true,
                },
                {
                    content:
                        "I contributed by utilizing SwiftUI's MapKit to develop the map " +
                        "and created the in-game store using Swift's method of persistence. " +
                        "This project was a team effort, teaching me the true value " +
                        "of collaboration.",
                    showOnMobile: false,
                },
            ],
            numPreviewImages: 4,
            carouselScheme: "dark",
            techstack: ["swift", "swiftui", "xcode"],
        },
        {
            id: "triples",
            title: "Triples",
            hashtags: ["#swift", "#iosdevelopment", "#minigame"],
            languages: ["Swift"],
            sources: [],
            type: "academic",
            date: "April 2023",
            description: [
                {
                    content:
                        "My first mobile application. This is an introductory project for an " +
                        "iOS development class. Triples is a spin-off of the tile puzzle game " +
                        "called Threes The project helped me understand the core principles of " +
                        "Swift, such as basic syntax, state management, formatting, and animations.",
                    showOnMobile: true,
                },
                {
                    content:
                        "Due to potential risk of academic violation, the " +
                        "source code will not be publicly shared",
                    showOnMobile: false,
                },
            ],
            numPreviewImages: 4,
            carouselScheme: "dark",
            techstack: ["swift", "xcode"],
        },
        {
            id: "testudo-revamped",
            title: "Testudo Revamped",
            hashtags: ["#webdevelopment", "#api", "#database"],
            languages: ["HTML", "Javascript"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/Testudo-Revamp",
                },
                {
                    sourceType: "web",
                    sourceLink: "https://testudo2-0.onrender.com/",
                },
            ],
            type: "personal",
            date: "December 2022",
            description: [
                {
                    content:
                        "Revamped Testudo visualizes a newly-designed class schedule " +
                        "system servicing students of the University of Maryland. Its " +
                        "mission is to enhance the experiences that students go through " +
                        "when looking or registering for classes.",
                    showOnMobile: true,
                },
                {
                    content:
                        "It runs on an Express server hosted on Render.com. Pages " +
                        "were built with HTML and EJS, designed using Bootstrap " +
                        "mixed with some custom CSS, and powered by Javascript with " +
                        "support of the jQuery library.",
                    showOnMobile: false,
                },
            ],
            numPreviewImages: 6,
            carouselScheme: "light",
            techstack: [
                "html",
                "css",
                "bootstrap",
                "javascript",
                "nodejs",
                "mongodb",
                "vsc",
            ],
        },
        {
            id: "simon-game",
            title: "The Simon Game",
            hashtags: ["#webdevelopment", "#webgame"],
            languages: ["HTML", "Javascript"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/Simon-Game/",
                },
                {
                    sourceType: "web",
                    sourceLink: "https://samadrn.github.io/Simon-Game/",
                },
            ],
            type: "personal",
            date: "October 2022",
            description: [
                {
                    content:
                        "A recreation of the classic Simon Game. I created this " +
                        "project with the intention to practice creating CSS designs " +
                        "and adding Javascript logic to my websites. Try out the game " +
                        "by clicking on the Web source button. ",
                    showOnMobile: true,
                },
            ],
            numPreviewImages: 3,
            carouselScheme: "light",
            techstack: ["html", "css", "javascript", "jquery", "vsc"],
        },
        {
            id: "tic-tac-toe",
            title: "Tic Tac Toe",
            hashtags: ["#gamelogic", "#consolegame"],
            languages: ["Ruby"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/TicTacToe",
                },
            ],
            type: "personal",
            date: "July 2022",
            description: [
                {
                    content:
                        "Tic Tac Toe in your own terminal. This project was inspired " +
                        "by my previous work, another terminal game called Maze. Since I " +
                        "really enjoyed coding with Ruby, I decided to tackle on another.",
                    showOnMobile: true,
                },
                {
                    content:
                        "Not only did it help improve my OOP knowledge, it introduced me " +
                        "to the world of game logic. Particularly, this game utilizes the " +
                        "Minimax algorithm to create decisions for the CPU. A very " +
                        "interesting learn overall, as it opened up a whole new perspective " +
                        "for me.",
                    showOnMobile: false,
                },
            ],
            numPreviewImages: 3,
            carouselScheme: "light",
            techstack: ["ruby", "vsc"],
        },
        {
            id: "maze",
            title: "Maze",
            hashtags: ["#graphs", "#consolegame"],
            languages: ["Ruby"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/Maze",
                },
            ],
            type: "personal",
            date: "June 2022",
            description: [
                {
                    content:
                        "Maze started out as a project for one of my classes, but it " +
                        "was so interesting to me that I had to expand on it over the summer. " +
                        "Maze was a way for me to comprehend, at a deeper level, the concept " +
                        "of graphs in the world of programming.",
                    showOnMobile: true,
                },
                {
                    content:
                        "I found out that given an fully condensed adjacency matriz that " +
                        "represented walls, I could carve out a pathway by traversing through " +
                        "it. As I tackled upon this challenge, I wanted to present what I learned " +
                        "in a form of creativity, hence, I created this project.",
                    showOnMobile: false,
                },
            ],
            numPreviewImages: 3,
            carouselScheme: "light",
            techstack: ["ruby", "vsc"],
        },
        {
            id: "caraoke",
            title: "Caraoke",
            hashtags: ["#hackathon", "#hardware"],
            languages: ["Arduino", "Python"],
            sources: [
                {
                    sourceType: "github",
                    sourceLink: "https://github.com/SamAdrn/Caraoke",
                },
                {
                    sourceType: "devpost",
                    sourceLink:
                        "https://devpost.com/software/caraoke-lyrics-on-the-go?",
                },
            ],
            type: "hackathon",
            date: "April 2022",
            description: [
                {
                    content:
                        "Caraoke was inspired by the love of carpool karaoke that I " +
                        "share with my friends. As our inspiration, we developed this  " +
                        "project for the 2022 Bitcamp Hackathon hosted at the  " +
                        "University of Maryland.",
                    showOnMobile: true,
                },
                {
                    content:
                        "Sending lyrics to our borrowed hardware is a Python backend " +
                        "that grabs the currently playing song on your Spotify account " +
                        "and looks for its lyrics on Textyl.co's API. Being that it was my " +
                        "first time dealing with hardware, and it was my biggest contribution " +
                        "my first Hackathon experience allowed me to learn so much in so little time.",
                    showOnMobile: false,
                },
            ],
            numPreviewImages: 2,
            carouselScheme: "dark",
            techstack: ["arduino", "python", "c++", "vsc"],
        },
    ];

    return (
        <motion.div
            className={
                "w-screen grid grid-cols-1 px-5 py-10 " +
                "md:grid-cols-2 lg:grid-cols-3 lg:px-40"
            }
        >
            {projects.map((_, i) => (
                <Thumbnail
                    isMobile={isMobile}
                    onClick={() => {
                        setModalOpen(true);
                        setProjectIndex(i);
                    }}
                    id={projects[i].id}
                    title={projects[i].title}
                    languages={projects[i].languages}
                />
            ))}

            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && (
                    <Backdrop handleClose={() => setModalOpen(false)}>
                        <Modal
                            handleClose={() => setModalOpen(false)}
                            data={projects[projectIndex]}
                        />
                    </Backdrop>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Gallery;
