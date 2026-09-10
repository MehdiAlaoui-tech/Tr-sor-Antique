# 📊 Tableau: 8 Combinaisons Populaires de Classes React

## Pour Nav, Hero, Products, Footer

```
┌────┬──────────────────┬──────────────────────────────────┬──────────────────────────────┬──────────────────────────┬──────────────────────┐
│ N° │ Combinaison      │ NAV (Navbar)                     │ HERO                         │ PRODUCTS                 │ FOOTER               │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 1  │ MODERN PURPLE    │ bg-purple-600                    │ bg-gradient-to-r             │ grid grid-cols-4         │ bg-gray-900          │
│    │ GRADIENT         │ flex justify-between             │ from-purple-500              │ gap-6 px-8              │ text-gray-400        │
│    │                  │ items-center px-8               │ to-pink-500 py-20            │ rounded-lg shadow-lg     │ py-12                │
│    │                  │ py-4 sticky top-0               │ text-white text-center       │ hover:shadow-xl          │ grid grid-cols-4     │
│    │                  │ shadow-md z-50                  │ h-96 flex flex-col           │ transition-all           │ gap-8                │
│    │                  │                                 │ justify-center               │                          │                      │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 2  │ DARK MINIMAL     │ bg-black text-white             │ bg-white text-black          │ grid grid-cols-3         │ bg-black text-white  │
│    │ CLEAN            │ flex justify-between            │ py-24 px-8 text-center       │ gap-4 p-12              │ border-t              │
│    │                  │ items-center px-12              │ h-80 flex items-center       │ rounded-md              │ border-gray-800      │
│    │                  │ py-3 border-b                   │ justify-center               │ bg-gray-50              │ py-8 px-12           │
│    │                  │ border-gray-800                 │ max-w-4xl mx-auto            │ hover:bg-gray-100       │ text-sm              │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 3  │ VIBRANT INDIGO   │ bg-indigo-600                   │ bg-gradient-to-b             │ grid grid-cols-2         │ bg-indigo-900        │
│    │ BOLD             │ flex items-center               │ from-indigo-600              │ md:grid-cols-4           │ text-indigo-200      │
│    │                  │ justify-between                 │ to-blue-500 text-white       │ gap-8 p-10              │ py-16 px-8           │
│    │                  │ px-6 py-4                       │ py-32 text-center            │ rounded-xl shadow-2xl    │ grid grid-cols-3     │
│    │                  │ shadow-lg                       │ flex flex-col items-center   │ hover:scale-105          │ gap-12              │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 4  │ GLASSMORPHISM    │ bg-white/20 backdrop-blur       │ bg-cover bg-center           │ grid grid-cols-3         │ bg-gray-800/50       │
│    │ FROSTED          │ border border-white/30          │ relative py-40               │ gap-6 p-8               │ backdrop-blur-md      │
│    │                  │ px-8 py-3 sticky                │ bg-gradient-to-br            │ rounded-2xl              │ border border-white   │
│    │                  │ top-0 z-40                      │ from-black/50 to-black/50    │ bg-white/10             │ /30 text-white       │
│    │                  │ text-white rounded-lg            │ flex items-center justify     │ hover:bg-white/20       │ py-12 px-10          │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 5  │ E-COMMERCE       │ bg-amber-700 flex               │ bg-orange-100 text-gray-900  │ grid grid-cols-4         │ bg-gray-100          │
│    │ CLASSIC          │ justify-between items-center    │ py-20 text-center           │ gap-4 p-16              │ text-gray-700        │
│    │                  │ px-10 py-5 shadow-md            │ h-72 flex flex-col           │ rounded-lg shadow        │ grid-cols-4          │
│    │                  │ text-white sticky                │ justify-center items-center  │ bg-gray-50              │ gap-10 py-12         │
│    │                  │ top-0 z-50                      │ space-y-4                    │ hover:shadow-lg          │ px-10                │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 6  │ MINIMALIST       │ border-b border-gray-200        │ bg-gray-50 py-16             │ grid grid-cols-3         │ bg-white              │
│    │ MONOCHROME       │ flex justify-between            │ text-gray-900 text-center    │ gap-6 p-12              │ border-t border-gray  │
│    │                  │ items-center px-6 py-3          │ h-64 flex items-center       │ rounded-md              │ -200 py-8 px-8       │
│    │                  │ bg-white text-gray-900          │ justify-center space-y-2     │ bg-white shadow-sm       │ text-gray-800        │
│    │                  │ sticky top-0 z-40               │ max-w-2xl mx-auto            │ hover:shadow-md          │ grid-cols-3 gap-12   │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 7  │ TECH STARTUP     │ bg-gradient-to-r                │ bg-gradient-to-r             │ grid grid-cols-4         │ bg-slate-950         │
│    │ NEON             │ from-slate-900 to-slate-800     │ from-cyan-500 to-blue-600    │ gap-5 p-10              │ text-slate-400       │
│    │                  │ text-white flex justify-between  │ text-white py-28             │ rounded-xl              │ py-16 px-12          │
│    │                  │ items-center px-12              │ text-center flex             │ shadow-2xl bg-slate     │ grid-cols-4 gap-12   │
│    │                  │ py-4 border-b border-cyan-500   │ flex-col items-center        │ -900/50 hover:glow      │ text-sm              │
├────┼──────────────────┼──────────────────────────────────┼──────────────────────────────┼──────────────────────────┼──────────────────────┤
│ 8  │ LUXURY PREMIUM   │ bg-gradient-to-r                │ bg-black text-white          │ grid grid-cols-3         │ bg-amber-950         │
│    │ DARK MODE        │ from-gray-900 to-black          │ py-32 relative overflow      │ gap-8 p-12              │ text-amber-100       │
│    │                  │ text-white flex justify-between  │ -hidden bg-gradient-to-b     │ rounded-2xl             │ border-t border-amber │
│    │                  │ items-center px-16              │ from-gray-900 to-black       │ shadow-2xl bg-gradient  │ -900 py-20 px-16     │
│    │                  │ py-6 border-b border-amber-700  │ flex items-center justify     │ to-r from-gray-900      │ grid-cols-3 gap-16   │
│    │                  │ sticky top-0 z-50               │ content-center space-y-6     │ hover:shadow-amber      │ text-lg              │
└────┴──────────────────┴──────────────────────────────────┴──────────────────────────────┴──────────────────────────┴──────────────────────┘
```

