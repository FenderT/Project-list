ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'NЁRDS DESIGN STUDIO',
            balloonContent: 'Дизайн-студия'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/contacts/map-marker.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-100, -180]
        })

    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors
    .disable('scrollZoom');
});
// modal window
var modalLink = document.querySelector(".info-button");
var modalPopup = document.querySelector(".modal-write");
var modalClose = document.querySelector(".modal-write-close");
var yourName = modalPopup.querySelector("[name=login]");
var yourEmail = modalPopup.querySelector("[name=email]");
var modalForm = modalPopup.querySelector("form");
var storage = localStorage.getItem("yourName");

modalLink.addEventListener("click",function (evt) {
    evt.preventDefault();
    modalPopup.classList.add("modal-show");
    if (storage) {
        yourName.value = storage;
        yourEmail.focus();
    } else {
        login.focus();
    }
});

modalForm.addEventListener("submit",function (evt) {
    if (!yourName.value || !yourEmail.value) {
        evt.preventDefault();
        modalPopup.classList.remove("modal-error");
        modalPopup.offsetWidth = modalPopup.offsetWidth;
        modalPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("yourName", yourName.value);
      }
    }
});

modalClose.addEventListener("click",function (evt){
    evt.preventDefault();
    modalPopup.classList.remove("modal-show");
    modalPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
     if (modalPopup.classList.contains("modal-show")) {
        modalPopup.classList.remove("modal-show");
        modalPopup.classList.remove("modal-error");
     }
    }
});