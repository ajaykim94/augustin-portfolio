
# Augustin Kim — Data Science Portfolio

A minimal Next.js (App Router) + Tailwind site that showcases your projects with clean cards, tags, and downloadable reports/notebooks.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

- Vercel (recommended): import this repo and deploy.
- Static Node server: `npm run build && npm start`.

## Where are my files?

Your PDFs and notebooks are in **/public/reports** and linked from the UI:
- `/reports/Book_Binders_Report.pdf`
- `/reports/Cell2Cell_Report.pdf`
- `/reports/NBA_Predictions_Project_Report.pdf`
- `/reports/Tuscan_RFM_Report.pdf`
- `/reports/Book_Binders_Logistic_Regression.ipynb`
- `/reports/Cell2Churn.ipynb`
- `/reports/NBA_Predictions.ipynb`
- `/reports/Tuscan_RFM.ipynb`
- `/reports/Quicken_Quickbooks_Project.ipynb`

## Editing your profile

Update the `PROFILE` object in `app/page.tsx` for name, title, LinkedIn, GitHub, and email.

## Adding a live demo

Replace the `Live Demo` link in the modal with your Streamlit, Gradio, or dashboard URL.

## Notes

This project uses simple in-house UI primitives (`components/ui`) for Button/Card/Badge to avoid external setup. Tailwind is pre-configured.
