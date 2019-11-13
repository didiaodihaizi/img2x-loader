module.exports = function (source) {
	const imgs = source.match(/(background|background-image)\:\s*url\((\S*)\)?__2x\)[\s\w-]*\;/g)
	let str = source
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
