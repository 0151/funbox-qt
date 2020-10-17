# Funbox QT

- [Level I](https://github.com/0151/funbox-qt/wiki/Level-I)
- [Level II](https://0151.github.io/funbox-qt/)
- Typescript, React, PostCSS

## Требования

- [Node.js 12+](https://nodejs.org/)

## Установка

```bash
git clone https://github.com/0151/funbox-qt.git --depth 1 funbox-qt
cd funbox-qt
npm i
```

## Использование

### Сборка проекта

```bash
npm run build
```

### Запуск окружения разработки

```bash
npm start
```

### Про техническую часть

Чтобы не переусложнять структуру пропсов карточки, в проекте используется dangerouslySetInnerHTML, подразумевая, что данные приходят из безопасного источника.

### Что хотелось бы добавить

- [ ] Менять внешний вид карточки при фокусе с клавиатуры;
