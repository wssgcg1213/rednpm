rednpm
=======

v1.0.0;

![rednpm](http://77uc6m.com1.z0.glb.clouddn.com/rednpm.png)

rednpm: A wrapper of cnpm.

## Install

```bash
$ npm install rednpm -g
```

如果你是教育网用户(据说移动网也很快), 可以使用[重庆邮电大学源:

```bash
$ npm install rednpm -g --registry=http://registry.mirror.cqupt.edu.cn
```

## Usage

Support all commands just like `npm`.

### Sync packages from `npm`

```bash
$ rednpm sync [moduleName]
```

### Open package document or git web url

```bash
$ rednpm doc [name]
$ rednpm doc -g [name] # open git web url directly
```

## License

[MIT](LICENSE.txt), 从 cnpm 4.2.0 源码直接修改得到, 感谢 fengmk2.