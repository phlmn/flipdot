
const l: {
  [key: string]: boolean[][];
} = {};

const x = true;
const o = false;

l['1'] = [
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o]
]

l['2'] = [
    [o, x, o],
    [x, o, x],
    [o, o, x],
    [o, o, x],
    [o, x, o],
    [x, o, o],
    [x, o, o],
    [x, x, x]
]

l['3'] = [
    [x, x, o],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, x, o],
    [o, o, x],
    [o, o, x],
    [x, x, o]
]

l['4'] = [
    [o, o, x],
    [o, x, o],
    [o, x, o],
    [x, o, o],
    [x, o, x],
    [x, x, x],
    [o, o, x],
    [o, o, x]
]

l['5'] = [
    [x, x, x],
    [x, o, o],
    [x, o, o],
    [x, x, o],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [x, x, o]
]

l['6'] = [
    [o, x, x],
    [x, o, o],
    [x, o, o],
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o]
]

l['7'] = [
    [x, x, x],
    [o, o, x],
    [o, o, x],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o]
]

l['8'] = [
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [o, x, o]
]

l['9'] = [
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, x],
    [o, o, x],
    [o, o, x],
    [x, x, o]
]

l['0'] = [
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o]
]


// special characters


l[' '] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o]
]

l['_'] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [x, x, x]
]

l['-'] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [x, x, x],
    [o, o, o],
    [o, o, o],
    [o, o, o]
]

l['+'] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, x, o],
    [x, x, x],
    [o, x, o],
    [o, o, o],
    [o, o, o]
]

l['*'] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, x, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o]
]

l['='] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [x, x, x],
    [o, o, o],
    [x, x, x],
    [o, o, o],
    [o, o, o]
]

l['.'] = [
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, x, o]
]

l['!'] = [
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, o, o],
    [o, x, o]
]

l['?'] = [
    [o, x, o],
    [x, o, x],
    [o, o, x],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, o, o],
    [o, x, o]
]

l['\''] = [
    [o, x, o],
    [o, x, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o],
    [o, o, o]
]

l['%'] = [
    [x, o, x],
    [o, o, x],
    [o, o, x],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [x, o, o],
    [x, o, x]
]

// letters

l['A'] = [
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, x],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['B'] = [
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, x, o]
]

l['C'] = [
    [o, x, o],
    [x, o, x],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, o, x],
    [o, x, o]
]

l['D'] = [
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, o]
]

l['E'] = [
    [x, x, x],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, x, x],
    [x, o, o],
    [x, o, o],
    [x, x, x]
]

l['F'] = [
    [x, x, x],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, x, x],
    [x, o, o],
    [x, o, o],
    [x, o, o]
]

l['G'] = [
    [o, x, o],
    [x, o, x],
    [x, o, o],
    [x, o, o],
    [x, x, x],
    [x, o, x],
    [x, o, x],
    [o, x, o]
]

l['H'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, x],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['I'] = [
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o]
]

l['J'] = [
    [x, x, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [x, o, x],
    [o, x, o]
]

l['K'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['L'] = [
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [x, x, x]
]

l['M'] = [
    [x, o, x],
    [x, o, x],
    [x, x, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['N'] = [
    [o, o, x],
    [x, o, x],
    [x, x, x],
    [x, x, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['O'] = [
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o]
]

l['P'] = [
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, o],
    [x, o, o],
    [x, o, o],
    [x, o, o]
]

l['Q'] = [
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, x],
    [x, x, x],
    [o, x, x]
]

l['R'] = [
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['S'] = [
    [o, x, x],
    [x, o, o],
    [x, o, o],
    [x, o, o],
    [o, x, o],
    [o, o, x],
    [o, o, x],
    [x, x, o]
]

l['T'] = [
    [x, x, x],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o]
]

l['U'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o]
]

l['V'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o],
    [o, x, o]
]

l['W'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, x, x],
    [x, o, x]
]

l['X'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o],
    [x, o, x],
    [x, o, x],
    [x, o, x]
]

l['Y'] = [
    [x, o, x],
    [x, o, x],
    [x, o, x],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o],
    [o, x, o]
]

l['Z'] = [
    [x, x, x],
    [o, o, x],
    [o, o, x],
    [o, o, x],
    [o, x, o],
    [x, o, o],
    [x, o, o],
    [x, x, x]
]

export default l;
