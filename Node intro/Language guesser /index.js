const franc=require("franc");
const langs=require("langs");
const args = process.argv;



const inp = args.slice(2).join(' ');
const detectedFranc=franc(inp)
try {
    const finalOut=langs.where("3",detectedFranc).name
    console.log(finalOut);

} catch (e) {
    console.log("We could not detect the language, try again with different input")
}
