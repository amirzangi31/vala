/* ------------------change btn and content--------------------- */
let btns = document.querySelectorAll(".btn-category-user");
let contents = document.querySelectorAll(".content");

btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    btns.forEach((item) => {
      item.classList.remove("active");
    });
    contents.forEach((item) => {
      item.classList.remove("active");
    });
    btns[index].classList.add("active");
    contents[index].classList.add("active");
  });
});





























let formtwo = document.querySelector(".form-login");
let phoneNumbertwo = document.querySelector("#phoneNumber-login");
let passwordtwo = document.querySelector("#password-login");

phoneNumbertwo.focus();

// submit form
formtwo.addEventListener("submit", async (e) => {
  e.preventDefault();
  checkInputt();
  if (checkInputt() === false) {
    let userLogin = {
      phonenumber: `${phoneNumbertwo.value}`,
      password: `${passwordtwo.value}`,
    };

    const result = await login(userLogin);

    if (result === false || result === "" || result === undefined) {
      successAlert("error", "کاربر یافت نشد");
    }
    else{
      window.localStorage.setItem("user" , result)

      setTimeout(() => {

        window.location.replace("./index.html");
      }, 2000);
    }
  }
});

// validation inputs
const checkInputt = () => {
  const phoneValue = phoneNumbertwo.value.trim();
  const passwordValue = passwordtwo.value.trim();
  let errors = {};
  if (phoneValue === "") {
    setErrortwo(phoneNumbertwo, "لطفا ایمیل خود را وارد کنید");
    errors.phoneNumber = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (checkPhoneNumber(`${phoneValue}`) === false) {
    setErrortwo(phoneNumbertwo, "لطفا شماره همراه معتبر وارد کنید");
    errors.phoneNumber = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccesstwo(phoneNumbertwo);
    delete errors.phoneNumbertwo;
  }

  if (passwordValue === "") {
    setErrortwo(passwordtwo, "لطفا رمز عبور خود را وارد کنید");
    errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else if (passwordValue.length < 2) {
    setErrortwo(passwordtwo, "رمز عبور نباید کمتر از هشت کاراکتر باشد");
    errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
  } else {
    setSuccesstwo(passwordtwo);
    delete errors.passwordtwo;
  }

  return !!Object.keys(errors).length;
};

// set errors
const setErrortwo = (input, message) => {
  const formGroup = input.parentElement;
  const contentFormGroup = formGroup.parentElement;
  const small = contentFormGroup.querySelector("small");

  formGroup.classList.add("error");
  small.innerText = message;
};

// set success
const setSuccesstwo = (input) => {
  const formGroup = input.parentElement;
  const contentFormGroup = formGroup.parentElement;
  const small = contentFormGroup.querySelector("small");
  formGroup.classList.add("success");
  small.innerText = "";
};
// ------------------------------------------------------------------//














// import Auxiliary functions
import { checkPhoneNumber } from './services.js';



let form = document.querySelector(".form-disposable-code");
let formConfirm = document.querySelector(".form-confirm-code");
let phoneNumber = document.querySelector("#numberPhone");
let codeConfirm = document.querySelector("#code");
let timing = 60;
let btnTimer = document.querySelector("#btn-timer")
let timingHmtl = document.querySelector("#time")
let password = document.querySelector("#password-signUp");
let confirmPassword = document.querySelector("#confirmPassword-signUP");



function setTime() {

    if (timing == 0) {
        btnTimer.removeAttribute("disabled");
        timingHmtl.classList.add("d-none")
        btnTimer.classList.add("active")
        // clearInterval(timer)
    };
    //   let h = Math.floor(timing / 3600);
    let m = Math.floor((timing % 3600) / 60);
    let s = (timing % 3600) % 60;
    s = s < 10 ? "0" + s : s;
    //   document.querySelector(".hour").innerHTML = h;
    document.querySelector("#minute").innerHTML = `0${m}`;
    document.querySelector("#second").innerHTML = s;
}

let timer = setInterval(() => {
    timing -= 1;
    setTime();
}, 1000);

const startTimer = () => {
    timer = setInterval(() => {
        timing -= 1;
        setTime();
    }, 1000)
}

clearInterval(timer)
phoneNumber.focus();




// submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput("phone")

    if (checkInput("phone") === false) {
        // successAlert("عملیات با موفقیت انجام شد")


        form.classList.remove("active");
        formConfirm.classList.add("active");

        startTimer()



    }
})

