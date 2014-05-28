var client1 = { firstName: "Edward", lastName: "Norton", age: 53,
favoriteQuote: "Who is Tyler Durden?" };
var client2 = { firstName: "Emma", lastName: "Stone", age: 28,
favoriteQuote: "All I do is win win win no matter what!" };
var client3 = { firstName: "Adam", lastName: "Sandler", age: 47, favoriteQuote: "That's your home! Are you too good for your home?!" };
var client4 = { firstName: "Kristen", lastName: "Bell", age: 33, favoriteQuote: "Do you wanna build a snowman?" };
var client5 = { firstName: "Jim", lastName: "Carrey", age: 52, favoriteQuote: "...So you're telling me there's a chance? YEAH!" };

var Clients = [client1, client2, client3, client4, client5];

var Client = function Client(name, age, quote) {
	this.name = name;
	this.age = age;
	this.quote = quote;
	this.showQuote = function showQuote(quote) { debug(quote); };
};

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
var billyCrystal = new Client("Billy Crystal", 78, "Blah blah.");

var printClient = function(inputClient) { 
	debug("Celebrities name is " + inputClient.firstName + " " + inputClient.lastName + ". They are " + inputClient.age + " years old.");
};

shooterMcGavin.showQuote;