// "use client";

// import { motion } from "framer-motion";
// import { ProjectCarousel } from "./projects/project-carousel";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

// const projects = [
//   {
//     title: "E-Commerce Platform",
//     description: "A modern e-commerce platform with real-time inventory and payment processing.",
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c",
//     tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
//     github: "#",
//     demo: "#",
//     featured: true,
//   },
//   {
//     title: "AI Chat Application",
//     description: "Real-time chat application powered by artificial intelligence.",
//     image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
//     tech: ["React", "OpenAI", "Socket.io", "Node.js"],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Portfolio Generator",
//     description: "Dynamic portfolio generator with customizable themes and layouts.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     tech: ["Vue.js", "Tailwind CSS", "Supabase"],
//     github: "#",
//     demo: "#",
//   },
//   {
//     title: "Task Management",
//     description: "Collaborative task management tool with real-time updates.",
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//     tech: ["React", "Redux", "Firebase"],
//     github: "#",
//     demo: "#",
//   },
// ];

// const categories = {
//   all: projects,
//   frontend: projects.filter(p => p.tech.some(t => ["React", "Vue.js", "Next.js"].includes(t))),
//   backend: projects.filter(p => p.tech.some(t => ["Node.js", "Prisma", "Supabase"].includes(t))),
//   fullstack: projects.filter(p => p.tech.length >= 4),
// };

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="container px-4 py-24 bg-muted/50">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="space-y-8"
//       >
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//           <div>
//             <h2 className="text-3xl font-bold">Featured Projects</h2>
//             <p className="text-muted-foreground mt-2">
//               Explore my latest work and side projects
//             </p>
//           </div>
//         </div>

//         <Tabs defaultValue="all" className="w-full">
//           <TabsList className="mb-8">
//             <TabsTrigger value="all">All Projects</TabsTrigger>
//             <TabsTrigger value="frontend">Frontend</TabsTrigger>
//             <TabsTrigger value="backend">Backend</TabsTrigger>
//             <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
//           </TabsList>
//           {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
//             <TabsContent key={category} value={category}>
//               <ProjectCarousel projects={categories[category]} />
//             </TabsContent>
//           ))}
//         </Tabs>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ProjectCarousel } from "./projects/project-carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

