function loader (source) {
    console.log('--- loader begin ----');
    console.log(source);
    console.log('--- loader end ----\n');
    const callback = this.async();
    // do anything
    callback(null, source);
}

module.exports = loader;