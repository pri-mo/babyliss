<!-- Header -->
<script src="https://use.typekit.net/aap8wtu.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>
<div class="sg-nav"><ul class="clearfix"></ul></div>
<!-- End of header -->

## Colors

### Brand colors
The website is using five brand colors for cell shading and other means.

    @example
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--brand"><div class="gc__content">$brand-color<br>#000000</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--black"><div class="gc__content">$black<br>#111111</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grey"><div class="gc__content">$grey<br>#808080</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--cloud"><div class="gc__content">$cloud<br>#F7F7F7</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--white"><div class="gc__content">$white<br>#FFFFFF</div></div>
    </div>

### Base colors
The website — except for the brand color and grey shade — is using five basic colors for cell shading.

    @example
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--base"><div class="gc__content">$sun<br>#DFAE66</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--base"><div class="gc__content">$burn<br>#DBA26E</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--base"><div class="gc__content">$sky<br>#3E719F</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--base"><div class="gc__content">$grape<br>#A34D9D</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--base"><div class="gc__content">$smoke<br>#959490</div></div>
    </div>

### Base palette
In order to diversify the cells, the website uses a verity of shades for each base color — darker, dark, base, light, lighter. The shades are generated on a pattern base. You can use a SCSS function to return a specific shade.

    @example
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--lighter"><div class="gc__content">lighter($sun)<br>#F2E8D9</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--light"><div class="gc__content">light($sun)<br>#E6CEAA</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--base"><div class="gc__content">base($sun)<br>#DEAD64</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--dark"><div class="gc__content">dark($sun)<br>#CE994C</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--darker"><div class="gc__content">darker($sun)<br>#A27738</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--lighter"><div class="gc__content">lighter($burn)<br>#F2E7DD</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--light"><div class="gc__content">light($burn)<br>#E4C9B0</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--base"><div class="gc__content">base($burn)<br>#DAA06C</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--dark"><div class="gc__content">dark($burn)<br>#C98C55</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--darker"><div class="gc__content">darker($burn)<br>#9F6D3F</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--lighter"><div class="gc__content">lighter($sky)<br>#9BB3C8</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--light"><div class="gc__content">light($sky)<br>#7096B8</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--base"><div class="gc__content">base($sky)<br>#3D6F9D</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--dark"><div class="gc__content">dark($sky)<br>#395B79</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--darker"><div class="gc__content">darker($sky)<br>#293A49</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--lighter"><div class="gc__content">lighter($grape)<br>#C9ADC7</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--light"><div class="gc__content">light($grape)<br>#B685B3</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--base"><div class="gc__content">base($grape)<br>#A14C9B</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--dark"><div class="gc__content">dark($grape)<br>#7E477A</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--darker"><div class="gc__content">darker($grape)<br>#4F364E</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--lighter"><div class="gc__content">lighter($smoke)<br>#D6D6D6</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--light"><div class="gc__content">light($smoke)<br>#B8B8B8</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--base"><div class="gc__content">base($smoke)<br>#94938E</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--dark"><div class="gc__content">dark($smoke)<br>#7D7D7D</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--darker"><div class="gc__content">darker($smoke)<br>#5D5D5D</div></div>
    </div>

