import React from "react";
import BookList from "./components/BookList";
import BookContextProvider from "./contexts/BookContext";

class App extends React.Component {
  render() {
    return (
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
    );
  }
}

export default App;
