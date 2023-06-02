## Avito Filters

### Explanation

Avito Filters shows you logically correct work of compicated tree of checkboxes.

### How it works

We have pure json file with filters info: id, parentId and so on. Its not deep, but flat: all filter-options stays on one deepensy level. We have only id and parentId to build a tree of options.
So if you select all childrens of one parent tree, parent's checkbox is setting on automaticly. It works to the other side too: if all childrens of parent is setted up and you setting down one of them, parent and that children sets them checkboxes off.
