### chunk: 將 [] 重新拆分 5個1組 [常用]
```
_.chunk(array, [size=1])
```
### compact: 創建一個刪除所有 falsey 值的數組 
```
_.compact(array)
```
### concat:
 ```
 _.concat(array, [values])
 ```
 ### difference: 以第一個 [] 為基準 比較所有 [] 的內容 [常用]
 ```
 _.difference(array, [values])
 ```
 ### differenceBy: 以第一個 [] 為基準 比較內容
 ```
 _.differenceBy(array, [values], [iteratee=_.identity])
 ```
 ### differenceWith: 
 ```
 _.differenceWith(array, [values], [comparator])
 ```
 ### drop: 去除array前面的n个元素
 ```
 _.drop(array, [n=1])
 ```
 ### dropRight: 去除array尾部的n个元素
 ```
 _.dropRight(array, [n=1])
 ```
 ### dropRightWhile: 去除 找到最後一筆 true 後到尾部的值(刪尾巴)
 ```
 _.dropRightWhile(array, [predicate=_.identity]) 
 predicate 会传入3个参数： (value, index, array)
 ```
 ### dropWhile: 去除 從開始到找到 true 的值(刪開始)
 ```
 _.dropWhile(array, [predicate=_.identity])
 ```
 ### fill: 替换 從開始到結束的值
 ```
 _.fill(array, value, [start=0], [end=array.length])
 ```
 ### findIndex: 尋找 product_id === '12783' 返回 index
 ```
 _.findIndex(array, [predicate=_.identity], [fromIndex=0])
 ```
 ### head: 返回第一個內容 等同  mockData[0] [常用]
 ```
 _.head(array)
 ```
 ### indexOf: 回傳找到的索引值 [常用]
 ```
 _.indexOf(array, value, [fromIndex=0])
 ```