INSERT INTO jokes (question, answer, rating)
VALUES
("Why couldn't the bicycle stand up by itself?", "Because it was two-tired.", 0),
("I'm reading a book on anti-gravity.", "It's impossible to put down.", 0),
("Did vou hear about the guy who invented Lifesavers?", "He made a mint.", 0),
("I used to be a baker, but I couldn't make enough dough.","", 0),
("What do you call a pile of cats?", "A meowntain.", 0),
("What do you get when you cross a snowman and a vampire?", "Frostbite.", 0);

CREATE TABLE jokes (
id INTEGER PRIMARY KEY AUTOINCREMENT, question TEXT NOT NULL, answer TEXT NOT NULL, rating INTEGER NOT NULL
);