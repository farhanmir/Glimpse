# Glimpse: High-Performance AI Video Interpretation Engine

Glimpse is a production-grade, full-stack video platform designed to solve the challenges of **real-time computer vision reasoning** and **dynamic asset substitution** within a modern web environment. Built with a modular monorepo architecture, Glimpse demonstrates the integration of advanced AI models with high-fidelity frontend execution and a scalable backend.

---

## 🏗️ System Architecture

Glimpse is structured as a **Monorepo** to separate the core interpretive engine from the product-facing video platform:

- **`packages/glimpse-engine`**: A specialized interaction layer that manages frame-synchronization, Canvas-based overlays, and Shadow DOM style isolation.
- **`apps/glimpse-video`**: A premium video streaming interface built to showcase the engine's capabilities in a production-like environment.
- **`backend`**: A high-performance **FastAPI** service (transitioning from Supabase) utilizing **PostgreSQL/PostGIS** for spatial coordinate tracking and **Gemini Flash** for real-time scene interpretation.

---

## 🚀 Key Technical Highlights

### 1. Real-Time Scene Reasoning (Gemini Flash)
Utilizes the **Gemini 1.5 Flash** model to reason about video scenes in real-time. The engine transmits frame hashes and metadata, and the AI identifies objects (e.g., "beverage packaging," "apparel") to trigger dynamic interaction layers.

### 2. Dynamic Asset Substitution
Unlike traditional server-side video editing, Glimpse performs **Client-Side Asset Substitution**. By leveraging a synchronized Canvas layer, the engine can mask and replace objects within the video stream in real-world time without modifying the source manifest.

### 3. Scalable Spatial Database (PostGIS)
The project is mid-migration from a serverless monolith to a dedicated PostgreSQL architecture. By leveraging **PostGIS**, Glimpse treats object coordinates as spatial data, enabling high-performance temporal and spatial lookups for frame-perfect accuracy.

### 4. Enterprise-Grade UI Isolation
The interaction layers utilize **Shadow DOM** and **Scoped CSS** to ensure that Glimpse components remain completely isolated from the host platform's global styles, preventing CSS leakage and ensuring consistent rendering across diverse environments.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Framer Motion, TypeScript, Vite.
- **Graphics**: HTML5 Canvas, CSS Grid/Flexbox, GSAP for micro-animations.
- **Backend**: FastAPI (Python), PostgreSQL, PostGIS.
- **AI/ML**: Google Gemini 1.5 Flash Vision Model.
- **Infrastructure**: Docker, GitHub Actions (CI/CD).

---

## 🗺️ Engineering Roadmap

- [x] **Phase 1: Core Engine & Unified UI**: High-fidelity video dashboard and modular overlay system.
- [ ] **Phase 2: High-Performance Backend Migration**: Transitioning core logic to FastAPI for lower latency.
- [ ] **Phase 3: Spatial Coordinate Optimization**: Implementing PostGIS for complex spatial-temporal queries.
- [ ] **Phase 4: Observability & Load Testing**: Benchmarking frame-analysis latency under high-concurrent loads.

---

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/glimpse.git

# Install dependencies (Monorepo)
npm install

# Run the platform dev server
npm run dev --prefix apps/glimpse-video

# Run the interpretive engine (watch mode)
npm run dev --prefix packages/glimpse-engine
```

---

## 📝 License
MIT
