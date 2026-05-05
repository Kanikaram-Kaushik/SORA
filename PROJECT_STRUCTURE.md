# Sora Website Structure & Page Reference

This document serves as a guide to help you find the code for each page on your website.

## 📁 How it Works
In this project (Next.js), the folder structure matches the website links:
- Folder: `src/app/living` → Link: `/living`
- File: `page.tsx` → The actual content/code of that page.

---

## 🏠 Main Pages
These are the primary sections of your website.

| Page Name | Website Link | Code File Path |
| :--- | :--- | :--- |
| **Homepage** | `/` | [src/app/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/page.tsx) |
| **About Us** | `/about` | [src/app/about/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/about/page.tsx) |
| **Contact** | `/contact` | [src/app/contact/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/contact/page.tsx) |
| **Design** | `/design` | [src/app/design/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/design/page.tsx) |
| **Behind the Design**| `/behind-design` | [src/app/behind-design/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/behind-design/page.tsx) |
| **Downloads** | `/download` | [src/app/download/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/download/page.tsx) |

---

## 🛋️ Sora Living Collection
The living section includes the main category page and specific product sub-pages.

| Page Name | Website Link | Code File Path |
| :--- | :--- | :--- |
| **Living Main** | `/living` | [src/app/living/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/living/page.tsx) |
| Bar Counter | `/living/bar-counter` | `src/app/living/bar-counter/page.tsx` |
| Ergo Desk | `/living/ergo-desk` | `src/app/living/ergo-desk/page.tsx` |
| Floor Lamps | `/living/floor-lamps` | `src/app/living/floor-lamps/page.tsx` |
| Desk Chairs | `/living/desk-chairs` | `src/app/living/desk-chairs/page.tsx` |
| Storage | `/living/storage` | `src/app/living/storage/page.tsx` |
| Smart Lamps | `/living/smart-lamps` | `src/app/living/smart-lamps/page.tsx` |
| Crib Bed | `/living/crib-bed` | `src/app/living/crib-bed/page.tsx` |
| Accessories | `/living/accessories` | `src/app/living/accessories/page.tsx` |
| Gifting | `/living/gifting` | `src/app/living/gifting/page.tsx` |

---

## 💡 Lighting Collection
Specific sections dedicated to lighting solutions.

| Page Name | Website Link | Code File Path |
| :--- | :--- | :--- |
| **Lighting Main** | `/lighting` | [src/app/lighting/page.tsx](file:///c:/Users/kpava/OneDrive/Desktop/mobile_web/src/app/lighting/page.tsx) |
| Indoor Lighting | `/lighting/indoor` | `src/app/lighting/indoor/page.tsx` |
| Outdoor Lighting | `/lighting/outdoor` | `src/app/lighting/outdoor/page.tsx` |
| Decorative | `/lighting/decorative` | `src/app/lighting/decorative/page.tsx` |
| Automation | `/lighting/automation` | `src/app/lighting/automation/page.tsx` |
| Lux | `/lighting/lux` | `src/app/lighting/lux/page.tsx` |

---

## 🛠️ Core Components & Styling
These files control the "look and feel" and shared elements across all pages.

| Feature | Description | File Path |
| :--- | :--- | :--- |
| **Navigation** | The hamburger menu and logo | `src/components/Navigation.tsx` |
| **Global Styles** | Colors, fonts, and base CSS | `src/app/globals.css` |
| **Site Layout** | The main shell of the site | `src/app/layout.tsx` |
| **Images** | All static photos and icons | `public/` folder |
