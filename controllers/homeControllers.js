import { read } from '../models/appwriteModel.js';
import dotenv from 'dotenv';
dotenv.config();

function getUpcomingClasses(classes) {
    // Get the last completed class
    const completedClasses = classes
    .filter(c => c['date-watched'])
    .sort((a, b) => new Date(b['date-watched']) - new Date(a['date-watched']));

    const lastCompletedClass = completedClasses[0];
    const lastClassIndex = classes.indexOf(lastCompletedClass);
    return [
        classes[lastClassIndex + 1],
        classes[lastClassIndex + 2],
        classes[lastClassIndex + 3]
    ];
};

function getDueAssignments(assignments, nextClasses) {
    // find order number for the next class
    let order = undefined;
    let i = 0;
    while(order === undefined) {
        if(nextClasses[i]['order'] !== 0) {
            order = nextClasses[i]['order']
        };
        i++;
    };
    
    // all assignments with that same order number
    let dueAssignments = [];
    for(const assignment of assignments) {
        if(assignment['order'] === order) {
            dueAssignments.push(assignment);
        };
    };

    // sort so that the completed assignments are last on list
    return dueAssignments.sort((a, b) => {
        const aCompleted = a['completed'] === 'true';
        const bCompleted = b['completed'] === 'true';
        return aCompleted - bCompleted;
    });
};

async function getHome(req, res) {
    try {
        const assignments = await read(process.env.ASSIGNMENTS_COLLECTION_ID);
        const classes = await read(process.env.CLASSES_COLLECTION_ID);

        const classesLeft = classes.filter(c => c['date-watched'] === null).length;
        const nextClasses = getUpcomingClasses(classes);
        const dueAssignments = getDueAssignments(assignments, nextClasses);
        
        res.render('home', {
            classes: nextClasses,
             assignments: dueAssignments,
             classesLeft: classesLeft
        });
    } catch(err) {
        console.error(err);
        res.send('404 Error, Could not load page');
    };
}

export { getHome };