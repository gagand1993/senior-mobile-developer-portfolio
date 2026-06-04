import {
  AppWindow,
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  Linkedin,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Rocket,
  ShieldCheck,
  Smartphone,
  Store,
  UsersRound,
  Wrench
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const heroBadges = [
  "Kotlin",
  "Java",
  "Flutter",
  "Dart",
  "Jetpack Compose",
  "MVVM",
  "MVI",
  "Clean Architecture"
];

export const skillGroups = [
  {
    title: "Android",
    icon: Smartphone,
    skills: ["Kotlin", "Java", "Jetpack Compose", "XML", "Coroutines", "Flow", "Hilt", "Retrofit"]
  },
  {
    title: "Flutter",
    icon: AppWindow,
    skills: ["Dart", "Flutter", "BLoC", "GetX", "Dio", "Responsive UI"]
  },
  {
    title: "Architecture",
    icon: Layers3,
    skills: ["Clean Architecture", "MVVM", "MVI", "MVC", "Dependency Injection"]
  },
  {
    title: "APIs & SDKs",
    icon: Code2,
    skills: ["REST APIs", "Firebase", "Agora", "QuickBlox", "Google Maps SDK", "CameraX"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Room", "SQLite", "Firestore"]
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Android Studio", "VS Code", "Git", "Firebase Console", "Play Store", "App Store"]
  },
  {
    title: "Other",
    icon: Rocket,
    skills: ["Agile", "Scrum", "CI/CD Basics", "Performance Profiling"]
  }
];

export const experiences = [
  {
    company: "Code Brew Innovation Pvt Ltd",
    role: "Sr. Android Developer",
    period: "Feb 2026 - Present",
    points: [
      "Developing scalable Android applications using Kotlin, Jetpack Compose, MVVM, MVI, and modern Android architecture.",
      "Working with Compose Multiplatform (CMP) and Kotlin Multiplatform (KMP) for shared UI and business logic.",
      "Contributing to React Native mobile features with Claude-assisted development for faster implementation and debugging.",
      "Improving app performance, stability, and release quality through testing, optimization, and cross-functional collaboration."
    ]
  },
  {
    company: "DigiMantra Labs",
    role: "Senior Mobile Application Developer",
    period: "Oct 2023 - Dec 2025",
    points: [
      "Built scalable Flutter and Android applications.",
      "Implemented Clean Architecture with BLoC, GetIt, and Dio.",
      "Led and guided a 4-member development team.",
      "Improved app performance, stability, and delivery quality.",
      "Worked on WellTra.AI Health Tracker with Flutter, native SDKs, and rPPG processing."
    ]
  },
  {
    company: "Netset Software Pvt Ltd",
    role: "Senior Android Developer",
    period: "Nov 2022 - Sep 2023",
    points: [
      "Developed Android apps using Kotlin, Jetpack Compose, MVVM, Coroutines, and Hilt.",
      "Applied Clean Architecture principles.",
      "Reviewed technical designs and improved app scalability.",
      "Worked with Web3, AI integration, and mobile app performance improvements."
    ]
  },
  {
    company: "CQLsys Technologies Pvt Ltd",
    role: "Senior Android Developer",
    period: "Jan 2018 - Nov 2022",
    points: [
      "Managed and guided a 6-member mobile team.",
      "Delivered 20+ mobile projects.",
      "Integrated Firebase, Retrofit, payment gateways, Agora, and QuickBlox.",
      "Improved app stability and handled production-level debugging."
    ]
  },
  {
    company: "Candour Tech Solutions",
    role: "Junior Android Developer",
    period: "Jul 2017 - Jan 2018",
    points: [
      "Built Android apps from scratch.",
      "Worked on Android SDK, UI implementation, testing, and release support."
    ]
  }
];

export const projects = [
  {
    title: "WellTra.AI Health Tracker",
    description:
      "A health tracking app using rPPG technology for contactless vital signs monitoring through a phone camera.",
    tech: ["Flutter", "Dart", "BLoC", "Dio", "Kotlin", "Swift", "NDK", "C/C++", "Clean Architecture", "AI Integration"],
    actions: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.welltra&hl=en&gl=US&pli=1"
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/welltra-ai-health-tracker-app/id6474238774"
      }
    ]
  },
  {
    title: "KaCyber Go Ticketing App",
    description:
      "A city-to-city travel booking platform for the Uganda market with payment gateway integration.",
    tech: ["Kotlin", "Retrofit", "MVVM", "Coroutines", "Hilt", "Google Maps SDK"],
    actions: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/search?q=kacyber+go&c=apps&hl=en"
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/kacyber-go/id1143469480"
      }
    ]
  },
  {
    title: "Mender",
    description:
      "A location-based service app with real-time tracking, hourly payments, and swipe-to-complete job tracking.",
    tech: ["Kotlin", "Retrofit", "MVVM", "Coroutines", "Hilt", "Socket.IO", "Google Maps SDK"],
    actions: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.mender&hl=en_IN"
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/mender-app-clientes/id1504847194"
      }
    ]
  },
  {
    title: "TicketLink",
    description:
      "A secure document management app with expiry tracking, fingerprint authentication, and multi-level notifications.",
    tech: ["Kotlin", "MVVM", "Coroutines", "Hilt", "Local Storage"],
    actions: [{ label: "Case Study", href: "#contact" }]
  },
  {
    title: "CarSwap",
    description:
      "A car buy, sell, and exchange marketplace with automated pricing and monthly offer management.",
    tech: ["Kotlin", "Retrofit", "MVVM", "Coroutines", "Hilt"],
    actions: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.elitem.carswap.me"
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/carswap/id1151619605"
      }
    ]
  }
];

export const achievements = [
  { label: "8+ years", text: "Mobile app development experience", icon: Award },
  { label: "20+ projects", text: "Mobile products delivered", icon: BriefcaseBusiness },
  { label: "4-6 members", text: "Team leadership experience", icon: UsersRound },
  { label: "Production apps", text: "Android and Flutter deployments", icon: Store },
  { label: "Architecture", text: "Clean Architecture and optimization", icon: ShieldCheck },
  { label: "Stores", text: "Play Store and App Store delivery", icon: Rocket }
];

export const contactItems = [
  { label: "Email", value: "gagand1993@gmail.com", href: "mailto:gagand1993@gmail.com", icon: Mail },
  { label: "Phone", value: "+91 8053212548", href: "tel:+918053212548", icon: Phone },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gagan-deep-singh-50385a113",
    href: "https://www.linkedin.com/in/gagan-deep-singh-50385a113/",
    icon: Linkedin
  },
  { label: "Location", value: "Yamunanagar, Haryana, India", href: "#contact", icon: MapPin }
];
