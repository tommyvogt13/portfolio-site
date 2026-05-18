
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const projectDetails = {
  "Janimus Esports Business Proposal": {
    category: "Esports Business Strategy",
    role: "Founder / Esports Business Strategist",
    featured: true,
    pdf: "/projects/janimus.pdf",
    summary: "Built a full esports organization with revenue, branding, content, sponsorship, and player development systems.",
    overview: "Created a full esports organization concept focused on competitive performance, player branding, content, sponsorships, and long-term sustainability. This project was designed to feel like a real esports business, not just a team concept. It connects brand identity, organizational structure, revenue planning, and audience growth into one complete business proposal.",
    responsibilities: [
      "Built a full organizational structure with leadership, competitive operations, marketing, partnerships, content, and player development roles",
      "Developed 5+ revenue streams including sponsorships, merchandise, content monetization, coaching, and academy programs",
      "Created a player branding system focused on content output, personality growth, and sponsor integration",
      "Planned competitive positioning around VALORANT with long-term expansion into additional esports titles",
    ],
    metrics: [
      "Modeled $5K-$25K early-stage sponsorship packages with room to scale as audience and results grow",
      "Designed a merchandise model targeting approximately 50% profit margins on jerseys, hoodies, hats, and apparel drops",
      "Built weekly content expectations around Instagram, YouTube, streaming, and short-form social growth",
      "Outlined a phased growth plan from Tier 2-3 competition into larger sponsorship and competitive opportunities",
    ],
    impact: [
      "Built a complete esports organization model from scratch with business, brand, and operations included",
      "Shows ability to connect competitive esports with content strategy and revenue planning",
      "Demonstrates understanding of how sponsors, players, fans, and content all support long-term esports growth",
    ],
    takeaways: [
      "Esports organizations need multiple revenue streams to stay stable",
      "Player branding is a business asset, not just a personality bonus",
      "Content should be treated as a core business function inside esports organizations",
    ],
  },
  "Shaping the Future of Global Gaming and Esports": {
    category: "Industry Strategy & Market Forecasting",
    role: "Gaming & Esports Strategy Analyst",
    featured: false,
    pdf: "/projects/future-gaming-esports.pdf",
    summary: "Analyzed future gaming trends and built a strategic action plan for long-term industry growth.",
    overview: "Explored how artificial intelligence, cloud gaming, digital economies, cultural globalization, and strategic partnerships may reshape gaming and esports from 2026 to 2035. The project also included a three-phase action plan for a hypothetical multiplayer gaming company focused on retention, ethical monetization, and global expansion.",
    responsibilities: [
      "Analyzed major gaming and esports trends including AI, cloud infrastructure, digital economies, and global market growth",
      "Built a three-phase strategic roadmap for a hypothetical global multiplayer gaming company",
      "Defined KPIs tied to retention, monetization, production efficiency, international market penetration, and esports engagement",
      "Evaluated legal, ethical, and player-trust risks connected to AI-driven monetization and digital spending systems",
    ],
    metrics: [
      "Targeted 25%+ Day-30 retention for sustainable live-service growth",
      "Modeled an LTV:CPI target of 3:1 to support profitable user acquisition",
      "Projected 50% revenue diversification across in-game purchases, subscriptions, partnerships, media rights, and creator marketplaces",
      "Set a long-term goal of 40% global player base outside North America",
    ],
    impact: [
      "Shows ability to connect industry trends with real business strategy",
      "Demonstrates long-term thinking beyond short-term campaigns or single-game analysis",
      "Connects emerging technology to monetization, player experience, and operational planning",
    ],
    takeaways: [
      "AI will reshape both development pipelines and player experiences",
      "Global growth requires cultural adaptation, not just translation",
      "Retention and player trust are becoming major competitive advantages",
    ],
  },
  "Deadlock Go-To-Market Strategy": {
    category: "Marketing Strategy & Esports Growth",
    role: "Junior Marketing Strategist & Esports Coordinator",
    featured: false,
    pdf: "/projects/deadlock-gtm.pdf",
    summary: "Designed a full go-to-market campaign using creators, esports, social content, and community-driven growth.",
    overview: "Built a go-to-market strategy for Deadlock focused on pre-launch awareness, launch visibility, and post-launch retention. The campaign emphasized creator partnerships, community management, esports activations, platform-specific content, and long-term live-service growth.",
    responsibilities: [
      "Developed a three-phase campaign covering pre-launch, launch, and post-launch retention",
      "Built platform strategies across YouTube, Twitch, TikTok, Instagram, and Discord",
      "Planned creator partnerships, cosplay activations, livestream events, and esports tournament concepts",
      "Created KPI targets and budget allocations across creators, paid social, production, events, and tournaments",
    ],
    metrics: [
      "Projected 20K+ Discord members before launch to build a core community hub",
      "Targeted 5M+ TikTok campaign reach through short-form creator and community content",
      "Planned 15 influencer partnerships across launch and pre-launch marketing beats",
      "Allocated budget across influencer partnerships, paid ads, tournament production, community events, and content production",
    ],
    impact: [
      "Demonstrates full marketing campaign planning across multiple platforms",
      "Shows understanding of creator-led growth strategies in modern gaming",
      "Connects community growth with retention, live-service planning, and esports visibility",
    ],
    takeaways: [
      "Creator-led marketing can feel more authentic than traditional ads",
      "Discord and livestreaming are key retention tools for live-service games",
      "A strong launch strategy needs community planning before and after release",
    ],
  },
  "Sentinels Collegiate Clash": {
    category: "Event Strategy & Monetization",
    role: "Event & Business Strategist",
    featured: false,
    pdf: "/projects/sentinels-collegiate-clash.pdf",
    summary: "Designed a collegiate esports tournament with a full budget, sponsorship model, vendor revenue, and long-term impact plan.",
    overview: "Created a two-day collegiate LAN tournament concept for Sentinels focused on college esports growth, player scouting, sponsorship value, and community engagement. The project included a budget proposal, revenue model, sponsorship tiers, merchandise projections, vendor booth planning, and long-term brand impact.",
    responsibilities: [
      "Built a full event budget with projected expenses for venue, equipment, staffing, marketing, travel, lodging, merchandise, and contingency",
      "Designed sponsorship, merchandise, and vendor revenue streams to support event ROI",
      "Planned the event structure around VALORANT and League of Legends with 12-16 collegiate teams",
      "Outlined long-term value through collegiate scouting, internships, annual circuits, and content opportunities",
    ],
    metrics: [
      "Projected event expenses around $132K across operations, staffing, marketing, travel, and contingency",
      "Estimated $59K merchandise revenue through team shirts and backpacks",
      "Projected $64K vendor and booth revenue across large, medium, and small vendor packages",
      "Planned audience scale of 2,000 in-person attendees and 500K+ livestream views",
    ],
    impact: [
      "Shows event planning, budgeting, and esports monetization skills",
      "Demonstrates how collegiate esports can create sponsor, scouting, and community value",
      "Connects live event production with long-term brand growth and revenue strategy",
    ],
    takeaways: [
      "Events need multiple income streams to reduce financial risk",
      "Collegiate esports can support both community growth and talent scouting",
      "Sponsorships and vendor strategy are essential to event profitability",
    ],
  },
};

