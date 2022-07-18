/* Задания на урок1:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

/* Задания на урок2:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  //добавили событие: страница начинает работать сразу после формирования ДОМ-дерево
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  const adBlock = document.querySelectorAll(".promo__adv img"),
    chgGenre = document.querySelector(".promo__genre"),
    chgBg = document.querySelector(".promo__bg"),
    chgList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = addForm.querySelector('[type = "checkbox"]'); //поиск чекбокса по атрибуту, выделение галочки которая нужна нам внутри формы;

  const removeAdv = (arr) => {
    arr.forEach((el) => el.remove());
  };

  const changesInPage = () => {
    chgGenre.textContent = "драма";
    chgBg.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortList = (arr) => arr.sort();

  const createList = (list, arrList) => {
    list.innerHTML = "";
    sortList(arrList);
    arrList.forEach((el, i) => {
      list.innerHTML += `
                      <li class="promo__interactive-item">
                      ${i + 1}: ${el}
                      <div class="delete"></div>
                      </li>
              `;
      document.querySelectorAll(".delete").forEach(
        (
          basket,
          i // формируем массив delete-ов и запускаем цикл по нему
        ) =>
          basket.addEventListener("click", () => {
            // создаем обработчик события нажатия ("click") на иконку корзинки
            basket.parentElement.remove(); // удаляем родителя корзинки, т.е фильм в списке хтмл
            arrList.splice(i, 1); //удаляем фильм в базе, сплайс удаляет с i элемента, всего 1 элемент
            createList(chgList, movieDB.movies); //запускаем рекурсию функции createList, чтобы упорядочивать элементы списка после удаления
          })
      );
    });
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault(); //!!!отмена стандартного поведения браузера, при отправке формы страница перегружаться не будет.

    let newFilm = addInput.value; //переменной присваиваем значение инпута, то что ввел пользователь.
    const favorite = checkBox.checked; //атрибут checked присваивает переменной булевое значение, тру если галочка стоит, фолс если нет.
    if (newFilm.trim()) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`; //
      }
      if (favorite) {
        console.log("Добавляем любимый фильм");
      }
      movieDB.movies.push(newFilm); //пушим новый фильм в массив
      createList(chgList, movieDB.movies); // пересоздаем отсортированный массив
      //event.target.reset(); //очищаем форму
    }
    event.target.reset(); //очищаем форму если ввели пробелы
  });

  removeAdv(adBlock);
  changesInPage();
  createList(chgList, movieDB.movies);
});
