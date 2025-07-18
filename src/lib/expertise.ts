export type Skill = {
  title: string;
  percentage: number;
  en: string;
  ms: string;
  de: string;
  showcase?: showcase[];
};

export type showcase = {
  en: string;
  ms: string;
  de: string;
  link: string;
};

export const skills: Skill[] = [
  {
    title: "TypeScript",
    percentage: 75,
    en: "Proficient in writing TypeScript for web applications, utilizing custom types and interfaces to ensure type consistency across applications.",
    ms: "Mahir dalam menulis TypeScript untuk aplikasi web, menggunakan jenis dan antaramuka tersuai untuk memastikan ketekalan jenis merentas aplikasi.",
    de: "Beherrscht das Schreiben von TypeScript für Webanwendungen und nutzt benutzerdefinierte Typen und Schnittstellen, um die Typkonsistenz in allen Anwendungen sicherzustellen.",
  },
  {
    title: "Next.js",
    percentage: 70,
    en: "Familiar with Next.js as the preferred framework for building websites. Firm grasp on app router and React server components. This website is proudly built using Next.js.",
    ms: "Akrab dengan Next.js sebagai rangka kerja pilihan untuk membina laman web. Kefahaman teguh dalam App Router dan komponen pelayan React. Laman web ini dengan bangganya dibina menggunakan Next.js.",
    de: "Vertraut mit Next.js als bevorzugtem Framework für die Erstellung von Websites. Festes Verständnis für App-Router und React-Server-Komponenten. Diese Website wurde mit Stolz mit Next.js erstellt.",
  },
  {
    title: "Angular",
    percentage: 60,
    en: "Self-taught Angular and working with production code as part of internship programme. Additionally working with PrimeNG UI components and Primeflex utility classes. Experienced migrating codebase from v18 to v20.",
    ms: "Belajar Angular secara kendiri dan bekerja dalam kod produksi dalam program amali. Tambahan pula bekerja dengan komponen UI PrimeNG dan kelas utility Primeflex. Berpengalaman menghijrah asas kod dari v18 ke v20.",
    de: "Autodidaktisches Erlernen von Angular und Arbeit mit Produktionscode im Rahmen eines Praktikantenprogramms. Zusätzlich Arbeit mit PrimeNG UI Komponenten und Primeflex Utility Klassen. Erfahrung in der Migration von Codebase von v18 auf v20.",
  },
  {
    title: "C++",
    percentage: 60,
    en: "Solid understanding of C++. Built a CLI application that utilizes various data structures, memory management and performance profiling.",
    ms: "Pemahaman kukuh tentang C++. Membina aplikasi CLI yang menggunakan pelbagai struktur data, pengurusan memori dan pemprofilan prestasi.",
    de: "Gute Kenntnisse in C++. Aufbau einer CLI-Anwendung, die verschiedene Datenstrukturen, Speicherverwaltung und Leistungsprofilierung nutzt.",
  },
  {
    title: "Java",
    percentage: 65,
    en: "Strong foundation in object-oriented programming and multithreading using Java. Built an airport simulation system to showcase multiple processes running concurrently.",
    ms: "Asas yang kukuh dalam pengaturcaraan berorientasikan objek dan multithreading menggunakan Java. Membina sistem simulasi lapangan terbang untuk mempamerkan pelbagai proses berjalan serentak.",
    de: "Fundierte Kenntnisse in objektorientierter Programmierung und Multithreading mit Java. Aufbau eines Flughafensimulationssystems, um mehrere gleichzeitig laufende Prozesse zu präsentieren.",
  },
  {
    title: "C#",
    percentage: 65,
    en: "Experienced in C# for writing .NET applications and games using Unity.",
    ms: "Berpengalaman dalam C# untuk menulis aplikasi .NET dan permainan video menggunakan Unity.",
    de: "Erfahrung in C# zum Schreiben von .NET-Anwendungen und Spielen mit Unity.",
  },
  {
    title: "Python",
    percentage: 60,
    en: "Experienced in Python for CLI applications. Built a CRUD program with CSV parsing for a PPE inventory management system.",
    ms: "Berpengalaman dalam Python untuk menulis aplikasi alat baris arahan. Membina program CRUD dengan penghurai CSV untuk sistem pengurusan inventory PPE",
    de: "Erfahren in Python für CLI-Anwendungen. Erstellung eines CRUD-Programms mit CSV-Parsing für ein PSA-Bestandsverwaltungssystem.",
  },
  {
    title: "Linux",
    percentage: 75,
    en: "Highly familiar with Linux and general command line tools. Daily driving a custom Debian install and administering a Nextcloud server running Ubuntu Server.",
    ms: "Sangat akrab dengan Linux dan alat baris arahan umum. Setiap hari memandu pemasangan Debian tersuai dan mentadbir pelayan Nextcloud yang menjalankan Ubuntu Server.",
    de: "Sehr vertraut mit Linux und allgemeinen Kommandozeilen-Tools. Tägliches Betreiben einer benutzerdefinierten Debian-Installation und Verwalten eines Nextcloud-Servers mit Ubuntu Server.",
  },
  {
    title: "PostgreSQL",
    percentage: 65,
    en: "Solid understanding of database management using PostgreSQL. Using Postgre as database system for Nextcloud server.",
    ms: "Pemahaman kukuh pengurusan pangkalan data menggunakan PostgreSQL. Menggunakan Postgre sebagai sistem pangkalan data untuk pelayan Nextcloud.",
    de: "Solide Kenntnisse der Datenbankverwaltung mit PostgreSQL. Verwendung von Postgre als Datenbanksystem für Nextcloud Server.",
  },
  {
    title: "Krita",
    percentage: 90,
    en: "Highly proficient in illustration work using Krita. Adaptive with various art styles and techniques.",
    ms: "Berkemahiran tinggi dalam kerja ilustrasi menggunakan Krita. Adaptif dengan pelbagai gaya dan teknik seni.",
    de: "Sehr versiert in der Illustrationsarbeit mit Krita. Anpassungsfähig im Umgang mit verschiedenen Kunststilen und Techniken.",
  },
  {
    title: "Adobe After Effects",
    percentage: 80,
    en: "Proficient with After Effects for motion graphics. Realizing creative expression for personal video projects and Live2D style character animations.",
    ms: "Mahir menggunakan After Effects untuk grafik animasi. Menyedari ekspresi kreatif untuk projek video peribadi dan animasi watak gaya Live2D.",
    de: "Beherrschung von After Effects für Grafikanimationen. Verwirklichung kreativer Ausdrucksformen für persönliche Videoprojekte und Charakteranimationen im Live2D-Stil.",
  },
  {
    title: "Blender",
    percentage: 50,
    en: "Hobbyist proficiency in 3D graphics using Blender. Created a short skit for a multiple animator project (MAP)",
    ms: "Penggemar hobi dalam grafik 3D menggunakan Blender. Mencipta skit pendek untuk projek animator berbilang (MAP)",
    de: "Hobbymäßige Beherrschung der 3D-Grafik mit Blender. Erstellung eines kurzen Sketches für ein Projekt mit mehreren Animatoren (MAP)",
  },
  {
    title: "Solidity",
    percentage: 50,
    en: "Foundational skills in writing blockchain smart contracts using Solidity. Completed the Solidity course in Alchemy University and applied knowledge in various blockchain hackathons.",
    ms: "Kemahiran asas dalam menulis kontrak pintar blockchain menggunakan Solidity. Menyelesaikan kursus Solidity di Alchemy University dan menggunakan pengetahuan dalam pelbagai hackathon blockchain.",
    de: "Grundlegende Kenntnisse im Schreiben von Blockchain-Smart Contracts mit Solidity. Abschluss des Solidity-Kurses an der Alchemy University und Anwendung der Kenntnisse in verschiedenen Blockchain-Hackathons.",
  },
];
