### template
```
_.template('hello <%= user %>!');
```
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
 ### findLastIndex: 尋找 product_id === '12783' 返回 index
 ```
 _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
 ```
 ### head: 返回第一個內容 等同  mockData[0] [常用]
 ```
 _.head(array)
 ```
 ### indexOf: 回傳找到的索引值 [常用]
 ```
 _.indexOf(array, value, [fromIndex=0])
 ```
 ### initial: 去除 [] array中的最後一个元素
 ```
 _.initial(array)
 ```
 ### intersection: 陣列內容相互比較 回傳 陣列的交集 [常用]
 ```
 _.intersection([arrays])
 ```
 ### intersectionBy: 陣列內容相互比較 回傳 陣列的交集 [常用]
 ```
 可使用 product_id
 _.intersectionBy([arrays], [iteratee=_.identity])

 ```
 ### intersectionWith: 陣列內容相互比較 回傳 陣列的交集 [常用]
 ```_.intersectionWith([arrays], [comparator])

 ```
 ### flatten: 減少一級的嵌套深度
 ```
 _.flatten(array)
 ```
 ### flattenDeep:  遞歸為一維數組
 ```
 _.flattenDeep(array)
 ```
 ### flattenDepth: 根据 depth 递归减少 array 的嵌套层级 [常用]
 ```
 _.flattenDepth(array, [depth=1])
 ```
 ### fromPairs: 与_.toPairs正好相反  [] 轉 {}
 ```
 _.fromPairs(pairs)
 ```
 ### join: [1, 5, 3] 轉成 字串'1,5,3'
 ```
 _.join(array, [separator=','])
 ```
  ### split: 字串'1,5,3' 根据separator 拆分字符串string 轉成 [1, 5, 3]
 ```
 _.split([string=''], separator, [limit])
 ```
 ### lastIndexOf: 類似 indexOf 沒有匹配返回 -1
 ```
 _.lastIndexOf(array, value, [fromIndex=array.length-1])
 ```
 ### nth: array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
 ```
 _.nth(array, [n=0])
 ```
 ### pull: 移除数组array中所有和给定值相等的元素 和_.without 方法不同，这个方法会改变数组
 ```
 _.pull(array, [values])
 _.pullAll(array, values)
 ```
 ### pullAllBy: 不同于_.differenceBy, 这个方法会改变原始数组 array
 ```
 _.pullAllBy(array, values, [iteratee=_.identity])
 _.pullAllWith(array, values, [comparator])
 ```
 ### pullAllWith: 接受 comparator 比較兩組數組 这个方法会改变原始数组 array 
 ```
 _.pullAllWith(array, values, [comparator])
 ```
 ### pullAt: 根據索引 移除array中对应的元素，并返回被移除元素的数组
 ```
 _.pullAt(array, [indexes])
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```
 ### 
 ```
 ```