var DinnerMenuIterator = function(oMenuItems){
	this.oMenuItems = oMenuItems;
	Iterator.apply(this);
	this.nPosition = -1;
	this.nLength = 0;
	this.hasNext = function(){
		return (this.nPosition + 1) < this.nLength;
	};
	this.next = function(){
		this.nPosition = this.nPosition + 1;
		return this.oMenuItems[this.aKeys[this.nPosition]];
	};
	this._modifyPositionOnRemove = function(){
		if(this.nPosition >= this.nLength){
			this.nPosition = this.nLength -1;
		}
	};
	this.remove = function(){
		if(this.nPosition === -1){
			throw new Error("You can't remove an item until you've done at least one next()!");
		}
		delete this.aMenuItems[this.nPosition];
		this.aKeys = this._getKeys();
		this._modifyPositionOnRemove();
	};
	this.remove = function(){
		delete this.oMenuItems[this.aKeys[this.nPosition]]
	};
	this._getKeys = function(){
		var aKeys = [];
		var sKey = '';
		for(sKey in this.oMenuItems){
			if(this.oMenuItems.hasOwnProperty(sKey)){
				aKeys.push(sKey);
				this.nLength = this.nLength + 1;
			}
		}
		return aKeys;
	};
	this.aKeys = this._getKeys();
};
