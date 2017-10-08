const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function(){
	it('Si la palabra termina con "ar", se le quitan esas dos letras', function(){
		const translation = platzom("programar");
		expect(translation).to.equal("program");
	})
	it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
		const translation = platzom("zarpar");
		const translation2 = platzom("zorro");
		expect(translation).to.equal("zarppe");
		expect(translation2).to.equal("zorrope");	
	})
	it('Si la palabra traducida tiene mas de 9 letras se parte por la mitad con un gion', function(){
		const translation = platzom("abecedario");
		expect(translation).to.equal("abece-dario");
	})
	it('Si la palabra es un palindromo de omiten las demas reglas y se debuelve la palabra con mayusculas y minusculas intercaladas', function(){
		const translation = platzom("sometemos");
		expect(translation).to.equal("SoMeTeMoS");
	})
})