
let consonants = {
	 "B": "020222",
	 "C": "020000",
	 "D": "000020",
	 "F": "022022",
	 "G": "220000",
	 "H": "202202",
	 "J": "000022",
	 "K": "202000",
	 "L": "222000",
	 "M": "002200",
	 "N": "200200",
	 "P": "022000",
	 "R": "002000",
	 "S": "020020",
	 "T": "022220",
	 "V": "200002",
	"\'": "022222"
};

let vovels = {
	"A": "12",
	//"E": "",
	"I": "21",
	"O": "11"//,
	//"U": ""
};

function checkVowel(vstr)
{
	for(let e of Object.entries(vovels))
		if(vstr == e[1]) return e[0];
	return "#";
}

function checkConsonant(cstr)
{
	for(let e of Object.entries(consonants))
		if(cstr == e[1]) return e[0];
	return "#";
}

function listToWord(list)
{
	let str = list.toString().replace(/,/g, "");

	return checkConsonant(str.substring(0, 6)) +
	       checkVowel(str.substring(6, 8)) +
		   checkConsonant(str.substring(8, 14)) +
		   checkVowel(str.substring(14, 16)) +
		   checkConsonant(str.substring(16, 22)) +
		   checkVowel(str.substring(22, 24));
}

function wordToList(word)
{
	let str = "";
	for(let l of word)
	{
		if(vovels[l.toUpperCase()] !== undefined) str += vovels[l.toUpperCase()];
		else if(consonants[l.toUpperCase()] !== undefined) str += consonants[l.toUpperCase()];
		else str += "#";
	}

	let list = [];
	for(let n of str)
		list.push(Number(n));
	
	return list;
}
