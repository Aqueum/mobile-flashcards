// reviewer suggested I add starter data.
// I thougt it might be interesting to add it straight into the reducer so it bypassess AsyncStore. That meant if AsyncStore was empty you got the starter data. Once you added your own items and restart, the starter data dissappeared..,  Side effect is that questions added to the starter decks are lost on refresh & 'show all decks' still resurrected the data.  Bad plan.
// If conclusion is that we need to save this to AsyncStore as well as Redux Store, I'd rather not - given that there is no current way to delete decks...
export const starter = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
};
