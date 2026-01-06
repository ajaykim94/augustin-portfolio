import Image from "next/image";

const PROJECTS = [
  {
    title: "ForSEAble Kelp",
    description:
      "UC Berkeley MIDS capstone project modernizing kelp canopy monitoring using Sentinel-2 imagery and DeepLabV3+ semantic segmentation. Delivered an interactive web platform and AI assistant.",
    tags: ["Computer Vision", "Remote Sensing", "Deep Learning", "AWS"],
    links: [
      { label: "Live Site", href: "https://forseable-kelp.com/" },
      {
        label: "UC Berkeley Project Page",
        href: "https://www.ischool.berkeley.edu/projects/2025/forseable-kelp",
      },
    ],
  },
  {
    title: "CalFires: Wildfire Risk Modeling",
    description:
      "Machine learning models (Random Forest, XGBoost, Neural Networks) to predict wildfire risk in California using historical weather and fire data.",
    tags: ["Machine Learning", "XGBoost", "Time Series"],
    links: [],
  },
  {
    title: "NBA Game Outcome Predictions",
    description:
      "Predictive modeling project analyzing NBA game data to forecast outcomes and performance trends.",
    tags: ["Regression", "Classification", "Sports Analytics"],
    links: [
      {
        label: "Report (PDF)",
        href: "/reports/NBA_Predictions_Project_Report.pdf",
      },
    ],
  },
  {
    title: "Tuscan RFM Customer Segmentation",
    description:
      "Customer segmentation analysis using RFM metrics to identify high-value customers and behavioral patterns.",
    tags: ["Customer Analytics", "Clustering", "RFM"],
    links: [
      {
        label: "Report (PDF)",
        href: "/reports/Tuscan_RFM_Report.pdf",
      },
    ],
  },
  {
    title: "Book Binders Logistic Regression",
    description:
      "Logistic regression model to predict outcomes in a manufacturing context, including feature analysis and model evaluation.",
    tags: ["Logistic Regression", "Model Evaluation"],
    links: [
      {
        label: "Report (PDF)",
        href: "/reports/Book_Binders_Report.pdf",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-20">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <Image
          src="/augustin.jpg"
          alt="Augustin Kim"
          width={160}
          height={160}
          className="rounded-2xl shadow-md"
          priority
        />

        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Augustin Kim
          </h1>
          <p className="mt-3 text-lg text-neutral-400 max-w-xl">
            Data Scientist • UC Berkeley MIDS • Former U.S. Army Signals Analyst
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/resume.pdf"
              className="px-5 py-2 rounded-xl bg-white text-black text-sm font-medium"
            >
              Resume
            </a>
            <a
              href="https://github.com/ajaykim94"
              target="_blank"
              className="px-5 py-2 rounded-xl border border-neutral-700 text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com"
              className="px-5 py-2 rounded-xl border border-neutral-700 text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-10">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="
                bg-white
                border border-neutral-200
                rounded-2xl
                p-6
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-neutral-400">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5 text-sm">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    className="underline text-neutral-200"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="text-neutral-400 max-w-3xl">
          Python, PyTorch, TensorFlow, SQL, AWS, SageMaker, Docker, Pandas,
          NumPy, Scikit-Learn, XGBoost, NLP, Computer Vision, Geospatial Analytics
        </p>
      </section>

      <footer className="pt-10 text-sm text-neutral-500">
        © {new Date().getFullYear()} Augustin Kim
      </footer>
    </main>
  );
}

