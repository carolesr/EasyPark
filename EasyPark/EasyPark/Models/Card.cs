using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models
{
    public class Card
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("number")]
        public string Number { get; set; }

        [BsonElement("expiration")]
        public string Expiration { get; set; }

        [BsonElement("cvv")]
        public int CVV { get; set; }

        [BsonElement("selected")]
        public bool Selected { get; set; }
    }
}
