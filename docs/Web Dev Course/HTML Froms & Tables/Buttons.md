---
sidebar_position: 7
---

[Buttons](/webdev/section5/section5)

<button onClick={() => alert('button clicked!')}>Click me!</button>

<br />
<button onClick={() => alert('buttons require an opening and closing <button> tag')}>What html tag do buttons require?</button>


When a button is used inside of the form element, it automatically associates any actions and paths with that that form. It is the default behaviour of a button in a form. Its default is to submit.

Pass in attributes called 'type', to define non default button functions

You can also use input elements with the submit type attribute set, to make a submit button.
to change the default name of the input type of submit, you can assign the attribute value=