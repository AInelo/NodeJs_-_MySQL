# Liste des commandes

1. Installation du package.json et package.lock.json pour faire fonctionner le projet 

```bash
npm init -y
```

2. Pour installer MySQL2
```bash
npm i mysql2
```

3. Remarque: 
En lançant la commande 

```bash
node database.js
```

On remarque une sortie des données dans la base de donnée en format JSON 

```bash
[
  [
    {
      id: 1,
      title: 'My First Note',
      contents: 'A note about Life',
      created: 2024-01-19T15:26:11.000Z
    },
    {
      id: 2,
      title: 'My Second Note',
      contents: 'A note about Love',
      created: 2024-01-19T15:26:11.000Z
    }
  ],
  [
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `contents` TEXT NOT NULL,
    `created` TIMESTAMP(19) UNSIGNED NOT NULL
  ]
]

```