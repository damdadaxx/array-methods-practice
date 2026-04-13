const mixed = [0, '안녕', '', null, 42, undefined, false, '세계', true];

const truthy = mixed.filter(Boolean);

console.log(truthy); // ['안녕', 42, '세계', true]
