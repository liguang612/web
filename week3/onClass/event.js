function check() {
    var notify = document.getElementById("notify");

    var name = document.getElementById("full-name").value;
    if (name.length == 0) {
        notify.innerHTML = "Tên không được bỏ trống";
        return;
    }

    var phone = document.getElementById("phone").value;
    var phonePattern = /^[0-9]{10,11}$/;
    if (!phonePattern.test(phone)) {
        notify.innerHTML = "Số điện thoại không hợp lệ";
        return ;
    }
    
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-z0-9]/;
    if (!emailPattern.test(email)) {
        notify.innerHTML = "Email không hợp lệ";
        return;
    }

    notify.innerHTML = "";
    
    return;
}