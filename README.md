# react-apps

This is my bank of mini apps. Built on pure React.

These apps is useless but shows my coding style and what features I can implement.
These apps is my past homeworks given by the mentor.

Apps:

- [CIAN Filters](#cian-filters)
- [Avito Filters](#avito-filters)
- [Gradient](#gradient)
- [Pokemons](#pokemons)
- [JetBrains Menu](#jetbrains-menu)

## CIAN Filters

### Explanation

CIAN Filters built to find mortgage for your future house. <br/>
**Many controlled inputs with diffrent types, fetching json, filtering data, reused ccomponents, SCSS/Sass.**

### How it works

The application is configured to search for suitable offers from banks. The offers themselves and all information about the bank are stored in a large json file.
The interface is built from controlled reused inputs. Each input has its own state. All states are connected together and checked at the same time using a helper function. This function selects suitable bank offers and displays them in the interface.

## Avito Filters

### Explanation

Avito Filters shows you logically correct work of compicated tree of checkboxes. <br/>
**Tree-menu built from json, smart checkbox-selecting, recursion, single component for every parent and his child, SCSS/Sass.**

### How it works

We have pure json file with filters info: id, parentId and so on. Its not deep, but flat: all filter-options stays on one deepensy level. We have only id and parentId to build a tree of options.
So if you select all childrens of one parent tree, parent's checkbox is setting on automaticly. It works to the other side too: if all childrens of parent is setted up and you setting down one of them, parent and that children sets them checkboxes off.

## Gradient

### Explanation

This is one of the simpliest apps here. It paints background to gradient betwen selected colors in inputs. <br/>
**Controlled inputs with linked neighbour-input, confirmation button, alert for bad causes.**

### How it works

It works pretty simple: we have two controlled inputs here and button, that applies gradient with two selected colors to the background – background color changes immediately.
On the right side of inputs we have a color-inputs – you can pick color there, so on the left-side input it changes to the selected color. In simple words: theese inputs are linked to each other.

## Pokemons

### Explanation

Simple game without logics: this app just shows you how do I handle fetching data by link. <br/>
**GRID plate with little boxes, async state update, fetching data by url, pagination, count for caught pokemons, CSS Modules.**

### How it works

We have pokemons on the interface. Pokemon's data comes with link: name, his id, picture and else.
We can catch Pokemon, but it costs 1 sec. To handle delay, I used hook useState with callback inside, because delay action is asynchronous (setTimeout).
We also have pagination here – you can look around and pick another pokemon, if you dont like pokemons on the current page.

## JetBrains Menu

### Explanation

Big tree-like menu from JetBrains website. Originaly, it helps navigate in a huge documentations of products. <br/>
**Recursion, reused components, large data, CSS Modules.**

### How it works

We have here huge json file, like 30,000 strokes. We just draw menu with that options, what we have in json file: every option has his id, anchors, inner pages and so on.
You can select some option – on the right side of screen you'll see openned page's id or anchors, depends on what exactly did you select.
