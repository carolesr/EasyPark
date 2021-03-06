using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models.Entities
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
        public string CVV { get; set; }

        [BsonElement("selected")]
        public bool Selected { get; set; }
    }
}
