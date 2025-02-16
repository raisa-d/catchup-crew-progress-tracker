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

function getdueAssignments(assignments) {
    let dueAssignments = [];
    // find first assignment that has not been completed and is not rollover
    let i = 0;
    while(dueAssignments.length === 0) {
        if(assignments[i]['completed'] === 'false' && !assignments[i]['rollover']) {
            dueAssignments.push(assignments[i]);
        };
        i++;
    };

    // filter assignments for all assignments with that same class due date 
    dueAssignments = assignments.filter(a => a['due'] === dueAssignments[0]['due'])
    return dueAssignments
};

async function getIndex(req, res) {
    try {
        const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
        const classes = await read(process.env.CLASSES_COLLECTION_ID);

        const nextClasses = getUpcomingClasses(classes);
        const dueAssignments = getdueAssignments(assignments);
        
        res.render('index', {
            classes: nextClasses,
             assignments: dueAssignments
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
    
        res.render('assignments', {
            assignments,
            classes
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
};

export { getIndex, getAllData };