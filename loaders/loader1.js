function loader (source) {
    console.log('--- loader begin ----');
    console.log(source);
    console.log('--- loader end ----\n');
    this.callback(null, source);
}

module.exports = loader;