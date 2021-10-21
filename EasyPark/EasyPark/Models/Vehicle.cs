using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models
{
    public class Vehicle
    {
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("plate")]
        public string Plate { get; set; }
    }
}
