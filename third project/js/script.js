"use strict";

window.addEventListener("DOMContentLoaded", () => {
  /*TABS================================================================================================*/
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  const hideTabContent = () => {
    tabsContent.forEach((el) => {
      //el.style.display = "none"; //делаем через классы которые добавили в файл newStyle.css
      el.classList.add("hide");
      el.classList.remove("show", "fade");
    });
    tabs.forEach((el) => {
      el.classList.remove("tabheader__item_active");
    });
  };
  const showTabContent = (i = 0) => {
    //tabsContent[i].style.display = "block"; //так же заменили на классы
    tabsContent[i].classList.remove("hide"); //
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.add("tabheader__item_active");
  };

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((el, i) => {
        if (target === el) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  /*TIMER==================================================================================================*/
  const judgmentDay = "2021-08-24";

  const getTimeRemeaning = (endTime) => {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      t: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const setTimer = (timer, endTime) => {
    const time = document.querySelector(timer),
      days = time.querySelector("#days"),
      hours = time.querySelector("#hours"),
      minutes = time.querySelector("#minutes"),
      seconds = time.querySelector("#seconds"),
      timeInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function getZero(param) {
      if (param > 0 && param < 10) {
        return (param = "0" + param);
      } else {
        return param;
      }
    }

    function updateTimer() {
      const t = getTimeRemeaning(endTime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = getZero("00");
        hours.innerHTML = getZero("00");
        minutes.innerHTML = getZero("00");
        seconds.innerHTML = getZero("00");
        const freebie = document.querySelector("#freebie");
        freebie.innerHTML = "ХАЛЯВА ЗАКОНЧИЛАСЬ:";
      }
    }
  };
  setTimer(".timer", judgmentDay);
});
