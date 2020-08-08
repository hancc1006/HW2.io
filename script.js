let tx = document.querySelector("#texts");


$(document).ready(function(){
    $('#text1').text("Generate a password at random given the length of the password by the user.");
    $('#text2').text("Try a code quiz");
    $('#text3').text('Check the weather forecast of the city you choose');
    $('#text4').text('Find recipes from your home');

    $('#title1').text('Password Generator');
    $('#title2').text('Code Quiz');
    $('#title3').text('Weather Forecast');
    $('#title4').text('Recipe Collaboration');

    $("#img1").attr("src","./Assets/PWgen.PNG");
    $("#img2").attr("src","./Assets/CodeQuiz.PNG");
    $("#img3").attr("src","./Assets/WeatherForecast.PNG");
    $("#img4").attr("src","./Assets/Collaborative.PNG");

    $('#index-title').text("About me");
    $('#index-text').text("My favorite hobbies are skiing, swimming, reading, and learning new things. I listen to a variety of music and have joy in watching adventure, sci-fi, and comedy movies.");
    $('#submit').on('click',function(){

    });

});
