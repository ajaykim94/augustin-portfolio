// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectLink = { label: string; href: string };
type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  previews?: string[]; // paths inside /public
};

const PROJECTS: Project[] = [
  {
    title: "ForSEAble Kelp",
    description:
      "UC Berkeley MIDS capstone modernizing kelp canopy monitoring using Sentinel-2 imagery and DeepLabV3+ semantic segmentation. Delivered an interactive web platform and AI assistant.",
    tags: ["Computer Vision", "Remote Sensing", "Deep Learning", "AWS"],
    links: [
      { label: "Live Site", href: "https://forseable-kelp.com/" },
      {
        label: "UC Berkeley Project Page",
        href: "https://www.ischool.berkeley.edu/projects/2025/forseable-kelp",
      },
    ],
    // Optional: add preview screenshots later the same way as CalFires
    previews: [
    "/projects/forseable-kelp/kelp-1.jpg",
    "/projects/forseable-kelp/kelp-2.jpg",
    "/projects/forseable-kelp/kelp-3.jpg",
    ],
  },
  {
    title: "CalFires: Wildfire Risk Modeling & Visualization",
    description:
      "Interactive visual analytics and modeling of California wildfire incidents, seasonal patterns, and environmental drivers using public CalFire data.",
    tags: ["Data Visualization", "Machine Learning", "Time Series", "Observable"],
    links: [{ label: "Live Site", href: "https://groups.ischool.berkeley.edu/calfire/" }],
    previews: [
      "/projects/calfire/calfire-1.jpg",
      "/projects/calfire/calfire-2.jpg",
      "/projects/calfire/calfire-3.jpg",
    ],
  },
  {
  title: "Emotion Recognition in Online Communication",
  description:
    "Multi-class emotion classification on tweets (anger, love, fear, joy, sadness, surprise). Compared TF-IDF Naive Bayes baseline (82% acc) vs deep models: DAN (86% acc, macro F1 86%), CNN (91% acc, macro F1 88%), and BERT (93% acc, macro F1 93%). Built an ensemble that reached 95% accuracy.",
  tags: ["NLP", "Sentiment Analysis", "BERT", "CNN", "DAN", "Ensembles"],
  links: [
    { label: "Report (PDF)", href: "/projects/Emotion Recognition/Emotion_Recognition_Final_Report.pdf" },
  ],
  // Optional previews (add screenshots later)
  previews: [
    "/projects/Emotion Recognition/emotion-1.jpg",
    "/projects/Emotion Recognition/emotion-2.jpg"
  //   "/projects/emotion-recognition/emotion-3.jpg",
  ],
},
];

export default function Home() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* subtle background for readability */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(900px_500px_at_80%_20%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(900px_700px_at_50%_90%,rgba(168,85,247,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-sm">
            <Image
              src="/augustin.jpg"
              alt="Augustin Kim – UC Berkeley MIDS"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight">Augustin Kim</h1>
            <p className="mt-3 text-lg text-neutral-300 max-w-xl">
              Data Science Portfolio • UC Berkeley MIDS • Former U.S. Army Signals Analyst
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              <a
                href="/resume.pdf"
                className="px-5 py-2 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90"
              >
                Resume
              </a>
              <a
                href="https://github.com/ajaykim94"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl border border-neutral-700 text-sm text-neutral-100 hover:border-neutral-500"
              >
                GitHub
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-5 py-2 rounded-xl border border-neutral-700 text-sm text-neutral-100 hover:border-neutral-500"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="text-sm text-neutral-400">
              Selected work from my UC Berkeley MIDS program.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 shadow-sm hover:bg-neutral-900/80 transition"
              >
                {/* Preview images (click to zoom) */}
                {p.previews?.length ? (
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {p.previews.slice(0, 3).map((src) => (
                      <button
                        key={src}
                        onClick={() => setActiveImage(src)}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 focus:outline-none hover:ring-2 hover:ring-white/40 transition"
                        aria-label={`Open ${p.title} preview`}
                      >
                        <Image
                          src={src}
                          alt={`${p.title} preview`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}

                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-300">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-5 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-neutral-100 hover:text-white"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-neutral-300 max-w-3xl">
            Python, PyTorch, SQL, AWS/SageMaker, Docker, Pandas, NumPy, Scikit-Learn,
            XGBoost, NLP, Computer Vision, Geospatial Analytics.
          </p>
        </section>

        <footer className="pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Augustin Kim
        </footer>
      </div>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative mx-auto w-full max-w-6xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-10 right-4 text-white text-sm opacity-80 hover:opacity-100"
              aria-label="Close preview"
            >
              ✕ Close
            </button>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black border border-neutral-800">
              <Image
                src={activeImage}
                alt="Project preview"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
