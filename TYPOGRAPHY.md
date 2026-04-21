# Typography Reference — Sora Mobile Web

> Quick reference for all fonts and text sizes used across the site.  
> Last updated: April 2026

---

## Font Families

All fonts are loaded in `src/app/layout.tsx` from Google Fonts.  
All font assignments live in `src/app/globals.css` under the **Font Control Center**.

| Element                  | CSS Variable             | Current Font        | Fallback     |
|--------------------------|--------------------------|---------------------|--------------|
| Body / paragraphs        | `--font-body`            | Outfit              | sans-serif   |
| Page headings (h1–h6)   | `--font-heading`         | Playfair Display    | serif        |
| Logo ("SORA")            | `--font-logo`            | Playfair Display    | serif        |
| Hamburger primary links  | `--font-nav-primary`     | Outfit              | sans-serif   |
| Hamburger secondary links| `--font-nav-secondary`   | Outfit              | sans-serif   |
| Footer                   | `--font-footer`          | Outfit              | sans-serif   |

### How to change a font

1. Open `src/app/layout.tsx`
2. Import the new font: `import { NewFont } from "next/font/google";`
3. Initialize it: `const newFont = NewFont({ subsets: ["latin"], display: 'swap', variable: '--font-newfont' });`
4. Add the variable to the `<html>` className
5. Open `src/app/globals.css` → Font Control Center
6. Point the desired variable to it: `--font-body: var(--font-newfont), sans-serif;`

---

## Text Sizes

### Navigation (`Navigation.module.css`)

| Element                    | Size       | Weight | 
|----------------------------|------------|--------|
| Navbar logo ("SORA")       | `1.25rem`  | 700    |
| Hamburger primary links    | `2rem`     | 700    |
| Hamburger secondary links  | `0.9rem`   | 400    |

### Landing Page

#### Carousel (`Carousel.module.css`)

| Element                    | Size       | Weight |
|----------------------------|------------|--------|
| Carousel heading           | varies     | 600    |

#### Window Two (`WindowTwo.module.css`)

| Element                    | Size       | Weight |
|----------------------------|------------|--------|
| Section heading            | varies     | 600    |

#### Window Three (`WindowThree.module.css`)

| Element                    | Size       | Weight |
|----------------------------|------------|--------|
| Card logo text             | `1.5rem`   | 700    |
| Card description           | `1.1rem`   | 500    |
| Arrow icon                 | `1.25rem`  | —      |

### Behind the Design (`BehindDesign.module.css`)

| Element                    | Size       | Weight |
|----------------------------|------------|--------|
| Page title (h1)            | `2.2rem`   | 700    |
| Section heading (h2)       | `1.75rem`  | 600    |
| Description text           | `1.1rem`   | —      |
| Hyperlink text             | `1rem`     | 500    |

### Footer (`Footer.module.css`)

| Element                    | Size       | Weight |
|----------------------------|------------|--------|
| Footer logo ("SORA")       | `2.5rem`   | 700    |
| Address text               | `1.05rem`  | —      |
| Social title               | `1.1rem`   | 600    |
| Nav links                  | `1.15rem`  | —      |
| Social icon circles        | `0.9rem`   | 500    |
| Bottom bar text            | `0.9rem`   | 500    |

---

## File Locations

| What to change             | File                                         |
|----------------------------|----------------------------------------------|
| Font imports               | `src/app/layout.tsx`                         |
| Font assignments           | `src/app/globals.css` (Font Control Center)  |
| Navbar sizes               | `src/components/Navigation.module.css`       |
| Footer sizes               | `src/components/Footer.module.css`           |
| Window Three card sizes    | `src/components/WindowThree.module.css`      |
| Behind the Design sizes    | `src/app/behind-design/BehindDesign.module.css` |
