//Copyright Miguel Eduardo Senna Moroni - MIT License

const text = `
This program can compress:

Algorithm mode:
All Languages

Dictionary mode:
Tech Languages: HTML, CSS and Javascript;
Human Languages: English, Portuguese, Spanish and Latim;

Global Filters:
HTML mode with and without Head;
Choice especified languages to compress
`;


function textWindow() {

    const row = text.split('\n');

    for (let line of row) {
        console.log(line);
    }
}




module.exports = { textWindow };