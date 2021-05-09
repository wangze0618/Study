# CSS - 去除图片img底侧空白缝隙

![img](https://images2018.cnblogs.com/blog/1310818/201805/1310818-20180511203826697-1216930234.png)

### 原理：

```  markdown
图片或者表单等行内块元素，他的底线会和父级盒子的基线对齐(即默认vertical-align: baseline)。这样会造成一个问题，就是图片底侧会有一个空白缝隙。
```

### 解决方法：

```
方法一：vertical-align:top | bottom | middle
方法二：将inline元素或inline-block元素转换=>为block元素
```

### PS:vertical_traffic_light: vertical-align

**vertical-align不影响块级元素中的内容对齐，它只针对于<u>行内元素</u>或者<u>行内块元素</u>，特别是行内块元素， 通常用来控制图片/表单与文字的对齐。**

