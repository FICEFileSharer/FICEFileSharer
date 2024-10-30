import React from 'react'

const TermsOfServicePage = () => {
  return (
    <div>
      <div className='d-flex h-100 text-white text-aling-justify text-uk-hyphens bg-dark px-mb-1'>
        <div className='cover-container d-flex w-100 h-100 mx-auto flex-column'>
          <h1 className='text-center mb-4'>Умови використання</h1>

          <p>
            Ці правила регламентують користування платформою{' '}
            <b>FICE File Sharer</b>. Користуючись нашою платформою, ви
            погоджуєтеся з цими умовами.
          </p>

          <h3 className='mt-3'>Загальні положення</h3>

          <p>
            <b>FICE File Sharer</b> – це сервіс, створений для студентів ФІОТ,
            що дозволяє обмінюватися файлами, створювати групи та отримувати
            доступ до академічних ресурсів.
          </p>

          <h3 className='mt-3'>Обмеження відповідальності</h3>

          <p>
            <b>FICE File Sharer</b> не несе відповідальності за втрату чи
            порушення конфіденційності даних у разі неналежного користування
            акаунтами Google або GitHub. Також ми не гарантуємо абсолютну
            безперебійність роботи платформи.
          </p>

          <h3 className='mt-3'>Заборонені дії</h3>

          <p className='mb-0'>Забороняється:</p>

          <ul>
            <li>Розміщення шкідливих файлів або програмного забезпечення.</li>

            <li>
              Використання платформи для розповсюдження нелегального контенту.
            </li>

            <li>
              Спроби отримати несанкціонований доступ до інших акаунтів або
              файлів.
            </li>
          </ul>

          <h3 className='mt-3'>Припинення користування</h3>

          <p>
            У разі порушення умов використання ми залишаємо за собою право
            припинити ваш доступ до платформи.
          </p>

          <h3 className='mt-3'>Юридичні аспекти</h3>

          <p>
            Використання <b>FICE File Sharer</b> регулюється відповідно до
            законодавства України. Усі правові спори розглядатимуться у судах
            України.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfServicePage
