import * as fs from 'fs';
import * as path from 'path';

const logColor = {
  white: '\x1B[37m',
  green: '\x1B[32m',
  blue: '\x1B[34m',
  red: '\x1B[31m'
};

console.log(logColor.blue, 'Generating UUIDs...');

const target = 'datas/data-src.ts'
const dist = 'datas/data-out.ts'

// Chemin vers le fichier source
const filePath = path.resolve(target);

// Lire le contenu du fichier
const fileContent = fs.readFileSync(filePath, 'utf-8');

const newFile = populateTemplate(fileContent, 'uuid')

// // Chemin vers le fichier de sortie
const outputFilePath = path.resolve(dist);

// Écrire le contenu mis à jour dans un nouveau fichier
fs.writeFileSync(outputFilePath, newFile, 'utf8');

console.log(logColor.green, 'Done !');

// Function to replace placeholders in the model with the given values
function populateTemplate (template, placeholder) {
  const regex = new RegExp(`{${placeholder}}`, 'g');
  return template.replace(regex, () => {
    return crypto.randomUUID();
  });
}
