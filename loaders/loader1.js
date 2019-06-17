function loader (source) {
    const time = new Date().toLocaleTimeString()
    return `
        /**
        ** @author laibao101
        ** @time ${time}
        **/
        ${source}
    `
}

module.exports = loader;