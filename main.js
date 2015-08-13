
var person = {
    name : 'Trey',
    distance_travelled: 0,
    say_name : function() {
        return this.name;
    },
    say_something: function(something) {
        var sentence = this.say_name() + ' says "' + something + '"';
        this.alarm(sentence);
    },
    walk : function() {
        this.distance_travelled += 3;
        var sentence = this.say_name() + " has walked, now travelled " + this.distance_travelled
        this.alarm(sentence);
    },
    run : function() {
        this.distance_travelled += 10;
        var sentence = this.say_name() + " has run, now travelled " + this.distance_travelled
        this.alarm(sentence);
    },
    crawl : function() {
        this.distance_travelled += 1;
        var sentence = this.say_name() + " has crawled, now travelled " + this.distance_travelled
        this.alarm(sentence);
    },
    alarm : function(something) {
        if (typeof alert === 'undefined') {
            console.log(something);
        } else {
            alert(something);
        }
    }
};

person.say_something("let's workout");
person.walk();
person.run();
person.crawl();
person.walk();
person.walk();
person.say_something("thank you");
