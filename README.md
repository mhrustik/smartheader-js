# smart-header-js

Adaptive header with two-level nesting dropdowns

# Installing

### Import ES modules

```
npm i smart-header-js
```

```
import SmartHeader from 'smart-header-js'
```

Or: (More flexible way to connect individual components)

```
import 'smart-header-js/src/styles/smart-header.scss'
import SmartHeader from 'smartheader-js/src/js/smart-header.js'
```

### Import minify css & js with babel compilation

import files from a dist folder

```
<link href="smart-header.min.css" rel="stylesheet">
<script defer src="smart-header.js"></script>
```

### Basic HTML markup

```
   <header class="--smart-header --fwf">
       <nav>
           <ul class="--logo-ul">
               <li><a href="/"><img src="https://place-hold.it/200x90" alt=""></a></li>
               <li class="--burger-wrap"><a class="--burger-link" href=""><i></i> <i></i> <i></i></a></li>
           </ul>
           <div class="--mob --hide">
               <ul class="--main-navs">
                   <li class="--close-mob"><a href=""><i></i> <i></i></a></li>
                   <li><a href="">Home</a></li>
                   <li><a href="">About</a></li>
                   <li><a href="">Blog</a></li>
               </ul>
               <ul class="--add-navs">
                   <li><a href="">Sign in</a></li>
                   <li><a href="">Sign up</a></li>
               </ul>
           </div>
       </nav>
   </header>
```

### Initializing a JS script

```
window.addEventListener("DOMContentLoaded", (e) => {

    new SmartHeader({
        breakpoint: 1200, //Default 1200
        mobClass: "--mob", //Default --mob
        burgerClass: "--burger-link", //Default --burger-link
        closeClass: "--close-mob", //Default --close-mob
        preset: "full_window_filling"
    });

})
```

# Examples with dropdowns menu

### Dropdown for right content

```
<ul class="--add-navs">
    <li><a data-dropdown="true" href="">Hrustik666</a></li>
    <ul class="--dropdown-ul --right">
        <ul class="--links-column">
            <li><a href="">Dashboard</a></li>
            <li><a href="">Settings</a></li>
            <li><a href="">Exit</a></li>
        </ul>
    </ul>
</ul>
```

### Dropdown for main navs content

```
<ul class="--main-navs">
    <li class="--close-mob"><a href=""><i></i> <i></i></a></li>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a data-dropdown="true" href="">Blog</a></li>
    <ul class="--dropdown-ul">
        <ul class="--links-column">
            <li><a href="">Web design</a></li>
            <li><a href="">SEO</a></li>
            <li><a href="">Marketing</a></li>
        </ul>
        <ul class="--links-column">
            <li><a href="">Programming</a></li>
            <li><a href="">Managment</a></li>
            <li><a href="">Business</a></li>
        </ul>
    </ul>
</ul>
```

### Two-level nesting

```
<ul class="--main-navs">
    <li class="--close-mob"><a href=""><i></i> <i></i></a></li>
    <li><a href="">Home</a></li>
    <li><a href="">About</a></li>
    <li><a data-dropdown="true" href="">Blog</a></li>
    <ul class="--dropdown-ul">
        <ul class="--links-column">
            <li><a data-dropdown="true" href="">Web design</a></li>
            <ul class="--dropdown-ul">
                <ul class="--links-column">
                    <li><a href="">Figma</a></li>
                    <li><a href="">Photoshop</a></li>
                    <li><a href="">Sketch</a></li>
                </ul>
            </ul>
            <li><a href="">SEO</a></li>
            <li><a href="">Marketing</a></li>
        </ul>
        <ul class="--links-column">
            <li><a href="">Programming</a></li>
            <li><a href="">Managment</a></li>
            <li><a href="">Business</a></li>
        </ul>
    </ul>
</ul>
```

### Full layout with dropdowns

```
<header class="--smart-header --fwf">
    <nav>
        <ul class="--logo-ul">
            <li><a href="/"><img src="https://place-hold.it/200x90" alt=""></a></li>
            <li class="--burger-wrap"><a class="--burger-link" href=""><i></i> <i></i> <i></i></a></li
        </ul>
        <div class="--mob --hide">
            <ul class="--main-navs">
                <li class="--close-mob"><a href=""><i></i> <i></i></a></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a data-dropdown="true" href="">Blog</a></li>
                <ul class="--dropdown-ul">
                    <ul class="--links-column">
                        <li><a data-dropdown="true" href="">Web design</a></li>
                        <ul class="--dropdown-ul">
                            <ul class="--links-column">
                                <li><a href="">Figma</a></li>
                                <li><a href="">Photoshop</a></li>
                                <li><a href="">Sketch</a></li>
                            </ul>
                        </ul>
                        <li><a href="">SEO</a></li>
                        <li><a href="">Marketing</a></li>
                    </ul>
                    <ul class="--links-column">
                        <li><a href="">Programming</a></li>
                        <li><a href="">Managment</a></li>
                        <li><a href="">Business</a></li>
                    </ul>
                </ul>
            </ul>
            <ul class="--add-navs">
                <li><a data-dropdown="true" href="">Hrustik666</a></li>
                <ul class="--dropdown-ul --right">
                    <ul class="--links-column">
                        <li><a href="">Dashboard</a></li>
                        <li><a href="">Settings</a></li>
                        <li><a href="">Exit</a></li>
                    </ul>
                </ul>
            </ul>
        </div>
    </nav>
</header>
```
