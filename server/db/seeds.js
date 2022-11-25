//create database, add collection

use mystics;
db.dropDatabase();

db.mysticsCollection.insertMany([
    {
        "name": "Petar Dounov",
        "religion": "Christianity",
        "quotes": ["To pray means to send your report about the work you have done to That Center from which you have emerged. In reply you will receive peace and enlightenment", "True prayer means the awakening of the Divine within the human being."]
    },
    {
        "name": "Al-Hallaj",
        "religion": "Islam"
    }
]);
