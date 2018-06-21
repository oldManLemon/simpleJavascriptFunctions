# Simple JavaScript Functions
This is a list of functions I wrote at one stage or another and would like to clean up and revist to save time in the future

## Icon Rotator 
Simple little rotator written expicitly with FA icons in mind. It takes an array of icons and will cycle through them. To use, 
fill out your array and call it what you want I have use `iconList` then you can call it where you want, by entering it with the element you are ready to take the FA icons, generally an `<i></i>` tags. It can be considered a class rotater too, with a little modification.
` <body onload = "iconRoatation(devIcons, iconList); iconRoation(idNumberTwo, arrayNumberTwo)"> <i id="devIcons" class=""></i>'