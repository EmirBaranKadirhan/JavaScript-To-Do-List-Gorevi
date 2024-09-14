let inputBilgiDOM = document.querySelector("#task")

inputBilgiDOM.addEventListener("submit",newElement)   // inputBilgiDOM, form elemanını seçer, bu nedenle formu submit ettikçe newElement fonksiyonu tetiklenir.

function newElement(){    
    
    if (inputBilgiDOM.value === ""){
        console.log("hata")
        calistirUyariAlert()
    } else {
        console.log("Islem Basarili")
        calisturBasariliAlert()
        let userListDOM = document.querySelector("#list")
        let newLiDOM = document.createElement("li")
        let newSpanDOM = document.createElement("span")
        newSpanDOM.className = "close";     // span ogesine "close" sinifini ekledik
        newSpanDOM.innerHTML = "&times;"    // span ogesine icerik ekledik
        newLiDOM.innerHTML = inputBilgiDOM.value        // Liste öğesine kullanıcının girdiği metni ekledik
        newLiDOM.appendChild(newSpanDOM)
        userListDOM.appendChild(newLiDOM)
        inputBilgiDOM.value = "";    // Input alanını temizle
        addEventListeners()          // Her <li> Öğesine Tıklama Olayı Ekler, Her .close (Silme Butonu) Öğesine Tıklama Olayı Ekler:
    // addEventListeners fonksiyonu çağrıldığında, sadece mevcut liste öğelerine değil, aynı zamanda yeni eklenen öğelere de olay dinleyicilerini uygular. 
    }
}

function addEventListeners() {
    const gorev_Tamamlandi_DOM = document.querySelectorAll("#list li")
    gorev_Tamamlandi_DOM.forEach(item => {
        item.addEventListener("click", () => {
            // Tıklanan öğenin arka plan rengini değiştiriyoruz
            item.classList.toggle("checked") ;       // arka plan rengini ve text-decoration: line-through ozelliklerini css sayfasindan bu sekilde almis olduk
        })
    })
    // Tüm close (span) öğelerini seçiyoruz
    let closeButtons = document.querySelectorAll(".close");

    closeButtons.forEach(button => {
        button.addEventListener("click",removeChild)
})
}


function removeChild(event) {
    // Tıklanan öğenin parentElement'i olan <li> öğesini alıp siliyoruz
    let li = event.target.parentElement; // Tıklanan span'in ebeveyni olan <li> öğesini alır
    li.remove(); // <li> öğesini DOM'dan kaldırır
}


function calistirUyariAlert() {
    let uyariAlert = document.getElementById("liveToastError")
    let toast = new bootstrap.Toast(uyariAlert);
    toast.show();
}


function calisturBasariliAlert() {
    let basariAlert = document.getElementById("liveToastSuccess")
    let toast2 = new bootstrap.Toast(basariAlert)
    toast2.show()
}