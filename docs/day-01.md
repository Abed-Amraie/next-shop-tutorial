# Day 01 - Project Setup
Date: 2026-10-10
Duration: 1 hour

## Goals
- Install Node.js + VS Code
- Create Next.js project with TypeScript + Tailwind
- Understand project structure vs Flutter
- Build first landing page

## Setup Commands
node -v                          # check Node version
npm -v                           # check npm version
npx create-next-app@latest my-shop
cd my-shop
npm run dev                      # http://localhost:3000

## Project Structure (vs Flutter)
src/app/layout.tsx     <->  main.dart
src/app/page.tsx       <->  HomeScreen
src/app/globals.css    <->  ThemeData
public/                <->  assets/
package.json           <->  pubspec.yaml

## Key Tailwind Classes (day 1)
min-h-screen           full viewport height
max-w-6xl mx-auto      centered container
px-6 py-24             padding
text-5xl md:text-6xl   responsive font size
flex gap-4             horizontal layout
grid grid-cols-3       grid layout
rounded-lg             rounded corners
hover:bg-violet-700    hover state
transition-colors      smooth animation

## Key Concepts
- Component = Widget in Flutter
- JSX = build() method in Flutter
- className instead of class
- .map() with key for repeated items
- export default required in every page.tsx

## Errors Fixed
- "The default export is not a React Component" — broken JSX or missing export default

## Review Questions
- What is JSX? HTML-like syntax inside JavaScript.
- Why className not class? class is reserved in JavaScript.
- Why key in .map()? React needs unique keys for efficient re-rendering.
- What happens without export default? Next.js shows error, page won't render.
