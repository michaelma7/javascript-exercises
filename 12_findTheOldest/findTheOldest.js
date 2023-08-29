const findTheOldest = function(people) {
    let oldest = people.sort((a, b) => {
        const last = howOld(a.yearOfDeath, a.yearOfBirth);
        const next = howOld(b.yearOfDeath, b.yearOfBirth);
        return last > next ? -1 : 1;
    });
    function howOld (death, birth) {
        if(!death) {
            const current = (new Date()).getFullYear();
            death = current;
        };
        return death - birth;
    }
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
