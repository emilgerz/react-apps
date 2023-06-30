# react-apps

- **[English](#eng)**

- **[Русский язык](#rus)**

---

---

## ENG

This is my bank of mini apps. Built on pure React.

These apps is useless but shows my coding style and what features I can implement.
These apps is my past homeworks given by the mentor.

Apps:

- [CIAN Filters](#cian-filters) <br/>
  **Many controlled inputs with diffrent types, fetching json, filtering data, reused ccomponents, SCSS/Sass**
  <br/>

- [WORDLE](#wordle) <br/>
  **useReducer & useEffect hooks, correct addEventListener on keyboard, UI colorization based on game logics, PropTypes, SCSS/Sass**
  <br/>

- [Pokemons](#pokemons) <br/>
  **GRID plate with little boxes, async state update, fetching data by url, pagination, count for caught pokemons, CSS Modules**
  <br/>

- [Avito Filters](#avito-filters) <br/>
  **Tree-menu built from json, smart checkbox-selecting, recursion, single component for every parent and his child, SCSS/Sass**
  <br/>

- [JetBrains Menu](#jetbrains-menu) <br/>
  **Recursion, reused components, large data, CSS Modules**
  <br/>

- [Gradient](#gradient) <br/>
  **Controlled inputs with linked neighbour-input, confirmation button, alert for bad causes**
  <br/>

---

## CIAN Filters

### Explanation

CIAN Filters built to find mortgage for your future house. <br/>
**Many controlled inputs with diffrent types, fetching json, filtering data, reused ccomponents, SCSS/Sass.**

### How it works

The application is configured to search for suitable offers from banks. The offers themselves and all information about the bank are stored in a large json file.
The interface is built from controlled reused inputs. Each input has its own state. All states are connected together and checked at the same time using a helper function. This function selects suitable bank offers and displays them in the interface.

---

## WORDLE

### Explanation

Famous mini-game to find out what 6-letters word was hidden <br/>
**useReducer & useEffect hooks, correct addEventListener on keyboard, UI colorization based on game logics, PropTypes, SCSS/Sass**

### How it works

Wordle - its a mini-game. You have to find out hidden word. Originaly, hidden word updates once in a 24 hours – but in my game it changes after game end`s.
You have 6 tries to find him, every try will give you clue on strokes and keyboard – green background means you caught correct letter in his original place, yellow background means that this letter includes in hidden word, but not in exactly that place, grey background means that this letter is not correct and not includes in hidden word.

---

## Avito Filters

### Explanation

Avito Filters shows you logically correct work of compicated tree of checkboxes. <br/>
**Tree-menu built from json, smart checkbox-selecting, recursion, single component for every parent and his child, SCSS/Sass.**

### How it works

We have pure json file with filters info: id, parentId and so on. Its not deep, but flat: all filter-options stays on one deepensy level. We have only id and parentId to build a tree of options.
So if you select all childrens of one parent tree, parent's checkbox is setting on automaticly. It works to the other side too: if all childrens of parent is setted up and you setting down one of them, parent and that children sets them checkboxes off.

---

## Gradient

### Explanation

This is one of the simpliest apps here. It paints background to gradient betwen selected colors in inputs. <br/>
**Controlled inputs with linked neighbour-input, confirmation button, alert for bad causes.**

### How it works

It works pretty simple: we have two controlled inputs here and button, that applies gradient with two selected colors to the background – background color changes immediately.
On the right side of inputs we have a color-inputs – you can pick color there, so on the left-side input it changes to the selected color. In simple words: theese inputs are linked to each other.

---

## Pokemons

### Explanation

Simple game without logics: this app just shows you how do I handle fetching data by link. <br/>
**GRID plate with little boxes, async state update, fetching data by url, pagination, count for caught pokemons, CSS Modules.**

### How it works

We have pokemons on the interface. Pokemon's data comes with link: name, his id, picture and else.
We can catch Pokemon, but it costs 1 sec. To handle delay, I used hook useState with callback inside, because delay action is asynchronous (setTimeout).
We also have pagination here – you can look around and pick another pokemon, if you dont like pokemons on the current page.

---

## JetBrains Menu

### Explanation

Big tree-like menu from JetBrains website. Originaly, it helps navigate in a huge documentations of products. <br/>
**Recursion, reused components, large data, CSS Modules.**

### How it works

We have here huge json file, like 30,000 strokes. We just draw menu with that options, what we have in json file: every option has his id, anchors, inner pages and so on.
You can select some option – on the right side of screen you'll see openned page's id or anchors, depends on what exactly did you select.

---

---

## RUS

**[Вернуться наверх](#react-apps)**

Это – мои мини-приложения, собранные на чистом React без вспомогающих библиотек.

Данные приложения в каком-то смысле бесполезны – они просто показывают мой стиль кода и какие задачи я могу решить.
В приложениях есть и тестовые задания известных российскому рынку компаний, и полностью выдуманные приложения.

Данные приложения – мои домашние задания от ментора.

Приложения:

- [CIAN Filters](#cian-filters-ru)<br/>
  **Множество контроллируемых инпутов, работа с данными из json, фильтрация данных, переиспользование компонентов, SCSS/Sass.**
  <br/>
- [WORDLE](#wordle-ru)<br/>
  **useReducer & useEffect хуки, корректный addEventListener на клавиатуре, окрашивание UI опираясь на игровую логику, PropTypes, SCSS/Sass**
  <br/>
- [Avito Filters](#avito-filters-ru)<br/>
  **Древовидное меню из чекбоксов, построенное с помощью "плоского" массива объектов, умное поведение чекбоксов, рекурсия, единственный компонент, который используется для "предков и наследников", SCSS/Sass.**
  <br/>
- [Pokemons](#pokemons-ru)<br/>
  **GRID сетка с маленьками ячейками, асинхронное обновление стейта, реальный запрос по url, пагинация, счетчик для пойманных покемонов, CSS Modules.**
  <br/>
- [JetBrains Menu](#jetbrains-menu-ru)<br/>
  **Рекурсия, переиспользование компонентов, огромное количество данных, CSS Modules.**
  <br/>
- [Gradient](#gradient-ru)<br/>
  **Контроллируемые инпуты и связанные с ними соседние инпуты-вспомогатели, кнопка подтверждения, предупреждения при неправильных вводах, CSS Modules.**
  <br/>

---

## CIAN Filters RU

### Краткое описание

Приложение CIAN Filters позволяет отфильтровать только нужные предложения банков на ипотеку <br/>
**Множество контроллируемых инпутов, работа с данными из json, фильтрация данных, переиспользование компонентов, SCSS/Sass.**

### Как работает приложение

Приложение имеет множество контроллируемых инпутов, с помощью которых ищется множество подходящих предложений из json-файла.
У каждого компонента есть свой стейт, который передается корневому компоненту. Корневой компонент принимает все стейты и формирует массив подходящих предложений, а потом отрисовывает их в интерфейсе.

---

## WORDLE RU

### Краткое описание

Известная мини-игра: ваша задача – найти загадочное слово за 6 попыток с нативными подсказками. <br/>
**useReducer & useEffect хуки, корректный addEventListener на клавиатуре, окрашивание UI опираясь на игровую логику, PropTypes, SCSS/Sass**

### Как работает приложение

Wordle – это известная мини-игра по поиску слова. Не переживайте – с подсказками на экране угадать слово будет не сложно.
У вас есть 6 попыток, чтобы угадать слово. Каждая попытка будет давать вам подскаку в вводимой строке и виртуальной клавиатуре – зеленый фон буквы значит, что буква угадана в нужном месте, желтый фон – что буква угадана, но ее расположение иное, серый фон – что буква отстуствует в слове.

---

## Avito Filters RU

### Краткое описание

Приложение Avito Filters показывает логически правильное поведение чекбоксов – например, выбор дочерних при выборе родителя и так далее. <br/>
**Древовидное меню из чекбоксов, построенное с помощью "плоского" массива объектов, умное поведение чекбоксов, рекурсия, единственный компонент, который используется для "предков и наследников", SCSS/Sass.**

### Как работает приложение

У нас есть плоский json-файл и данными для опций в меню – их id, parentId – id родителя. С помощью данного файла мы строим древовидное меню с помощью рекурсии.
Логика приложения построена на следующем: если вы выберете всех детей какого-нибудь родителя, то он тоже выберется. Более того, если у этого родителя есть "братья", и они тоже выбраны, то выберется и один общий предок сверху – и так далее. Работает и в обратную сторону – при снятии галочки с родителя, то и у всех наследников галочки тоже снимаются.

---

## Gradient RU

### Краткое описание

Одно из самых простейших приложений: разукрашивание фона градиентом с помощью двух инпутов. <br/>
**Контроллируемые инпуты и связанные с ними соседние инпуты-вспомогатели, кнопка подтверждения, предупреждения при неправильных вводах, CSS Modules.**

### Как работает приложение

В приложении нет сложной логики: для backgroud-color: linear-gradient() нам надо получить 2 цвета. Они задаются вручную с помощью контроллируемых инпутов или вспомогательных соседний инпутов для цветов – вы видите код цвета в инпуте при выборе из вспомогательного.
При нажатии на кнопку, цвет фона окрашивается в градиент выбранных цветов.

---

## Pokemons RU

### Краткое описание

Простейшая игра без какой-либо логики – в этом приложении я показываю как обрабаываю реальный запрос по url, получаю json-файл и рисую компоненты на его основе. <br/>
**GRID сетка с маленьками ячейками, асинхронное обновление стейта, реальный запрос по url, пагинация, счетчик для пойманных покемонов, CSS Modules.**

### Как работает приложение

У нас есть ссылка с данными покемонов: их id, имя, аватаркой и так далее. Фетчим эти данные по кнопке и отрисовываем интерфейс.
Мы можем поймать любого покемона, но поимка длится 1 секунду из-за setTimeout. Во время этого окна можно поймать и другого или нескольких – при этом стейт обновится правильно, пойманы будут все.
У нас есть и пагинация чтобы выбрать какого-нибудь другого покемона, она работает с помощью useEffect и обновляет стейт с покемонами новым списком.

---

## JetBrains Menu RU

### Краткое описание

Огромное древовидное меню с официального сайта JetBrains. Нужен для навигации по большой документации продуктов компании. <br/>
**Рекурсия, переиспользование компонентов, огромное количество данных, CSS Modules.**

### Как работает приложение

У нас есть огромный json-файл и данными по каждой опции меню – в файле около 30 000 строк. По нему мы выстраиваем древовидное меню с помощью рекурсии.
Если выбрать какую-нибудь опцию в меню, то справа можно увидеть неработающую гиперссылку или id страницы, которую надо открыть.

**[Вернуться наверх](#react-apps)**

---

---
