# Graph Report - .  (2026-07-22)

## Corpus Check
- Corpus is ~28,283 words - fits in a single context window. You may not need a graph.

## Summary
- 418 nodes · 595 edges · 65 communities (61 shown, 4 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 49 edges (avg confidence: 0.72)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Controllers/Auth
- composer.json
- ssr/assets
- AppServiceProvider.php
- @base-ui/react
- bootstrap/ssr
- components.json
- scripts
- Feature/Auth
- Requests/Auth
- jsconfig.json
- Profile/Partials
- ssr/assets
- database/factories
- js/Components
- tests
- Components/ui
- bootstrap

## God Nodes (most connected - your core abstractions)
1. `Controller` - 20 edges
2. `PrimaryButton()` - 17 edges
3. `InputError()` - 17 edges
4. `InputLabel()` - 15 edges
5. `N` - 15 edges
6. `GuestLayout()` - 14 edges
7. `require-dev` - 11 edges
8. `LoginRequest` - 9 edges
9. `TextInput` - 9 edges
10. `t()` - 9 edges

## Surprising Connections (you probably didn't know these)
- `AuthenticatedLayout()` --indirect_call--> `ApplicationLogo()`  [INFERRED]
  bootstrap/ssr/assets/Edit-jjNV0TPH.js → bootstrap/ssr/assets/ApplicationLogo-xMpxFOcX.js
- `GuestLayout()` --indirect_call--> `ApplicationLogo()`  [INFERRED]
  bootstrap/ssr/assets/GuestLayout-Ci26os6W.js → bootstrap/ssr/assets/ApplicationLogo-xMpxFOcX.js
- `ConfirmPassword()` --indirect_call--> `GuestLayout()`  [INFERRED]
  bootstrap/ssr/assets/ConfirmPassword-DfjsHlSS.js → bootstrap/ssr/assets/GuestLayout-Ci26os6W.js
- `ConfirmPassword()` --indirect_call--> `InputLabel()`  [INFERRED]
  bootstrap/ssr/assets/ConfirmPassword-DfjsHlSS.js → bootstrap/ssr/assets/InputLabel-CE_n4Upz.js
- `ConfirmPassword()` --indirect_call--> `PrimaryButton()`  [INFERRED]
  bootstrap/ssr/assets/ConfirmPassword-DfjsHlSS.js → bootstrap/ssr/assets/PrimaryButton-DgVfVBwo.js

## Import Cycles
- None detected.

## Communities (65 total, 4 thin omitted)

### Community 0 - "Controllers/Auth"
Cohesion: 0.10
Nodes (17): AuthenticatedSessionController, ConfirmablePasswordController, EmailVerificationNotificationController, EmailVerificationPromptController, NewPasswordController, PasswordController, PasswordResetLinkController, RegisteredUserController (+9 more)

### Community 1 - "composer.json"
Cohesion: 0.04
Nodes (47): pestphp/pest-plugin, php-http/discovery, autoload, autoload-dev, psr-4, psr-4, config, allow-plugins (+39 more)

### Community 2 - "ssr/assets"
Cohesion: 0.17
Nodes (25): ApplicationLogo(), ConfirmPassword(), DangerButton(), DeleteUserForm(), Modal(), SecondaryButton(), AuthenticatedLayout(), Dropdown() (+17 more)

### Community 3 - "AppServiceProvider.php"
Cohesion: 0.06
Nodes (33): AppServiceProvider, autoprefixer, axios, concurrently, @headlessui/react, Illuminate\Support\ServiceProvider, @inertiajs/react, laravel-vite-plugin (+25 more)

### Community 4 - "@base-ui/react"
Cohesion: 0.08
Nodes (24): @base-ui/react, class-variance-authority, clsx, @fontsource-variable/geist, gsap, lucide-react, dependencies, @base-ui/react (+16 more)

### Community 5 - "bootstrap/ssr"
Cohesion: 0.16
Nodes (3): N, t(), x

### Community 6 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 7 - "scripts"
Cohesion: 0.11
Nodes (19): scripts, dev, post-autoload-dump, post-create-project-cmd, post-root-package-install, post-update-cmd, test, Composer\\Config::disableProcessTimeout (+11 more)

### Community 8 - "Feature/Auth"
Cohesion: 0.16
Nodes (6): User, DatabaseSeeder, Illuminate\Database\Eloquent\Factories\HasFactory, Illuminate\Database\Seeder, Illuminate\Foundation\Auth\User, Illuminate\Notifications\Notifiable

### Community 9 - "Requests/Auth"
Cohesion: 0.24
Nodes (3): LoginRequest, ProfileUpdateRequest, Illuminate\Foundation\Http\FormRequest

### Community 10 - "jsconfig.json"
Cohesion: 0.22
Nodes (8): compilerOptions, baseUrl, paths, exclude, ziggy-js, node_modules, public, ./vendor/tightenco/ziggy

### Community 11 - "Profile/Partials"
Cohesion: 0.36
Nodes (3): DeleteUserForm(), UpdatePasswordForm(), UpdateProfileInformation()

### Community 12 - "ssr/assets"
Cohesion: 0.80
Nodes (5): cn(), GamingButton(), Header(), HomePage(), VoucherCard()

### Community 13 - "database/factories"
Cohesion: 0.47
Nodes (3): UserFactory, Illuminate\Database\Eloquent\Factories\Factory, static

## Knowledge Gaps
- **101 isolated node(s):** `DropDownContext`, `$schema`, `style`, `rsc`, `tsx` (+96 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `AppServiceProvider.php` to `@base-ui/react`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `composer.json`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Are the 8 inferred relationships involving `PrimaryButton()` (e.g. with `ConfirmPassword()` and `ForgotPassword()`) actually correct?**
  _`PrimaryButton()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `InputError()` (e.g. with `ConfirmPassword()` and `DeleteUserForm()`) actually correct?**
  _`InputError()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **What connects `DropDownContext`, `$schema`, `style` to the rest of the system?**
  _101 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Controllers/Auth` be split into smaller, more focused modules?**
  _Cohesion score 0.09959183673469388 - nodes in this community are weakly interconnected._
- **Should `composer.json` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._