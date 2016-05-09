![rednpm](http://77uc6m.com1.z0.glb.clouddn.com/rednpm.png)

rednpm: 教育网下的 npm 镜像, cli 客户端  
rednpm: a mirror in CERNET, the cli client, modified from cnpm  

Visit: https://npm.mirror.cqupt.edu.cn/ for more details.

## Install

```bash
$ npm install rednpm -g
```

如果你是教育网用户(据说移动网也很快), 可以使用 重庆邮电大学源:  
if you are using CERNET, you can use cqupt registry:  

```bash
$ npm install rednpm -g --registry=https://registry.mirror.cqupt.edu.cn
```

## Usage

支持所有 `npm` 支持的命令  
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