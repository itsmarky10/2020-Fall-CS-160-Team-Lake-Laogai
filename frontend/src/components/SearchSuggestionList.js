import React, { useEffect, useState } from "react";
import "../styling.css"

function SearchSuggestionList({
  filteredStores,
  setSearchStore,
  ifTypedWords,
  foundStore,
  setFoundStore,
  activeFilteredStoreIndex,
  setDisableSearchButton
}) {
  // console.log("filteredStores", filteredStores);
  // console.log("ifTypedWords", ifTypedWords);

  const selectThisStore = (e) => {
    // console.log("selectThisStore e:", e.target);
    setSearchStore(e.target.innerText);
    setFoundStore(true);
  };

  let ifDisableSearchButton = (!ifTypedWords) || (ifTypedWords && filteredStores.length == 0) ? true : false;
  setDisableSearchButton(ifDisableSearchButton)

  const lists =
    ifTypedWords && filteredStores.length == 0 ? (
      <p>Oops, no such store</p>
    ) : (
      filteredStores.map((store, index) => {
        let className;
        if (index === activeFilteredStoreIndex) {
          className = "optionActive";
        }
        return (
          <p className={className} key={index} onClick={selectThisStore}>
            {store.storeName}
          </p>
        );
      })
    );

  const stores = ifTypedWords && !foundStore ? lists : <></>;

  return <div className="searchSuggestionList">{stores}</div>;
}

export default SearchSuggestionList;
