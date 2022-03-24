// Code your solution here
function findMatching (array, name){
    let resultNames = array.filter(
        function(item){
            if (name.toUpperCase() === item.toUpperCase())
            return item
        });
    return resultNames
};

function fuzzyMatch(array, name){
    let fuzzyResults = array.filter(
        function(item){
            if (name[0].toUpperCase() === item[0].toUpperCase())
            return item
        });
    return fuzzyResults
};

function matchName( array, string){
    let matches = array.filter (function(info){
        return info.name === string 
    })
    return matches
}