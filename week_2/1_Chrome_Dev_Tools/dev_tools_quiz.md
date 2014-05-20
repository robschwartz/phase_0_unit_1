#### Include an inline screenshot of your codeschool's points from the profile page:
<img src="https://raw.githubusercontent.com/robschwartz/phase_0_unit_1/master/week_2/1_Chrome_Dev_Tools/imgs/Code_School.png">
<!-- Modify the Markdown to include your answers. Don't delete the questions! -->


##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS-
      The elements tab within the element inspector (this is opened by using alt+command+I) allows you to make realtime changes of HTML and CSS
  * Javascript Debugging-
      Javascript can be debugged automatically using one of Chrome's Dev tools called "Page Speed". You will need to download it first from the Chrome Web Store. There is a nice intro and tutorial that explains how to use it. It is a great tool for web optimization.
  * Performance Optimization- 
      The "Network" tab allows you to view how long it takes each element to load. By making minor and maybe major changes, you can increase the speed your page loads. 
* What's the quick key for your OS to spawn the Dev Tools inspector?-

     alt + command + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
      #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

<!-- complete -->

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
    You cannot change the color of the text since it is an .img from another site. 

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
      92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png is the largest image
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
      You would find this by opening Inspect Element and clicking on the "Networks" tab. From there, I reset the page. I looked on the different tabs to change the order of the content shown and chose the "size" tab and changed it to Decending order. The image that was at the top is the largest. Here is the URL: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png. The image is 316 KB large. 
* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?

    The easiest thing to do would be to optimize the images. They are very large and changing them would reduce the page 39% or 885.9KiB.