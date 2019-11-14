const { getOptions } = require('loader-utils')
const defaultOptions = {
    postfix: '?__2x'
}
module.exports = function (source) {
	const options = Object.assign(defaultOptions, getOptions(this))
	const reg = new RegExp(`(background|background-image)\\:\\s*url\\((\\S*)\\)${options.postfix}\\)[\\s\\w-]*\\;`, 'g')
	const imgs = source.match(reg)
	let str = source
	// console.log(imgs)
    if (imgs && imgs.length) {
        imgs.forEach(item => {
            let fix = item.match(/\w\.(\S*)\?/)[1]
            let name = item.match(/\((\S*)\./)[1]
            let afterReplace = `${item}background-image: image-set(url(${name}.${fix}) 1x, url(${name}@2x.${fix}) 2x);`
            str = str.replace(item, afterReplace)
        })
    }
	this.callback(null, str)
}
