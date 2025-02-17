import dotenv from 'dotenv';
dotenv.config();

async function getLogin(req, res) {
    try {
        res.render('index');
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
}

export { getLogin };