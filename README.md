# 🎉 Birthday Celebration Website

A beautiful, fully responsive birthday wishing website built with React, TypeScript, and Tailwind CSS. Features vibrant birthday themes, animated elements, and a modern glassmorphism design.

---

## ✨ Features

- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Animated Elements**: Floating balloons, confetti, and smooth transitions
- **Interactive Gallery**: Lightbox photo viewer with navigation
- **Glassmorphism Cards**: Modern frosted glass effect
- **Custom Fonts**: Dancing Script for headings, Poppins for body text
- **Organized Content**: Tabbed sections for poems and quotes
- **Friend Messages**: Beautiful grid layout for birthday wishes

---

## 🚀 Quick Start

1. **Clone & Install**:
   ```bash
   git clone https://github.com/BABIN-JOE/BIRTHDAY-WISH/tree/master.git
   cd BIRTHDAY-WISH
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🎨 Customization Guide

### 1. Change the Birthday Person's Name

Edit these files:
- `src/components/Hero.tsx` - Update the name in the h2 element
- `src/components/Footer.tsx` - Update the name in the footer text
- `index.html` - Update the title and meta description

### 2. Replace Photos

Replace images in the `public/images/` folder:
- `hero.jpg` - Main birthday person photo (square format recommended)
- `gallery1.jpg` through `gallery6.jpg` - Memory photos 

### 3. Update Content

#### Birthday Wishes
Edit `src/components/BirthdayWish.tsx` to personalize the main birthday message.

#### Poems
Edit `src/data/poems.json`:
```json
[
  {
    "id": 1,
    "title": "Your Poem Title",
    "content": "Your poem content\nWith line breaks\nLike this"
  }
]
```

#### Quotes
Edit `src/data/quotes.json`:
```json
[
  {
    "id": 1,
    "quote": "Your inspirational quote here",
    "author": "Quote Author"
  }
]
```

#### Friend Messages
Edit `src/data/messages.json`:
```json
[
  {
    "id": 1,
    "name": "Friend's Name",
    "message": "Their birthday message"
  }
]
```

### 4. Customize Colors & Styling

The design system is in `src/index.css`. Key variables to customize:

```css
:root {
  /* Birthday Theme Colors (HSL format) */
  --primary: 320 60% 65%;        /* Main pink/purple */
  --secondary: 200 60% 80%;      /* Light blue */
  --accent: 280 50% 75%;         /* Purple accent */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(320 60% 75%), hsl(200 60% 80%));
  --gradient-hero: linear-gradient(135deg, hsl(320 40% 90%) 0%, hsl(200 40% 95%) 50%, hsl(280 30% 95%) 100%);
}
```

### 5. Add More Gallery Images

1. Add new images to `public/images/`
2. Update the `galleryImages` array in `src/components/Gallery.tsx`

### 6. Modify Animations

Animation settings are in `src/index.css` and `tailwind.config.ts`. Key animations:
- `float` - For floating balloons
- `fade-in-up` - For content reveals
- `scale-in` - For card appearances
- `polaroid-tilt` - For the hero photo

---

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Hero.tsx         # Main hero section
│   ├── Gallery.tsx      # Photo gallery with lightbox
│   ├── TabsSection.tsx  # Poems and quotes tabs
│   ├── MessagesList.tsx # Friend messages grid
│   └── ...
├── data/                # JSON content files
│   ├── poems.json       # Birthday poems
│   ├── quotes.json      # Inspirational quotes
│   └── messages.json    # Friend messages
├── providers/           # Context providers
└── pages/               # Page components
```
---

## 🎯 Design Philosophy

- **Birthday Theme**: Pastel blue/pink gradients with playful elements
- **Glassmorphism**: Frosted glass cards with backdrop blur
- **Typography**: Dancing Script for headings (elegant), Poppins for body (readable)
- **Animations**: Subtle and smooth, enhancing without overwhelming
- **Responsive**: Mobile-first approach with progressive enhancement

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and design system
- **Vite** - Build tool and dev server
- **next-themes** - Dark/light mode toggle
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🎈 Tips for Best Results

1. **Images**: Use high-quality photos (800x600px or larger)
2. **Names**: Keep names reasonably short for best mobile display
3. **Messages**: Aim for 2-4 sentences per friend message
4. **Poems**: Use `\n` for line breaks in JSON content
5. **Performance**: Optimize images before adding to public folder

---

## 💝 Making It Special

- Add inside jokes in the friend messages
- Include meaningful quotes that resonate with the birthday person
- Use photos that tell a story of your friendship
- Personalize the birthday wish section with specific memories
- Consider the person's favorite colors when customizing the theme

---

**Note**: All the images used here are generated by AI.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to fork and customize, but credit is appreciated.

---

## 🙌 Author

**Babin Joe**  
🔗 [Portfolio](https://babin-joe.vercel.app/) | [GitHub](https://github.com/BABIN-JOE) | [LinkedIn](https://www.linkedin.com/in/babin-joe/)

---

**Built with ❤️ by Babin for creating memorable birthday celebrations!🎂🎇🎈**