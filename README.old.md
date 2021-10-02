Настройка pre-commit хуков 1 - Установка зависимостей Установить в проект
следующие пакеты.

npm install --save-dev prettier eslint 2 - Инициализация lint-staged и husky
Пользователям MacOS и Linux систем необходимо выполнить в терминале следующую
команду. Она установит и настроит husky и lint-staged в зависимости от
инструментов качества кода из зависимостей проекта в package.json.

npx mrm lint-staged Пользователям Windows необходимо выполнить следующую
команду. Она делает тоже самое.

npx mrm@2 lint-staged 3 - Интерграция плагинов Ссылки на документацию по
интеграции плагинов в популярные редакторы.

Prettier editor integration ESLint editor integration 4 - Настройки VSCode Для
комфортной работы, после установки плагинов, нужно добавить несколько настроек
редактора для автосохранения и форматирования файлов.

{ "files.autoSave": "onFocusChange", "editor.formatOnSave": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true } }
