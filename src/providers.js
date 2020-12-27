import React from 'react';

import ViewContext, { useViewContextValue } from './content/view';

function Providers(props) {

  // Init ViewContext: (https://zh-hant.reactjs.org/docs/context.html)
  const viewContextValue = useViewContextValue();

  // render
  const { children } = props;

  return (
    // STEP 2：使用 Context.Provider (承接: /content/view)
    <ViewContext.Provider value={viewContextValue}>
      {/* // STEP 2-1 使用 Context.Consumer: 可取得 Context 的值, 公司邏輯是在 page 裡使用 isLage 判斷 */}
      {/* <ViewContext.Consumer>{({ width }) => (` width: ${width} `)}</ViewContext.Consumer> */}
      {children}
    </ViewContext.Provider>
  );
}

export default Providers;
