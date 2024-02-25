//Copyright Miguel Eduardo Senna Moroni - MIT License

const fs = require('fs');
const path = require('path');

function clearFiles(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.unlink(filePath, err => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log(`File ${filePath} deleted successfully`);
            });
        });
    });
}

function clearSelect(option) {
    const arquives = {
        '3': ['files/com', 'files/dic', 'files/uncom'],
        '31': ['files/com'],
        '32': ['files/uncom'],
        '33': ['files/dic']
    };

    return arquives[option];
}

module.exports = { clearFiles, clearSelect };