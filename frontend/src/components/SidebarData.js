import React from 'react';
import { Link } from 'react-router-dom';

const SidebarData = [
  {
    title: 'Profile',
    path: '/profile', // Define the path to your Profile component
  },
  {
    title: 'Team Members',
    path: '/team-members', // Define the path to your Team Members component
  },
  {
    title: 'Submitted Ideas',
    path: '/submitted-ideas', // Define the path to your Submitted Ideas component
  },
  {
    title: 'Idea Status',
    path: '/idea-status', // Define the path to your Idea Status component
  },
  {
    title: 'Logout',
    path: '/logout', // Define the path to your Logout component
  },
];

export default SidebarData;
