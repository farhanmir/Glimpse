# Glimpse Implementation Plan

## Overview
Glimpse is a platform that automatically detects products in streaming videos (like Netflix or YouTube) and provides users with real-time shopping links.

## Architecture
- **Enterprise SDK (Glimpse)**: A high-performance, DRM-compatible library designed for Tier 1 streaming platforms.
  - Hooks into proprietary players (Disney+'s player, Netflix's custom DOM, etc.).
  - Handles UI overlays with negligible performance overhead.
- **Vision Cloud Platform (FastAPI)**: 
  - Scalable backend for processing frame metadata.
  - Gemini API for object recognition and product matching.
- **Merchant & Ad Network**: Integration with retailer catalogs to provide real-time buy links.

## Proposed Changes

### [Enterprise SDK]
Summary: A cross-platform UI/logic library for video players.
- #### [NEW] [sdk/index.ts](../sdk/index.ts)
  - Core entry point for platform integration.
  - Abstraction layer for different video players (HTML5, Dash.js, Shaka Player).
- #### [NEW] [sdk/overlay.css](../sdk/overlay.css)
  - Non-intrusive, premium glowing UI styles.

### [Vision Backend]
Summary: High-throughput API for frame analysis.
- #### [NEW] [backend/main.py](../backend/main.py)
  - API for processing metadata/frames from the SDK.
- #### [NEW] [backend/product_matching.py](../backend/product_matching.py)
  - Logic to match AI detections with live shopping APIs (Amazon, Google Shopping).

## UI Design Goals
- **Glow Effect**: Smooth pulsating glow around a button to signal detection.
- **Premium Panel**: A sleek, dark-themed sidebar or popup with product cards and clear CTA buttons ("Buy Now").
- **Minimalist Integration**: The UI should not interfere with the video playback unless interacted with.

## Verification Plan

### Automated Tests
- Unit tests for Backend APIs.
- SDK integration tests on a mock HTML page with a `<video>` element.

### Manual Verification
- Testing the SDK on a local "Movie Site" demo page.
- Verifying the "glowing" effect and product popover UI.
