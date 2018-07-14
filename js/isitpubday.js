$(document).ready(function () {
    $.getJSON("https://api.giphy.com/v1/gifs/search?api_key=YFJteLQcYADoIP0ZkTaa7l4IZvp9eROG&lang=en&q=yes&rating=g&limit=40", function (json) {
        var item = json.data[Math.floor(Math.random()*json.data.length)]
        $("#maingif").attr("src", item.images.original.url);
    });
});