document.addEventListener('DOMContentLoaded', () => {
    addListenersToCells()
})

function addListenersToCells() {
    let completedCells = document.querySelectorAll('.completed-cell');
    completedCells.forEach(cell => {
        cell.addEventListener('click', toggleCompleted)
    })
};

async function toggleCompleted(e) {
    const target = e.target.closest('.completed-cell');
    const documentId = target.dataset.id;
    const currentCompletedStatus = target.dataset.completed === 'true';

    const newStatus = !currentCompletedStatus;

    try {
        let response = await fetch('http://localhost:3000/update/completed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                documentId: documentId,
                status: String(newStatus)
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Document updated successfully:', data);
            location.reload(); // Reload to reflect changes
        } else {
            const errorData = await response.json();
            console.error('Failed to update document:', errorData.message);
        }
    } catch(err) {
        console.error(`Error updating completed status: ${err}`)
    }
};