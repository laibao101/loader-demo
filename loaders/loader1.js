function loader (source) {
    console.log('--- loader begin ----');
    console.log(source);
    console.log('--- loader end ----\n');
    return source;
}

module.exports = loader;