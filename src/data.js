const BASE = import.meta.env.BASE_URL;

// Set to true when job hunting to show the "↓ CV" button in the nav; false to hide it.
export const SHOW_CV = false;

export const CATEGORIES =["All", "Institutional Analytics", "Commercial", "Quality Assurance"];

export const PROJECTS = [
  {
    id: "accreditation",
    title: "Programme Accreditation Tracker",
    subtitle: "Quality Assurance Intelligence",
    category: "Quality Assurance",
    description:
      "SharePoint-backed accreditation monitoring system tracking 80+ academic programmes across 6 colleges. Automates status classification (Accredited, Reaccreditation Due, In Progress) based on expiry date logic, with certificate tracking, accreditation stage workflows, and duration analytics for institutional quality assurance reporting.",
    tags: ["Power BI", "DAX", "SharePoint", "Power Query"],
    color: "#7C3AED",
    icon: "◇",
    screenshot: `${BASE}accreditation-dashboard.png`,
    embedUrl: null,
  },
  {
    id: "admissions",
    title: "University Admissions Analytics",
    subtitle: "Institutional Intelligence",
    category: "Institutional Analytics",
    description:
      "End-to-end admissions pipeline dashboard tracking 90,000+ applicant records across 7 colleges, from application through admission to registration. Features multi-dimensional slicing by programme, campus, STEM classification, and admission mode with real-time funnel analysis.",
    tags: ["Power BI", "DAX", "SQL Server", "Power Query"],
    color: "#2563EB",
    icon: "⊞",
    screenshot: `${BASE}admissions-dashboard.jpg`,
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiNTYzNGRmMTktODU4My00NWYyLWJiNDEtOTFkMTVjNmJiNTZhIiwidCI6IjEwNGQ4MDQ4LWZkMGMtNDNkNS1hNjMwLWZjNjI5ZTVkYWI1OSJ9",
  },
  {
    id: "graduation",
    title: "Graduation & Outcomes Tracker",
    subtitle: "Academic Achievement Intelligence",
    category: "Institutional Analytics",
    description:
      "Comprehensive graduation analytics linking admit cohorts to completion outcomes. Tracks class distribution (First Class through Pass), graduation age, duration-to-completion, and ceremony-level reporting across multiple congregation cycles.",
    tags: ["Power BI", "DAX", "SQL Server", "RDL Reports"],
    color: "#059669",
    icon: "◈",
    screenshot: `${BASE}graduation-dashboard.png`,
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiZTRkZTEzYWEtMGZjYS00YTQ1LTgzZTctNTJjM2FkMDI4N2U4IiwidCI6IjEwNGQ4MDQ4LWZkMGMtNDNkNS1hNjMwLWZjNjI5ZTVkYWI1OSJ9",
  },
  {
    id: "enrollment",
    title: "Enrollment & Registration Analytics",
    subtitle: "Student Population Intelligence",
    category: "Institutional Analytics",
    description:
      "Dual-layer enrollment system combining historical series data with live registered-student snapshots. Powers institutional KPIs including student-teacher ratio, gender parity index, and STEM enrollment trends with real-time current-year overlays.",
    tags: ["Power BI", "DAX", "SQL Server", "Power Query"],
    color: "#D97706",
    icon: "◉",
    screenshot: null,
    embedUrl: null,
  },
  {
    id: "restaurant-sales",
    title: "Restaurant Sales & Customer Analytics",
    subtitle: "QSR Business Intelligence",
    category: "Commercial",
    description:
      "Multi-branch restaurant analytics dashboard for a fast-food chain spanning 10+ locations. Tracks GH₵2.8M+ in revenue across 30,000+ items sold, with product category breakdowns, branch-level revenue comparisons, top-selling products, and customer spending patterns, all filterable by week, month, region, and branch.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    color: "#DC2626",
    icon: "◐",
    screenshot: `${BASE}restaurant-dashboard.png`,
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMTg5YTY1ZDItYjIxMi00NmRmLWExMWMtNGI2ZTg5N2E0Nzg4IiwidCI6IjEwNGQ4MDQ4LWZkMGMtNDNkNS1hNjMwLWZjNjI5ZTVkYWI1OSJ9",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management Dashboard",
    subtitle: "Retail Operations Intelligence",
    category: "Commercial",
    description:
      "Multi-page supply chain analytics suite for a retail company spanning 5 warehouses across Ghana. Covers four integrated domains: Inventory (stock levels, reorder alerts, inflow/outflow trends), Supplier Performance (lead times, on-time delivery rates, fulfillment scoring), Procurement (GH₵11.4M spend tracking, PO volumes, order status), and Sales (revenue by product/region, customer spending, fulfillment rates).",
    tags: ["Power BI", "DAX", "Data Modeling", "Supply Chain"],
    color: "#EA580C",
    icon: "⬡",
    screenshot: `${BASE}supply-chain-dashboard.png`,
    embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiMjZiMmExODgtN2M5MC00Y2RlLThjOTEtN2FmNjhjNWE0NTI4IiwidCI6IjEwNGQ4MDQ4LWZkMGMtNDNkNS1hNjMwLWZjNjI5ZTVkYWI1OSJ9",
  },
];

export const TESTIMONIALS = [];

export const SKILLS = [
  { name: "Power BI & DAX", level: 95 },
  { name: "SQL Server & Power Query (M)", level: 90 },
  { name: "Power Platform (Apps, Automate)", level: 88 },
  { name: "SharePoint & M365 Integration", level: 85 },
  { name: "RDL / Paginated Reports", level: 82 },
  { name: "Python (Pandas, Streamlit)", level: 80 },
];