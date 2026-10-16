# Prosperity Origin Group — Website

Static marketing site for Prosperity Origin Group LLC, a property management company in Sunnyvale, CA.
Live at https://prosperityorigingroup.com, hosted on GitHub Pages.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page content — edit text here |
| `styles.css` | Colors, fonts, layout (colors are variables at the top) |
| `script.js` | Mobile menu, scroll effects, contact form |
| `CNAME` | Tells GitHub Pages to serve the site on prosperityorigingroup.com |

## Preview locally

Open `index.html` in a browser, or run `npx serve .` and visit http://localhost:3000.

## Publish changes

```
git add -A
git commit -m "Describe the change"
git push
```

GitHub Pages redeploys automatically within a minute or two.

## DNS (Namecheap → Advanced DNS)

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | `<github-username>.github.io.` |
