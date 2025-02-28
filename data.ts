interface Data {
  entries: object[];
  nextEntryId: number;
}

const data = readData();

function readData(): Data {
  const plannerStorage = localStorage.getItem('planner-storage');
  if (plannerStorage) {
    const plannerEntry = JSON.parse(plannerStorage);
    return plannerEntry;
  } else {
    return {
      entries: [],
      nextEntryId: 1,
    };
  }
}

function writeDate(): void {
  const plannerJSON = JSON.stringify(data);
  localStorage.setItem('planner-storage', plannerJSON);
}
