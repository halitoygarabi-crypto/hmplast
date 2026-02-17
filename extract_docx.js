import mammoth from 'mammoth';
import fs from 'fs';

const docxPath = 'd:/avy/hmplas/HM Plast.docx';

mammoth.extractRawText({ path: docxPath })
    .then(function (result) {
        const text = result.value;
        const messages = result.messages;
        console.log(text);
        fs.writeFileSync('docx_content.txt', text);
    })
    .catch(function (err) {
        console.error(err);
    });
