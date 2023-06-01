# react-apps

This is my bank of mini apps. Built on pure React.

<$>[note]
These apps is useless but shows my coding style and what features I can implement.
These apps is my past homeworks given by the mentor.
<$>

## CIAN Filters

### Explanation

CIAN Filters built to find mortgage for your future house.

### How it works

The application is configured to search for suitable offers from banks. The offers themselves and all information about the bank are stored in a large json file.
The interface is built from controlled reused inputs. Each input has its own state. All states are connected together and checked at the same time using a helper function. This function selects suitable bank offers and displays them in the interface.

## Avito Filters

### Explanation

Avito Filters shows you logically correct work of compicated tree of checkboxes.

### How it works

We have pure json file with filters info: id, parentId and so on. Its not deep, but flat: all filter-options stays on one deepensy level. We have only id and parentId to build a tree of options.
So if you select all childrens of one parent tree, parent's checkbox is setting on automaticly. It works to the other side too: if all childrens of parent is setted up and you setting down one of them, parent and that children sets them checkboxes off.
