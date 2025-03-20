import { SkillList, TechCategoryList } from "../../models/tech";
import { SVGIcon } from "../../models/icon";

import bootstrap from '../../icons/bootstrap4.svg';
import express from '../../icons/express.svg';
import socketio from '../../icons/socketio.svg'
import webpack from '../../icons/webpack.svg';
import babel from '../../icons/babel.svg';
import photoshop from '../../icons/photoshop.svg';

export const iconsArr: SVGIcon[] = [
  bootstrap as SVGIcon,
  express as SVGIcon,
  socketio as SVGIcon,
  webpack as SVGIcon,
  babel as SVGIcon,
  photoshop as SVGIcon
];


export const summary = [
  `I’m a Web Developer, I’ve worked in software engineering since 2014. 
  I got my first IT job at Accenture, where I worked mostly as a Junior Programmer and QA Tester. 
  I went through a sabbatical period in 2016 to finalize my University studies and switch my career path to web development. 
  Since 2017 I’ve been designing and developing websites and web applications for Systech a small IT enterprise in Reynosa.`,
  `I’m an avid learner of front end development and web design. 
  I enjoy building web apps with fullstack javascript tech like MERN, 
  but I understand it’s not a perfect fit for every project.`,
  `I like to lead a simple lifestyle, keep fit and nurture my mind and soul the best I can.`
];

export const skills: SkillList = [
  {id:0, lvl:"90%", name:"Front-end Development"},
  {id:1, lvl:"80%", name:"Back-end Development (NodeJS)"},
  {id:2, lvl:"75%", name:"Web Design"}
];

export const techList: TechCategoryList = [
  {
      name: "HTML",
      list: [
          {
              name: "HTML5",
              type: 'fa',
              color: '#e44d26',
              iconName: 'html5'
          },
          // {
          //     name: "JSX",
          //     type: 'fa',
          //     color: '#61dbfb',
          //     iconName: 'react'
          // },
          {   
              name: "EJS templates",
              type: "text",
              color: "#000",
              sprite: "EJS"
          }
      ]
  },
  {
      name: "CSS",
      list:[
          {
              name: "CSS3",
              type: 'fa',
              color: '#146eb0',
              iconName: 'css3-alt'
          },
          {
              name: "Sass",
              type: 'fa',
              color: "#c66394",
              iconName: "sass"
          },
          {
              name: "Bootstrap",
              type: "sprite",
              sprite: "bootstrap4"
          }
      ]
  },
  {
      name: "JavaScript",
      list:[
          {
              name:"ES6",
              type: "fa",
              color: "#e8d44d",
              iconName: "js"
          },
          {
              name: "React.js",
              type: 'fa',
              color: '#61dbfb',
              iconName: 'react'
          }
      ]
  },
  {
      name: "NodeJS",
      list:[
          {
              name: "NodeJS",
              type: 'fa',
              color: '#80bc02',
              iconName: 'node-js'
          },
          {
              name: "Express.js",
              type: 'sprite',
              sprite: 'express'
          },
          {
              name: "Socket.io",
              type: 'sprite',
              sprite: 'socketio'
          }
      ]
  },
  {
      name: "Build tools",
      list: [
          {
              name: "Webpack",
              type: "sprite",
              sprite: "webpack"
          },
          {
              name: "Babel",
              type: "sprite",
              sprite: "babel"
          }
      ]
  },
  {
      name: "Other",
      list:[
          {
              name: "Git",
              type: 'fa',
              color: '#000',
              iconName: 'git'
          },
          {
              name: "Photoshop",
              type: "sprite",
              sprite: "photoshop"
          }
      ]
  }
];
