Module.register("MMM-EarthGlobe",{
	defualts:{
		text:"Hello Wolrd"
	},



  getStyles: function(){
  	return ["style.css"];
  },
  getScripts: function(){
  	return []
  },




	getDom: function(){
		var wrapper = document.createElement("div");
		wrapper.className = "globe";
		var div1 = document.createElement("div");
		div1.className = "front";
		var div2 = document.createElement("div");
		div2.className = "mapfront";
		var div3 = document.createElement("div");
		div3.className = "mapback";
		var div4 = document.createElement("div");
		div4.className = "back";

		wrapper.appendChild(div1);
		wrapper.appendChild(div2);
		wrapper.appendChild(div3);
		wrapper.appendChild(div4);
		  
		return wrapper;
	}
	
});