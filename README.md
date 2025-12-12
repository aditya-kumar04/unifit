# UNIFIT - College Fitness, Made Simple

A fitness platform designed specifically for college students. Stop guessing, start training.

## What is UNIFIT?

UNIFIT helps busy college students build sustainable fitness habits through:
- **Curated Exercise Library** - Learn exercises the right way, without the noise
- **Simple Habit Tracking** - Track your gym days without streak pressure
- **Peer Guidance** - Connect with student guides who understand your schedule
- **Campus-Specific Tips** - Dorm meals, exam week workouts, and more

---

## Features

- **Exercise Library**: 8 foundational exercises with proper form, do's/don'ts, and common mistakes
- **Training Tracker**: Horizontal calendar to mark gym days - no guilt, no pressure
- **Mentorship Program**: Connect with student guides who've figured it out
- **Campus Tips**: Quick dorm meals, exam week energy, all-nighter recovery, busy day workouts
- **Student Testimonials**: Real results from real college students

---

## Running Locally (Step-by-Step for Beginners)

### Prerequisites

Before you start, make sure you have these installed on your computer:

1. **Node.js** (v18 or higher)
   - Go to [https://nodejs.org](https://nodejs.org)
   - Download the "LTS" (Long Term Support) version
   - Run the installer and follow the prompts
   - To verify installation, open Terminal (Mac) or Command Prompt (Windows) and type:
     \`\`\`bash
     node --version
     \`\`\`
     You should see something like `v18.17.0` or higher

2. **Git** (optional, but recommended)
   - Go to [https://git-scm.com](https://git-scm.com)
   - Download and install for your operating system

---

### Step 1: Get the Code

**Option A: Download from v0 (Easiest)**
1. In v0, click the three dots (...) in the top right of the code preview
2. Select "Download ZIP"
3. Extract the ZIP file to a folder on your computer (e.g., `Desktop/unifit`)

**Option B: Clone with Git**
\`\`\`bash
git clone <your-repo-url>
cd unifit
\`\`\`

---

### Step 2: Open Terminal in the Project Folder

**On Mac:**
1. Open Finder and navigate to your project folder
2. Right-click the folder → "Services" → "New Terminal at Folder"
   - OR open Terminal and type `cd ` (with a space), then drag the folder into Terminal and press Enter

**On Windows:**
1. Open File Explorer and navigate to your project folder
2. Click in the address bar, type `cmd`, and press Enter
   - OR open Command Prompt, type `cd `, then paste the folder path

---

### Step 3: Install Dependencies

In your terminal, run:

\`\`\`bash
npm install
\`\`\`

This will download all the necessary packages. It may take 1-2 minutes.

---

### Step 4: Start the Development Server

Run:

\`\`\`bash
npm run dev
\`\`\`

You should see output like:

\`\`\`
▲ Next.js 16.x.x
- Local:        http://localhost:3000
- Ready in 2.3s
\`\`\`

---

### Step 5: Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: **http://localhost:3000**
3. You should see the UNIFIT landing page!

---

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| `npm: command not found` | Node.js isn't installed. Go back to Prerequisites. |
| `EACCES: permission denied` | On Mac/Linux, try: `sudo npm install` |
| Port 3000 already in use | Run: `npm run dev -- -p 3001` then visit localhost:3001 |
| `Module not found` errors | Delete `node_modules` folder and run `npm install` again |

---

### Stopping the Server

Press `Ctrl + C` in your terminal to stop the development server.

---

## Project Structure

\`\`\`
unifit/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles & theme
├── components/
│   ├── navigation.tsx    # Top navigation bar
│   ├── hero.tsx          # Hero section
│   ├── exercise-library.tsx  # Curated exercises
│   ├── training-tracker.tsx  # Habit tracker
│   ├── mentorship-program.tsx # Guidance section
│   ├── campus-tips.tsx   # Lifestyle tips
│   ├── testimonials.tsx  # Student feedback
│   └── footer.tsx        # Footer
├── components/ui/        # Reusable UI components (shadcn)
└── README.md             # This file
\`\`\`

---

## Customization

### Changing Colors
Edit `app/globals.css` and modify the CSS variables:
- `--secondary`: Main accent color (currently red)
- `--background`: Background color
- `--foreground`: Text color

### Adding Exercises
Edit `components/exercise-library.tsx` and add to the `exercises` array.

### Modifying Tips
Edit `components/campus-tips.tsx` to update the tip categories.

---

## Deploying to Vercel

1. Click "Publish" in the v0 interface, OR
2. Push to GitHub and import at [vercel.com](https://vercel.com)

Your site will be live in about 1 minute!

---

## Tech Stack

- **Next.js 16** - React framework
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - UI components
- **Lucide Icons** - Icon library

---

Built with care for students, by students.
