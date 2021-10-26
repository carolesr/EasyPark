using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models.Entities
{
    public class Spot
    {
        [BsonElement("id_sensor")]
        public double IdSensor { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("for_disabled")]
        public bool ForDisabled { get; set; }

        [BsonElement("for_elderly")]
        public bool ForElderly { get; set; }

        [BsonElement("occupied")]
        public bool Occupied { get; set; }
    }
}