## Animations
In order to provide a sense of lightness and tenderness, the website uses CSS transitions. Though the transitions are used in many places, there are only two types of transitions — a short and a long one. The website uses default transition easing.
It's not advised to extend this set unless it's absolutely neccesary.
<style>
.demo.transition {width: 100%; height: 3rem; border: 1px solid #D6D6D6; position: relative;overflow: hidden; transition-delay: 0;}
.demo.transition:after { display: block; content: ''; background-color: #D6D6D6; width: 3rem; height: 3rem; position: absolute;top: 0;left: 0; transition-property: left;}
.demo.transition:before {display: block; content: 'Hover for preview'; color: #D6D6D6; line-height: 3rem; text-align: center;}
.demo.transition:hover:after {left: calc(100% - 3rem);}
.demo.transition.short:after {transition-duration: .25s;}
.demo.transition.long:after {transition-duration: 1s;}
</style>

### Short transition
This type of transition is used for short actions like link and button hovers.
`transition-duration: .25s;`
<div class="sg-example" style="margin-top:3rem;">
  <div class="sg-canvas">
    <div class="demo transition short"></div>
  </div>
</div>

### Long transition
This type of transition is used for longer actions like cover image or product hovers.
`transition-duration: 1s;`
<div class="sg-example" style="margin-top:3rem;">
  <div class="sg-canvas">
    <div class="demo transition long"></div>
  </div>
</div>

## Typography
In order to keep the site fully responsive, the font size undergoes several calculation with the CSS3 `calc()` function. When expanding the website style, you should use the `rem` (root em) unit (for font size, padding, margins etc.)

### Fonts
The site uses two font families — a header font and a body type font.

    @example
    <div class="gr">
      <div class="gc gc--full"><div class="gc__content">
        <small>Header fonts</small>
        <h3>Abril Display, Black Italic (900), uppercase</h3>
      </div></div>
      <div class="gc gc--full"><div class="gc__content">
        <small>Alternative header font</small>
        <h4>Proxima Nova, Extra Bold, uppercase</h3>
      </div></div>
      <div class="gc gc--full"><div class="gc__content">
        <small>Paragraph font</small>
        <p>Proxima Nova, Regular</p>
      </div></div>
    </div>

### Main header
The `<h1>` header is great for big, visible headlines — mostly suited for title and such.

Try not to use the header more than once on each page.

    @example
    <div class="gr">
      <div class="gc gc--half gc--black"><div class="gc__content">
        <h1>H1 header</h1>
      </div></div>
      <div class="gc gc--half gc--white"><div class="gc__content">
        <h1>h1 header</h1>
      </div></div>
    </div>

### Secondary headers
The following headers can be used freely in the page content. As a SEO vs. Design decision, the `<h2>` and `<h3>` have the same look.

    @example
    <div class="gr">
      <div class="gc gc--half gc--black"><div class="gc__content">
        <h2>H2 header</h2>
      </div></div>
      <div class="gc gc--half gc--white"><div class="gc__content">
        <h2>H2 header</h2>
      </div></div>
    </div>

    <div class="gr">
      <div class="gc gc--half gc--black"><div class="gc__content">
        <h3>H3 header</h3>
      </div></div>
      <div class="gc gc--half gc--white"><div class="gc__content">
        <h3>H3 header</h3>
      </div></div>
    </div>

    <div class="gr">
      <div class="gc gc--half gc--black"><div class="gc__content">
        <h4>H4 header</h4>
      </div></div>
      <div class="gc gc--half gc--white"><div class="gc__content">
        <h4>H4 header</h4>
      </div></div>
    </div>

### Paragraph
Use plain `<p>` selector in order to generate plain body text

    @example
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

### Article lead
To generate en emphasized lead paragraph, add a `article__lead` classname to the desired paragraph selector (mostly the first in article).

    @example
    <p class="article__lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


### Pulled quote
To put visual stress on a quote inside an article, add a `pulled-quote` classname to the span surrounding the quote in question. You can also use the `<q>` or `<blockquote>` selectors.

    @example
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p><blockquote cite="http://lipsum.org">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</blockquote> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio cupiditate, laboriosam sit ducimus facilis doloribus. Quod, enim fugiat soluta eaque quisquam qui nam at aliquam veritatis dolorum provident accusantium necessitatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

## Grid

### Full cell length
By adding a `gc--full` classname to the `gc` selector, you are generating a cell 100% wide (based on the container width).

    @example
    <div class="gr">
      <div class="gc gc--full"><div class="gc__content">gc--full</div></div>
    </div>

### 1/3 cell length
By adding a `gc--short` classname to the `gc` selector, you are generating a cell ~33.33% wide (based on the container width).

By adding a `gc--long` classname to the `gc` selector, you are generating a cell ~66.66% wide (based on the container width).

    @example
    <div class="gr">
      <div class="gc gc--short"><div class="gc__content">gc--short</div></div>
      <div class="gc gc--long"><div class="gc__content">gc--short</div></div>
    </div>

### 1/2 cell length
By adding a `gc--half` classname to the `gc` selector, you are generating a cell 50% wide (based on the container width).

    @example
    <div class="gr">
      <div class="gc gc--half"><div class="gc__content">gc--half</div></div>
      <div class="gc gc--half"><div class="gc__content">gc--half</div></div>
    </div>

### 1/4 cell length
By adding a `gc--tiny` classname to the `gc` selector, you are generating a cell 25% wide (based on the container width).

    @example
    <div class="gr">
      <div class="gc gc--tiny"><div class="gc__content">gc--tiny</div></div>
      <div class="gc gc--tiny"><div class="gc__content">gc--tiny</div></div>
      <div class="gc gc--tiny"><div class="gc__content">gc--tiny</div></div>
      <div class="gc gc--tiny"><div class="gc__content">gc--tiny</div></div>
    </div>

### Cell Aspect
You can produce a harmonious grid by providing the aspect classnames — `gc--aspect-1to1`, `gc--aspect-2to1` and `gc--aspect-3to1` — to the `gc` selector.

The aspect — height in other words — is calculated by the `gc` element's width. So by using the `gc--half gc--aspect-2to1` class combination, you're basicly saying — "make cell 50% wide and give it height of 50% (aspect 2:1) of it's own width".

    @example
    <div class="gr">
      <div class="gc gc--tiny gc--aspect-1to1"><div class="gc__content">gc--tiny <b>gc--aspect-1to1</b></div></div>
      <div class="gc gc--tiny gc--aspect-1to1"><div class="gc__content">gc--tiny <b>gc--aspect-1to1</b></div></div>
      <div class="gc gc--half gc--aspect-2to1"><div class="gc__content">gc--half <b>gc--aspect-2to1</b></div></div>

      <div class="gc gc--short gc--aspect-1to1"><div class="gc__content">gc--short <b>gc--aspect-1to1</b></div></div>
      <div class="gc gc--long gc--aspect-2to1"><div class="gc__content">gc--long <b>gc--aspect-2to1</b></div></div>
      <div class="gc gc--full gc--aspect-3to1"><div class="gc__content">gc--full <b>gc--aspect-3to1</b></div></div>
    </div>

### Column layout
You might want to stack cells in a column — center each cell in a row. In order to do that, add a `gr--column` classname to the `gr` selector.

    @example
    <div class="gr gr--column">
      <div class="gc gc--tiny"><div class="gc__content">gc--tiny</div></div>
      <div class="gc gc--short"><div class="gc__content">gc--short</div></div>
      <div class="gc gc--half"><div class="gc__content">gc--half</div></div>
      <div class="gc gc--long"><div class="gc__content">gc--long</div></div>
    </div>

### Cell colors
Based on the brand colors, each cell has a appropriate background color as well as a corresponding text color. Just add `gc--{{color}}--{{shade}}` class to the `gc` selector.

The basic colors are as follows: <span style="color:#dfae66">**sun** (#dfae66)</span>, <span style="color:#dba26e">**burn** (#dba26e)</span>, <span style="color:#3e719f">**sky** (#3e719f)</span>, <span style="color:#a34d9d">**grape** (#a34d9d)</span>, <span style="color:#959490">**smoke** (#959490)</span>.

    @example
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--lighter"><div class="gc__content">gc--sun--lighter</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--light"><div class="gc__content">gc--sun--light</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--base"><div class="gc__content">gc--sun--base</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--dark"><div class="gc__content">gc--sun--dark</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sun--darker"><div class="gc__content">gc--sun--darker</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--lighter"><div class="gc__content">gc--burn--lighter</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--light"><div class="gc__content">gc--burn--light</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--base"><div class="gc__content">gc--burn--base</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--dark"><div class="gc__content">gc--burn--dark</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--burn--darker"><div class="gc__content">gc--burn--darker</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--lighter"><div class="gc__content">gc--sky--lighter</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--light"><div class="gc__content">gc--sky--light</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--base"><div class="gc__content">gc--sky--base</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--dark"><div class="gc__content">gc--sky--dark</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--sky--darker"><div class="gc__content">gc--sky--darker</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--lighter"><div class="gc__content">gc--grape--lighter</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--light"><div class="gc__content">gc--grape--light</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--base"><div class="gc__content">gc--grape--base</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--dark"><div class="gc__content">gc--grape--dark</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--grape--darker"><div class="gc__content">gc--grape--darker</div></div>
    </div>
    <div class="gr">
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--lighter"><div class="gc__content">gc--smoke--lighter</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--light"><div class="gc__content">gc--smoke--light</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--base"><div class="gc__content">gc--smoke--base</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--dark"><div class="gc__content">gc--smoke--dark</div></div>
      <div class="gc gc--snippet gc--aspect-1to1 gc--smoke--darker"><div class="gc__content">gc--smoke--darker</div></div>
    </div>


## Buttons

### Default Button
By adding a `btn--default` classname to a `btn` classed `<a>` or `<button>` selector, you get a default button.

The button has a tansparent background on static state.

    @example
    <a href="#" class="btn btn--default">Default link button</a>
    <button href="#" class="btn btn--default">Default button</button>

### Inverse Button
By adding a `btn--inverse` classname to a `btn` classed `<a>` or `<button>` selector, you get an inverse button.

    @example
    <a href="#" class="btn btn--inverse">Inverse link button</a>
    <button href="#" class="btn btn--inverse">Inverse button</button>

### White Button
By adding a `btn--inverse` classname to a `btn` classed `<a>` or `<button>` selector, you get an inverse button.

The button has a tansparent background on static state. It's great for use with the cover images and hero boxes.

    @example
    <div class="gr">
      <div class="gc gc--full gc--black"><div class="gc__content">
        <a href="#" class="btn btn--white">White link button</a>
        <button href="#" class="btn btn--white">White button</button>
      </div></div>
    </div>

### Secondary Button
By adding a `btn--light` classname to a `btn` classed `<a>` or `<button>` selector, you get an light button.

The button has a tansparent background on static state. It's great as a secondary button or a disabled one.

    @example
    <a href="#" class="btn btn--light">Light link button</a>
    <button href="#" class="btn btn--light">Light button</button>

### Black Buttons
By adding a `btn--black` or `btn--brand` classname to a `btn` classed `<a>` or `<button>` selector, you get an very dark button.

Only the `btn--brand` class gives you the true black button.

    @example
    <a href="#" class="btn btn--black">Black link button</a>
    <a href="#" class="btn btn--brand">Brand link button</a>
    <br>
    <a href="#" class="btn btn--inv-black">Inverse Black link button</a>
    <a href="#" class="btn btn--inv-brand">Inverse Brand link button</a>

### Button Groups
By wrapping several buttons in `btn__group` classed div, you get a button group. On mobile devices, the group is broken into a cloud like constalation.

    @example
    <div class="btn__group">
    <a href="#" class="btn btn--default">First button</a>
    <a href="#" class="btn btn--default">Middle button</a>
    <a href="#" class="btn btn--default">Middle button</a>
    <a href="#" class="btn btn--default">Last button</a>
    </div>


## Input fields
### Input Label

    @example
    <label>Input field label</label>

### Text input
By adding `input` classname to the `<input type="text">` element, you generate a minimalistic text input field. The field will try to extand to it's container's width.

You can also provide a placeholder text. The placeholder text is being supported on older browsers with a third party javascript.

    @example
    <input type="text" placeholder="Text input placeholder" class="input">

## Images

### Product Images
In order to show off the BaByliss products the most, there is specific requirements for the product images for them to fir nicely in [product cells](_complex.html#product-list-items).

All images should be approximately 900px wide. **They should be presented without packaging on a transparent background**.

In order to minimize the file size of transparent PNGs, please use the [TinyPNG online compressor](https://tinypng.com).

Images of long products — such as hair straighteners, curlers, trimmers etc. — should be presented in a vertical position.

    @example
    <div class="gr">
      <div class="gc gc--tiny"><div class="gc__content"><img src="images/prod/prod01.png" alt="Long products"/></div></div>
      <div class="gc gc--long"><div class="gc__content"><img src="images/prod/prod06.png" alt="Large products"/></div></div>
    </div>

### Captioned Images
When inside `gc__article-body` class, an image can be wrapped into a `<figure>`. This way You can put a caption under the image — using the `<figcaption>` element.

Also, by adding a `pulled-media` classname to the `<figure>`, you can pull the image outside the article paragraph, thus making it a bit bigger.

    @example
    <div class="gr">
    <div class="gc gc--full gc__article-body">
      <div class="gc__content">
        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <figure class="pulled-media">
          <a href="images/img10.jpg" data-featherlight="image"><img src="images/img10.jpg" alt=""></a>
          <figcaption>Lumberjack girl is so hot this season</figcaption>
        </figure>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    </div>


### Cover Images
The native website script is watching all images with the class `gc__cover-img`, and based on the image's dimensions it will add appropriate classname — `gc__cover-img--tall`, `gc__cover-img--wide` or `gc__cover-img--sqr`.

This way the cover image will try it's best to fill the whole space of it's parent.

Note, that in order to have the best result, you should use the aspect grid class — `gc--aspect-1to1` and `gc--aspect-2to1`. This provides a mask for it's selector and the appropriate space for the image to green.

    @example
    <div class="gr">
      <div class="gc gc--half gc--aspect-1to1 gc--black">
        <img src="images/img666.jpg" alt="" class="gc__cover-img" />
        <div class="gc__content">The content text color will stay white.</div>
      </div>
      <div class="gc gc--tiny gc--aspect-1to1">
        <img src="images/img665.jpg" alt="" class="gc__cover-img" />
        <div class="gc__content">The content will stay above the cover.</div>
      </div>
      <div class="gc gc--tiny gc--aspect-1to1 gc--black">
        <img src="images/img02.jpg" alt="" class="gc__cover-img" />
        <div class="gc__content">The cover image will be a bit faded for legibility.</div>
      </div>
    </div>
