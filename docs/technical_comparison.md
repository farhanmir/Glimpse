# Glimpse: Technical Landscape & Comparison

This document provides a technical comparison between Glimpse's architecture and traditional methods of video object interaction and metadata synchronization.

## 1. Technical Approaches to Video Interaction

| Feature | Glimpse (AI-Driven) | Traditional (Manual/Metadata) | SSAI (Server-Side Ad Insertion) |
| :--- | :--- | :--- | :--- |
| **Object Discovery** | Automated via Gemini Flash vision reasoning. | Manual frame-level tagging and timestamping. | Pre-baked segments inserted into the stream. |
| **Asset Substitution** | Dynamic pixel-level masking and Canvas overlays. | None (Static content). | Replaces entire video segments at the server level. |
| **UI Isolation** | Shadow DOM / Scoped CSS for zero platform interference. | Global CSS / iFrames (higher overhead). | N/A (Part of the stream). |
| **Low-Latency Sync** | Client-side event-driven synchronization. | Prone to drift without dedicated player adapters. | Seamless sync (burned into stream). |
| **Flexibility** | Real-time, context-aware changes per user/session. | Rigid, requires content re-processing. | Session-based but limited to segment boundaries. |

## 2. The Glimpse Technical Edge

### A. Real-Time Vision Reasoning
Traditional platforms rely on a "Tag once, serve many" model. Glimpse utilizes Gemini Flash to interpret the scene in real-time, allowing for **Contextual Asset Substitution**. This means the same video frame can show different interactive elements based on backend logic without modifying the source video.

### B. Client-Side Dynamic Overlays
Unlike SSAI, which modifies the HLS/DASH manifest to swap segments, Glimpse uses a **Canvas-based Rendering Layer**. This allows for:
- Frame-perfect pixel coordinates.
- Non-destructive UI augmentation (no stream buffering or segment re-fetching).
- Smooth CSS/GSAP animations for interactive elements.

### C. Scalable Spatial Catalog
By migrating to **PostgreSQL with PostGIS**, Glimpse manages spatial coordinates as first-class citizens. This allows for complex queries, such as identifying all video scenes where an object appears within a specific quadrant of the frame, optimizing the lookup for dynamic substitutions.

## 3. Engineering Tradeoffs

- **Performance vs. Precision**: Glimpse prioritizes low-latency analysis (<200ms) by utilizing frame-hashing and caching, occasionally sacrificing extreme pixel-precision for a responsive user experience.
- **Isolation vs. Integration**: Using Shadow DOM ensures that the Glimpse Engine can be integrated into any video-centric platform without style or script collisions, at the cost of slightly more complex event propagation (e.g., handling click events across Shadow boundaries).
