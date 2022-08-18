<span onload='
	let getTime = () => {
		let date = new Date(); 
		let hh = date.getHours();
		let mm = date.getMinutes();
		let ss = date.getSeconds();
		
		hh = (hh < 10) ? "0" + hh : hh;
		mm = (mm < 10) ? "0" + mm : mm;
		ss = (ss < 10) ? "0" + ss : ss;
		
		return hh + ":" + mm + ":" + ss;
	};
	let updateTime = async () => {
		let time = getTime();
		this.innerText=time;
		setTimeout(updateTime, 100);
	};
	updateTime()'></span>