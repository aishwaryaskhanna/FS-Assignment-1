const element = React.createElement("div", {
  id: "container"
}, React.createElement("div", {
  id: "name"
}, React.createElement("h1", null, "Aishwarya Khanna")), React.createElement("div", {
  id: "myImage"
}, React.createElement("img", {
  id: "faceImage",
  src: "ask_image.jpg",
  alt: "Aishwarya Khanna",
  width: "225",
  height: "300"
}), React.createElement("br", null), React.createElement("br", null)), React.createElement("div", {
  id: "introduction"
}, "Passionate learner and full of zest. ", React.createElement("br", null), "I like to code my way through life. ", React.createElement("br", null), "Sharing my life codes with you so click on it and enjoy. ", React.createElement("br", null)), React.createElement("div", {
  id: "githubLink"
}, React.createElement("a", {
  id: "gitLink",
  class: "button",
  href: "https://github.com/aishwaryaskhanna/"
}, "View My Git Repo")));
ReactDOM.render(element, document.getElementById('content'));