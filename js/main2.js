const generateList = (tomb) => { return  '<ul>' + tomb.reduce((acc,item) => { return acc + '<li>' + item + '</li>'},'') + '</ul>'};
console.log(generateList(["első", "masodik", "harmadik"]));