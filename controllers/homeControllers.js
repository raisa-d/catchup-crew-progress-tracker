import { read } from '../models/appwriteModel.js';
import dotenv from 'dotenv';
dotenv.config();

function getUpcomingClasses(classes) {
    // Get the last completed class
    const completedClasses = classes
    .filter(c => c['date-watched'])
    .sort((a, b) => new Date(b['date-watched']) - new Date(a['date-watched'])); // Sort by most recent date

    const lastCompletedClass = completedClasses[0];
    const lastClassIndex = classes.indexOf(lastCompletedClass);
    return [
        classes[lastClassIndex + 1],
        classes[lastClassIndex + 2],
        classes[lastClassIndex + 3]
    ];
};

// *** GET THE NEXT DUE ASSIGNMENTS BASED ON CLASS NAME
function getdueAssignments(assignments, nextClasses) {
    // Get array of class names
    const nextClassNames = nextClasses.map(c => c['class-number'].trim());

    // filter assignments to ones that match at least one of the nextClassNames
};

async function getIndex(req, res) {
    try {
        const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
        const classes = await read(process.env.CLASSES_COLLECTION_ID);

        const nextClasses = getUpcomingClasses(classes);
        const dueAssignments = getdueAssignments(assignments, nextClasses);

        console.log(dueAssignments)
        res.render('index', {
            classes: nextClasses
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
}

async function getAllData(req, res) {
    try {
        const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
        const classes = await read(process.env.CLASSES_COLLECTION_ID);
    
        res.render('allData', {
            assignments,
            classes
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
};

export { getIndex };