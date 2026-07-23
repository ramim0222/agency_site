# Graph Report - .  (2026-07-23)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 910 nodes · 897 edges · 245 communities (214 shown, 31 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a5acc923`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Lead
- composer.json
- User.php
- devDependencies
- dependencies
- components.json
- scripts
- saas.js
- LoginRequest
- home.js
- portfolio.js
- LeadReceived
- LeadFactory
- blog.js
- compilerOptions
- Edit.jsx
- about.js
- pricing.js
- Dropdown.jsx
- careers.js
- contact.js
- faq.js
- servicesMobileApps.js
- MultiStepForm.jsx
- servicesSaas.js
- servicesWebApps.js
- servicesWebDevelopment.js
- Leads/Index.jsx
- PasswordStrengthMeter.jsx
- Hero.jsx
- LegalDocLayout.jsx
- ActivityTimeline.jsx
- AdminSidebar.jsx
- LeadTable.jsx
- thankYou.js
- TestCase
- ArticleHeader.jsx
- BlogPostCard.jsx
- BlogPreviewCard.jsx
- PortfolioCarousel.jsx
- ServiceCard.jsx
- TestimonialCarousel.jsx
- AddActivityForm.jsx
- DateRangePicker.jsx
- LeadKanbanBoard.jsx
- LeadsByStatusWidget.jsx
- SourceBadge.jsx
- SourceConversionBreakdown.jsx
- StatusBadge.jsx
- ViewToggle.jsx
- button.jsx
- campaigns.js
- motion.js
- Pricing.jsx
- .tmp-screenshot.mjs
- bootstrap/app.php
- AuthInput.jsx
- privacy.js
- refundPolicy.js
- terms.js
- portfolio

## God Nodes (most connected - your core abstractions)
1. `Lead` - 40 edges
2. `Controller` - 16 edges
3. `LeadController` - 14 edges
4. `require-dev` - 11 edges
5. `LeadReceived` - 9 edges
6. `LeadActivity` - 8 edges
7. `LoginRequest` - 7 edges
8. `require` - 7 edges
9. `scripts` - 7 edges
10. `SourceController` - 7 edges

## Surprising Connections (you probably didn't know these)
- `LeadReceived` --references--> `Lead`  [EXTRACTED]
  app/Mail/LeadReceived.php → app/Models/Lead.php
