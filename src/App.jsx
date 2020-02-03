const element = (
    <div id="container">
    <div id="name">
            <h1>Aishwarya Khanna</h1>
        </div>
        <div id="myImage">
            <img id="faceImage" src="ask_image.jpg" alt="Aishwarya Khanna" width="225" height="300"></img><br/><br/>
        </div>
        <div id="introduction">
           Passionate learner and full of zest. <br/>
           I like to code my way through life. <br/>
           Sharing my life codes with you so click on it and enjoy. <br/>
        </div>
        <div id="githubLink">
            <a id="gitLink" class="button" href="https://github.com/aishwaryaskhanna/">View My Git Repo</a>
        </div>

    </div>
    );
ReactDOM.render(element, document.getElementById('content'));