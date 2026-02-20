# Mins Bot — Product & Web Specifications

## Product Overview

**Mins Bot** is a general-purpose AI agent that lives on your desktop. It acts as a persistent, local assistant capable of autonomous tasks, web interaction, file handling, and messaging integrations.

## Target Experience

- **Positioning:** Premium, “billion-dollar” product feel — trustworthy, powerful, and polished.
- **Audience:** Developers, power users, and teams who want a desktop AI agent.
- **Tone:** Professional, confident, clear. No hype; substance over buzzwords.

## Core Features

1. **Autonomous Web Browsing**  
   - Navigate, read, and interact with the web on your behalf.  
   - Research, fill forms, and automate browser-based workflows.

2. **File Management**  
   - Organize, search, move, and process files and folders.  
   - Integrate with your local filesystem safely and predictably.

3. **Integration with Messaging Systems**  
   - Connect to Slack, Discord, email, or other messaging platforms.  
   - Send and receive messages, run workflows from conversations.

4. **Skills Inventory**  
   - Extensible skill set: add or enable skills (e.g., coding, writing, data analysis).  
   - Discover and manage different capabilities from a single agent.

## Web Project (mins-bot-web)

### Tech Stack

| Layer        | Technology        | Version / Notes                    |
|-------------|-------------------|------------------------------------|
| Language    | Java              | 17                                 |
| Framework   | Spring Boot       | 3.x (compatible with Java 17)      |
| Styling     | Tailwind CSS      | Via CDN or build pipeline          |
| Icons       | Font Awesome      | 6.x                                |
| Markup      | HTML5             | Semantic, accessible               |

### Non-Functional Requirements

- **Design:** Professional, mobile-first, responsive.
- **Performance:** Fast first load; minimal layout shift.
- **Accessibility:** Semantic HTML, ARIA where needed, keyboard-friendly.
- **Browser support:** Modern evergreen browsers (Chrome, Firefox, Safari, Edge).

### Home Page Requirements

- **Hero:** Clear value proposition for Mins Bot (AI agent on your desktop).
- **Features section:**  
  - Autonomous web browsing  
  - File management  
  - Integration with messaging systems  
  - Different skills inventory  
- **Primary CTA:** “Download Now” button (prominent, above the fold where appropriate).
- **Layout:** Responsive; readable and usable on mobile, tablet, and desktop.
- **Visual style:** “Billion-dollar” aesthetic — clean, confident, premium (typography, spacing, color).

### Out of Scope (for this spec)

- Actual download/install flow (button can link to placeholder or future URL).
- Backend APIs or authentication (unless added in a later spec).
- Blog, docs, or multi-page navigation (can be added later).

---

*Last updated: 2025-02-20*
