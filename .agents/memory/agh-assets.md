---
name: Doctor images and asset paths
description: Where doctor headshots and branding assets live
---

## Logo
- Path: `/logo.png` (NOT `/agh.png` — the old path is deprecated)
- Use in Header: `<img src="/logo.png" />`

## Doctor Images
All 12 doctor photos live in `public/doctors/`:
- `/doctors/dr-amara-osei.png` — Cardiologist
- `/doctors/dr-fatima-njeri.png` — Pediatrician
- `/doctors/dr-kenneth-mwangi.png` — General Surgeon
- `/doctors/dr-wanjiku-kamau.png` — OB-GYN
- `/doctors/dr-ibrahim-hassan.png` — Neurologist
- `/doctors/dr-grace-otieno.png` — Dermatologist
- `/doctors/dr-samuel-kipkoech.png` — Orthopaedic Surgeon
- `/doctors/dr-miriam-achieng.png` — General Medicine
- `/doctors/dr-priya-sharma.png` — Endocrinology
- `/doctors/dr-amina-yusuf.png` — Psychiatry
- `/doctors/dr-james-odhiambo.png` — Emergency Medicine
- `/doctors/mr-david-maina.png` — Hospital Director (isLeadership: true)

## Fallback
All doctor images use onError fallback to ui-avatars.com with green background.

## Data
doctors.js exports `doctors` array (12 items) and `specialties` array (excludes isLeadership: true entries).
Each doctor has: id, slug, name, title, specialty, department, experience, qualifications, certifications, memberships, languages, image, bio, longBio, expertise[], services[], conditions[], available[], schedule{}, rating, reviews, patients, faqs[].
