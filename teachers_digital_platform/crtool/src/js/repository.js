const Repository = {

    saveDistinctiveCompletionDates(component, distinctiveCompletionDates) {  

        console.log("Repository.saveDistinctiveCompletionDates()");

        localStorage.setItem("distinctiveCompletedDate", JSON.stringify(distinctiveCompletionDates));
        component.setState({distinctiveCompletedDate: distinctiveCompletionDates});
    }
}

export default Repository;