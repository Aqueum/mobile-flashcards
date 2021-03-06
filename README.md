# Unmaintained

This was a course project, it is not in use, and is not maintained, as such vulnnerable dependency alerts have been disabled.  This code should therefore be considered unsafe for use without dependency updates and general code review.

# Mobile Flashcards

* Udacity React - Mobile Flashcards Project
* [Udacity React Nanodegree](https://eu.udacity.com/course/react-nanodegree--nd019)
* Martin Currie ([Aqueum](http://martin.aqueum.com)) - 1 May 2018

# Purpose & design

A flashcard app for iPhone X (which will likely also work, but hasn't been tested, on other iOS & Android devices). It allows users to:

* add decks of revision cards,
* add question & answer cards to those decks,
* quiz themselves on the decks
* receive notifications to take a quiz

# Getting Started

1.  fork, clone or download the project from [here](https://github.com/Aqueum/mobile-flashcards)
2.  navigate to the created `mobile-flashcards` folder
3.  `yarn install`
4.  `yarn start`
5.  follow the Expo instructions to launch the app on your phone or simulator
6.  please note that this has been **developed for and tested on iPhone X only**

# Known issues

:x: = complete/resolved

:o: = attempted, but abandoned

## To do

1.  :x: Enforce unique titles on new deck entry ~~(to avoid key conflict) - it seems that key conflicts are avoided automatically, as duplicating a deck name overwrites the original. Regretably this overwrites its questions also.~~

## I'm not happy with

1.  :o: React-Navigation causes a "YellowBox isMounted(...) is deprecated" warning, but they are [blaming this on React-Native](https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-385568845), hence there is currently only an error supression workaround. Unfortunately even the error suppression isn't working for me (I have it in App.js). I have sunk hours into trying to fixing this.
2.  :o: My FlatList can't render more than say 11 items, they all flash up initially then it only shows items 12+. Likewise when I get to 23 items, the full list flashes up, then it only shows items 23+.
3.  :o: React-Navigate's header back '<' button leads to only new added deck showing when cycling back from add-deck. My own navigation works fine, but I can't even work out how to start debugging this.

## Review suggestions

Reviewed succesfully at 03:28 BST on 10 May 2018:
Meets Specifications
Great job! You made it perfect! :+1:
You showed excellent skills on React, Redux and React Native. :sunglasses:
Keep learning and Stay Udacious :clap: :udacious:

1.  :o: You can possibly have a set of initial decks and questions which will allow the user to get started with the app straight away.
    _(without the ability to delete decks I decided against this, after trying a way to add starter data to Redux Store only, which had too many side effects - see data.js)_
2.  :x: You can also consider adding a splash screen to improve the user experience.
3.  :x: You should add validations. I have left some comments in code review. do check it out! (new questions & new deck)
4.  :x: I left you some comments on how you can improve your application’s code structure, to follow the best react-native and react practice within your code review :blush:
    Take a look at this article for some additional pointers: https://hackernoon.com/manage-react-native-project-folder-structure-and-simplify-the-code-c98da77ef792
5.  :x: _CardAdd.js line 47:_ You should add validation here. you can add an alert or an error message when a user submits empty fields or form.
    eg: `if(!card){ return alert("fill both fields")}` _( note that the reviewers example doesn't actually work)_
6.  :x: _CardAdd.js line 60:_ Here, you can use destructure. (Ex: `{ question, answer } = this.state)` now you will be able to access value of the variable by its name.
7.  :x: _CardAdd.js line 64:_ Here, you will only pass the variable i.e value={question}.
8.  :x: _CardAdd.js line 74:_ I encourage you to utilize the KeyboardAvoidingView component to avoid overlapping your inputs by the device’s keyboard
    Interested in learning more? Take a look at this article: https://facebook.github.io/react-native/docs/keyboardavoidingview.html
9.  _README.md line 35 (React-Navigate's back button...):_ Good! You should try to fix this problem.
10. :x: _README.md line 71:_ Great work :+1: Want to learn more about writing great README.md files? Have a look at our course on the subject here: https://www.udacity.com/course/writing-readmes--ud777
11. :x: _notifications.js line 55:_ Fantastic work with notifications :clap:
    Interested in learning more about push notifications with react-native? Take a look at this article: https://medium.com/differential/how-to-setup-push-notifications-in-react-native-ios-android-30ea0131355e
12. :x: _QuizView.js line 58:_ I suggest you split up your styles for each component, to keep your application structure as clean as possible.
    Take a look at the following article: https://medium.com/@tommylackemann/managing-styles-in-react-native-3546d3482d73
13. :x: _(did for FrontPage, but couldn't for DeckView)_ _DeckView.js line 48:_ You can migrate components which do not handle states to Stateless Functional Components. Read more about the Stateless Functional Components here : https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/
14. :x:_DeckAdd.js line 43:_ Here, you can also add validations, if the user submits an empty form. Ex: `if(!title){ return alert("fill the title name")}`
15. :x: _actions/index.js line 31:_ you can also use arrow function here.

# Files

## Create React Native App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). You can find more information on how to perform common tasks [here](https://github.com/react-community/create-react-native-app/blob/master/README.md).

## My files

Following create-react-native-app all my files are contained in the following folders that define their content type:

* actions
* components
* reducers
* utils

in addition to the following in src's root:

* App.js

# Contributing

This is an assessed project, so I'd probably get in trouble for accepting external input.

# Code Status

Can Udacity add a badge here..?

# License

This is an assessed project, udacidy don't list their license, hence I can't either. Please assume all work is copyrighted with all rights resevred, but feel free to [contact me](http://www.aqueum.com/contact/)
if you have any questions.
