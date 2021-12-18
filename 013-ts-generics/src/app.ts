const names1 = ["nick", "bingo"];
const names2: any = [];
const names3: Array<any> = [];
const names4: Array<string> = [];
const names5: Array<number> = [];
const names6: Array<string | number> = [];

// can call string methods and no complaints 
names4[0].split(' ');