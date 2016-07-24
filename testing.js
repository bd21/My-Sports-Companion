function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
        getAccountName();
    } 
}


function getAccountName() {
    FB.api('/me', function (response) {
        document.getElementById('name').innerHTML = 
        'User Name = ' + response.name;
    })
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '608092456044557',
        cookie: true,
        xfbml: true,
        version: 'v2.7'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));