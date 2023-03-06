# Web Development Project 2 - *Flashcards*

Submitted by: **Laura Villarreal**

This web app: **quizzes the user on a set of Tagalog words. The words are divided into 3 categories: common phrases (green), food (red),
and verbs (blue). The user can click on the right arrow button to get another random card.**

Note: if you run this program, make sure to cd flashcards before you npm run dev.

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [X] **A single card at a time is displayed, only showing one of the components of the information pair**
- [X] **A list of card pairs is created**
- [X] **Clicking on the card shows the corresponding component of the information pair**
- [X] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [X] Cards contains images in addition to or in place of text
- [X] Cards have different visual styles such as color based on their category
  - [X] *cards are colored based on their category*

The following **additional** features are implemented:

* [X] A flip animation was added to the card using css

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/LauraVillarr/Web_102_Project_Flashcards/blob/master/walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
I decided to use an array of objects for the data rather than a dictionary as it could hold the category and image data.
I initially had difficulty determining where to start on this project. After looking at resources and pages online I was able to get a better understanding on what
to do. I also had issues getting the card to be formatted properly in css. The most difficult part of the project was changing what I had initially in order to
get the card flip animation working. It required some refactoring but I eventually got it to my liking.

## License

    Copyright [2023] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
