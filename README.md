# Javascript Frameworks - Next.js Blog Project

This is part of the workshop **Introduction in Javascript Frameworks**

This is a simple blog application built with Next.js, using Tailwind CSS for styling.<br />
The application demonstrates the use of component-based development and responsive design.

## Features

- **Component-Based Development**: Uses React components for modularity and reusability.
- **Responsive Design**: Ensures the application looks great on all devices using Tailwind CSS.
- **Next.js**: Utilizes the latest Next.js features for server-side rendering and static site generation.

## File Structure

```bash
my-nextjs-app/
├── public/
│ ├── images/
│ │ ├── image1.jpg
│ │ ├── image2.jpg
│ └── ...
├── app/
│ ├── layout.jsx
│ ├── page.jsx
│ ├── blogPosts.json
│ ├── components/
│ │ ├── BlogCard.jsx
│ ├── globals.css
├── .gitignore
├── package.json
├── next.config.js
└── README.md
```

## Clean Installation

```bash
    npx create-next-app@latest
```

On installation, you'll see the following prompts:

```console
What is your project named? my-blog
Would you like to use TypeScript? *No* / Yes
Would you like to use ESLint? *No* / Yes
Would you like to use Tailwind CSS? No / *Yes*
Would you like your code inside a `src/` directory? *No* / Yes
Would you like to use App Router? (recommended) No / *Yes*
Would you like to use Turbopack for `next dev`? *No* / Yes
Would you like to customize the import alias (`@/*` by default)? * No* / Yes
```

## Or... Setup and Installation with Clone

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/my-nextjs-app.git
   cd my-nextjs-app
   ```
2. **In stall dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**

   ```bash
   npm run dev
   ```

Open http://localhost:3000 with your browser to see the result.

## Usage

- Adding a New Blog Post: To add a new blog post, update the blogPosts.json file located in the app/ directory. Each blog post should have a unique id, title, description, image, and link.

- Styling Components: All styles are defined using Tailwind CSS classes. You can customize the styles by updating the globals.css file.

## License

This project is licensed under the MIT License - see the [LICENSE file](LICENSE.md) for details.
