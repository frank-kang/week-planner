var data = readData();
function readData() {
    var plannerStorage = localStorage.getItem('planner-storage');
    if (plannerStorage) {
        var plannerEntry = JSON.parse(plannerStorage);
        return plannerEntry;
    }
    else {
        return {
            entries: [],
            nextEntryId: 1,
        };
    }
}
function writeDate() {
    var plannerJSON = JSON.stringify(data);
    localStorage.setItem('planner-storage', plannerJSON);
}
