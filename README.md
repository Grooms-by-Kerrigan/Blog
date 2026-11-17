# Grooms by Kerrigan

A lightweight, responsive grooming portfolio and photo journal designed for GitHub Pages.

## Deploy to `https://grooms-by-kerrigan.github.io/Blog/`

1. Create or open the GitHub repository named **Blog** under the `grooms-by-kerrigan` account.
2. Add the contents of this project to the **root** of that repository (the `.github` folder and `.nojekyll` file are included).
3. Push the files to the `main` branch.
4. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
5. The included workflow deploys the site on every push to `main`. Watch the **Actions** tab until “Deploy Grooms by Kerrigan to GitHub Pages” succeeds.

This is a plain static site, so there is no build command or package installation required. It is designed to live at the `/Blog/` project-site path; all local asset references are relative.

## Change the colors globally

Open `styles.css` and edit the CSS custom properties at the top in `:root`:

The rest of the stylesheet uses these variables, so changing a value updates the theme throughout the site.

## Add a grooming post

Edit `posts.js` and add an object to `window.GROOM_POSTS`. Example:

```js
{
  id: "molly-summer-trim",
  title: "Molly's Summer Trim",
  breed: "Doodle", // Doodle, Spaniel, or Small breed (used by filters)
  breedName: "Goldendoodle",
  date: "November 16, 2026",
  category: "Full groom",
  excerpt: "A short description of the groom.",
  image: "assets/images/molly-after.jpg",
  before: "assets/images/molly-before.jpg", // optional
  after: "assets/images/molly-after.jpg",   // optional
  notes: {
    "Body": "#4F blade",
    "Legs": "Scissored and blended",
    "Face": "Rounded teddy-bear finish",
    "Tools": "Slicker, metal comb, curved shears"
  }
}
```

Upload your photos into `assets/images/` and use those relative paths. The example entries use sample stock photography; replace those image URLs and grooming details with your own photos and notes before publishing.

## Local preview

Because this is a static site, you can open `index.html` directly, or run a local server from the project root:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
