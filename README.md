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

## To do

1.  Enforce unique titles on new deck entry ~~(to avoid key conflict)~~ - it seems that this key conflicts are avoided automatically, as duplicating a deck name overwrites the original. Regretably this overwrites the questions also.

## I'm not happy with

1.  React-Navigation causes a "YellowBox isMounted(...) is deprecated" error, but they are [blaming this on React-Native](https://github.com/react-navigation/react-navigation/issues/3956#issuecomment-385568845), hence there is currently only an error supression workaround. Unfortunately that isn't working for me. I have sunk hours into fixing this but given up.
2.  FlatList seems to struggle with more than 10 items, ignoring first 9 if 10+ given. Fortunately it's only the number of cards that the rubric needs to be unlimited & I have tested this above 10 & it works fine. But I'd like to know how to resolve that FlatList issue.
3.  React-Navigate's back button leads to only new added deck showing when cycling back from add-deck. All buttons & redirects work properly and allow full navigation, so this is considered an edge case caused by React-Native, nevertheless a solution would be nice.

## Review suggestions

Not yet submitted for review

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
