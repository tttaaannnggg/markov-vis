# ez-markov graph visualizer

this one's pretty straightforward. it's built as a frontend for my NPM package, [ez-markov](https://www.npmjs.com/package/ez-markov). Just insert text into the textarea, click "render graph", and it will display a graph of the connections between words (bigrams, basically). 

The graph displays the internal state of the markov chain generated from the given text. i.e. "hello world" will have two nodes, "hello", and "world", and one edge that is "hello" -> "world". 

## Usage

you can find it live hosted on github pages [here](https://tttaaannnggg.github.io/markov-vis/) (the url is https://tttaaannnggg.github.io/markov-fe/ )
if, for some reason, you feel compelled to pull down the repo, you can start it with `npm i` and `npm start`. It's built with create-react-app, after all.
