interface PasswordAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
}

interface GoogleAuth {
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
}

interface FacebookAuth {
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}


class User implements PasswordAuth, GoogleAuth, FacebookAuth {
    private _password : string = 'user';
    private _facebookToken : string;
    private _googleToken : string;


    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }
}

class Admin implements PasswordAuth {
    private _password : string = 'admin';

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}

// class Google implements GoogleAuth {
//     private _googleToken : string;
//
//     checkGoogleLogin(token) {
//         // return "this will not work";
//         return (token === this._googleToken);
//     }
//
//     setGoogleToken(token : string) {
//         this._googleToken = token;
//     }
// }
//
// class Facebook implements FacebookAuth {
//     private _facebookToken : string;
//
//     getFacebookLogin(token) {
//         return (token === this._facebookToken);
//     }
//
//     setFacebookToken(token : string) {
//         this._facebookToken = token;
//     }
// }

class GoogleBot implements GoogleAuth {
    private _googleToken : string;

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }
}

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User;
let admin = new Admin;
let bot;
let bot = new GoogleBot();

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;

    if(!loginAsAdminElement.checked) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    debugger;

    let auth = false;
    switch(true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }

    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});