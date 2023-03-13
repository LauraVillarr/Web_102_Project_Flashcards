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


# Web Development Project 3 - *Flashcards Part 2*

Submitted by: **Laura Villarreal**

This web app: **Further adds functionality to the page by allowing users to submit answers to flashcards, get the next and previous cards in the set,
randomize the order of cards, and keep track of progress with a streak counter**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer
    - [X] Note: for my project, this means that users don't need to worry about uppercase or lowercase, and they don't need to type anything that is in parentheses
- [X] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [X] Greyed out the previous or next arrow if there are no more cards in the set

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/LauraVillarr/Web_102_Project_Flashcards/blob/master/walkthrough_flashcards_part2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

I had some trouble getting the text input to work properly, as well as get it to save the information stored in it. I also had issues with getting my visual feedback
of the question being correct, incorrect, or invalid (user answered question while flipped to the answer side) to display properly, as I was having some issues in the concept of lifting up a state. Finally, I took some time to decide in what conditions the user should get an answer correct even if it was slightly different from the target answer. I did not like the way it was done in the exemplar, where if the user typed one word in the answer then they would automatically get it correct. For instance, I could just type the word "plant" and be able to get the answer right in some cases. I instead decided to allow the user to not type anything that would be in parentheses, as the parentheses tends to add some extra explanation or context to the answer and would not be as major a focus. I also allowed for upper and lowercase to not matter either, since that is not really important to the answer.

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
