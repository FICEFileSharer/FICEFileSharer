import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <div className='d-flex h-100 text-white text-aling-justify text-uk-hyphens bg-dark px-mb-1'>
        <div className='cover-container d-flex w-100 h-100 mx-auto flex-column'>

          <h1 className='text-center mb-4'>
            Про нас
          </h1>

          <p>
            Ласкаво просимо до <b>FICE File Sharer</b> – зручної платформи для студентів 
            ФІОТ КПІ. Ми створили цей сервіс, щоб допомогти студентам ефективно ділитися 
            необхідними матеріалами, об’єднуватися в групи та працювати над спільними 
            завданнями.
          </p>
          
          <h3 className='mt-3'>
            Наша місія
          </h3>

          <p>
            <b>FICE File Sharer</b> сприяє академічній взаємодії та підтримці серед 
            студентів. Завдяки нашій платформі, студенти можуть швидко обмінюватися 
            файлами, організовувати матеріали за темами й робочими групами, а також 
            отримувати необхідні ресурси для підготовки до занять та виконання 
            лабораторних робіт.
          </p>

          <h3 className='mt-3'>
            Функціонал
          </h3>

          <ul>
            <li>
              Реєстрація через GitHub або Google – швидкий та безпечний спосіб створити 
              обліковий запис.
            </li>

            <li>
              Групи для спільної роботи – створюйте групи за дисциплінами, приєднуйтеся 
              до існуючих, спілкуйтесь і обмінюйтесь файлами в групових просторах.
            </li>

            <li>
              Організація файлів – завантажуйте файли, розміщуйте їх у відповідних директоріях 
              і полегшуйте доступ до матеріалів.
            </li>
          </ul>

          <h3 className='mt-3'>
            Члени команди
          </h3>

          <p className='mb-0'>
            Над платформою працювали:
          </p>

          <ul className='navbar-nav mt-0 ml-2 ms-3'>
            <li className='mt-1'>
              <a href='https://t.me/Dreammy_Oleksandr'>Бондаренко Олександр</a> – teamlead, backend;
            </li>

            <li className='mt-1'>
              <a href='https://t.me/BL_OD'>Сачко Максим</a> – frontend;
            </li>
          </ul>

          <h3 className='mt-3'>
            Наші контакти
          </h3>

          <p>
            Якщо у вас є питання або пропозиції, будь ласка, зв'яжіться з нами через нашу 
            сторінку контактів (<b className='text-success'>im22group@gmail.com</b>) 
            або соціальні мережі.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;