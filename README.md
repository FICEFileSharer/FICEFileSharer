# FICEFileSharer

## 📝 Опис проєкту

Цей проєкт — файловий шерер студентів ФІОТ, який дозволяє студентам обмінюватися файлами, реєструватися через GitHub або Google, а також приєднуватися до груп для спільної роботи та обміну ресурсами.

### 👨‍💻 Основні функції:
- **✍️ Реєстрація та авторизація**:
  - Реєстрація через GitHub.
  - Реєстрація через Google.
  
- **🧑‍🧑‍🧒‍🧒 Групи**:
  - Можливість створення та приєднання до груп.
  - Кожна група має власний простір для обміну файлами.

- **📂 Файловий обмін**:
  - Користувачі можуть завантажувати та завантажувати файли в групи.
  - Файли можуть бути організовані в директоріях для зручного доступу.
  
- **🔐 Керування доступом**:
  - Старости груп можуть керувати правами доступу учасників (читання/запис).

## 💻 Технології

- **⌨️ Backend**:
  - Node.js / Express
  - MongoDB (для збереження інформації про користувачів, групи та файли)
  
- **🖥 Frontend**:
  - React
  - Tailwind CSS (для стилізації)

- **🤖 Інтеграції**:
  - OAuth 2.0 для аутентифікації через Google та GitHub API.
