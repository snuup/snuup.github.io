https://snuup.github.io

this project hosts my developer portfolio.<br/>
it also holds a **10-line long static site generator** that embraces typescript and jsx.<br/>


github pages are configured to host the `/docs` folder.<br/>
instead of using multiple branches for github pages and the sources, i keep everything in a single branch and even check in the "binaries" like bundle.js . one of the benefits is that curious visitors do not need to clone, npm install 92MB of node_modules (deeeeeenooo!!!) and run to see build results.



# static site generator

### writing a plain html site
writing plain html soon raises the need for componentisation to avoid repetition and keep maintainability because
even the simplest site repeats elements. a site with more then one page has a `<head>` element in every page requiring multiple updates
for every change in that element. but even a site with a single page nearly always has repeated html constructs. we **need componentisation**.

### jsx ≈ html components
jsx **looks** like html with components, so we are close to the goal. tools however convert jsx not into html but into javascript, as nested hyperapp expressions.
so we need another step that converts these expressions into html on the developer machine. nearby we embrace typescript, which
adds an amazing and customizable type safety layer on top of jsx.

### converting tsx to html
instead of html we write tsx files. here those are overview.tsx, gallery.tsx and main.tsx in the /src folder.
main.tsx defines the single html page to be rendered. app.tsx is top level file that describes what shall be rendered:

```typescript
render(() => <MainPage />, "index.html", "main")
```

the rollup configuration watches app.tsx (and its dependencies), creates bundles.js after every change in the tsx files.
the rollup configuration also includes the run plugin which immediately executes the bundle on the developer machine, 
writing index.html into the /docs folder which is hosted via github pages.

the render function called in app.tsx is defined in base.tsx where we also keep any project related utilities. this render function turns the hyperapp expressions into html.

```typescript
/// this is the static site generator
export function render(h: () => JSX.Element, filename, title) {
    let html = fs.readFileSync("./src/template.html").toString()
    let page = rendertostring(h())
    html = html.replace("{children}", page).replace("{title}", title)
    let htmlf = prettier.format(html, { parser: 'html' })
    filename = './docs/' + filename
    fs.mkdirSync(path.dirname(filename), { recursive: true })
    fs.writeFileSync(filename, htmlf)
    console.log('wrote', filename)
}
```

the core work is done by rendertostring, which comes from preact. preac also defines the hyperapp flavour: the difference between preact and react is that preact is closer to html, for instance we can use the attribute `class` while react forces us to use `className` instead and there are more of those. when copying html code from somewhere react alwas required adaptations so i switched to preact which generally is excellent in all aspects, design, source code and community.

the render function also utilises a template. this is necessary because the elements inside an html header cannot be expressed with jsx.

*** client side ressources
js and css files needed by the browser are maintained inside the served docs folder.


### folders for static site generation

**/docs**<br/>
the served http folder, specified by github as alternative to (root) and configured in repo settings

**/docs/css**<br/>
scss

**/docs/js**<br/>
js (client side script is not in typescript)

**/src**<br/>
tsx sources

**/**
rollup config, tsconfig
