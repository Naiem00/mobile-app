"use strict"

window.addEventListener("DOMContentLoaded",
  function() {

    if (typeof localStorage === "undefined") {
      window.alert("このブラウザはLocal Storage");
      return;
    } else {
       saveLocalStorage();
    }
    }

);

function saveLocalStorage() {
  const save = document.getElementById("save");
  save.addEventListener("click",
   function(e) {
    e.preventDefault();
    const key = document.getElementById("textKey").value;
    const value = document.getElementById("textMemo").value;

    if (key =="" || value=="") {
      window.alert("Key,Memoはいずれ必要です");
      return;
     } else {
      localStorage.setItem(key, value);
      let w_mg = "LocalStorageに" + key + " " + value + "を保存しました。";
      window.alert(w_msg);
      document.getElementById("textKey").value = "";
      document.getElementById("textMemo").value = "";


     }
     }
  
  );

};
