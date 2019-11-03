# 一个自己用的loader

- 在样式文件引用图片的链接后增加?__2x后，在打包编译的时候会自动修改css，增加background-image:image-set(url(***.***) 1x, url(***@2x.***) 2x)引入2倍图（前提是图片存在）