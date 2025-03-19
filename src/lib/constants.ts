import {
  BookTemplate,
  Home,
  LayoutTemplate,
  Settings,
  Settings2,
  Trash2,
} from "lucide-react";



export const data = {
  user: {
    name: "shandcn",
    email: "me@hamil.com",
    avatar: "/avatar/shadcn.jpg",
  },

  navMain: [
    {
      title: "Home",
      url: "/AdminDashboard",
      icon: Home,
    },
    // {
    //   title: "Templates",
    //   url: "/templates",
    //   icon: LayoutTemplate,
    // },
    {
      title: "Trash",
      url: "/trash",
      icon: Trash2,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

// animation used
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

