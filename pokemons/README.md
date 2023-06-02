## Pokemons

### Explanation

Simple game without logics: this app just shows you how do I handle fetching data by link.

### How it works

We have pokemons on the interface. Pokemon's data comes with link: name, his id, picture and else.
We can catch Pokemon, but it costs 1 sec. To handle delay, I used hook useState with callback inside, because delay action is asynchronous (setTimeout).
We also have pagination here – you can look around and pick another pokemon, if you dont like pokemons on the current page.
