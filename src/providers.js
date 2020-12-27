import React from 'react';

import ViewContext, { useViewContextValue } from './content/view';

function Providers(props) { 

  // Init ViewContext: (https://zh-hant.reactjs.org/docs/context.html)
  const viewContextValue = useViewContextValue();

  // render
  const { children } = props;

  return (
      // STEP 2：使用 Context.Provider (承接: /content/view)
    <ViewContext.Provider value={viewContextValue}>{children}</ViewContext.Provider>
  );
}

export default Providers;
