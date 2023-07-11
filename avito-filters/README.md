## Avito Filters

### Explanation

Avito Filters shows you logically correct work of compicated tree of checkboxes.

### How it works

We have pure json file with filters info: id, parentId and so on. Its not deep, but flat: all filter-options stays on one deepensy level. We have only id and parentId to build a tree of options.
So if you select all childrens of one parent tree, parent's checkbox is setting on automaticly. It works to the other side too: if all childrens of parent is setted up and you setting down one of them, parent and that children sets them checkboxes off.

---

## Avito Filters RU

### Краткое описание

Приложение Avito Filters показывает логически правильное поведение чекбоксов – например, выбор дочерних при выборе родителя и так далее. <br/>
**Древовидное меню из чекбоксов, построенное с помощью "плоского" массива объектов, умное поведение чекбоксов, рекурсия, единственный компонент, который используется для "предков и наследников", SCSS/Sass.**

### Как работает приложение

У нас есть плоский json-файл и данными для опций в меню – их id, parentId – id родителя. С помощью данного файла мы строим древовидное меню с помощью рекурсии.
Логика приложения построена на следующем: если вы выберете всех детей какого-нибудь родителя, то он тоже выберется. Более того, если у этого родителя есть "братья", и они тоже выбраны, то выберется и один общий предок сверху – и так далее. Работает и в обратную сторону – при снятии галочки с родителя, то и у всех наследников галочки тоже снимаются.
