---
name: Auth system design
description: How authentication works — localStorage-based, no backend
---

## Architecture
- `src/context/AuthContext.js` — provides login/register/logout/forgotPassword
- `src/components/auth/ProtectedRoute.js` — redirects unauthenticated users to /login
- Auth pages: `src/pages/auth/Login.js`, `Register.js`, `ForgotPassword.js`

## Storage
- Session user: `localStorage.getItem('agh_auth_user')`
- Per-account data: `localStorage.getItem('agh_user_${email}')`
- Passwords stored as `btoa(password)` (base64, not real encryption — demo only)

## App.js Pattern
AppLayout component (inside Router) reads pathname to hide Header/Footer on auth pages:
```js
const authPaths = ['/login', '/register', '/forgot-password'];
const isAuthPage = authPaths.includes(pathname);
// Header and Footer conditionally rendered
```
**Why:** Auth pages have their own full-page layout with centered card. Wrapping in AuthProvider inside Router allows useLocation in AppLayout.

## Protected Routes
PatientPortal at /patient-portal is wrapped in ProtectedRoute. Unauthenticated users are redirected to /login with `state: { from: location }`, then redirected back after login.
