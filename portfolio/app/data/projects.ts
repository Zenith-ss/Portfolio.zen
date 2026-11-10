export type ProjectDetail = {
  id: string;
  num: string;
  title: string;
  domain: string;
  category: "all" | "edge-ai" | "robotics" | "mobile";
  badge?: string;
  tagline: string;
  shortSummary: string;
  fullOverview: string[];
  keyHighlights: string[];
  personalContribution: string[];
  techStack: { name: string; role: string }[];
  hardwareSpecs?: { label: string; value: string }[];
  architecturePoints: string[];
  githubUrl?: string;
  schematicType: "edge-ai" | "android" | "robotics" | "flutter" | "hackathon";
};

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "flint",
    num: "01",
    title: "FLINT Edge AI Device",
    domain: "EDGE AI & COMPUTER VISION",
    category: "edge-ai",
    badge: "Special Recognition · Navomesh '26 · ₹10K Prize",
    tagline: "Raspberry Pi 5 on-device real-time visual detection and edge inference system.",
    shortSummary:
      "A high-performance edge computing prototype built for the Navomesh 2026 innovation competition. Performs real-time visual detection locally on ARM architecture without cloud dependency.",
    fullOverview: [
      "FLINT was created to solve critical latency and bandwidth bottlenecks of traditional cloud-reliant computer vision systems. By bringing inference directly to edge compute hardware, the system evaluates real-time optical feeds without internet connectivity.",
      "The physical prototype leverages a Raspberry Pi 5 with customized thermal dissipators, continuous power delivery regulation, and a hardware-accelerated computer vision pipeline fine-tuned for edge resource limits.",
    ],
    keyHighlights: [
      "Real-time edge inference at ~30 FPS on local hardware with sub-50ms latency.",
      "Zero reliance on cloud processing or active wireless telemetry for object detection.",
      "Custom thermal management ensuring stable CPU clock speeds under continuous load.",
      "Awarded Special Recognition and ₹10,000 cash prize at Navomesh 2026.",
    ],
    personalContribution: [
      "Raspberry Pi 5 hardware setup, OS optimization, and environment dependencies.",
      "Fine-tuned the YOLO model specifically for target detection tasks (initial base training was conducted by teammate).",
      "Integrated the trained model weights into the on-device inference runtime.",
      "Designed the physical enclosure layout, wiring harness, and component mounting.",
      "Engineered continuous power distribution and thermal cooling to prevent thermal throttling.",
      "Led end-to-end prototyping and live hardware demonstration during competition rounds.",
    ],
    techStack: [
      { name: "Raspberry Pi 5", role: "Primary Edge SBC" },
      { name: "YOLOv8 Fine-Tuning", role: "Custom Weights" },
      { name: "Computer Vision", role: "Frame Processing" },
      { name: "Python", role: "Inference Engine" },
    ],
    hardwareSpecs: [
      { label: "Compute Unit", value: "Raspberry Pi 5 (8GB LPDDR4X)" },
      { label: "Inference Engine", value: "PyTorch / ONNX Runtime Edge" },
      { label: "Cooling Solution", value: "Active Dual-Fan Heatsink Assembly" },
      { label: "Power Rail", value: "5V / 5A USB-C PD Interface" },
      { label: "Camera Sensor", value: "High-Speed Wide-Angle CSI Stream" },
    ],
    architecturePoints: [
      "Camera Sensor Stream → CSI / USB 3.0 Bus",
      "Pre-processing Frame Buffer & Normalization",
      "Fine-Tuned YOLOv8 Inference on ARM Cortex-A76",
      "Bounding Box Parsing & Class Confidence Extraction",
      "Local Output Trigger & Telemetry Logging",
    ],
    schematicType: "edge-ai",
  },
  {
    id: "ezseva",
    num: "02",
    title: "EzSeva – AI Healthcare Portal",
    domain: "MOBILE APPLICATION & AI",
    category: "mobile",
    badge: "Collaborative Team Build",
    tagline: "Android medical access portal connecting patients with hospital workflows and Gemini triage.",
    shortSummary:
      "A dual-portal Android healthcare platform engineered to streamline patient booking, medical history, and intelligent department recommendations.",
    fullOverview: [
      "EzSeva tackles patient friction in accessing specialty medical care by offering an intuitive appointment scheduling interface paired with an AI-driven symptom classifier.",
      "The platform supports bilingual interaction (English and Hindi) to ensure accessibility for tier-2 and rural patients, connecting directly with hospital administration dashboards.",
    ],
    keyHighlights: [
      "Integrated Gemini API for symptom-to-specialty department recommendations.",
      "Bilingual user experience tailored for English and Hindi speakers.",
      "Comprehensive appointment scheduling and electronic health record storage.",
      "Collaborative project built using modern Android Jetpack Compose & Material 3 architecture.",
    ],
    personalContribution: [
      "Crafted UI/UX screen wireframes, user flow diagrams, and accessibility layouts.",
      "Conducted rigorous testing across various screen resolutions and edge-case inputs.",
      "Assisted with component styling and feature integration using AI-assisted coding tools.",
      "Note: Core Android Kotlin architecture, Jetpack Compose codebase, and API backend were collaboratively developed by the project team.",
    ],
    techStack: [
      { name: "Kotlin", role: "Team Core Language" },
      { name: "Jetpack Compose", role: "Modern Android UI" },
      { name: "Material 3", role: "Design Language" },
      { name: "Gemini API", role: "Symptom Recommendation" },
    ],
    hardwareSpecs: [
      { label: "Target Platform", value: "Android 8.0+ (API 26+)" },
      { label: "Architecture", value: "MVVM with Jetpack Compose" },
      { label: "AI Integration", value: "Gemini Pro REST Endpoint" },
      { label: "Localization", value: "English & Hindi Dynamic Switching" },
    ],
    architecturePoints: [
      "Patient Input / Voice Query Interface",
      "Gemini Triage Prompting & Semantic Department Categorization",
      "Hospital Appointment Slot Matcher & Firestore Sync",
      "Administrative Doctor Schedule Management Dashboard",
    ],
    schematicType: "android",
  },
  {
    id: "esp32car",
    num: "03",
    title: "ESP32 Obstacle Racing Car",
    domain: "ROBOTICS & EMBEDDED CONTROL",
    category: "robotics",
    badge: "2nd Runner-Up · Ignition 2.0",
    tagline: "Custom four-motor robotic platform built for high-speed obstacle evasion and agile maneuvering.",
    shortSummary:
      "High-torque four-wheel-drive rover engineered from raw chassis to wireless firmware, securing a 2nd Runner-Up podium finish at Ignition 2.0.",
    fullOverview: [
      "Built for extreme track navigation with sharp chicanes, elevated ramps, and narrow obstacle gates. The vehicle balances high motor torque with instant steering responsiveness.",
      "Powered by an ESP32 microcontroller utilizing dual H-bridge motor drivers with differential speed PWM modulation to handle rapid directional transitions without stalling.",
    ],
    keyHighlights: [
      "2nd Runner-Up standing in the competitive Obstacle Car Race at Ignition 2.0.",
      "Four-wheel independent high-torque motor drive with differential steering.",
      "Low-latency 2.4 GHz wireless telemetry with millisecond response time.",
      "Custom power isolation between logic microcontroller and motor driver rails.",
    ],
    personalContribution: [
      "Designed and physically assembled the four-motor chassis and suspension layout.",
      "Selected and wired dual H-bridge motor drivers, voltage regulators, and battery packs.",
      "Programmed the ESP32 embedded firmware for wireless packet decoding and motor PWM control.",
      "Calibrated steering curves and throttle response for competitive obstacle navigation.",
      "Competed as the vehicle pilot to secure the podium position.",
    ],
    techStack: [
      { name: "ESP32", role: "Master Controller" },
      { name: "Embedded C", role: "Firmware" },
      { name: "Motor Drivers", role: "H-Bridge Stages" },
      { name: "2.4 GHz Wireless", role: "Control Protocol" },
    ],
    hardwareSpecs: [
      { label: "Microcontroller", value: "ESP32-WROOM-32 (Dual Core 240MHz)" },
      { label: "Chassis", value: "4-Wheel Drive Differential Steer" },
      { label: "Power Source", value: "11.1V 3S LiPo Battery Pack" },
      { label: "Actuators", value: "4x High-Torque Geared DC Motors" },
    ],
    architecturePoints: [
      "Wireless Control Telemetry (2.4GHz Transceiver / WebSockets)",
      "ESP32 Packet Parsing & Emergency Fail-Safe Stop",
      "Differential Steering PWM Calculation",
      "H-Bridge Motor Driver Power Stage",
      "4x DC Geared Drive Wheels",
    ],
    schematicType: "robotics",
  },
  {
    id: "rll",
    num: "04",
    title: "Real-Life Leveling",
    domain: "APPLICATION DEVELOPMENT",
    category: "mobile",
    badge: "Independent Learning Project",
    tagline: "Gamified self-improvement mobile app converting daily productivity into RPG stat progression.",
    shortSummary:
      "A personal productivity tool inspired by role-playing mechanics where completing real-world tasks rewards experience points, unlocking skill tree mastery.",
    fullOverview: [
      "Real-Life Leveling was created as Sameer's first independent application development project to master cross-platform mobile engineering with Flutter and Dart.",
      "The app bridges psychological gamification with habit tracking, allowing users to define custom quests, track stat attributes (Discipline, Physical, Knowledge), and watch their character level scale over time.",
    ],
    keyHighlights: [
      "100% independently designed and developed from scratch.",
      "Custom RPG game loop with XP formulas, attribute leveling, and quest log.",
      "Local state caching and offline persistence using SharedPreferences.",
      "Fluid animations and responsive mobile UI built entirely in Flutter.",
    ],
    personalContribution: [
      "Self-taught Dart and Flutter framework concepts while engineering this project.",
      "Architected the gamified quest-log progression algorithm and stat formulas.",
      "Designed every UI screen, custom level badges, and interactive progress bars.",
      "Implemented local offline data storage and persistence using SharedPreferences.",
    ],
    techStack: [
      { name: "Flutter", role: "Cross-Platform Framework" },
      { name: "Dart", role: "Application Logic" },
      { name: "SharedPreferences", role: "Local Persistence" },
      { name: "UI/UX Design", role: "Gamified Visuals" },
    ],
    hardwareSpecs: [
      { label: "Platform Target", value: "Android & iOS (Flutter)" },
      { label: "Storage Engine", value: "Key-Value Local Persistence" },
      { label: "Architecture", value: "Stateful Widget Hierarchy" },
      { label: "Status", value: "Completed Foundational Build" },
    ],
    architecturePoints: [
      "User Quest Creation & Attribute Assignment",
      "Task Completion Verification & XP Calculation Formula",
      "Character Level-Up Threshold Trigger",
      "SharedPreferences Offline Storage Sync",
    ],
    githubUrl: "https://github.com/Zenith-ss/Real-Life-Leveling",
    schematicType: "flutter",
  },
  {
    id: "sih",
    num: "05",
    title: "IP-SAKTI Sahayak (SIH Prototype)",
    domain: "RAPID PROTOTYPING & UI/UX",
    category: "all",
    badge: "Institute-Level Selection · SIH '26",
    tagline: "Government challenge prototype selected through BIT Raipur's internal evaluation round.",
    shortSummary:
      "A prototype addressing an official national challenge statement under the Smart India Hackathon 2026 framework, qualified through BIT Raipur's internal evaluation rounds.",
    fullOverview: [
      "Selected during the competitive institute screening round for Smart India Hackathon 2026 at Bhilai Institute of Technology.",
      "Collaborated on rapid problem definition, user journey mapping, and frontend implementation under strict evaluation rubrics.",
    ],
    keyHighlights: [
      "Qualified through the internal institutional screening round at BIT Raipur.",
      "Focused on rapid UI/UX wireframing and frontend prototype delivery.",
      "Structured to tackle real-world public infrastructure and patient assistance workflows.",
    ],
    personalContribution: [
      "Contributed to frontend component layout and screen workflows.",
      "Collaborated on UI/UX mockups and user flow architecture.",
      "Participated in live evaluation pitch and prototype demonstration.",
    ],
    techStack: [
      { name: "Frontend Prototyping", role: "Screen Layouts" },
      { name: "UI/UX Design", role: "User Journeys" },
      { name: "Problem Analysis", role: "Requirement Scoping" },
    ],
    hardwareSpecs: [
      { label: "Hackathon Stage", value: "Institute Internal Selection Qualified" },
      { label: "Team Environment", value: "Multi-Disciplinary Engineering Team" },
      { label: "Focus", value: "Civic & Infrastructure Optimization" },
    ],
    architecturePoints: [
      "Problem Statement Deconstruction",
      "User Persona & Workflow Mapping",
      "Interactive Screen Prototyping",
      "Institutional Panel Evaluation & Demonstration",
    ],
    githubUrl: "https://github.com/Zenith-ss/IP-SAKTI-Sahayak",
    schematicType: "hackathon",
  },
];
