using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EasyPark.Models.Entities
{
    public class Session
    {

        [BsonElement("start_time")]
        public DateTime StartTime { get; set; }

        [BsonElement("end_time")]
        public DateTime? EndTime { get; set; }

        [BsonElement("establishment")]
        public string Establishment { get; set; }

        [BsonElement("spot")]
        public string Spot { get; set; }

        [BsonElement("value")]
        public double Value { get; set; }

        [BsonElement("card")]
        public string Card { get; set; }
    }
}
