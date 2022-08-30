let updated = [];
let notUpdated = [];

function difference(firstArr, secondArr) {
    return firstArr.filter(firstArrElement => {
        return !isContainedInSecondArray(firstArrElement, secondArr);
    })
}

function isContainedInSecondArray(firstArrElement, secondArr) {
    return  secondArr.find(secondaryArrElement => {
        if ( JSON.stringify(firstArrElement) == JSON.stringify(secondaryArrElement)){
            return true;
        }
    });
}

// bug when player is connect and disconnect in one moment;
async function playerListAnalyzer(playerList) {
    if ( updated.length === 0 ) {
        await playerList.forEach(player => {
            updated.push(player);
        })
        return 0;
    } else {
        notUpdated = updated.slice();
        updated = [];
        playerList.forEach(player => {
            updated.push(player);
        });

        if ( notUpdated.length > updated.length ) {
            let players = await difference(notUpdated, updated);
            return ['disconnect', players];
        } else if ( notUpdated.length < updated.length ) {
            let players = await difference(updated, notUpdated);
            return ['connect', players];
        }

        return 0;
    }
}

module.exports = {playerListAnalyzer};