---
sidebar_position: 6
---

[The course practise section](/webdev/section5/section5)

# HTML Forms

- The `<form>` element itself is just a container which groups all the form html elements together, such as buttons, and input boxes

- Radio Buutons are for selectiing from a range of options

- Search Forms, Email forms, text forms etc

## The form element

- The form element represents a doc section containing interactive controls for submitting info

- The 'action' attribute specifies WHERE the data should be sent

- The 'method' attribute specifies which HTTP protocol to use

## Create a new forms.html go

[to](/webdev/section5/section5)

When you submit a form an http will be sent, we control where the action will be sent with action, and how with method
method="get"
action="/search/" this is a relative path

## The Input element

- Used to create a variety of of form controls (20+)
- Input takes the attribute prop 'type', and type changes the way an input attribute behaves dramatically

## 48 - Labels

Labels associate form actions with their respective descriptions.
This helps in cases like clicking on the label will control the form action too.
Better for SEO

#### There are 2 attributes which help associate a label to a form action:
-  input 'id'
- label 'for'
