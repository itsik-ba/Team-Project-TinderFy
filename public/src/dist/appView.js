function creatProfile() {
    try {
        var userProfile = document.querySelector(".userProfile");
        if (userProfile)
            userProfile.innerHTML = "\n        <div class=\"main\">\n        <h2 class=\"main__h2\">welcome <span class=\"main__h2__span\"></span></h2>\n        <h3 class=\"main__h3\">lets create your profile</h3>\n        <form class=\"profileForm\" onsubmit=\"createMyCard(event)\">\n\n        \n         <label class=\"label\" for=\"age\">what is your age:</label> \n         <br>\n         <input class=\"input\" type=\"number\" name=\"age\">  \n         <br>\n\n         <label class=\"label\" for=\"gender\">whats your gender:</label>\n         <br>\n         <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"man\">man\n         <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"women\">women\n         <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"other\">other\n         <br>\n\n           <label class=\"label\" for=\"location\">where do you live:</label>\n           <br>\n           <input class=\"input\" type=\"text\" name=\"location\">\n           <br>\n\n            <label class=\"label\" for=\"height\">what is your heght:</label>\n            <br>\n            <input class=\"input\" type=\"number\" name=\"height\">\n            <br>\n\n            <label class=\"label\" for=\"kids\">do you want kids:</label>\n            <br>\n            <input class=\"inputRadio\" type=\"radio\" name=\"kids\" value=\"yes\">yes\n            <input class=\"inputRadio\" type=\"radio\" name=\"kids\" value=\"not now\">not now\n            <input class=\"inputRadio\" type=\"radio\" name=\"kids\" value=\"never\">never\n            <br>\n\n            <label class=\"label\" for=\"smoking\">are you smoking:</label>\n            <br>\n            <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"yes\">yes\n            <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"no\">no \n            <br>\n\n            <label class=\"label\" for=\"education\">Education:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"education\" value=\"high school\">high school\n          <input class=\"inputRadio\" type=\"radio\" name=\"education\" value=\"university\">University \n          <input class=\"inputRadio\" type=\"radio\" name=\"education\" value=\"didnt study\">didnt study\n          <br>\n\n          <label class=\"label\" for=\"job\"> Job:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"job\" value=\"yes\">yes\n          <input class=\"inputRadio\" type=\"radio\" name=\"job\" value=\"no\">No\n          <input class=\"inputRadio\" type=\"radio\" name=\"job\" value=\"between\">Between Jobs\n          <br>\n\n          <label class=\"label\" for=\"relationship\">The type of relationship:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"relationship\" value=\"love\">looking for love\n          <input class=\"inputRadio\" type=\"radio\" name=\"relationship\" value=\"affair\">Looking for an affair\n          <input class=\"inputRadio\" type=\"radio\" name=\"relationship\" value=\"Friendship\">Friendship\n          <br>\n\n            <label class=\"label\" for=\"yourself\">few words about yourself:</label>\n              <br>\n              <textarea name=\"info\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n              <br>\n\n              <label class=\"label\" for=\"religious\">Religious belief:</label>\n              <br>\n              <input class=\"inputRadio\" type=\"radio\" name=\"religious\" value=\"religious\">religious\n              <input class=\"inputRadio\" type=\"radio\" name=\"religious\" value=\"secular\">secular\n              <input class=\"inputRadio\" type=\"radio\" name=\"religious\" value=\"traditional\">traditional\n              <br>\n\n              <button id=\"btnCreatProfile\" type=\"submit\">creat-profile</button>\n        </form>\n        </div>\n        ";
        // profileHtml;
    }
    catch (error) {
        console.error(error);
    }
}
function myPreferences() {
    try {
        var userProfile = document.querySelector(".userProfile");
        var myPreferences_1 = "\n        <div>\n        <h2>Now we will ask you about your preferences</h2>\n        <h3>Your preferences will affect the adjustments you receive</h3>\n        <form onsubmit=\"createMyPrefferance(event)\">\n        \n        <label class=\"label\" for=\"gender\">gender:</label>\n        <br>\n        <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"man\">man\n        <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"women\">women\n        <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"all\">other\n        <br>\n        \n          <label class=\"label\" for=\"minimumHeight\">minimum height:</label>\n          <br>\n         <input class=\"input\" type=\"number\" name=\"minimumHeight\">  \n         <br>\n\n         <label class=\"label\" for=\"maximumHeight\">maximum height:</label>\n         <br>\n        <input class=\"input\" type=\"number\" name=\"maximumHeight\">  \n        <br>\n\n        <label class=\"label\" for=\"minimumAge\">minimum age:</label>\n        <br>\n       <input class=\"input\" type=\"number\" name=\"minimumAge\">  \n       <br>\n\n       <label class=\"label\" for=\"maximumAge\">maximum age:</label>\n          <br>\n         <input class=\"input\" type=\"number\" name=\"maximumAge\">  \n         <br>\n\n          <label class=\"label\" for=\"kids\">intrested in kids:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"kids\" vlaue=\"yes\">yes\n          <input class=\"inputRadio\" type=\"radio\" name=\"kids\" vlaue=\"not now\">not now\n          <input class=\"inputRadio\" type=\"radio\" name=\"kids\" vlaue=\"never\">never\n          <br>\n\n          <label class=\"label\" for=\"smoking\">Smoking:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"no\">No\n          <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"yes\">Yes\n          <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"sometimes\">Sometime\n          <br>\n\n          <label class=\"label\" for=\"education\">Education:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"education\" value=\"high school\">high school\n          <input class=\"inputRadio\" type=\"radio\" name=\"education\" value=\"University\">University \n          <input class=\"inputRadio\" type=\"radio\" name=\"education\" value=\"didnt study\">didnt study\n          <br>\n\n          <label class=\"label\" for=\"relationship\">The type of relationship:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"relationship\" value=\"love\">looking for love\n          <input class=\"inputRadio\" type=\"radio\" name=\"relationship\" value=\"affair\">Looking for an affair\n          <input class=\"inputRadio\" type=\"radio\" name=\"relationship\" value=\"Friendship\">Friendship\n          <br>\n\n          <label class=\"label\" for=\"religious\">Religious belief:</label>\n          <br>\n          <input class=\"inputRadio\" type=\"radio\" name=\"religious\" value=\"religious\">religious\n          <input class=\"inputRadio\" type=\"radio\" name=\"religious\" value=\"secular\">secular\n          <input class=\"inputRadio\" type=\"radio\" name=\"religious\" value=\"traditional\">traditional\n          <br>\n          <button type=\"submit\">create</button>\n        </form>\n    </div>\n    ";
        if (userProfile)
            userProfile.innerHTML = myPreferences_1;
    }
    catch (error) {
        console.error(error);
    }
}