formConfirm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput("code")
    if (checkInput("code") === false) {
        localStorage.setItem("phoneNumber" , phoneNumber.value)

        // successAlert("عملیات با موفقیت انجام شد");

        window.location.replace("./sign-up.html");
    }
})

// validation inputs

const checkInput = (type) => {
    const passwordValue = password.value.trim();
const confirmPasswordValue = confirmPassword.value.trim();
const phoneNumberValue = phoneNumber.value.trim();
let errors = {}
    
    if (type === 'phone') {
        
        if (phoneNumberValue === "") {
            setError(phoneNumber, "لطفا شماره همراه خود را وارد کنید")
            errors.phoneNumber = "لطفا نام و نام خانوادگی خود را وارد کنید";
        } else if (!!checkPhoneNumber(`${phoneNumberValue}`) === false) {
            setError(phoneNumber, "لطفا شماره همراه معتبروارد کنید")
            errors.phoneNumber = "لطفا نام و نام خانوادگی خود را وارد کنید";
        } else {
            setSuccess(phoneNumber)
            delete errors.phoneNumber;
        }
        return !!Object.keys(errors).length
    } else {
        const codeVlaue = codeConfirm.value.trim();
        let errors = {}
        if (codeVlaue === "") {
            setError(codeConfirm, "لطفا کد تایید  خود را وارد کنید")
            errors.codeConfirm = "لطفا نام و نام خانوادگی خود را وارد کنید";
        } else if (codeVlaue.length < 4) {
            setError(codeConfirm, "لطفا  کد را کامل وارد کنید")
            errors.codeConfirm = "لطفا نام و نام خانوادگی خود را وارد کنید";
        } else {
            setSuccess(codeConfirm)
            delete errors.codeConfirm;
        }
        
    }
    if (passwordValue === "") {
        setError(password, "لطفا رمز عبور خود را وارد کنید");
        errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
      } else if (passwordValue.length < 8) {
        setError(password, "رمز عبور نباید کمتر از هشت کاراکتر باشد");
        errors.password = "لطفا نام و نام خانوادگی خود را وارد کنید";
      } else {
        setSuccess(password);
        delete errors.password;
      }
    
      if (confirmPasswordValue === "") {
        setError(confirmPassword, "لطفا رمز عبور خود را وارد کنید");
        errors.confirmPassword = "لطفا نام و نام خانوادگی خود را وارد کنید";
      } else if (confirmPasswordValue != passwordValue) {
        setError(confirmPassword, "رمز عبور رااشتباه وارد کردید ");
        errors.confirmPassword = "لطفا نام و نام خانوادگی خود را وارد کنید";
      } else {
        setSuccess(confirmPassword);
        delete errors.confirmPassword;
      }
      
}

// set errors
const setError = (input, message) => {
    const formGroup = input.parentElement;
    const contentFormGroup = formGroup.parentElement;
    const small = contentFormGroup.querySelector("small");

    formGroup.classList.add("error");
    small.innerText = message;
}

// set success
const setSuccess = (input) => {
    const formGroup = input.parentElement;
    const contentFormGroup = formGroup.parentElement;
    const small = contentFormGroup.querySelector("small");
    formGroup.classList.add("success");
    small.innerText = ""
}


//دکمه ارسال مجدد
let btnResend = document.querySelector("#btn-timer");
btnResend.addEventListener("click", () => {
    form.classList.add("active");
    formConfirm.classList.remove("active")

})








