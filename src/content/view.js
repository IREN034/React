import React, { useState } from 'react';
import useWindowSizeOnce from '../utils/useWindowSizeOnce';

/** 透過 React CreateContext 搭配 React useContext 與 useReducer 來做 Global State Manager: 
 * 當有階層較多的元件時，可能一個狀態需要透過 3–5 層不等的資料流才能獲取，也因此 Global State 可以直接透過 Context 來獲取及給予狀態，
 * Global State 顧名思義，說穿了就是一個產生在最上層的全域變數 (https://reurl.cc/4mEQ2X) */

 /** Context 是設計來在 React 元件中共享資料: (https://pjchender.blogspot.com/2019/07/react-react-context-api.html)
  * 類似在 React 元件的全域（global），資料類似「使用者的登入狀態」、「樣式（theme）」、「檢視語言（preferred language）」、「資料快取（cache）」。
  * 實際上真正操作資料的地方是在根元件的，而 Context 更像是修改和傳遞資料的一個媒介
  * 讀取資料：Context 的方式是在根元件的地方（例如，App.js）透過 <Context.Provider> 把需要傳遞的資料帶入 Context 中，而這些資料通常會放在根目錄的 state 中；接著，在需要使用到此資料的地方，在透過 contextType 取得 context 內的資料
  * 修改資料：若有需要修改 Context 中的內容，則是去修改根元件的 state 後重新帶入 <Context.Provider> 中，如此子層的元件就可以再次透過 contextType 取得新的資料。 */

  // STEP 1: createContext(<預設值>)
  const ViewContext = React.createContext({
  width: 0,
  height: 0,
  isLarge: false,
});

// // STEP 2：使用 Context.Provider (檔案: /providers.js)
// STEP 3：定義 contextType 以取得 context 內容
const useViewContextValue = () => {
  const { width, height } = useWindowSizeOnce();

  const contextValue = {
    width,
    height,
    isLarge: width >= 1100,
  };
 
  return contextValue;
};

// ViewContext.displayName = 'ViewContext';

export default ViewContext;
export { useViewContextValue };
