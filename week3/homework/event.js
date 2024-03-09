var currentYear = new Date().getFullYear();
var selectDay = document.getElementById("day");
var selectMonth = document.getElementById("month");
var selectYear = document.getElementById("year");

for (let index = 0; index < 100; index++) {
    var option = document.createElement("option");
    option.innerHTML = currentYear - index;
    selectYear.appendChild(option);
}

for (let index = 0; index < 12; index++) {
    var option = document.createElement("option");
    option.innerHTML = "Tháng " + (index + 1);
    selectMonth.appendChild(option);
}

document.body.onclick = function(e) {
    var target = e.target;

    if (target.id != "dob-hint" && target.id != "dob") {
        document.getElementById("dob-hint").style.display = "none";
    }
    if (target.id != "gender-hint" && target.id != "gender") {
        document.getElementById('gender-hint').style.display = "none";
    }
}

function resetBorder(id) {
    document.getElementById(id).style.border = "none";
    document.getElementById('notify').innerHTML = "";
}
function resetBorderOfCheckbox() {
    for (var element of document.getElementsByClassName('checkbox')) {
        element.style.border = "none";
    }
}

function showHint(str) {
    var element = document.getElementById(str);
    element.style.display = "flex";
}

function submit() {
    var notify = document.getElementById("notify");

    var firstName = document.getElementById("first-name");
    if (firstName.value.length == 0) {
        notify.innerHTML = "Họ và tên đệm là bắt buộc";
        firstName.style.border = "red solid 1px";
        return;
    }

    var surname = document.getElementById("surname");
    if (surname.value.length == 0) {
        notify.innerHTML = "Tên là bắt buộc";
        surname.style.border = "red solid 1px";
        return;
    }

    var emailMobile = document.getElementById("email-mobile");
    var emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-z0-9]/;
    var phonePattern = /^[0-9]{10,11}$/;
    if (emailMobile.value.length == 0) {
        notify.innerHTML = "Email (số điện thoại) là bắt buộc";
        emailMobile.style.border = "red solid 1px";
        return;
    } else if (emailMobile.value.indexOf('@') == -1 && !phonePattern.test(emailMobile.value)) {
        notify.innerHTML = "Số điện thoại không hợp lệ";
        emailMobile.style.border = "red solid 1px";
        return;
    } else if (!emailPattern.test(emailMobile.value)) {
        notify.innerHTML = "Email không hợp lệ";
        emailMobile.style.border = "red solid 1px";
        return;
    }

    var password = document.getElementById('new-password');
    if (password.value.length == 0) {
        notify.innerHTML = "Mật khẩu mới là bắt buộc";
        password.style.border = "red solid 1px";
        return;
    }

    var gender = document.querySelector("input[name='gender-checkbox']:checked");
    if (gender == null) {
        notify.innerHTML = "Giới tính là bắt buộc";
        for (var element of document.getElementsByClassName('checkbox')) {
            element.style.border = "red solid 1px";
        }

        return;
    }

    notify.innerHTML = "";
}

function updateDay() {
    var year = currentYear - selectYear.selectedIndex;
    var month = selectMonth.selectedIndex + 1;

    while (selectDay.firstChild) {
        selectDay.removeChild(selectDay.firstChild);
    }

    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            for (let index = 0; index < 31; index++) {
                var option = document.createElement("option");
                option.innerHTML = index + 1;
                selectDay.appendChild(option);
            }
            break;
        case 2:
            var end = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 29 : 28;
            for (let index = 0; index < end; index++) {
                var option = document.createElement("option");
                option.innerHTML = index + 1;
                selectDay.appendChild(option);
            }
            break;
        default:
            for (let index = 0; index < 30; index++) {
                var option = document.createElement("option");
                option.innerHTML = index + 1;
                selectDay.appendChild(option);
            }
    }
}

updateDay();