- `ConfirmablePasswordController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/Auth/ConfirmablePasswordController.php → app/Http/Controllers/Controller.php
- `EmailVerificationNotificationController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/Auth/EmailVerificationNotificationController.php → app/Http/Controllers/Controller.php
- `EmailVerificationPromptController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/Auth/EmailVerificationPromptController.php → app/Http/Controllers/Controller.php
- `PasswordController` --inherits--> `Controller`  [EXTRACTED]
  app/Http/Controllers/Auth/PasswordController.php → app/Http/Controllers/Controller.php

## Import Cycles
- None detected.

## Communities (245 total, 31 thin omitted)

### Community 0 - "Lead"
Cohesion: 0.05
Nodes (25): AuthenticatedSessionController, ConfirmablePasswordController, EmailVerificationNotificationController, EmailVerificationPromptController, NewPasswordController, PasswordController, PasswordResetLinkController, RegisteredUserController (+17 more)

### Community 1 - "composer.json"
Cohesion: 0.04
Nodes (47): pestphp/pest-plugin, php-http/discovery, autoload, autoload-dev, psr-4, psr-4, config, allow-plugins (+39 more)

### Community 2 - "User.php"
Cohesion: 0.08
Nodes (12): LeadActivity, User, AdminUserSeeder, DatabaseSeeder, LeadSeeder, Illuminate\Database\Eloquent\Factories\HasFactory, Illuminate\Database\Eloquent\Model, Illuminate\Database\Eloquent\Relations\BelongsTo (+4 more)

### Community 3 - "devDependencies"
Cohesion: 0.06
Nodes (33): AppServiceProvider, autoprefixer, axios, concurrently, @headlessui/react, Illuminate\Support\ServiceProvider, @inertiajs/react, laravel-vite-plugin (+25 more)

### Community 4 - "dependencies"
Cohesion: 0.06
Nodes (30): @base-ui/react, class-variance-authority, clsx, @fontsource/instrument-serif, @fontsource-variable/geist, @fontsource-variable/geist-mono, gsap, @gsap/react (+22 more)

### Community 5 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 6 - "scripts"
Cohesion: 0.11
Nodes (19): scripts, dev, post-autoload-dump, post-create-project-cmd, post-root-package-install, post-update-cmd, test, Composer\\Config::disableProcessTimeout (+11 more)

### Community 7 - "saas.js"
Cohesion: 0.13
Nodes (9): categoryLabels, categoryPages, getProductBySlug(), getProductDetail(), getRelatedProducts(), productDetails, products, saasCategories (+1 more)

### Community 8 - "LoginRequest"
Cohesion: 0.18
Nodes (4): LoginRequest, StoreLeadRequest, ProfileUpdateRequest, Illuminate\Foundation\Http\FormRequest

### Community 9 - "home.js"
Cohesion: 0.17
Nodes (10): brand, finalCta, footerLinks, hero, primaryNav, services, stats, techStack (+2 more)

### Community 10 - "portfolio.js"
Cohesion: 0.18
Nodes (9): caseStudyCta, categoryLabels, filterTabs, getProjectBySlug(), getRelatedProjects(), homePortfolio, portfolioPage, projects (+1 more)

### Community 11 - "LeadReceived"
Cohesion: 0.27
Nodes (6): LeadReceived, Illuminate\Bus\Queueable, Illuminate\Mail\Mailable, Illuminate\Mail\Mailables\Content, Illuminate\Mail\Mailables\Envelope, Illuminate\Queue\SerializesModels

### Community 12 - "LeadFactory"
Cohesion: 0.27
Nodes (4): LeadFactory, UserFactory, Illuminate\Database\Eloquent\Factories\Factory, static

### Community 13 - "blog.js"
Cohesion: 0.20
Nodes (8): authors, blogCategories, blogPage, blogPosts, categoryLabels, getAuthor(), getPostBySlug(), posts

### Community 14 - "compilerOptions"
Cohesion: 0.22
Nodes (8): compilerOptions, baseUrl, paths, exclude, ziggy-js, node_modules, public, ./vendor/tightenco/ziggy

### Community 15 - "Edit.jsx"
Cohesion: 0.36
Nodes (3): DeleteUserForm(), UpdatePasswordForm(), UpdateProfileInformation()

### Community 16 - "about.js"
Cohesion: 0.29
Nodes (6): aboutPage, aboutStack, aboutStats, mission, partners, team

### Community 17 - "pricing.js"
Cohesion: 0.29
Nodes (6): customDevSections, hashToTab, pricingFaq, pricingPage, pricingTabs, saasPricingTeaser

### Community 19 - "careers.js"
Cohesion: 0.33
Nodes (4): applicationCta, careersPage, culture, openRoles

### Community 20 - "contact.js"
Cohesion: 0.33
Nodes (5): budgetOptions, contactPage, formSteps, serviceOptions, timelineOptions

### Community 21 - "faq.js"
Cohesion: 0.33
Nodes (3): faqByTopic, faqPage, faqTopics

### Community 22 - "servicesMobileApps.js"
Cohesion: 0.33
Nodes (5): mobileAppsFaq, mobileAppsPricing, mobileAppsProcess, mobileAppsService, mobileStoreBadges

### Community 23 - "MultiStepForm.jsx"
Cohesion: 0.60
Nodes (4): MultiStepForm(), readAttribution(), readLeadContext(), SERVICE_QUERY_MAP

### Community 24 - "servicesSaas.js"
Cohesion: 0.40
Nodes (4): saasBenefits, saasFeaturedSlugs, saasMarketplaceCategories, saasService

### Community 25 - "servicesWebApps.js"
Cohesion: 0.40
Nodes (4): webAppsFaq, webAppsPricing, webAppsProcess, webAppsService

### Community 26 - "servicesWebDevelopment.js"
Cohesion: 0.40
Nodes (4): webDevFaq, webDevPricing, webDevProcess, webDevService

### Community 27 - "Leads/Index.jsx"
Cohesion: 0.60
Nodes (3): filterSummary(), LeadsIndex(), toDraft()

### Community 28 - "PasswordStrengthMeter.jsx"
Cohesion: 0.67
Nodes (3): PasswordStrengthMeter(), scorePassword(), TONE_FILL

### Community 34 - "AdminSidebar.jsx"
Cohesion: 0.67
Nodes (3): AdminSidebar(), isActive(), NAV

### Community 36 - "thankYou.js"
Cohesion: 0.50
Nodes (3): nextSteps, suggestedLinks, thankYouPage

## Knowledge Gaps
- **204 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+199 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **31 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Lead` connect `Lead` to `User.php`, `LeadReceived`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `dependencies`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `Lead` (e.g. with `.store()` and `.__invoke()`) actually correct?**
  _`Lead` has 7 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _204 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Lead` be split into smaller, more focused modules?**
  _Cohesion score 0.050917336631622345 - nodes in this community are weakly interconnected._
- **Should `composer.json` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._
- **Should `User.php` be split into smaller, more focused modules?**
  _Cohesion score 0.07965860597439545 - nodes in this community are weakly interconnected._