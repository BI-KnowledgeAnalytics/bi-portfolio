// ============================================================
// PROJECT DATA
// ============================================================
const PROJECTS = [
  {
    img: "assets/projects/Project_Management_Summery.jpg",
    title: "Project Management Summary",
    category: "pm",
    categoryLabel: "Project Management",
    desc: "Portfolio-wide view across 99 projects worth $412M in cost and $874M in benefits, with complexity, region, and phase tracking built in.",
    tags: ["Power BI", "DAX", "Portfolio Analytics"]
  },
  {
    img: "assets/projects/Project_Management.jpg",
    title: "Construction Budget Tracker",
    category: "pm",
    categoryLabel: "Project Management",
    desc: "Tracks $273M in construction and residential budgets against actual spend, flagging cost overruns like Shopping Complex B's $24M overage.",
    tags: ["Budget Tracking", "Drillthrough", "Power BI"]
  },
  {
    img: "assets/projects/Root_Cause_Dashboard.jpg",
    title: "Root Cause Dashboard",
    category: "sales",
    categoryLabel: "Sales & Revenue",
    desc: "A fishbone-style decomposition tree that drills from a single sales KPI down to the category, state, and month driving the swing.",
    tags: ["Decomposition Tree", "YoY Analysis", "DAX"]
  },
  {
    img: "assets/projects/Agent_Performance.jpg",
    title: "Agents Performance",
    category: "sales",
    categoryLabel: "Sales & Revenue",
    desc: "Ranks 260+ sales agents by month-to-date performance against target, isolating top and bottom movers by discount and conversion behavior.",
    tags: ["Top N / Bottom N", "Ranking", "MTD"]
  },
  {
    img: "assets/projects/Agents_Quality_Performance.jpg",
    title: "Agents QOQ Sales Performance",
    category: "sales",
    categoryLabel: "Sales & Revenue",
    desc: "Quarter-over-quarter view of manager and rep performance, pairing sales trend with conversion rate on a single scatter plot.",
    tags: ["QoQ", "Scatter Analysis", "Sales Ops"]
  },
  {
    img: "assets/projects/Churn_Analysis.jpg",
    title: "Customer Risk Analysis",
    category: "customer",
    categoryLabel: "Customer Analytics",
    desc: "Churn analysis across 3,875 customers, breaking a 42.7% churn rate down by internet service type, contract length, and payment method.",
    tags: ["Churn Modeling", "Segmentation", "Power BI"]
  },
  {
    img: "assets/projects/Construction_Project_Management.jpg",
    title: "Construction Project Management",
    category: "pm",
    categoryLabel: "Project Management",
    desc: "Live tracker for 300 tasks across 100 projects, monitoring completion rate, overdue tasks, and budget utilization by project manager.",
    tags: ["Task Tracking", "Matrix Visual", "KPI Gauges"]
  },
  {
    img: "assets/projects/Customer_Insights.jpg",
    title: "Customer Insights",
    category: "customer",
    categoryLabel: "Customer Analytics",
    desc: "Revenue tracking across four global regions with YTD, prior-year comparison, and high-value-customer segmentation.",
    tags: ["Regional Analysis", "YTD", "Segmentation"]
  },
  {
    img: "assets/projects/E-_Commerce.jpg",
    title: "E-Commerce Conversion Dashboard",
    category: "sales",
    categoryLabel: "Sales & Revenue",
    desc: "Funnel analysis from page view to purchase, surfacing underperforming departments and products by conversion rate.",
    tags: ["Funnel Analysis", "Conversion Rate", "Retail"]
  },
  {
    img: "assets/projects/Geo_Sales.jpg",
    title: "Geo-Sales Dashboard",
    category: "sales",
    categoryLabel: "Sales & Revenue",
    desc: "3D geographic sales map layered with category targets and top/bottom state rankings, filterable by discount tier.",
    tags: ["3D Map", "Azure Maps", "Geo Analytics"]
  },
  {
    img: "assets/projects/Inventory_Management.jpg",
    title: "Inventory Analysis",
    category: "ops",
    categoryLabel: "Operations",
    desc: "ABC classification across 104 active products, pairing inventory turnover with profit margin to flag slow-moving stock.",
    tags: ["ABC Analysis", "Inventory Turnover", "Retail"]
  },
  {
    img: "assets/projects/Mining_Co_.jpg",
    title: "Budget Governance Dashboard",
    category: "pm",
    categoryLabel: "Project Management",
    desc: "Budget governance tracker for a mining portfolio — Rs. 592 Cr required vs Rs. 424 Cr approved, with execution status by project level.",
    tags: ["Budget Governance", "Execution Status", "Power BI"]
  },
  {
    img: "assets/projects/Performance_Dashboard.jpg",
    title: "Performance Analysis for CEO",
    category: "sales",
    categoryLabel: "Sales & Revenue",
    desc: "sales team performance WoW / MoM / QoQ against shipment volume and product category.",
    tags: ["Executive Reporting", "WoW/MoM/QoQ", "Design"]
  },
  {
    img: "assets/projects/Production_Analysis.jpg",
    title: "Production Prediction",
    category: "ops",
    categoryLabel: "Operations",
    desc: "Forecasts six months of production output using historical trend and confidence-interval bands to guide target-setting.",
    tags: ["Forecasting", "Time Series", "Manufacturing"]
  }
];

// ============================================================
// RENDER GRID
// ============================================================
const grid = document.getElementById("project-grid");

function renderGrid(){
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="card" data-category="${p.category}" data-index="${i}" tabindex="0" role="button" aria-label="View ${p.title} project">
      <div class="card__frame">
        <span class="card__tag">${p.categoryLabel}</span>
        <img src="${p.img}" alt="${p.title} Power BI dashboard screenshot" loading="lazy">
      </div>
      <div class="card__body">
        <h3 class="card__title">${p.title}</h3>
        <p class="card__desc">${p.desc}</p>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => openLightbox(+card.dataset.index));
    card.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openLightbox(+card.dataset.index);
      }
    });
  });
}
renderGrid();

// ============================================================
// FILTERS
// ============================================================
const filterButtons = document.querySelectorAll(".filter");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => { b.classList.remove("is-active"); b.setAttribute("aria-selected","false"); });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected","true");

    const filter = btn.dataset.filter;
    document.querySelectorAll(".card").forEach(card => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !match);
    });
  });
});

// ============================================================
// LIGHTBOX
// ============================================================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");
const lightboxCat = document.getElementById("lightbox-cat");
const lightboxTags = document.getElementById("lightbox-tags");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(index){
  const p = PROJECTS[index];
  lightboxImg.src = p.img;
  lightboxImg.alt = p.title + " full dashboard screenshot";
  lightboxTitle.textContent = p.title;
  lightboxDesc.textContent = p.desc;
  lightboxCat.textContent = p.categoryLabel;
  lightboxTags.innerHTML = p.tags.map(t => `<li>${t}</li>`).join("");
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lightboxClose.focus();
}

function closeLightbox(){
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });

// ============================================================
// HERO KPI COUNT-UP (runs once, respects reduced motion)
// ============================================================
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function countUp(el){
  const target = parseFloat(el.dataset.count);
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  if(prefersReduced){
    el.textContent = prefix + target.toFixed(decimals) + suffix;
    return;
  }
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = prefix + value.toFixed(decimals) + suffix;
    if(progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll(".kpi__value[data-count]").forEach(countUp);

// ============================================================
// SKILL STRIP: duplicate content for seamless marquee loop
// ============================================================
const track = document.querySelector(".skillstrip__track");
if(track){ track.innerHTML += track.innerHTML; }