---

## 🔧 Exemples de Code React pour Chaque Combinaison

### 1️⃣ MODERN PURPLE GRADIENT
```jsx
// Navbar
<nav className="bg-purple-600 flex justify-between items-center px-8 py-4 sticky top-0 shadow-md z-50">
  {/* ... */}
</nav>

// Hero
<section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20 text-white text-center h-96 flex flex-col justify-center">
  {/* ... */}
</section>

// Products
<div className="grid grid-cols-4 gap-6 px-8">
  <div className="rounded-lg shadow-lg hover:shadow-xl transition-all">
    {/* ... */}
  </div>
</div>

// Footer
<footer className="bg-gray-900 text-gray-400 py-12 grid grid-cols-4 gap-8">
  {/* ... */}
</footer>
```

---

### 2️⃣ DARK MINIMAL CLEAN
```jsx
<nav className="bg-black text-white flex justify-between items-center px-12 py-3 border-b border-gray-800">
  {/* ... */}
</nav>

<section className="bg-white text-black py-24 px-8 text-center h-80 flex items-center justify-center">
  {/* ... */}
</section>

<div className="grid grid-cols-3 gap-4 p-12 rounded-md bg-gray-50">
  <div className="hover:bg-gray-100">
    {/* ... */}
  </div>
</div>

<footer className="bg-black text-white border-t border-gray-800 py-8 px-12 text-sm">
  {/* ... */}
</footer>
```

---

