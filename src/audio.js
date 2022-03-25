window.resizeTo(200, 200);
onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var base64AudioContent = 'data:audio/mp3;base64,'+ decodeURIComponent(urlParams.get('src'));
    let audio = new Audio(base64AudioContent);
    audio.play();
}