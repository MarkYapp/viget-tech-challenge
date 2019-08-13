- I chose the UI/Interface Focus: Tabbed Content challenge. It took about 4 hours to build the markup, CSS, and JS, and another 1.5 hours to implement a responsive design, hover transitions, and a few basic accessibility features. I began working on ARIA compatibility for the tabbed content, but I wasn't able to implement it in a reasonable amount of time, and decided to move on.

- There were a few instances where I could not achieve the pixel perfect results desired. First, it was difficult to replicate the flat file layout without exact dimensions, and I ended up estimating proportions. I'm sure there is a more precise method, and it's something I'd like to learn more of. Second, I struggled to position the CTA arrow buttons relative to the bottom edge of the parent container so that they were on the same vertical line. This seemed to me like a straightforward problem, but I moved on after trying several solutions without success.

- I chose to stick with native JavaScript rather than a library such as jQuery. The tabs problem was quite small to warrant a library, plus this would have added unneccesary load time.

- In the interest of time I did not use any CSS naming conventions, such as BEM, although I certainly recognize the value of such conventions.

- To be honest, I'm not very familiar with browser incompatibilities. I have come across instances of multiple lines of CSS to produce the desired behavior in older browsers, and this technique and other browser compatibility methods is something I'm interested in learning more.
