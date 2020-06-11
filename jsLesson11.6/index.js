const protocol = "http";
const domainName = "getcode";
const domain = "dev";
const afterSlash = "courses";

//http://getcode.dev/courses
const result1 = protocol + "://" + domainName + "." + domain + "/" + afterSlash;
const result2 = `${protocol}://${domainName}.${domain}/${afterSlash}`;
console.log(result1,result2);