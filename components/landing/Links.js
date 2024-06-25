import {  Blog, Youtube , Github, LinkedIn, Twitter, Upwork, Resume } from "../globals/Icons";

export const Socials = [
    {
        id: 3, icon:
    <Twitter className='w-6 h-6'/>, URL:'https://x.com/scoopsahoykid'
    },
    {
        id: 1, icon:
    <Github className='w-6 h-6'/>, URL:'https://github.com/ebrahim-Ramadan/ebrahim-Ramadan'
    },
    {
        id: 2, icon:
    <LinkedIn className='w-6 h-6'/>, URL:'https://www.linkedin.com/in/ebrahimramadan791/'
    },
    {
        id: 3, icon:
    <Upwork className='w-6 h-6'/>, URL:'https://www.upwork.com/freelancers/~01ac4edad37fb8d60d'
    },
   
]
export const Redirects = [
    {
        id: 2, text:'My Blog',icon:
    <Blog className='w-4 h-4'/>, URL:'/blogs'
    },
    {
        id: 3, text:'My Channel',icon:
    <Youtube className='w-4 h-4'/>, URL:'https://www.youtube.com/@sharmojj'
    },
    {
        id: 3, text:'My Resume',icon:
    <Resume className='w-4 h-4'/>, URL:'https://drive.google.com/file/d/1PZT7XO83HSmS2X5BmTjWntBAc7lTf9M1/view'
    },
]