### 3️⃣ VIBRANT INDIGO BOLD
```jsx
<nav className="bg-indigo-600 flex items-center justify-between px-6 py-4 shadow-lg">
  {/* ... */}
</nav>

<section className="bg-gradient-to-b from-indigo-600 to-blue-500 text-white py-32 text-center flex flex-col items-center">
  {/* ... */}
</section>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-xl shadow-2xl">
  <div className="hover:scale-105">
    {/* ... */}
  </div>
</div>

<footer className="bg-indigo-900 text-indigo-200 py-16 px-8 grid grid-cols-3 gap-12">
  {/* ... */}
</footer>
```

---

### 4️⃣ GLASSMORPHISM FROSTED
```jsx
<nav className="bg-white/20 backdrop-blur border border-white/30 px-8 py-3 sticky top-0 z-40 text-white rounded-lg">
  {/* ... */}
</nav>

<section className="bg-cover bg-center relative py-40 bg-gradient-to-br from-black/50 to-black/50 flex items-center justify-center text-white">
  {/* ... */}
</section>

<div className="grid grid-cols-3 gap-6 p-8 rounded-2xl bg-white/10">
  <div className="hover:bg-white/20">
    {/* ... */}
  </div>
</div>

<footer className="bg-gray-800/50 backdrop-blur-md border border-white/30 text-white py-12 px-10">
  {/* ... */}
</footer>
```

---

### 5️⃣ E-COMMERCE CLASSIC
```jsx
<nav className="bg-amber-700 flex justify-between items-center px-10 py-5 shadow-md text-white sticky top-0 z-50">
  {/* ... */}
</nav>

<section className="bg-orange-100 text-gray-900 py-20 text-center h-72 flex flex-col justify-center items-center space-y-4">
  {/* ... */}
</section>

<div className="grid grid-cols-4 gap-4 p-16 rounded-lg shadow bg-gray-50">
  <div className="hover:shadow-lg">
    {/* ... */}
  </div>
</div>

<footer className="bg-gray-100 text-gray-700 grid-cols-4 gap-10 py-12 px-10">
  {/* ... */}
</footer>
```

---

## 📱 Responsive Adaptations

```jsx
// Navbar responsive
className="
  bg-purple-600 
  flex flex-col md:flex-row 
  justify-between 
  items-center 
  px-4 md:px-8 
  py-3 md:py-4
  sticky top-0 z-50
  shadow-md
"

// Products responsive
className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-4 
  gap-4 md:gap-6 
  p-4 md:p-8 lg:p-12
"

// Footer responsive
className="
  grid 
  grid-cols-2 
  md:grid-cols-3 
  lg:grid-cols-4 
  gap-6 md:gap-10 lg:gap-12 
  py-8 md:py-12 lg:py-16
"
```

---

## 🎨 Bonus: Classes Réutilisables

```jsx
// Container standard
const containerClass = "max-w-7xl mx-auto px-4 md:px-8 lg:px-12";

// Product card standard
const productCardClass = "rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden";

// Button standard
const buttonClass = "bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors";

// Section padding
const sectionPadding = "py-12 md:py-16 lg:py-20 px-4 md:px-8";

// Gradient standard
const gradientClass = "bg-gradient-to-r from-purple-600 to-pink-600";

// Hover effect
const hoverEffect = "transform hover:scale-105 transition-transform duration-300";

// Shadow standard
const shadowClass = "shadow-lg hover:shadow-2xl transition-shadow";

// Text standard
const textClass = "text-gray-900 dark:text-white";
```

---

## ✅ Quelle Combinaison Choisir?

| Situation | Combinaison |
|---|---|
| Site e-commerce | #5 E-Commerce Classic |
| Tech startup | #7 Tech Startup Neon |
| Portfolio premium | #8 Luxury Premium |
| SaaS moderne | #1 Modern Purple Gradient |
| Blog/Contenu | #6 Minimalist |
| Créatif/Design | #4 Glassmorphism |
| Production standard | #2 Dark Minimal |
| Vibrante/Jeune | #3 Vibrant Indigo |
