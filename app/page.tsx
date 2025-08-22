
"use client";
import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, FileText, ExternalLink, Mail, Linkedin, BarChart3, Layers, Sparkles, ChevronRight } from "lucide-react";

const PROFILE = {
  name: "Augustin Kim",
  title: "Data Scientist",
  blurb: "I build end-to-end ML systems that turn messy data into measurable impact — from churn and RFM to MVP prediction.",
  email: "mailto:augustin@example.com",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
  location: "Los Angeles, CA",
};

const PROJECTS = [
  {
    id: "calfires",
    title: "California Wildfires — Interactive Visualization",
    org: "Personal / UC Berkeley",
    timeframe: "2024–2025",
    summary: "Interactive geospatial exploration of California wildfires with filters for year, size, and cause; highlights trends and risk hot spots.",
    impact: [
      "Unified historical fires and weather features; fast map filtering and drill-down",
      "Clear story for risk awareness and resource planning; public demo linked",
    ],
    stack: ["JavaScript", "D3", "Mapbox/Leaflet", "Netlify"],
    tags: ["Geospatial", "Visualization", "Wildfires"],
    links: {
      report: "#",
      notebook: "#",
      demo: "https://calfires.netlify.app/",
    },
  },
  {
    id: "bookbinders",
    title: "Catalog Targeting with Logistic Regression",
    org: "BookBinders",
    timeframe: "Academic project",
    summary: "Built a purchase-propensity model, then translated it to deciles, lift/gains, and breakeven targeting to drive positive ROI on mailings.",
    impact: [
      "Identified high-lift segments; recommended mailing threshold at breakeven ≥ 8.3% RR",
      "Projected gross profit +$122k and ROMI ~156% on targeted campaign",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Matplotlib"],
    tags: ["Logistic Regression", "Lift & Gains", "Marketing Analytics"],
    links: {
      report: "/reports/Book_Binders_Report.pdf",
      notebook: "/reports/Book_Binders_Logistic_Regression.ipynb",
    },
  },
  {
    id: "cell2cell",
    title: "Telecom Churn Prediction & Retention Strategy",
    org: "Cell2Cell",
    timeframe: "Academic project",
    summary: "Developed a churn model (logistic) and retention playbook with device-upgrade and plan incentives targeting at-risk cohorts.",
    impact: [
      "Validation lift ≈ 174 vs. average churn",
      "Prioritized actions: device refresh at 12–13 months, service credit after repeated drops",
    ],
    stack: ["Python", "pandas", "scikit-learn"],
    tags: ["Churn", "Classification", "Uplift Strategy"],
    links: {
      report: "/reports/Cell2Cell_Report.pdf",
      notebook: "/reports/Cell2Churn.ipynb",
    },
  },
  {
    id: "nba-mvp",
    title: "Who Wins MVP? Predictive Modeling on NBA Data",
    org: "INDENG 142",
    timeframe: "Capstone-style class project",
    summary: "Scraped Basketball-Reference, engineered features, and compared Logistic Regression, MLP, Decision Trees, and Random Forests for MVP prediction.",
    impact: [
      "Random Forest ranked 2021 MVP race ~90% ranking accuracy",
      "Built interpretable feature pipeline & cross-validation for model selection",
    ],
    stack: ["Python", "pandas", "scikit-learn", "MLP"],
    tags: ["Sports Analytics", "Classification", "Feature Engineering"],
    links: {
      report: "/reports/NBA_Predictions_Project_Report.pdf",
      notebook: "/reports/NBA_Predictions.ipynb",
    },
  },
  {
    id: "tuscan-rfm",
    title: "RFM Segmentation & Profitability",
    org: "Tuscan",
    timeframe: "Course project",
    summary: "Segmented 1.9M customers via RFM (sequential n-tiles), computed response by cell, and optimized mailing profitability.",
    impact: [
      "Mailing only profitable cells: ROMI ~75% and gross profit ↑",
      "Breakeven response ≈ 1.92%; clear decile-based targeting guidance",
    ],
    stack: ["Python", "pandas"],
    tags: ["RFM", "Segmentation", "Direct Marketing"],
    links: {
      report: "/reports/Tuscan_RFM_Report.pdf",
      notebook: "/reports/Tuscan_RFM.ipynb",
    },
  },
  {
    id: "quicken",
    title: "Personal Finance ETL (Quicken/QuickBooks)",
    org: "Independent",
    timeframe: "Personal project",
    summary: "Exploratory ETL/EDA of finance data; category normalization and time-series summaries to surface recurring charges and budget drift.",
    impact: [
      "Normalized categories and merchant aliases for consistent analytics",
      "Monthly aggregation surface: burn rate, inflows/outflows, and trend alerts",
    ],
    stack: ["Python", "pandas"],
    tags: ["ETL", "Time Series", "Personal Finance"],
    links: { report: "#", notebook: "/reports/Quicken_Quickbooks_Project.ipynb" },
  },
];

export default function Page() {
  const [active, setActive] = useState<string | null>(null);
  const featured = useMemo(() => PROJECTS.slice(0, 3), []);

  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-white shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Portfolio</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="mt-2 text-lg text-neutral-600">{PROFILE.title} · {PROFILE.location}</p>
          <p className="mt-4 max-w-2xl text-neutral-700">{PROFILE.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild href={PROFILE.linkedin}><><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</></Button>
            <Button variant="secondary" asChild href={PROFILE.github}><><Github className="mr-2 h-4 w-4" /> GitHub</></Button>
            <Button variant="outline" asChild href={PROFILE.email}><><Mail className="mr-2 h-4 w-4" /> Contact</></Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Card key={p.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActive(p.id)}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <BarChart3 className="h-4 w-4" />
                  <span>{p.org}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-neutral-700 line-clamp-3">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>)}
                </div>
                <div className="mt-4 flex items-center text-sm text-neutral-600">
                  <span className="mr-2">Explore</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <Card key={p.id}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Layers className="h-4 w-4" />
                  <span>{p.org}</span>
                  <span>•</span>
                  <span>{p.timeframe}</span>
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-neutral-700">{p.summary}</p>
                <ul className="mt-3 list-disc pl-5 text-neutral-800 space-y-1">
                  {p.impact.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => <Badge key={s} className="rounded-full" variant="outline">{s}</Badge>)}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.links.report && p.links.report !== "#" && (
                    <Button size="sm" variant="secondary" asChild href={p.links.report}><><FileText className="mr-2 h-4 w-4" /> Report</></Button>
                  )}
                  {p.links.notebook && p.links.notebook !== "#" && (
                    <Button size="sm" variant="outline" asChild href={p.links.notebook}><><Github className="mr-2 h-4 w-4" /> Notebook / Code</></Button>
                  )}
                  {p.links.demo && (
                    <Button size="sm" asChild href={p.links.demo}><><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</></Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & Tailwind.</p>
        </div>
      </footer>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/50 p-4" onClick={() => setActive(null)}>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            {PROJECTS.filter((p) => p.id === active).map((p) => (
              <div key={p.id}>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <BarChart3 className="h-4 w-4" />
                  <span>{p.org}</span>
                </div>
                <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-neutral-700">{p.summary}</p>
                <ul className="mt-3 list-disc pl-5 text-neutral-800 space-y-1">
                  {p.impact.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.links.report && p.links.report !== "#" && (
                    <Button asChild href={p.links.report}><><FileText className="mr-2 h-4 w-4" /> View Report</></Button>
                  )}
                  {p.links.notebook && p.links.notebook !== "#" && (
                    <Button variant="secondary" asChild href={p.links.notebook}><><Github className="mr-2 h-4 w-4" /> View Notebook</Button>
                  )}
                  {p.links.demo && (
                    <Button variant="outline" asChild href={p.links.demo}><><ExternalLink className="mr-2 h-4 w-4" /> Live Demo</></Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
