### Getting started


Demo of my Work available [here](https://htmlpreview.github.io/?https://github.com/id7oo/Front_end_course/blob/master/frontend-nanodegree-optimization/dist/index.html).



### Results

#### 1- Page Speed Insights

- Mobile: 95/100
- Desktop: 96/100

#### 2- Optimize Frames Per Second in pizza.html

- Animation render at less than `30fps`
- Time to resize pizza is in between `1ms to 3ms`. Vary for different pizza sizes



#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

### Steps:

## Optimizations to index.html
- I removed the link to the google font. This was, by far, the most time intensive rendering block.
- Simply removing the link was a major improvement.
= I added a media query to the print.css link.
- This is only needed when printing, so there is no need to block rending for this file.
- I inlined the css from style.css.
- If I were using this css in multiple files I probably wouldn't do this, but the css seems small enough and gave me a big pagespeed insights boost.

### Optimizations to views/js/main.js

- Reduced the number of pizzas randomly generated.
-Changed the document getter from querySelectorAll to getElementsbyClassName which seems to be much more efficient.
- Inside the update positions function I made major modifications.
- This prevents the javascript from requesting the value once for each pizza and dividing that number by 1250 for each pizza. (Originally it was looping 200 times per scrollbar move so 200 times to 1 time)
- Rather than "infinitly" adding one to the frame variable and checking to see if the value % 10 === 0, I set the frame value to 0.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).


