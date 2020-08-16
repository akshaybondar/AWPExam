let uname;
let pwd;
let eml;

function result() {
    uname = document.querySelector("#u").value;
    pwd = document.querySelector("#p").value;
    eml = document.querySelector("#e").value;
    if (uname != "" && pwd != "" && eml != "") {
        let txt = document.querySelector("#t").cloneNode(true);

        txt.innerHTML = "UserName : " + "  " + uname + " <div></div> " + "Password  :" + "  " + pwd + "  <div></div>" + "Email :" + eml;
        let z = document.querySelector("#t");
        z.insertBefore(txt, z.firstChild);

        document.querySelector("#u").value = "";
        document.querySelector("#p").value = "";
        document.querySelector("#e").value = "";
    }

}
//https://forms.gle/UxEF6ZLo6rkG5UmS6