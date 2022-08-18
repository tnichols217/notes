<span onload='
	  let mwahs = "mwah mwah mwah mawh mawh mwah mawh mwah mawh mwah mawh amwh awmahw awmh awmawh mawh mawh mawh mwa m wa mawh maw mawh maw maw mwahm wah mwah hwa mhwa mhwa mhaw mhwa mhwa mwah mawh mwahmwaw mwah mwa mawh mawh mwah mwah mawh mwahmwah mawh mawh maw awm awm wamaw awm aw mwah mwah".split(" ")
	  let generateMwah = () => {
		  let out = ""
		  for (let i = 0; i < Math.random() * 500 + 500; i++) {
			  out += mwahs[Math.floor(mwahs.length * Math.random())] + " "
		  }
		  this.innerText = out
		  setTimeout(generateMwah, 1000)
	  }
	  generateMwah()
	  '></span>