var traceur = require('traceur');
var fs = require('fs');

var contents = fs.readFileSync('calc.js').toString();

var result = traceur.compile(contents, {
    filename: 'calc.js',
    sourceMap: true,
    modules: 'commonjs'
});

if (result.error) {
    throw result.error;
}

fs.writeFileSync('out.js', result.js);

fs.writeFileSync('out.js.map', result.sourceMap);