const projects = Object.entries(projectDetails).map(([title, data]) => ({ title, ...data }));
const featuredProject = projects.find((project) => project.featured);
const standardProjects = projects.filter((project) => !project.featured);

const skills = [
  "Marketing Strategy", "Brand Strategy", "Content Growth", "Esports Business Strategy",
  "Social Media Marketing", "Community Management", "Influencer Marketing", "Sponsorship Planning",
  "Event Planning", "Market Research", "KPI Planning", "Data & Analytics Thinking",
  "Project Management", "Sales & Customer Conversion", "Leadership",
];

const tools = [
  "TikTok", "Instagram", "YouTube", "Twitch", "Discord", "LinkedIn",
  "Google Workspace", "Presentation Design", "Campaign Planning", "Budget Planning",
];

function Icon({ children, className = "", size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{children}</svg>;
}
function MailIcon({ className = "", size = 18 }) {
  return <Icon className={className} size={size}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Icon>;
}
function LinkedInIcon({ className = "", size = 18 }) {
  return <Icon className={className} size={size}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></Icon>;
}
function FileTextIcon({ className = "", size = 24 }) {
  return <Icon className={className} size={size}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></Icon>;
}
function TrophyIcon({ className = "", size = 24 }) {
  return <Icon className={className} size={size}><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M5 6H3a2 2 0 0 0 2 2h2" /><path d="M19 6h2a2 2 0 0 1-2 2h-2" /></Icon>;
}
function BriefcaseIcon({ className = "", size = 24 }) {
  return <Icon className={className} size={size}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M2 13h20" /></Icon>;
}
function GamepadIcon({ className = "", size = 24 }) {
  return <Icon className={className} size={size}><path d="M6 12h4" /><path d="M8 10v4" /><path d="M15 13h.01" /><path d="M18 11h.01" /><path d="M5 8h14a3 3 0 0 1 2.9 3.7l-1 4A3 3 0 0 1 18 18h-1.2a3 3 0 0 1-2.4-1.2L13 15h-2l-1.4 1.8A3 3 0 0 1 7.2 18H6a3 3 0 0 1-2.9-2.3l-1-4A3 3 0 0 1 5 8z" /></Icon>;
}
function ArrowRightIcon({ className = "", size = 16 }) {
  return <Icon className={className} size={size}><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></Icon>;
}
function SunIcon({ className = "", size = 18 }) {
  return <Icon className={className} size={size}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M4.93 4.93l1.41 1.41" /><path d="M17.66 17.66l1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="M6.34 17.66l-1.41 1.41" /><path d="M19.07 4.93l-1.41 1.41" /></Icon>;
}
function MoonIcon({ className = "", size = 18 }) {
  return <Icon className={className} size={size}><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.7 6.7 0 0 0 9.8 9.8z" /></Icon>;
}
function ExternalIcon({ className = "", size = 16 }) {
  return <Icon className={className} size={size}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14L21 3" /></Icon>;
}

function SectionBlock({ title, items, theme }) {
  return (
    <motion.div whileHover={{ y: -5 }} className={`rounded-3xl border p-6 shadow-xl transition ${theme.panel}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <ul className={`mt-4 space-y-3 text-sm leading-6 ${theme.softText}`}>
        {items.map((item) => (
          <li key={item} className="flex gap-3"><ArrowRightIcon className="mt-1 h-4 w-4 flex-none text-blue-400" /><span>{item}</span></li>
        ))}
      </ul>
    </motion.div>
  );
}

function MiniStat({ label, value, theme }) {
  return (
    <div className={`rounded-2xl border p-4 ${theme.statCard}`}>
      <p className="text-2xl font-bold text-blue-400">{value}</p>
      <p className={`mt-1 text-xs leading-5 ${theme.muted}`}>{label}</p>
    </div>
  );
}

function ProjectCard({ project, index, theme, onOpen }) {
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, scale: 1.015 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.08 }} onClick={() => onOpen(project.title)} className={`cursor-pointer rounded-3xl border p-6 shadow-xl transition ${theme.card}`}>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400 ring-1 ring-blue-400/20"><GamepadIcon size={24} /></div>
      <p className="text-sm font-semibold text-blue-400">{project.category}</p>
      <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
      <p className={`mt-2 text-sm ${theme.muted}`}>Role: {project.role}</p>
      <p className={`mt-4 text-sm leading-6 ${theme.softText}`}>{project.summary}</p>
      <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">View case study <ArrowRightIcon size={15} /></p>
    </motion.article>
  );
}

export default function PortfolioWebsite() {
  const [activeProjectTitle, setActiveProjectTitle] = useState(null);
  const [isLight, setIsLight] = useState(false);
  const activeProject = projects.find((project) => project.title === activeProjectTitle);

  const theme = useMemo(
    () => ({
      page: isLight ? "bg-slate-100 text-slate-950" : "bg-slate-950 text-white",
      heroGlow: isLight
        ? "bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.22),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(148,163,184,0.5),_transparent_50%)]"
        : "bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.35),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(30,41,59,0.9),_transparent_50%)]",
      eyebrow: isLight ? "border-slate-300 bg-white/60 text-slate-700 backdrop-blur-xl" : "border-slate-600 bg-slate-800/60 text-slate-200 backdrop-blur-xl",
      muted: isLight ? "text-slate-600" : "text-slate-400",
      softText: isLight ? "text-slate-700" : "text-slate-300",
      panel: isLight ? "border-slate-300 bg-white/65 shadow-slate-300/30 backdrop-blur-xl" : "border-slate-700 bg-slate-800/55 shadow-black/30 backdrop-blur-xl",
      card: isLight ? "border-slate-300 bg-white/75 shadow-slate-300/30 backdrop-blur-xl hover:border-blue-500/50 hover:bg-white/95" : "border-slate-700 bg-slate-800/60 shadow-black/30 backdrop-blur-xl hover:border-blue-500/50 hover:bg-slate-800/85",
      statCard: isLight ? "border-slate-300 bg-white/70" : "border-slate-700 bg-slate-900/60",
      chip: isLight ? "border-slate-300 bg-white/70 text-slate-700" : "border-slate-600 bg-slate-900/70 text-slate-200",
      outlineButton: isLight ? "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-700" : "border-slate-600 text-slate-200 hover:border-blue-400 hover:text-white",
    }),
    [isLight]
  );

  if (activeProject) {
    return (
      <div className={`min-h-screen transition-colors duration-500 ${theme.page}`}>
        <section className="relative overflow-hidden px-6 py-12 md:px-16 lg:px-24">
          <div className={`absolute inset-0 transition-colors duration-500 ${theme.heroGlow}`} />
          <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-8 right-10 h-56 w-56 rounded-full bg-slate-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <button type="button" onClick={() => setActiveProjectTitle(null)} className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${theme.outlineButton}`}>Back to Projects</button>
              <button type="button" onClick={() => setIsLight((value) => !value)} className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition ${theme.eyebrow}`} aria-label="Toggle light and dark mode">
                {isLight ? <MoonIcon size={18} /> : <SunIcon size={18} />}
                {isLight ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
              <p className={`mb-4 inline-flex rounded-full border px-4 py-2 text-sm font-medium ${theme.eyebrow}`}>{activeProject.category}</p>
              <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{activeProject.title}</h1>
              <p className="mt-4 text-lg font-medium text-blue-400">{activeProject.role}</p>
              <p className={`mt-5 max-w-3xl text-base leading-8 ${theme.softText}`}>{activeProject.overview}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={activeProject.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">View Full Project PDF <ExternalIcon size={15} /></a>
                <a href={activeProject.pdf} download className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${theme.outlineButton}`}>Download Project</a>
              </div>
            </motion.div>
          </div>
        </section>
        <main className="mx-auto max-w-6xl px-6 pb-16 md:px-16 lg:px-24">
          <div className="grid gap-6 lg:grid-cols-2">
            <SectionBlock title="What I Did" items={activeProject.responsibilities} theme={theme} />
            <SectionBlock title="Metrics / Targets" items={activeProject.metrics} theme={theme} />
            <SectionBlock title="Results / Impact" items={activeProject.impact} theme={theme} />
            <SectionBlock title="Key Takeaways" items={activeProject.takeaways} theme={theme} />
          </div>
          <section className={`mt-8 rounded-3xl border p-7 shadow-xl ${theme.panel}`}>
            <h2 className="text-2xl font-bold">Why This Project Matters</h2>
            <p className={`mt-4 max-w-4xl leading-7 ${theme.softText}`}>This project helps show how I think through strategy, execution, and measurable value. I kept the work focused on practical marketing, esports, and business outcomes so it feels useful beyond the classroom.</p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme.page}`}>
      <section className="relative overflow-hidden px-6 py-20 md:px-16 lg:px-24">
        <div className={`absolute inset-0 transition-colors duration-500 ${theme.heroGlow}`} />
        <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-8 right-10 h-56 w-56 rounded-full bg-slate-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex justify-end">
            <button type="button" onClick={() => setIsLight((value) => !value)} className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition ${theme.eyebrow}`} aria-label="Toggle light and dark mode">
              {isLight ? <MoonIcon size={18} /> : <SunIcon size={18} />}
              {isLight ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className={`mb-4 inline-flex rounded-full border px-4 py-2 text-sm font-medium ${theme.eyebrow}`}>Marketing - Brand Strategy - Game Business - Esports</p>
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Tommy Vogt</h1>
              <p className={`mt-6 text-xl leading-8 md:text-2xl ${theme.softText}`}>Building marketing strategies that connect brands, communities, and digital entertainment.</p>
              <p className={`mt-5 max-w-2xl text-base leading-7 ${theme.muted}`}>Seeking opportunities in marketing, brand strategy, and content growth, with a focus on gaming, esports, and digital entertainment industries.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">View Projects</a>
                <a href="/resume.pdf" download className={`rounded-2xl border px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${theme.outlineButton}`}>Download Resume</a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className={`rounded-2xl border px-6 py-3 font-semibold transition hover:-translate-y-0.5 ${theme.outlineButton}`}>View Resume</a>
              </div>
            </div>
            <div className={`rounded-3xl border p-6 shadow-2xl ${theme.panel}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Quick Snapshot</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <MiniStat label="Portfolio case studies" value="4" theme={theme} />
                <MiniStat label="Primary focus areas" value="3" theme={theme} />
                <MiniStat label="Projected event scale" value="500K+" theme={theme} />
                <MiniStat label="Campaign reach target" value="5M+" theme={theme} />
              </div>
              <p className={`mt-6 text-sm leading-6 ${theme.softText}`}>My projects focus on marketing strategy, esports business models, event monetization, audience growth, and content-driven brand building.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-14 md:px-16 lg:px-24">
        <section id="about" className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">About Me</p>
            <h2 className="mt-3 text-3xl font-bold">Marketing-focused, esports-minded, and business driven.</h2>
          </div>
          <div className={`rounded-3xl border p-7 shadow-2xl ${theme.panel}`}>
            <p className={`leading-7 ${theme.softText}`}>I focus on marketing, brand strategy, content, and game business. I like breaking down how brands grow audiences, build communities, attract sponsors, and turn engagement into long-term value.</p>
            <p className={`mt-4 leading-7 ${theme.softText}`}>My work combines analytics, content strategy, event planning, and brand positioning. Through class projects and professional experience, I have worked on campaign planning, esports event analysis, revenue models, and customer-focused sales communication.</p>
            <div className="mt-5 space-y-2 text-sm">
              <p className="font-semibold text-blue-400">Highlights</p>
              <ul className={`space-y-1 ${theme.softText}`}>
                <li>Built social campaigns focused on engagement, retention, and monetization</li>
                <li>Analyzed esports event data, revenue streams, and fan behavior</li>
                <li>Created brand strategies aligning content with sponsorship goals</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Projects</p>
              <h2 className="mt-3 text-3xl font-bold">Featured Case Studies</h2>
            </div>
            <p className={`max-w-xl ${theme.muted}`}>Each project opens into a short case study with my role, strategy, metrics, results, and key takeaways.</p>
          </div>
          {featuredProject && (
            <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8 }} viewport={{ once: true }} transition={{ duration: 0.35 }} onClick={() => setActiveProjectTitle(featuredProject.title)} className={`mt-8 cursor-pointer overflow-hidden rounded-3xl border shadow-2xl transition ${theme.card}`}>
              <div className="grid gap-6 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="mb-4 inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Featured Project</p>
                  <p className="text-sm font-semibold text-blue-400">{featuredProject.category}</p>
                  <h3 className="mt-2 text-3xl font-bold md:text-4xl">{featuredProject.title}</h3>
                  <p className={`mt-2 text-sm ${theme.muted}`}>Role: {featuredProject.role}</p>
                  <p className={`mt-5 max-w-3xl leading-7 ${theme.softText}`}>{featuredProject.summary}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">View full case study <ArrowRightIcon size={15} /></p>
                </div>
                <div className={`rounded-3xl border p-5 ${theme.statCard}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Project Snapshot</p>
                  <div className="mt-5 space-y-3">
                    {featuredProject.metrics.slice(0, 3).map((metric) => <div key={metric} className={`rounded-2xl border p-4 ${theme.chip}`}><p className="text-sm leading-6">{metric}</p></div>)}
                  </div>
                </div>
              </div>
            </motion.article>
          )}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standardProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} theme={theme} onOpen={setActiveProjectTitle} />)}
          </div>
        </section>

        <section id="skills" className={`mt-20 rounded-3xl border p-8 shadow-xl ${theme.panel}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Skills</p>
          <h2 className="mt-3 text-3xl font-bold">What I Bring</h2>
          <div className="mt-7 flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className={`rounded-full border px-4 py-2 text-sm ${theme.chip}`}>{skill}</span>)}</div>
        </section>

        <section className={`mt-20 rounded-3xl border p-8 shadow-xl ${theme.panel}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Tools & Platforms</p>
          <h2 className="mt-3 text-3xl font-bold">Where I Build</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{tools.map((tool) => <div key={tool} className={`rounded-2xl border p-4 text-sm font-medium ${theme.chip}`}>{tool}</div>)}</div>
        </section>

        <section className={`mt-20 rounded-3xl border p-8 shadow-xl ${theme.panel}`}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Experience</p>
          <h2 className="mt-3 text-3xl font-bold">What I have Done</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Sales Representative - AT&T</h3>
              <p className={`text-sm ${theme.muted}`}>Orlando, FL</p>
              <ul className={`mt-3 space-y-2 text-sm ${theme.softText}`}>
                <li>Managed 50+ daily customer interactions in a high-volume retail environment</li>
                <li>Increased revenue through upselling and cross-selling based on customer needs</li>
                <li>Balanced sales goals with customer service and transaction accuracy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Esports & Marketing Projects - Full Sail University</h3>
              <p className={`text-sm ${theme.muted}`}>2024-2026</p>
              <ul className={`mt-3 space-y-2 text-sm ${theme.softText}`}>
                <li>Built campaigns to grow engagement and community presence</li>
                <li>Analyzed esports event performance, publishing data, and fan trends</li>
                <li>Developed brand strategies connecting content, sponsors, and audiences</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          <motion.div whileHover={{ y: -6 }} className={`rounded-3xl border p-6 shadow-xl transition ${theme.card}`}>
            <TrophyIcon className="text-blue-400" />
            <h3 className="mt-4 text-xl font-bold">Esports Strategy</h3>
            <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>Understanding how teams grow through competition, branding, sponsors, content, and community.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className={`rounded-3xl border p-6 shadow-xl transition ${theme.card}`}>
            <BriefcaseIcon className="text-blue-400" />
            <h3 className="mt-4 text-xl font-bold">Marketing Thinking</h3>
            <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>Turning creative ideas into structured campaigns with audience goals, KPIs, and platform strategy.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className={`rounded-3xl border p-6 shadow-xl transition ${theme.card}`}>
            <FileTextIcon className="text-blue-400" />
            <h3 className="mt-4 text-xl font-bold">Project Work</h3>
            <p className={`mt-3 text-sm leading-6 ${theme.muted}`}>Presenting coursework as practical case studies that show strategy, execution, and business value.</p>
          </motion.div>
        </section>

        <section id="contact" className="mt-20 rounded-3xl bg-gradient-to-r from-blue-600 via-slate-700 to-slate-800 p-8 text-white shadow-2xl shadow-blue-950/30 md:p-10">
          <h2 className="text-3xl font-bold">Let's connect.</h2>
          <p className="mt-3 max-w-2xl text-blue-100">I am looking to grow in marketing, brand strategy, content growth, game business, and esports-related roles. Reach out for opportunities, networking, or project collaboration.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="mailto:tommyvogt13@gmail.com" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"><MailIcon size={18} /> Email Me</a>
            <a href="https://www.linkedin.com/in/tommy-vogt/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"><LinkedInIcon size={18} /> LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}
