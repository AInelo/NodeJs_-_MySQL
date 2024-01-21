# Mise en Place de SQLite

## Introduction
Pour lire les données dans les bases de données sqlite
on utilise la librairie sqlite3, qui permet avec des fichier .db de stocker et de gérer des données

1. Installation SQLite3

```bash
npm i sqlite 3
```

2. Connexion à la base

```bash
const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE,(err)=> {
    if (err) return console.error(err.message);
})

```

3. Activer le mode Columns pour bien lire les donnés intégré
 
```bash
.mode column
```