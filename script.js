if(location.host=="meican.com"){
	LoadFile(chrome.extension.getURL("jquery.min.js"), 'js');
	LoadFile(chrome.extension.getURL("price.js"), 'js');
}

function LoadFile(iName, iType){
	if (iType=="js"){ //判断文件类型
		var e=document.createElement('script');
		e.type='text/javascript';
		e.charset='UTF-8';
		e.src= iName;
		document.body.appendChild(e);
	}

	else if (iType=="css"){ //判断文件类型
		var e=document.createElement("link");
		e.rel="stylesheet";
		e.type="text/css";
		e.href= iName;
		document.body.appendChild(e);
	}

}
