//union

let a3: number | string = 30;
a3 = "JavaScript";


//Type Aliases
//creating your own custom data type
type StringOrNumberOrBoolean = string | number | boolean;
let a4: StringOrNumberOrBoolean;
a4 = 10;
a4 = "JavaScript";
a4 = true;

function f1(): StringOrNumberOrBoolean {
    return true;
}

//Type Aliases with Union
type StringOrUndefined = string | undefined;
let a5: StringOrUndefined = "TypeScript";

let a6: StringOrNumberOrBoolean = a5;
a6 = true;


