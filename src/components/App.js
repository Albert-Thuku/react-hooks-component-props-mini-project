import React from "react";
import Header from "./Header";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogData={blogData} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList post={blogData.posts} />
    </div>
  );
}

export default App;