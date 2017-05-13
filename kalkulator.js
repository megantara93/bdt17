var kalku = {
	tambah : function(a,b) {
		return 'jumlah ' + (a + b);
	},
	kurang : function(a,b){
		return 'kurang ' + (a - b);
	},
	kali : function(a,b){
		return 'kali ' + a * b;
	},
	bagi : function(a,b){
		return 'bagi ' + a / b;
	},
	samadengan : function(a,b) {
		if(a<b) {
			return 'a sama dengan ' + a + ' kurang dari ' + 'b samadengan ' + b;
		} else if(a>b){
			return 'a sama dengan ' + a + ' lebih dari ' + 'b samadengan ' + b;
		} else {
			return 'a sama dengan ' + a + ' sama dengan ' + 'b samadengan ' + b;
		}
	}
}

console.log(kalku.samadengan(2, 4));
console.log(kalku.tambah(2, 4));
console.log(kalku.kurang(2, 4));
console.log(kalku.kali(2, 4));
console.log(kalku.bagi(2, 4));