const projects = [
  {
    title: "TrendsDefine (E-Commerce Store)",
    description: "An e-commerce store offering a seamless shopping experience with filtering, searching, and categorization features.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    tech: ["React", "Tailwind CSS", "Netlify"],
    github: "https://github.com/RameshBellani/nxtTrendsCartsFeature.git",
    demo: "https://rameshewebsite.netlify.app",
  },
  {
    title: "Restaurant App",
    description: "A modern restaurant app that allows users to explore menus, place orders, and manage reservations.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    tech: ["React", "CSS", "Netlify"],
    github: "https://github.com/RameshBellani/Resturent_App.git",
    demo: "https://rameshrestaurantapp.netlify.app",
  },
  {
    title: "KBC Game",
    description: "A fun, interactive quiz game inspired by 'Kaun Banega Crorepati', with engaging UI and gameplay.",
    image: "https://images.unsplash.com/photo-1525981087864-3d79d64f1251",
    tech: ["React", "Netlify"],
    github: "https://github.com/RameshBellani/kbc-game.git",
    demo: "https://game-kbc.netlify.app/",
  },
  {
    title: "Note App (Full Stack)",
    description: "A full-stack note-taking application with CRUD functionality and user authentication.",
    image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5",
    tech: ["React", "Node.js", "MongoDB", "Netlify"],
    github: "https://github.com/RameshBellani/mind-front-note.git",
    demo: "https://v2mind.netlify.app/",
  },
  {
    title: "Breadcrumb Project",
    description: "An app demonstrating breadcrumb navigation for better user experience in multi-page apps.",
    image: "https://images.unsplash.com/photo-1556742400-3c6a46d3d049",
    tech: ["React", "CSS", "Netlify"],
    github: "#",
    demo: "https://v2mind-2.netlify.app/",
  },
  {
    title: "Blog App",
    description: "A blogging platform where users can read, create, and manage blog posts easily.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
    tech: ["React", "CSS", "Netlify"],
    github: "#",
    demo: "https://zuai-blogs.netlify.app/",
  },
  {
    title: "Todo with Authentication (Full Stack)",
    description: "A full-stack todo application with user authentication, task filtering, and CRUD operations.",
    image: "https://images.unsplash.com/photo-1537432376769-00a2f3f772c6",
    tech: ["React", "Node.js", "MongoDB", "Netlify"],
    github: "#",
    demo: "https://register-app-user.netlify.app/",
  },
  {
    title: "Post App",
    description: "A CRUD-based post management app with features like filtering and searching.",
    image: "https://images.unsplash.com/photo-1556741533-f6acd64760d4",
    tech: ["React", "CSS", "Netlify"],
    github: "#",
    demo: "https://apppost.netlify.app/",
  },
  {
    title: "E-Commerce App",
    description: "A comprehensive e-commerce app with advanced filtering and searching based on price, type, and category.",
    image: "https://images.unsplash.com/photo-1522204502615-dcf4b96b6a92",
    tech: ["React", "CSS", "Netlify"],
    github: "https://github.com/RameshBellani/appscrip.git",
    demo: "https://rameshappscrip.netlify.app/",
  },
  {
    title: "Group Chat (Full Stack)",
    description: "A real-time group chat application with features like user authentication and message persistence.",
    image: "https://images.unsplash.com/photo-1531497865142-2231cf1043c3",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Vercel"],
    github: "https://github.com/RameshBellani/group-chat-frontend.git",
    demo: "https://group-chat-frontend-mu.vercel.app/",
  },
  {
    title: "Foodie App",
    description: "A food delivery app featuring cart management, user authentication, and order tracking.",
    image: "https://images.unsplash.com/photo-1536510344842-14c5d78f43ab",
    tech: ["React", "Node.js", "CSS", "Vercel"],
    github: "https://github.com/RameshBellani/foodie.git",
    demo: "https://foodie-nine-virid.vercel.app/",
  },
  {
    title: "Role-Based Access Control Website",
    description: "An application demonstrating role-based access control for secure user management.",
    image: "https://images.unsplash.com/photo-1556742048-0c84da66dec3",
    tech: ["React", "Node.js", "Vercel"],
    github: "https://github.com/RameshBellani/RBAC-vrv.git",
    demo: "https://rbac-vrv.vercel.app/",
  },
  {
    title: "Video to Audio (Full Stack)",
    description: "A full-stack application that converts videos to audio files, featuring a Python backend.",
    image: "https://images.unsplash.com/photo-1533295613-48c5bfad6926",
    tech: ["React", "Python", "Node.js", "MongoDB", "Vercel"],
    github: "https://github.com/RameshBellani/video-to-audio-frontend.git",
    demo: "https://video-to-audio-frontend.vercel.app/",
  },
  {
    title: "Weather App",
    description: "A simple weather app providing real-time weather updates for any location.",
    image: "https://images.unsplash.com/photo-1561484936-3a4f5d7f2073",
    tech: ["React", "CSS", "Vercel"],
    github: "https://github.com/RameshBellani/plattr-weather.git",
    demo: "https://plattr-weather.vercel.app/",
  },
  {
    title: "Loan App (Full Stack)",
    description: "A full-stack loan management application with user authentication and financial calculations.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    tech: ["React", "Node.js", "MongoDB", "Vercel"],
    github: "https://github.com/RameshBellani/loan-app-frontend.git",
    demo: "https://loan-app-frontend-iota.vercel.app/",
  },
  {
    title: "ServerGuy (Search Engine)",
    description: "A custom search engine providing quick and accurate results, similar to Google Search.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    tech: ["React", "CSS", "Vercel"],
    github: "https://github.com/RameshBellani/server-guy.git",
    demo: "https://server-guy-beta.vercel.app/",
  },
  {
    title: "IPL Dashboard",
    description: "A dashboard providing comprehensive statistics and data visualizations for IPL matches.",
    image: "https://images.unsplash.com/photo-1515169067865-df7cb4e467af",
    tech: ["React", "CSS", "Vercel"],
    github: "https://github.com/RameshBellani/ipldashboard.git",
    demo: "https://enhipl.vercel.app/",
  },
  {
    title: "Movie DB",
    description: "A movie database app with filtering and search features for movie enthusiasts.",
    image: "https://images.unsplash.com/photo-1514387542170-25e8d64d1ab3",
    tech: ["React", "CSS", "Vercel"],
    github: "https://github.com/RameshBellani/moviedb.git",
    demo: "https://moviedata-omega.vercel.app/",
  },
  {
    title: "Orders App",
    description: "An order management app with pagination, selected items dispatch, and detailed tracking.",
    image: "https://images.unsplash.com/photo-1563225400-a0f86e15e09c",
    tech: ["React", "CSS", "Vercel"],
    github: "https://github.com/RameshBellani/ordersection.git",
    demo: "https://ordersection.vercel.app/",
  },
];

const categories = {
  all: projects,
  frontend: projects.filter(p => p.tech.some(t => ["React", "Vue.js", "Next.js"].includes(t))),
  backend: projects.filter(p => p.tech.some(t => ["Node.js", "Prisma", "Python", "MongoDB"].includes(t))),
  fullstack: projects.filter(p => p.tech.length >= 4),
};

export function ProjectsSection() {
  return (
    <section id="projects" className="container px-4 py-24 bg-muted/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">
              Explore my latest work and side projects
            </p>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
          </TabsList>
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
            <TabsContent key={category} value={category}>
              <ProjectCarousel projects={categories[category]} />
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}
