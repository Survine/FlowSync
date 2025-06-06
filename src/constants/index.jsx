import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "features" },
  { label: "Workflow", href: "workflow" },
  { label: "Pricing", href: "pricing" },
  { label: "Testimonials", href: "testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Real-Time Data Sync",
    description:
      "Keep your data updated across all connected platforms instantly, ensuring seamless synchronization.",
  },
  {
    icon: <Fingerprint />,
    text: "Automated Workflows",
    description:
      "Eliminate repetitive tasks by setting up automation rules to optimize productivity.",
  },
  {
    icon: <ShieldHalf />,
    text: "Seamless Integrations",
    description:
      "Connect effortlessly with popular apps and tools to streamline your workflow.",
  },
  {
    icon: <BatteryCharging />,
    text: "Team Collaboration",
    description:
      "Enhance teamwork with synchronized data sharing and real-time updates.",
  },
  {
    icon: <PlugZap />,
    text: "Secure & Reliable",
    description:
      "Protect your data with top-tier encryption and ensure uninterrupted access.",
  },
  {
    icon: <GlobeLock />,
    text: "Intuitive Dashboard",
    description:
      "Monitor, manage, and optimize workflows with a user-friendly interface.",
  },
];


export const checklistItems = [
  {
    title: "Connect Your Tools",
    description:
      "Easily integrate Flow Sync with your favorite apps and platforms in just a few clicks.",
  },
  {
    title: "Define Your Workflow",
    description:
      "Set up custom automation rules to streamline repetitive tasks and optimize efficiency.",
  },
  {
    title: "Sync & Automate",
    description:
      "Watch your data update in real-time as Flow Sync seamlessly automates your workflows.",
  },
  {
    title: "Monitor & Optimize",
    description:
      "Track performance, analyze insights, and refine workflows for continuous improvement.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const workflowData = [
  { name: "Jan", executions: 40 },
  { name: "Feb", executions: 30 },
  { name: "Mar", executions: 20 },
  { name: "Apr", executions: 27 },
  { name: "May", executions: 18 },
  { name: "Jun", executions: 23 },
  { name: "Jul", executions: 34 },
];
