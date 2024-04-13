// Отримуємо список усіх категорій
// Виводимо кількість категорій у консоль
// Проходимось по кожній категорії та виводимо її назву та кількість елементів

const categoriesList = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('li').length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItemsCount}`);
});