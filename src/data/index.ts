export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I'm a software engineer, with over two years experience, passionate about transcending the norm. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/me.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Lexstar",
    des: "A software solution for Dyslexics, built with Next.js to empower African learners with personalized educational tools.",
    img: "/lexstar.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
      "/zustand.jpeg",
    ],
    link: "https://lexstar.ng",
  },
  {
    id: 2,
    title: "Growwr Talent",
    des: "A software solution for Growwr Talent, built with Next.js, enabling workers to manage job applications and opportunities.",
    img: "/growwr.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/zustand.jpeg",
      "/fm.svg",
    ],
    link: "https://talent.growwr.co/",
  },
  {
    id: 3,
    title: "EazzyHub",
    des: "A dynamic website and web app built using Next.js for Eazzy Hub Africa, enhancing B2B sales and marketing operations.",
    img: "/eazzy.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/zustand.jpeg",
      "/fm.svg",
    ],
    link: "https://eazzyhub.com",
  },
  {
    id: 4,
    title: "Jabbercoms",
    des: "A React solution for Jabbercoms Limited with dynamic animations using Framer Motion and GSAP to enhance brand marketing.",
    img: "/jabbercoms.png",
    iconLists: [
      "/re.svg",
      "/ts.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
      "/gsap.svg",
    ],
    link: "https://jabbercoms.netlify.app/",
  },
  {
    id: 4,
    title: "Unsplash Clone",
    des: "A Frontend test from cowrywise",
    img: "/unsplash.png",
    iconLists: ["/scss.svg", "/vue.svg", "/ts.svg"],
    link: "https://unsplash-clone-mosh.vercel.app/",
  },
];

export const testimonials = [
  // {
  //   quote:
  //     "Collaborating with Mosh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mosh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mosh is the ideal partner.",
  //   name: "Emmanuel Ajayi",
  //   title: "Director of AlphaStream Technologies",
  // },
  {
    quote:
      "Tobi made sure we stayed focused on our goals and achieved them. It was an absolute pleasure collaborating with you and I hope to keep workng with you.",
    name: "Binatari",
    title: "Product Manager at Product Kitchen",
  },
  {
    quote:
      "Working with Tobi was an interesting experience. While it was clear that there was a lot more for him to learn, he proactively took charge in upskilling yourself while being a good team member.",
    name: "Arinze Okorji",
    title: "Frontend Engineer at SID Digital",
  },
  {
    quote:
      "Working with Tobi was a delight. He delivered milestones in record time with very little supervision. He was always ready to work, open to feedback and completely committed to the task at hand. Can't wait to work with him again!",
    name: "James Nottidge",
    title: "Senior Engineer at Quidax",
  },
  {
    quote:
      "Collaborating with Mosh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Mosh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Mosh is the ideal partner.",
    name: "Adenuga Oluwaseun",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Tobi is an exceptional frontend engineer with unmatched speed and attention to detail. His innovative approach consistently delivers results that exceed client expectations. A true rockstar in every sense",
    name: "Emmanuel Ajayi",
    title: "Director Engineering",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a card request and delivery system(Door-to-door) designed primarily for financial institutions using Angular.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  {
    id: 3,
    title: "Freelance Frontend Projects",
    desc: "I collaborated with diverse clients to transform their ideas into functional, scalable, and visually appealing solution ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    route: "https://github.com/Tobimosh",
  },
  {
    id: 2,
    img: "/twit.svg",
    route: "https://x.com/toBi_mo_",
  },
  {
    id: 3,
    img: "/link.svg",
    route: "https://www.linkedin.com/in/oluwatobi-moshood-2b911922a/",
  },
];
