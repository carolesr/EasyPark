using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models.Entities
{
    public class Price
    {
        [BsonElement("min_time")]
        public double MinTime { get; set; }

        [BsonElement("max_time")]
        public double MaxTime { get; set; }

        [BsonElement("value")]
        public double Value { get; set; }
    }
}
