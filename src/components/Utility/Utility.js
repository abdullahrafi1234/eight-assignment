const getStoredBookApplication = () => {
    const storedBookApplication = localStorage.getItem('book-applications');
    if(storedBookApplication) {
        return JSON.parse(storedBookApplication)
    }
    return []
}


const saveBookApplication = bookId => {
    const storedBookApplications = getStoredBookApplication()

    const exists = storedBookApplications.find(bookNewId => bookNewId === bookId)
    if(!exists){
        storedBookApplications.push(bookId)
        localStorage.setItem('book-applications', JSON.stringify(storedBookApplications))
    }
}







export {getStoredBookApplication, saveBookApplication}