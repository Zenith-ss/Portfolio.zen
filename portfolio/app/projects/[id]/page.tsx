import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Cpu, Wrench, Trophy, Layers, ArrowRight, Bot, Smartphone } from "lucide-react";
import { PROJECTS_DATA, ProjectDetail } from "../../data/projects";
import { GithubIcon } from "../../components/SocialIcons";

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

function DetailSchematicView({ type }: { type: ProjectDetail["schematicType"] }) {
  if (type === "edge-ai") {
    return (
      <div className="detail-schematic w-full p-6 sm:p-8 rounded-xl bg-[#0D1527] border-2 border-[#F4EDE0]/20 font-mono text-xs text-[#F4EDE0] shadow-[4px_4px_0px_0px_#F4EDE0]">
        <div className="flex items-center justify-between border-b border-[#F4EDE0]/20 pb-3 mb-5">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Cpu size={16} />
            <span>ON-DEVICE EDGE INFERENCE PIPELINE (FLINT)</span>
          </div>
          <span className="schematic-status-badge text-[11px] px-2.5 py-0.5 rounded bg-[#F4EDE0] text-[#14213D] font-bold">
            ON-DEVICE EXECUTION
          </span>
        </div>
        <div className="space-y-3 py-2">
          <div className="schematic-row p-3.5 rounded bg-[#14213D] border border-[#F4EDE0]/20 flex items-center justify-between">
            <span className="font-semibold">Optical Camera Stream (1080p @ 30 FPS)</span>
            <span className="text-[11px] font-bold text-[#F4EDE0]/70">CSI BUS</span>
          </div>
          <div className="text-center text-sm font-bold">↓ Frame Buffer Normalization</div>
          <div className="schematic-row-highlight p-4 rounded bg-[#F4EDE0] text-[#14213D] border-2 border-[#14213D] flex items-center justify-between font-black shadow-md">
            <span>Fine-Tuned YOLOv8 Object Detection Engine</span>
            <span className="schematic-inner-badge text-xs bg-[#14213D] text-[#F4EDE0] px-2 py-0.5 rounded">ARM Cortex-A76</span>
          </div>
          <div className="text-center text-sm font-bold">↓ Class Confidence &amp; BBox Extraction</div>
          <div className="schematic-row p-3.5 rounded bg-[#14213D] border border-[#F4EDE0]/20 flex items-center justify-between">
            <span className="font-semibold">Local Decision Output &amp; Telemetry Log</span>
            <span className="text-[11px] font-bold text-[#F4EDE0]/70">&lt;45ms Latency</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#F4EDE0]/20 text-xs text-[#F4EDE0]/70">
          <span>COOLING: ACTIVE DUAL HEATSINK</span>
          <span>POWER: 5V / 5A USB-C PD</span>
        </div>
      </div>
    );
  }

  if (type === "android") {
    return (
      <div className="detail-schematic w-full p-6 sm:p-8 rounded-xl bg-[#0D1527] border-2 border-[#F4EDE0]/20 font-mono text-xs text-[#F4EDE0] shadow-[4px_4px_0px_0px_#F4EDE0]">
        <div className="flex items-center justify-between border-b border-[#F4EDE0]/20 pb-3 mb-5">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Smartphone size={16} />
            <span>EZSEVA HEALTHCARE ARCHITECTURE SHELL</span>
          </div>
          <span className="schematic-status-badge text-[11px] px-2.5 py-0.5 rounded bg-[#F4EDE0] text-[#14213D] font-bold">
            KOTLIN / COMPOSE
          </span>
        </div>
        <div className="space-y-3 py-2">
          <div className="schematic-row p-3.5 rounded bg-[#14213D] border border-[#F4EDE0]/20 text-sm font-sans font-bold">
            Patient Mobile Portal (Jetpack Compose + Material 3)
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="schematic-row p-3 rounded bg-[#14213D] border border-[#F4EDE0]/20">
              <span className="block font-bold mb-1">Gemini API Integration</span>
              Natural Language Symptom Triage &amp; Department Routing
            </div>
            <div className="schematic-row p-3 rounded bg-[#14213D] border border-[#F4EDE0]/20">
              <span className="block font-bold mb-1">Bilingual Localization</span>
              Instant English &amp; Hindi Dynamic Interface Switching
            </div>
          </div>
          <div className="schematic-row p-3.5 rounded bg-[#14213D] border border-[#F4EDE0]/20 text-xs text-[#F4EDE0]/80">
            Hospital Admin Portal &amp; Electronic Medical Records Sync
          </div>
        </div>
        <div className="pt-3 mt-4 border-t border-[#F4EDE0]/20 text-xs text-center font-bold text-[#F4EDE0]">
          SAMEER&apos;S DIRECT SCOPE: UI/UX DESIGN · RESOLUTION TESTING · INTEGRATION
        </div>
      </div>
    );
  }

  if (type === "robotics") {
    return (
      <div className="detail-schematic w-full p-6 sm:p-8 rounded-xl bg-[#0D1527] border-2 border-[#F4EDE0]/20 font-mono text-xs text-[#F4EDE0] shadow-[4px_4px_0px_0px_#F4EDE0]">
        <div className="flex items-center justify-between border-b border-[#F4EDE0]/20 pb-3 mb-5">
          <div className="flex items-center gap-2 font-bold text-sm">
            <Bot size={16} />
            <span>ESP32 ROVER HARDWARE ARCHITECTURE</span>
          </div>
          <span className="schematic-status-badge text-[11px] px-2.5 py-0.5 rounded bg-[#F4EDE0] text-[#14213D] font-bold">
            IGNITION 2.0 PODIUM
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 py-2 text-center">
          <div className="schematic-row p-3 rounded bg-[#14213D] border border-[#F4EDE0]/20">
            <span className="text-sm font-bold block mb-1">Front Differential Drive</span>
            <span className="text-xs text-[#F4EDE0]/70">PWM Channels 1 &amp; 2</span>
          </div>
          <div className="schematic-row p-3 rounded bg-[#14213D] border border-[#F4EDE0]/20">
            <span className="text-sm font-bold block mb-1">Rear Differential Drive</span>
            <span className="text-xs text-[#F4EDE0]/70">PWM Channels 3 &amp; 4</span>
          </div>
          <div className="schematic-row-highlight col-span-2 p-3.5 rounded bg-[#F4EDE0] text-[#14213D] border-2 border-[#14213D] font-black text-sm shadow-md">
            ESP32 Microcontroller · 2.4 GHz Low-Latency Wireless Control
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#F4EDE0]/20 text-xs text-[#F4EDE0]/70">
          <span>4-WHEEL DRIVE CHASSIS</span>
          <span>HIGH-TORQUE DC MOTORS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-schematic w-full p-6 sm:p-8 rounded-xl bg-[#0D1527] border-2 border-[#F4EDE0]/20 font-mono text-xs text-[#F4EDE0] shadow-[4px_4px_0px_0px_#F4EDE0]">
      <div className="flex items-center justify-between border-b border-[#F4EDE0]/20 pb-3 mb-4">
        <div className="flex items-center gap-2 font-bold text-sm">
          <Layers size={16} />
          <span>TECHNICAL PROTOTYPE BLUEPRINT</span>
        </div>
        <span className="schematic-status-badge text-[11px] px-2.5 py-0.5 rounded bg-[#F4EDE0] text-[#14213D] font-bold">
          DOCUMENTED
        </span>
      </div>
      <div className="schematic-row p-4 rounded bg-[#14213D] border border-[#F4EDE0]/20 text-center my-4">
        <span className="font-heading font-black text-base block mb-1">
          Hardware &amp; Software Interface Map
        </span>
        <span className="text-xs text-[#F4EDE0]/70">
          Circuit schematics, pinout allocation, and state workflow diagrams
        </span>
      </div>
    </div>
  );
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const project = PROJECTS_DATA.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Find next project for smooth browsing
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div className="min-h-screen bg-[#0A1120] text-[#F4EDE0] font-sans selection:bg-[#F4EDE0] selection:text-[#14213D]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0A1120]/95 backdrop-blur-md border-b border-[#F4EDE0]/15 py-3.5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4EDE0] hover:underline"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO OVERVIEW</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs text-[#F4EDE0]/50 font-semibold">
            <span>PROJECT {project.num} // 0{PROJECTS_DATA.length}</span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        {/* Project Header in Solid 3D Cream Hero Card */}
        <div className="p-8 sm:p-10 rounded-xl card-3d-cream mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="project-domain-badge font-mono text-xs px-2.5 py-1 rounded bg-[#14213D] text-[#F4EDE0] font-bold tracking-widest uppercase">
              {project.domain}
            </span>
            {project.badge && (
              <span className="font-mono text-xs px-2.5 py-1 rounded border-2 border-[#14213D] text-[#14213D] font-bold flex items-center gap-1.5">
                <Trophy size={13} />
                <span>{project.badge}</span>
              </span>
            )}
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#14213D] tracking-tight leading-tight mb-3">
            {project.title}
          </h1>

          <p className="font-body text-base sm:text-lg text-[#14213D]/80 max-w-2xl leading-relaxed mb-6 font-medium">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-[#14213D]/15">
            {/* ONLY show GitHub button if repo exists */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-navy inline-flex items-center gap-2 px-5 py-2.5 rounded font-mono text-xs font-bold tracking-wider"
              >
                <GithubIcon size={14} />
                <span>GITHUB REPOSITORY</span>
                <ArrowUpRight size={13} />
              </a>
            )}

            <a
              href={`mailto:ssinghzh211@gmail.com?subject=Project inquiry: ${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border-2 border-[#14213D] text-[#14213D] font-mono text-xs font-bold tracking-wider hover:bg-[#14213D] hover:text-[#F4EDE0] transition-colors"
            >
              <span>DISCUSS THIS BUILD</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Dedicated On-Device Schematic Architecture View */}
        <div className="mb-12">
          <DetailSchematicView type={project.schematicType} />
        </div>

        {/* 2-Column Main Content with 3D Depth */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (8 cols): Overview, Contributions, Highlights */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Section */}
            <div className="p-6 sm:p-8 rounded-xl card-3d-navy">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4EDE0] tracking-widest uppercase mb-3 font-bold">
                <Layers size={14} />
                <span>SYSTEM CONTEXT &amp; ARCHITECTURE</span>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#F4EDE0]/85 font-body leading-relaxed">
                {project.fullOverview.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Individual Contribution Box (Strict Academic Transparency) */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#14213D] border-2 border-[#F4EDE0] shadow-[5px_5px_0px_0px_#F4EDE0]">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F4EDE0]/20">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F4EDE0] tracking-widest uppercase font-black">
                  <Wrench size={14} />
                  <span>SAMEER&apos;S DIRECT CONTRIBUTIONS</span>
                </div>
                <span className="font-mono text-[10px] text-[#F4EDE0]/50 uppercase font-bold">
                  VERIFIED SCOPE
                </span>
              </div>
              <ul className="space-y-2.5 mt-3">
                {project.personalContribution.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#F4EDE0] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#F4EDE0]/95 font-body leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Technical Highlights */}
            <div className="p-6 sm:p-8 rounded-xl card-3d-navy">
              <h3 className="font-heading font-black text-lg text-[#F4EDE0] mb-3">
                Technical Accomplishments
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.keyHighlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="p-4 rounded bg-[#0A1120] border border-[#F4EDE0]/15 flex items-start gap-2.5"
                  >
                    <span className="font-mono text-xs font-bold text-[#F4EDE0] shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4EDE0]/85 leading-relaxed font-body">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signal & Data Flow */}
            <div className="p-6 sm:p-8 rounded-xl card-3d-navy">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F4EDE0] tracking-widest uppercase mb-3 font-bold">
                <Cpu size={14} />
                <span>SIGNAL &amp; DATA PIPELINE</span>
              </div>
              <div className="space-y-2">
                {project.architecturePoints.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded bg-[#0A1120] border border-[#F4EDE0]/15 flex items-center justify-between text-xs sm:text-sm font-mono"
                  >
                    <span className="text-[#F4EDE0]/90">
                      <span className="font-bold text-[#F4EDE0] mr-2">STAGE {idx + 1} //</span>
                      {step}
                    </span>
                    <span className="text-[10px] text-[#F4EDE0] px-2 py-0.5 rounded bg-[#F4EDE0]/10 font-bold hidden sm:inline">
                      ACTIVE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Tech Arsenal & Hardware Specs */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Breakdown */}
            <div className="p-6 rounded-xl card-3d-navy">
              <span className="font-mono text-xs text-[#F4EDE0]/60 tracking-widest uppercase block mb-3 font-bold">
                TECHNOLOGY STACK
              </span>
              <div className="space-y-2">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-[#0A1120] border border-[#F4EDE0]/10 flex items-center justify-between"
                  >
                    <span className="font-sans text-xs sm:text-sm font-bold text-[#F4EDE0]">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#F4EDE0]/60">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Specifications Table */}
            {project.hardwareSpecs && (
              <div className="p-6 rounded-xl card-3d-navy">
                <span className="font-mono text-xs text-[#F4EDE0]/60 tracking-widest uppercase block mb-3 font-bold">
                  SPECIFICATIONS &amp; INTERFACES
                </span>
                <div className="space-y-3 font-mono text-xs">
                  {project.hardwareSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="pb-2.5 border-b border-[#F4EDE0]/10 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[10px] text-[#F4EDE0]/50 uppercase block mb-0.5">
                        {spec.label}
                      </span>
                      <span className="text-[#F4EDE0] font-bold text-xs sm:text-sm">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Collaboration & Academic Transparency Disclaimer */}
            <div className="p-5 rounded-xl border border-[#F4EDE0]/25 bg-[#F4EDE0]/5 text-xs font-mono text-[#F4EDE0]/75 leading-relaxed shadow-[3px_3px_0px_0px_rgba(244,237,224,0.2)]">
              <span className="text-[#F4EDE0] font-bold block mb-1">
                // TRANSPARENCY NOTICE
              </span>
              This documentation explicitly separates Sameer&apos;s individual engineering work from team dependencies to ensure accurate representation.
            </div>
          </div>
        </div>

        {/* Bottom Next Project Footer Card */}
        <div className="mt-14 pt-8 border-t border-[#F4EDE0]/15 flex flex-col sm:flex-row items-center justify-between gap-5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F4EDE0] hover:underline"
          >
            <ArrowLeft size={14} />
            <span>RETURN TO ALL PROJECTS</span>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group inline-flex items-center gap-3 p-3.5 rounded-xl card-3d-navy"
          >
            <div className="text-right">
              <span className="font-mono text-[10px] text-[#F4EDE0]/50 block uppercase font-bold">
                NEXT PROJECT
              </span>
              <span className="font-heading font-black text-sm text-[#F4EDE0] group-hover:underline">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>
    </div>
  );
}
